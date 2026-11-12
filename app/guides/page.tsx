import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, BookOpen, BookText } from "lucide-react";
import { JsonLd } from "@/components/JsonLd";
import { DarkBand } from "@/components/academy/ui";
import { ACADEMY } from "@/lib/academy";
import { GUIDE_CATEGORIES, GUIDES, guidesIn, readingMinutes } from "@/lib/academy-guides";

export const metadata: Metadata = {
  title: "Guides to IBT, ABAT, IBA and ABA Careers in the UAE",
  description:
    "Plain-English guides to the IBT, ABAT, RBT, IBA, QBA and BCBA credentials for people in the UAE: requirements, fees, comparisons and how to choose a course.",
  keywords: ["IBT guide", "ABAT guide", "IBA requirements", "ABA certification UAE", "behaviour therapist credentials Dubai"],
  alternates: { canonical: "/guides" },
  openGraph: { url: "/guides", title: `Guides | ${ACADEMY.name}` },
};

const INTRO: Record<(typeof GUIDE_CATEGORIES)[number], string> = {
  IBT: "IBAO's International Behavior Therapist: what it is, what it takes and how it compares.",
  ABAT: "QABA's Applied Behavior Analysis Technician, requirement by requirement.",
  "Analyst level": "IBA, QBA and BCBA: the credentials for people who design programmes and supervise.",
  "Careers and training": "Working in ABA in the UAE, and choosing the training that gets you there.",
};

const collection = {
  "@context": "https://schema.org",
  "@type": "CollectionPage",
  name: "Special Minds Academy guides",
  url: `${ACADEMY.url}/guides`,
  isPartOf: { "@type": "WebSite", name: ACADEMY.name, url: ACADEMY.url },
  mainEntity: {
    "@type": "ItemList",
    itemListElement: GUIDES.map((g, i) => ({ "@type": "ListItem", position: i + 1, url: `${ACADEMY.url}/guides/${g.slug}`, name: g.title })),
  },
};

export default function GuidesPage() {
  return (
    <>
      <JsonLd data={collection} />
      <DarkBand>
        <div className="shell pb-16 pt-14 md:pb-20 md:pt-20">
          <p className="eyebrow text-champagne">Guides</p>
          <h1 className="mt-4 max-w-3xl text-[2.5rem] leading-[1.05] text-white sm:text-6xl">
            IBT, ABAT and IBA, <span className="accent">explained plainly.</span>
          </h1>
          <p className="mt-6 max-w-2xl text-lg leading-relaxed text-white/80">
            What each credential is, what it takes, what it costs and how to choose — written for people training and working in
            the UAE, with every requirement taken from the issuing board&apos;s own pages.
          </p>
        </div>
      </DarkBand>

      <div className="shell py-16 md:py-24">
        {GUIDE_CATEGORIES.map((cat) => {
          const items = guidesIn(cat);
          if (!items.length) return null;
          return (
            <section key={cat} aria-labelledby={`cat-${cat}`} className="mb-16 last:mb-0">
              <h2 id={`cat-${cat}`} className="text-2xl text-ink md:text-3xl">{cat}</h2>
              <p className="mt-2 max-w-2xl text-soft">{INTRO[cat]}</p>
              <ul className="mt-8 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
                {items.map((g) => (
                  <li key={g.slug}>
                    <Link href={`/guides/${g.slug}`} className="card group flex h-full flex-col p-6 transition hover:border-amethyst/40">
                      <BookOpen size={22} className="text-bronze" aria-hidden="true" />
                      <span className="mt-4 font-display text-xl leading-snug text-ink group-hover:text-amethyst">{g.title}</span>
                      <span className="mt-2 text-sm leading-relaxed text-soft">{g.description}</span>
                      <span className="mt-auto flex items-center justify-between pt-5 text-sm">
                        <span className="text-soft">{readingMinutes(g)} min read</span>
                        <ArrowRight size={16} className="text-amethyst transition-transform group-hover:translate-x-1" aria-hidden="true" />
                      </span>
                    </Link>
                  </li>
                ))}
              </ul>
            </section>
          );
        })}

        <Link href="/glossary" className="card group mt-4 flex items-center gap-5 p-6 transition hover:border-amethyst/40 md:p-8">
          <BookText size={28} className="shrink-0 text-bronze" aria-hidden="true" />
          <span className="min-w-0 flex-1">
            <span className="block font-display text-2xl text-ink group-hover:text-amethyst">The ABA glossary</span>
            <span className="mt-1 block text-soft">Reinforcement, DTT, FBA, mand, tact and the rest — every term you&apos;ll meet in training, in a sentence or two.</span>
          </span>
          <ArrowRight size={18} className="shrink-0 text-amethyst transition-transform group-hover:translate-x-1" aria-hidden="true" />
        </Link>
      </div>
    </>
  );
}
