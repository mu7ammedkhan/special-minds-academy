import "server-only";
import { createClient } from "@/lib/supabase/server";
import { getZiinaPaymentIntent } from "@/lib/ziina";
import { isUuid } from "@/lib/form-security";

/**
 * Ziina's status for an IBT registration, or null if there's nothing to check.
 *
 * The same lookup as the specialminds.ae success pages
 * (app/ibt-training/*\/success): never trust the redirect alone, confirm the
 * payment server-side before showing a confirmation or firing a conversion.
 */
export async function getIbtPaymentStatus(registrationId: string | undefined) {
  // Anything that isn't a registration id never reaches the database.
  if (!isUuid(registrationId)) return null;
  try {
    const { data: paymentIntentId } = await (await createClient()).rpc("get_ibt_payment_intent_id", {
      p_registration_id: registrationId,
    });
    if (!paymentIntentId) return null;
    const paymentIntent = await getZiinaPaymentIntent(paymentIntentId);
    return paymentIntent.status;
  } catch {
    return null;
  }
}
