import Script from "next/script";
import { GOOGLE_ADS_IDS } from "@/lib/google-ads";

/**
 * Configures the Google Ads (AW-) tag on top of the gtag.js instance GA4
 * already loads.
 *
 * gtag.js is a single shared library — loading it twice would duplicate the
 * request for no benefit, so when NEXT_PUBLIC_GA_ID is set we only push an
 * extra `config` for the AW- ID onto the same dataLayer. When GA4 is unset,
 * nothing else loads gtag.js, so this component loads it itself.
 *
 * `allow_enhanced_conversions` is on because every conversion here happens
 * after a form where we already hold a first-party email/phone — that's a
 * meaningful recovery of conversions Safari/ITP would otherwise drop. The
 * matching user data is passed at fire time in ConversionEvent.
 *
 * More than one Ads account can be configured (lib/google-ads.ts
 * GOOGLE_ADS_IDS): each gets its own `config` on the same gtag.js, which is
 * how Google expects a second account to be added to an existing tag.
 */
export function GoogleAdsTag() {
  if (GOOGLE_ADS_IDS.length === 0) return null;
  const gaLoadsGtag = Boolean(process.env.NEXT_PUBLIC_GA_ID);

  return (
    <>
      {!gaLoadsGtag && (
        <Script
          id="gtag-src"
          strategy="afterInteractive"
          src={`https://www.googletagmanager.com/gtag/js?id=${GOOGLE_ADS_IDS[0]}`}
        />
      )}
      <Script id="google-ads" strategy="afterInteractive">
        {`window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          ${gaLoadsGtag ? "" : "gtag('js', new Date());"}
          ${GOOGLE_ADS_IDS.map((id) => `gtag('config', '${id}', { allow_enhanced_conversions: true });`).join("\n          ")}`}
      </Script>
    </>
  );
}
