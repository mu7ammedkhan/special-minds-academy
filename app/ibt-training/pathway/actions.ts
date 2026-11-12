"use server";
import { randomUUID } from "crypto";
import { redirect } from "next/navigation";
import { headers } from "next/headers";
import { createClient } from "@/lib/supabase/server";
import { createZiinaPaymentIntent } from "@/lib/ziina";
import { syncIbtRegistrationInBackground } from "@/lib/bigin";
import { IBT_COHORT_1 } from "@/lib/ibt";
import { DEPOSIT_AED, BALANCE_AED } from "@/lib/ibt-pathway";

export type RegisterState = { error?: string };

export async function reserveSeat(_prev: RegisterState, formData: FormData): Promise<RegisterState> {
  const registration = {
    name: String(formData.get("name") || "").trim(),
    email: String(formData.get("email") || "").trim(),
    phone: String(formData.get("phone") || "").trim(),
    emirate: String(formData.get("emirate") || "").trim(),
    cohort: IBT_COHORT_1.slug,
    amount_paid: DEPOSIT_AED,
    is_deposit: true,
    balance_due_aed: BALANCE_AED,
  };
  if (!registration.name || (!registration.email && !registration.phone)) {
    return { error: "Please add your name and a way to reach you." };
  }
  // The consent checkbox is `required` in the form, but that's a client-side
  // guarantee only — a non-refundable deposit warrants checking it server-side too.
  if (formData.get("terms_accepted") !== "on") {
    return { error: "Please confirm you've read and accept the deposit terms." };
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

  // Mirror to Bigin now, so an abandoned checkout still shows as an Enquiry
  // rather than vanishing. Built from the local object because anon cannot
  // SELECT this table. Fire-and-forget: we redirect to Ziina next, and the
  // hourly reconciler re-sends anything this loses.
  syncIbtRegistrationInBackground({
    id: registrationId,
    ...registration,
    status: "Pending",
    created_at: new Date().toISOString(),
    ziina_payment_intent_id: null,
    ziina_status: null,
  });

  const origin = headers().get("origin") ?? "";
  let paymentIntent;
  try {
    paymentIntent = await createZiinaPaymentIntent({
      amountAed: DEPOSIT_AED,
      message: "Special Minds — IBT Training seat reservation deposit",
      successUrl: `${origin}/ibt-training/pathway/success?rid=${registrationId}`,
      cancelUrl: `${origin}/ibt-training/pathway?cancelled=1`,
      failureUrl: `${origin}/ibt-training/pathway?failed=1`,
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
