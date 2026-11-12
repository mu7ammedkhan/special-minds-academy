"use server";
import { randomUUID } from "crypto";
import { redirect } from "next/navigation";
import { headers } from "next/headers";
import { createClient } from "@/lib/supabase/server";
import { createZiinaPaymentIntent } from "@/lib/ziina";
import { IBT_COHORT_1 } from "@/lib/ibt";
import { syncIbtRegistrationInBackground } from "@/lib/bigin";

export type RegisterState = { error?: string };

export async function registerForCohort1(_prev: RegisterState, formData: FormData): Promise<RegisterState> {
  const registration = {
    name: String(formData.get("name") || "").trim(),
    email: String(formData.get("email") || "").trim(),
    phone: String(formData.get("phone") || "").trim(),
    emirate: String(formData.get("emirate") || "").trim(),
    cohort: IBT_COHORT_1.slug,
    amount_paid: IBT_COHORT_1.coursePriceAed,
  };
  if (!registration.name || (!registration.email && !registration.phone)) {
    return { error: "Please add your name and a way to reach you." };
  }

  // Generated up front (rather than read back after insert) because anon
  // only has an INSERT policy on this table, not SELECT — see
  // supabase/migrations/0015_ibt_training_registrations.sql.
  const registrationId = randomUUID();

  const supabase = createClient();
  const { error: insertError } = await supabase
    .from("ibt_registrations")
    .insert({ id: registrationId, ...registration });

  if (insertError) return { error: "Something went wrong — please WhatsApp us instead." };

  // Full-price route (no deposit), so the CRM records the whole course fee.
  // See the note in the pathway action on why the row is rebuilt locally.
  syncIbtRegistrationInBackground({
    id: registrationId,
    ...registration,
    is_deposit: false,
    balance_due_aed: null,
    status: "Pending",
    created_at: new Date().toISOString(),
    ziina_payment_intent_id: null,
    ziina_status: null,
  });

  const origin = headers().get("origin") ?? "";
  let paymentIntent;
  try {
    paymentIntent = await createZiinaPaymentIntent({
      amountAed: IBT_COHORT_1.coursePriceAed,
      message: "Special Minds — IBT Training Cohort 1",
      successUrl: `${origin}/ibt-training/cohort-1/success?rid=${registrationId}`,
      cancelUrl: `${origin}/ibt-training/cohort-1?cancelled=1`,
      failureUrl: `${origin}/ibt-training/cohort-1?failed=1`,
      operationId: registrationId,
    });
  } catch {
    return { error: "Couldn't reach the payment provider — please try again shortly." };
  }

  await supabase.rpc("attach_ibt_registration_intent", {
    p_registration_id: registrationId,
    p_payment_intent_id: paymentIntent.id,
    p_status: paymentIntent.status,
  });

  redirect(paymentIntent.redirect_url);
}
