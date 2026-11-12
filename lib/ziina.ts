import crypto from "crypto";

const ZIINA_BASE_URL = "https://api-v2.ziina.com/api";

export type ZiinaPaymentIntent = {
  id: string;
  status: "requires_payment_instrument" | "requires_user_action" | "pending" | "completed" | "failed" | "canceled";
  redirect_url: string;
  amount: number;
  currency_code: string;
};

export type CreatePaymentIntentInput = {
  amountAed: number;
  message: string;
  successUrl: string;
  cancelUrl: string;
  failureUrl: string;
  operationId: string;
  test?: boolean;
};

// Server-only. Never import this file from a Client Component.
export async function createZiinaPaymentIntent(input: CreatePaymentIntentInput): Promise<ZiinaPaymentIntent> {
  const apiKey = process.env.ZIINA_API_KEY;
  if (!apiKey) throw new Error("ZIINA_API_KEY is not configured.");

  const res = await fetch(`${ZIINA_BASE_URL}/payment_intent`, {
    method: "POST",
    headers: {
      Authorization: `Bearer ${apiKey}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      amount: Math.round(input.amountAed * 100), // AED base unit is fils; 100 fils = 1 AED
      currency_code: "AED",
      message: input.message,
      success_url: input.successUrl,
      cancel_url: input.cancelUrl,
      failure_url: input.failureUrl,
      operation_id: input.operationId,
      test: input.test ?? false,
    }),
  });

  if (!res.ok) {
    const body = await res.text();
    throw new Error(`Ziina payment intent creation failed (${res.status}): ${body}`);
  }

  return res.json();
}

// Server-only. Used to verify a payment's real status server-side (e.g. on a
// success page) rather than trusting a redirect alone.
export async function getZiinaPaymentIntent(id: string): Promise<ZiinaPaymentIntent> {
  const apiKey = process.env.ZIINA_API_KEY;
  if (!apiKey) throw new Error("ZIINA_API_KEY is not configured.");

  const res = await fetch(`${ZIINA_BASE_URL}/payment_intent/${id}`, {
    headers: { Authorization: `Bearer ${apiKey}` },
    cache: "no-store",
  });

  if (!res.ok) {
    const body = await res.text();
    throw new Error(`Ziina payment intent fetch failed (${res.status}): ${body}`);
  }

  return res.json();
}

// Ziina's documented webhook source IPs. Reject anything else as defense in
// depth alongside the HMAC signature check.
export const ZIINA_WEBHOOK_IPS = ["3.29.184.186", "3.29.190.95", "20.233.47.127", "13.202.161.181"];

/** Verifies the X-Hmac-Signature header: hex SHA-256 HMAC of the raw request body. */
export function verifyZiinaWebhookSignature(rawBody: string, signatureHeader: string | null): boolean {
  const secret = process.env.ZIINA_WEBHOOK_SECRET;
  if (!secret || !signatureHeader) return false;

  const expected = crypto.createHmac("sha256", secret).update(rawBody, "utf8").digest("hex");
  const expectedBuf = Buffer.from(expected, "hex");
  const receivedBuf = Buffer.from(signatureHeader, "hex");
  if (expectedBuf.length !== receivedBuf.length) return false;
  return crypto.timingSafeEqual(expectedBuf, receivedBuf);
}
