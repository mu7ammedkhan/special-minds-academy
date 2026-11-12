import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { JsonLd } from "@/components/JsonLd";
import { DarkBand } from "@/components/academy/ui";
import { ACADEMY } from "@/lib/academy";
import { GLOSSARY, type GlossaryTerm } from "@/lib/academy-glossary";

export const metadata: Metadata = {
  title: "ABA Glossary: Terms Explained Simply",
  description:
    "Plain definitions of the ABA terms you'll meet in IBT, ABAT and IBA training — reinforcement, DTT, NET, FBA, BIP, mand, tact, prompt fading and more.",
  keywords: ["ABA glossary", "ABA terms", "what is DTT", "what is a mand", "ABA terminology", "behaviour analysis definitions"],
  alternates: { canonical: "/glossary" },
  openGraph: { url: "/glossary", title: `ABA glossary | ${ACADEMY.name}` },
};

const sorted = [...GLOSSARY].sort((a, b) => a.term.localeCompare(b.term, "en", { sensitivity: "base" }));
const byLetter = sorted.reduce<Record<string, GlossaryTerm[]>>((acc, t) => {
  const letter = t.term[0].toUpperCase();
  (acc[letter] ||= []).push(t);
  return acc;
}, {});
const letters = Object.keys(byLetter);
const termBySlug = new Map(GLOSSARY.map((t) => [t.slug, t]));

const definedTermSet = {
  "@context": "https://schema.org",
  "@type": "DefinedTermSet",
  name: "ABA glossary",
  url: `${ACADEMY.url}/glossary`,
  publisher: { "@type": "EducationalOrganization", name: ACADEMY.name, url: ACADEMY.url },
  hasDefinedTerm: sorted.map((t) => ({
    "@type": "DefinedTerm",
    name: t.term,
    ...(t.abbr ? { alternateName: t.abbr } : {}),
    description: t.definition,
    url: `${ACADEMY.url}/glossary#${t.slug}`,
    inDefinedTermSet: `${ACADEMY.url}/glossary`,
  })),
};

export default function GlossaryPage() {
  return (
    <>
      <JsonLd data={definedTermSet} />
      <DarkBand>
        <div className="shell pb-16 pt-14 md:pb-20 md:pt-20">
          <nav aria-label="Breadcrumb" className="text-sm text-white/60">
            <Link href="/" className="hover:text-white">Academy</Link> <span aria-hidden="true">/</span>{" "}
            <Link href="/guides" className="hover:text-white">Guides</Link> <span aria-hidden="true">/</span>{" "}
            <span className="text-white/85">Glossary</span>
          </nav>
          <p className="eyebrow mt-8 text-champagne">ABA glossary · {sorted.length} terms</p>
          <h1 className="mt-4 max-w-3xl text-[2.5rem] leading-[1.05] text-white sm:text-6xl">
            The words of ABA, <span className="accent">in plain English.</span>
          </h1>
          <p className="mt-6 max-w-2xl text-lg leading-relaxed text-white/80">
            Every term you&apos;ll meet in IBT, ABAT and IBA training, explained in a sentence or two.
          </p>
        </div>
      </DarkBand>

      <div className="sticky top-[4.5rem] z-30 border-b border-hairline bg-paper/95 backdrop-blur">
        <nav aria-label="Letters" className="shell flex gap-1 overflow-x-auto py-3">
          {letters.map((l) => (
            <a key={l} href={`#letter-${l}`} className="rounded-lg px-2.5 py-1 text-sm font-semibold text-amethyst hover:bg-amethyst/10">
              {l}
            </a>
          ))}
        </nav>
      </div>

      <div className="shell py-14 md:py-20">
        {letters.map((l) => (
          <section key={l} id={`letter-${l}`} aria-labelledby={`letter-${l}-h`} className="scroll-mt-36 border-t border-hairline py-10 first:border-t-0 first:pt-0">
            <h2 id={`letter-${l}-h`} className="font-display text-4xl text-bronze">{l}</h2>
            <dl className="mt-6 grid gap-x-12 gap-y-8 md:grid-cols-2">
              {byLetter[l].map((t) => (
                <div key={t.slug} id={t.slug} className="scroll-mt-36">
                  <dt className="text-lg font-semibold text-ink">
                    {t.term}
                    {t.abbr && <span className="ml-2 rounded-md bg-amethyst/10 px-1.5 py-0.5 text-xs font-bold tracking-wide text-amethyst">{t.abbr}</span>}
                  </dt>
                  <dd className="mt-1.5 leading-relaxed text-ink/80">
                    {t.definition}
                    {(t.related?.length || t.more) && (
                      <span className="mt-2 flex flex-wrap items-center gap-x-3 gap-y-1 text-sm">
                        {t.related
                          ?.map((s) => termBySlug.get(s))
                          .filter((r): r is GlossaryTerm => Boolean(r))
                          .map((r) => (
                            <a key={r.slug} href={`#${r.slug}`} className="text-amethyst hover:underline">
                              {r.term}
                            </a>
                          ))}
                        {t.more && (
                          <Link href={t.more} className="inline-flex items-center gap-1 font-semibold text-bronze hover:underline">
                            Read more <ArrowRight size={13} aria-hidden="true" />
                          </Link>
                        )}
                      </span>
                    )}
                  </dd>
                </div>
              ))}
            </dl>
          </section>
        ))}
      </div>
    </>
  );
}
