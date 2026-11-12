import type { Metadata } from "next";
import Script from "next/script";
import { Fraunces, Space_Grotesk } from "next/font/google";
import { GoogleAnalytics } from "@next/third-parties/google";
import { JsonLd } from "@/components/JsonLd";
import { SmoothScroll } from "@/components/SmoothScroll";
import { ScrollReveal } from "@/components/ScrollReveal";
import { PointerFx } from "@/components/PointerFx";
import { GoogleAdsTag } from "@/components/GoogleAdsTag";
import { AcademyHeader } from "@/components/academy/AcademyHeader";
import { AcademyFooter } from "@/components/academy/AcademyFooter";
import { AcademyWhatsAppFloat } from "@/components/academy/AcademyWhatsApp";
import { ACADEMY, COURSES } from "@/lib/academy";
import { MAIN_SITE_URL } from "@/lib/urls";
import { LEGAL, SITE } from "@/lib/site";
import "./globals.css";

const fraunces = Fraunces({
  subsets: ["latin"], display: "swap", variable: "--font-fraunces",
  weight: ["500", "600"], style: ["normal", "italic"],
});
const grotesk = Space_Grotesk({
  subsets: ["latin"], display: "swap", variable: "--font-grotesk",
  weight: ["400", "500", "600", "700"],
});

// The academy's own identity. metadataBase is the academy domain, so every
// canonical, og:url and og:image below resolves to specialminds.academy, never
// specialminds.ae. Each page sets its own canonical path.
export const metadata: Metadata = {
  metadataBase: new URL(ACADEMY.url),
  title: {
    default: "Special Minds Academy | IBT, ABAT, IBA & LSA Training in the UAE",
    template: "%s | Special Minds Academy",
  },
  description: ACADEMY.description,
  alternates: { canonical: "/" },
  openGraph: { type: "website", siteName: ACADEMY.name, locale: "en_AE" },
  twitter: { card: "summary_large_image" },
};

const orgSchema = {
  "@context": "https://schema.org",
  "@type": "EducationalOrganization",
  name: ACADEMY.name,
  url: ACADEMY.url,
  description: ACADEMY.description,
  logo: `${MAIN_SITE_URL}/logo.png`,
  email: SITE.contact.email,
  telephone: SITE.contact.phone,
  parentOrganization: { "@type": "Organization", name: SITE.name, url: MAIN_SITE_URL, legalName: LEGAL.entity },
  areaServed: { "@type": "Country", name: "United Arab Emirates" },
  address: { "@type": "PostalAddress", streetAddress: SITE.contact.address, addressLocality: "Dubai", addressCountry: "AE" },
  // What the academy teaches toward, for answer engines matching a question to
  // a source. Topics only: the credentials themselves belong to IBAO, QABA and
  // the BACB, and nothing here claims an approval.
  knowsAbout: [
    "Applied behaviour analysis (ABA)",
    "International Behavior Therapist (IBT)",
    "Applied Behavior Analysis Technician (ABAT)",
    "International Behavior Analyst (IBA)",
    "Learning support assistants (LSA) and shadow teachers",
    "Special educational needs (SEN) support in UAE schools",
  ],
  hasOfferCatalog: {
    "@type": "OfferCatalog",
    name: "Courses",
    itemListElement: COURSES.map((c) => ({
      "@type": "Course",
      name: c.name,
      url: `${ACADEMY.url}${c.href}`,
      description: c.summary,
      provider: { "@type": "EducationalOrganization", name: ACADEMY.name, url: ACADEMY.url },
    })),
  },
};

const siteSchema = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  name: ACADEMY.name,
  url: ACADEMY.url,
  inLanguage: "en",
  publisher: { "@type": "EducationalOrganization", name: ACADEMY.name, url: ACADEMY.url },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${fraunces.variable} ${grotesk.variable}`}>
      <body>
        <a href="#main" className="sr-only focus:not-sr-only focus:absolute focus:z-[100] focus:m-3 focus:rounded-md focus:bg-amethyst focus:px-4 focus:py-2 focus:text-white">
          Skip to content
        </a>
        <JsonLd data={orgSchema} />
        <JsonLd data={siteSchema} />
        <AcademyHeader />
        <main id="main">{children}</main>
        <AcademyFooter />
        <AcademyWhatsAppFloat />
        <SmoothScroll />
        <ScrollReveal />
        <PointerFx />
        {/* Loaded via @next/third-parties, which defers gtag.js so it never
            blocks initial render. Only active once NEXT_PUBLIC_GA_ID is set. */}
        {process.env.NEXT_PUBLIC_GA_ID && <GoogleAnalytics gaId={process.env.NEXT_PUBLIC_GA_ID} />}
        {/* Google Ads conversion tag. Must render after GoogleAnalytics —
            it configures the AW- ID on the gtag.js instance GA4 loads rather
            than pulling the library down a second time. Only active once
            NEXT_PUBLIC_GOOGLE_ADS_ID is set — see lib/google-ads.ts. */}
        <GoogleAdsTag />
        {/* Microsoft Clarity, if used. lazyOnload: it records a session rather
            than counting a visit, so it waits for the browser to go idle. Only
            active once NEXT_PUBLIC_CLARITY_PROJECT_ID is set. */}
        {process.env.NEXT_PUBLIC_CLARITY_PROJECT_ID && (
          <Script id="ms-clarity" strategy="lazyOnload">
            {`(function(c,l,a,r,i,t,y){
                c[a]=c[a]||function(){(c[a].q=c[a].q||[]).push(arguments)};
                t=l.createElement(r);t.async=1;t.src="https://www.clarity.ms/tag/"+i;
                y=l.getElementsByTagName(r)[0];y.parentNode.insertBefore(t,y);
            })(window, document, "clarity", "script", "${process.env.NEXT_PUBLIC_CLARITY_PROJECT_ID}");`}
          </Script>
        )}
      </body>
    </html>
  );
}
