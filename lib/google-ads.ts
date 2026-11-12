// Google Ads conversion tracking config — the counterpart to lib/analytics
// (which reads GA4/GSC *out*); this file is what writes conversions *in* to
// Google Ads so Smart Bidding has something to optimise against.
//
// Why this exists separately from GA4: GA4 key events are keyed on event
// *name*, and every paid flow on this site fires the same "purchase" event
// (see components/ConversionEvent.tsx). Importing that into Ads would have
// bidding optimise toward home tutoring, membership, assessments and LSA
// registrations all mixed together. These conversion actions are per-flow,
// so a campaign can optimise toward IBT deposits alone.
//
// The AW- ID is public by design (it ships in the page source), so
// NEXT_PUBLIC_ is correct — see .env.example.
export const GOOGLE_ADS_ID = process.env.NEXT_PUBLIC_GOOGLE_ADS_ID ?? "";

// The academy reports to one Ads account, NEXT_PUBLIC_GOOGLE_ADS_ID
// (AW-18369062261), with the same four IBT conversion actions the IBT pages on
// specialminds.ae use. The UAE site's other accounts and actions (LSA,
// placement, therapy, assessments) are not the academy's and are left out.
//
// Conversion labels come from Google Ads → Goals → Conversions → Summary
// (the part after the slash in the AW-XXXX/YYYY snippet). An empty label is a
// no-op, so a build without them is safe.
//
// Which to mark "Primary" in the Ads UI matters more than the code:
//   ibtDeposit    → Primary. This is the bidding target. At AED 99 it gets
//                   enough volume to exit the learning phase; the AED 1,499
//                   purchase never will on its own.
//   ibtLead       → Primary. WhatsApp/enquiry clicks, so bidding still has
//                   signal in the first weeks before deposits accumulate.
//   ibtPurchase   → Secondary. Reporting/ROAS only — do not bid on it.
//   ibtBeginCheckout → Secondary. Diagnostic; tells you whether the drop-off
//                   is form-start or Ziina checkout.
export const ADS_LABELS = {
  ibtDeposit: process.env.NEXT_PUBLIC_ADS_LABEL_IBT_DEPOSIT ?? "",
  ibtPurchase: process.env.NEXT_PUBLIC_ADS_LABEL_IBT_PURCHASE ?? "",
  ibtLead: process.env.NEXT_PUBLIC_ADS_LABEL_IBT_LEAD ?? "",
  ibtBeginCheckout: process.env.NEXT_PUBLIC_ADS_LABEL_IBT_BEGIN_CHECKOUT ?? "",
} as const;

export type AdsConversion = keyof typeof ADS_LABELS;

/** Full `AW-XXXX/label` send_to value, or null when either half is unset. */
export function adsSendTo(conversion: AdsConversion): string | null {
  const label = ADS_LABELS[conversion];
  if (!GOOGLE_ADS_ID || !label) return null;
  return `${GOOGLE_ADS_ID}/${label}`;
}

/** Every AW- ID the tag configures. */
export const GOOGLE_ADS_IDS: string[] = [GOOGLE_ADS_ID].filter(Boolean);
