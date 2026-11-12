"use client";
import { useEffect } from "react";
import { sendGAEvent } from "@next/third-parties/google";
import { adsSendTo, type AdsConversion } from "@/lib/google-ads";
import { takeContact } from "@/lib/enhanced-conversions";

declare global {
  interface Window {
    gtag?: (...args: unknown[]) => void;
  }
}

/** First-party identifiers for Google Ads enhanced conversions. Google hashes
 *  these client-side before they leave the browser — we never send plaintext
 *  PII ourselves, and nothing here is written to the URL. */
export type EnhancedConversionData = {
  email?: string | null;
  phone?: string | null;
};

// Mounted on a success page only when payment is actually confirmed
// server-side — fires a real GA4 conversion event instead of relying on page
// views alone. See components/*/RegisterForm.tsx for the matching
// begin_checkout event fired on submit.
//
// `ads` additionally reports the conversion to Google Ads as its own
// conversion action, which is what Smart Bidding optimises against. It's
// deliberately a separate identifier from the GA4 event name: the GA4 side
// keeps one shared "purchase" event for ecommerce reporting across all
// flows, while Ads needs per-flow actions so a campaign can bid on IBT
// deposits without being dragged around by tutoring or membership sales.
export function ConversionEvent({
  event,
  params,
  ads,
  enhanced,
  transactionId,
}: {
  event: string;
  params?: Record<string, string | number>;
  ads?: AdsConversion | AdsConversion[];
  enhanced?: EnhancedConversionData;
  transactionId?: string;
}) {
  useEffect(() => {
    const send = () => {
      sendGAEvent("event", event, params ?? {});

      const sendTos = [ads ?? []].flat().map(adsSendTo).filter((sendTo): sendTo is string => sendTo !== null);
      if (sendTos.length === 0 || typeof window.gtag !== "function") return;

      // Server components can't hand us the buyer's contact details without a
      // new RPC, so fall back to what the checkout form stashed in this tab.
      const contact = enhanced ?? takeContact();
      if (contact?.email || contact?.phone) {
        window.gtag("set", "user_data", {
          ...(contact.email ? { email: contact.email } : {}),
          ...(contact.phone ? { phone_number: contact.phone } : {}),
        });
      }

      for (const sendTo of sendTos) {
        window.gtag("event", "conversion", {
          send_to: sendTo,
          ...(params?.value !== undefined ? { value: params.value } : {}),
          ...(params?.currency !== undefined ? { currency: params.currency } : {}),
          // Ziina can redirect to the success URL more than once (back button, a
          // re-opened tab). transaction_id is what lets Ads dedupe those into a
          // single conversion instead of inflating the count.
          ...(transactionId ? { transaction_id: transactionId } : {}),
        });
      }
    };

    // The layout's GA and Ads scripts load after hydration, so on a real page
    // load this effect runs before gtag exists. Wait for it; a blocked tag gives
    // up after 10 seconds. Dev servers hide this: test on a production build.
    if (typeof window.gtag === "function") {
      send();
      return;
    }
    let waited = 0;
    const timer = window.setInterval(() => {
      waited += 100;
      if (typeof window.gtag !== "function" && waited < 10000) return;
      window.clearInterval(timer);
      send();
    }, 100);
    return () => window.clearInterval(timer);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  return null;
}
