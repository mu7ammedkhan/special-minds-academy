import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowRight, BookOpen, ExternalLink, Info } from "lucide-react";
import { JsonLd } from "@/components/JsonLd";
import { CourseCard, DarkBand, FaqList } from "@/components/academy/ui";
import { RichText } from "@/components/academy/RichText";
import { ACADEMY, courseBySlug } from "@/lib/academy";
import { FACTS_CHECKED_LABEL, SOURCES } from "@/lib/academy-facts";
import { GUIDES, guideBySlug, readingMinutes, type Guide } from "@/lib/academy-guides";
import type { GuideBlock } from "@/lib/academy-guides/types";
import { plainText } from "@/lib/academy-guides/text";
import { buildFaqSchema } from "@/lib/seo";

export function generateStaticParams() {
  return GUIDES.map((g) => ({ slug: g.slug }));
}

export function generateMetadata({ params }: { params: { slug: string } }): Metadata {
  const g = guideBySlug(params.slug);
  if (!g) return { title: "Page not found", robots: { index: false } };
  return {
    title: g.metaTitle,
    description: g.description,
    keywords: g.keywords,
    alternates: { canonical: `/guides/${g.slug}` },
    openGraph: {
      type: "article",
      url: `/guides/${g.slug}`,
      title: `${g.metaTitle} | ${ACADEMY.name}`,
      description: g.description,
      publishedTime: g.published,
      modifiedTime: g.updated,
    },
  };
}

const longDate = (iso: string) =>
  new Date(`${iso}T00:00:00Z`).toLocaleDateString("en-GB", { day: "numeric", month: "long", year: "numeric", timeZone: "UTC" });

function articleSchema(g: Guide) {
  const url = `${ACADEMY.url}/guides/${g.slug}`;
  return {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: g.title,
    description: g.description,
    inLanguage: "en",
    url,
    mainEntityOfPage: url,
    image: `${url}/opengraph-image`,
    datePublished: g.published,
    dateModified: g.updated,
    keywords: g.keywords.join(", "),
    abstract: plainText(g.answer),
    author: { "@type": "Organization", name: ACADEMY.name, url: ACADEMY.url },
    publisher: {
      "@type": "EducationalOrganization",
      name: ACADEMY.name,
      url: ACADEMY.url,
      logo: { "@type": "ImageObject", url: `${ACADEMY.url}/icon-512.png` },
    },
    isPartOf: { "@type": "WebSite", name: ACADEMY.name, url: ACADEMY.url },
    citation: g.sources.map((k) => ({ "@type": "CreativeWork", name: SOURCES[k].label, url: SOURCES[k].url })),
  };
}

function breadcrumbSchema(g: Guide) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Academy", item: ACADEMY.url },
      { "@type": "ListItem", position: 2, name: "Guides", item: `${ACADEMY.url}/guides` },
      { "@type": "ListItem", position: 3, name: g.title, item: `${ACADEMY.url}/guides/${g.slug}` },
    ],
  };
}

function Block({ block }: { block: GuideBlock }) {
  switch (block.type) {
    case "p":
      return (
        <p className="mt-4 text-[1.05rem] leading-relaxed text-ink/85">
          <RichText text={block.text} />
        </p>
      );
    case "list": {
      const List = block.ordered ? "ol" : "ul";
      return (
        <List className={`mt-4 space-y-2.5 pl-5 text-[1.05rem] leading-relaxed text-ink/85 ${block.ordered ? "list-decimal" : "list-disc marker:text-bronze"}`}>
          {block.items.map((item) => (
            <li key={item} className="pl-1">
              <RichText text={item} />
            </li>
          ))}
        </List>
      );
    }
    case "steps":
      return (
        <ol className="mt-6 space-y-4">
          {block.items.map((s, i) => (
            <li key={s.title} className="flex gap-4 rounded-2xl border border-hairline bg-surface p-5">
              <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-amethyst font-display text-white">{i + 1}</span>
              <div className="min-w-0">
                <p className="font-semibold text-ink">{s.title}</p>
                <p className="mt-1 leading-relaxed text-soft">
                  <RichText text={s.body} />
                </p>
              </div>
            </li>
          ))}
        </ol>
      );
    case "table":
      return (
        <figure className="mt-6">
          {/* Scrolls inside itself on a phone, so the page never does. */}
          <div className="overflow-x-auto rounded-2xl border border-hairline" role="region" aria-label={block.caption} tabIndex={0}>
            <table className="w-full min-w-[34rem] border-collapse text-left text-sm">
              <thead className="bg-amethyst-deep text-white">
                <tr>
                  {block.head.map((h, i) => (
                    <th key={i} scope="col" className="px-4 py-3 font-semibold">
                      {h}
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {block.rows.map((row, r) => (
                  <tr key={r} className="border-t border-hairline odd:bg-surface even:bg-paper">
                    {row.map((cell, c) =>
                      c === 0 ? (
                        <th key={c} scope="row" className="px-4 py-3 align-top font-semibold text-ink">
                          <RichText text={cell} />
                        </th>
                      ) : (
                        <td key={c} className="px-4 py-3 align-top text-ink/80">
                          <RichText text={cell} />
                        </td>
                      ),
                    )}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <figcaption className="mt-2 text-xs text-soft">{block.caption}</figcaption>
        </figure>
      );
    case "note":
      return (
        <aside className="mt-6 flex gap-3 rounded-2xl border border-amethyst/15 bg-amethyst/[0.05] p-5">
          <Info size={20} className="mt-0.5 shrink-0 text-amethyst" aria-hidden="true" />
          <div>
            <p className="font-semibold text-ink">{block.title}</p>
            <p className="mt-1 leading-relaxed text-ink/80">
              <RichText text={block.text} />
            </p>
          </div>
        </aside>
      );
  }
}

export default function GuidePage({ params }: { params: { slug: string } }) {
  const g = guideBySlug(params.slug);
  if (!g) notFound();
  const related = g.relatedGuides.map(guideBySlug).filter((x): x is Guide => Boolean(x));
  const courses = g.relatedCourses.map(courseBySlug);
  const toc = [...g.sections.map((s) => ({ id: s.id, heading: s.heading })), { id: "questions", heading: "Questions people ask" }, { id: "sources", heading: "Sources" }];

  return (
    <>
      <JsonLd data={articleSchema(g)} />
      <JsonLd data={buildFaqSchema(g.faqs.map((f) => ({ q: f.q, a: plainText(f.a) })))} />
      <JsonLd data={breadcrumbSchema(g)} />

      <DarkBand>
        <div className="shell pb-16 pt-12 md:pb-20 md:pt-16">
          <nav aria-label="Breadcrumb" className="text-sm text-white/60">
            <Link href="/" className="hover:text-white">Academy</Link> <span aria-hidden="true">/</span>{" "}
            <Link href="/guides" className="hover:text-white">Guides</Link> <span aria-hidden="true">/</span>{" "}
            <span className="text-white/85">{g.category}</span>
          </nav>
          <p className="eyebrow mt-8 text-champagne">
            {g.category} guide · {readingMinutes(g)} min read
          </p>
          <h1 className="mt-4 max-w-4xl text-[2.2rem] leading-[1.08] text-white sm:text-5xl lg:text-[3.4rem]">{g.title}</h1>
          <p className="mt-6 text-sm text-white/65">
            Updated <time dateTime={g.updated}>{longDate(g.updated)}</time> · Facts checked against IBAO, QABA and BACB sources
          </p>
        </div>
      </DarkBand>

      <div className="shell grid gap-12 py-14 md:py-20 lg:grid-cols-[minmax(0,1fr)_17rem] lg:gap-16">
        <article className="min-w-0 max-w-[46rem]">
          <section aria-labelledby="short-answer" className="rounded-[1.4rem] border-2 border-amethyst/15 bg-surface p-6 md:p-8">
            <p id="short-answer" className="eyebrow text-bronze">The short answer</p>
            <p className="mt-3 text-lg leading-relaxed text-ink md:text-xl">
              <RichText text={g.answer} />
            </p>
          </section>

          <section aria-labelledby="key-facts" className="mt-8">
            <h2 id="key-facts" className="sr-only">Key facts</h2>
            <dl className="divide-y divide-hairline overflow-hidden rounded-2xl border border-hairline">
              {g.keyFacts.map((f) => (
                <div key={f.label} className="grid gap-1 bg-paper px-5 py-4 sm:grid-cols-[11rem_minmax(0,1fr)] sm:gap-6">
                  <dt className="text-sm font-semibold text-ink">{f.label}</dt>
                  <dd className="text-sm leading-relaxed text-ink/80">{f.value}</dd>
                </div>
              ))}
            </dl>
          </section>

          {g.sections.map((s) => (
            <section key={s.id} id={s.id} aria-labelledby={`${s.id}-h`} className="mt-14 scroll-mt-28">
              <h2 id={`${s.id}-h`} className="text-2xl leading-snug text-ink md:text-3xl">{s.heading}</h2>
              {s.blocks.map((b, i) => (
                <Block key={i} block={b} />
              ))}
            </section>
          ))}

          <section id="questions" aria-labelledby="questions-h" className="mt-16 scroll-mt-28">
            <h2 id="questions-h" className="text-2xl text-ink md:text-3xl">Questions people ask</h2>
            <div className="mt-6">
              <FaqList items={g.faqs.map((f) => ({ q: f.q, a: plainText(f.a) }))} />
            </div>
          </section>

          <section id="sources" aria-labelledby="sources-h" className="mt-16 scroll-mt-28 rounded-2xl border border-hairline bg-surface p-6 md:p-8">
            <h2 id="sources-h" className="text-xl text-ink">Sources</h2>
            <p className="mt-2 text-sm leading-relaxed text-soft">
              Every requirement and fee here comes from the issuing board&apos;s own pages, checked in {FACTS_CHECKED_LABEL}. Boards
              change their rules, so check the current version before you register.
            </p>
            <ul className="mt-4 space-y-2 text-sm">
              {g.sources.map((k) => (
                <li key={k}>
                  <a href={SOURCES[k].url} target="_blank" rel="noopener" className="inline-flex items-start gap-1.5 font-medium text-amethyst hover:underline">
                    {SOURCES[k].label} <ExternalLink size={13} className="mt-1 shrink-0" aria-hidden="true" />
                  </a>
                </li>
              ))}
            </ul>
            <p className="mt-5 text-xs leading-relaxed text-soft">
              IBT and IBA are credentials of IBAO, ABAT and QBA of QABA, and RBT, BCaBA and BCBA of the BACB. Special Minds Academy
              provides training; the boards issue credentials.
            </p>
          </section>
        </article>

        <aside className="hidden lg:block">
          <div className="sticky top-28 space-y-6">
            <nav aria-label="On this page" className="rounded-2xl border border-hairline bg-surface p-5">
              <p className="eyebrow text-bronze">On this page</p>
              <ol className="mt-3 space-y-2 text-sm">
                {toc.map((t) => (
                  <li key={t.id}>
                    <a href={`#${t.id}`} className="block leading-snug text-soft hover:text-amethyst">
                      {t.heading}
                    </a>
                  </li>
                ))}
              </ol>
            </nav>
            {courses[0] && (
              <div className="rounded-2xl bg-amethyst-deep p-5 text-white">
                <p className="eyebrow text-champagne">{courses[0].status === "open" ? "Enrolling now" : "Register interest"}</p>
                <p className="mt-2 font-display text-xl">{courses[0].name}</p>
                <p className="mt-1 text-sm leading-relaxed text-white/75">{courses[0].summary}</p>
                <Link href={courses[0].href} className="btn btn-primary mt-4 w-full justify-center">
                  {courses[0].cta} <ArrowRight size={15} aria-hidden="true" />
                </Link>
              </div>
            )}
          </div>
        </aside>
      </div>

      {(courses.length > 0 || related.length > 0) && (
        <section className="bg-surface py-16 md:py-24">
          <div className="shell">
            {courses.length > 0 && (
              <>
                <h2 className="text-2xl text-ink md:text-3xl">Courses for this</h2>
                <div className="mt-8 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
                  {courses.map((c) => (
                    <CourseCard key={c.slug} course={c} />
                  ))}
                </div>
              </>
            )}
            {related.length > 0 && (
              <>
                <h2 className={`text-2xl text-ink md:text-3xl ${courses.length ? "mt-16" : ""}`}>Read next</h2>
                <ul className="mt-8 grid gap-4 md:grid-cols-2">
                  {related.map((r) => (
                    <li key={r.slug}>
                      <Link href={`/guides/${r.slug}`} className="card group flex h-full items-start gap-4 p-5 transition hover:border-amethyst/40">
                        <BookOpen size={20} className="mt-1 shrink-0 text-bronze" aria-hidden="true" />
                        <span className="min-w-0">
                          <span className="block font-semibold text-ink group-hover:text-amethyst">{r.title}</span>
                          <span className="mt-1 block text-sm leading-relaxed text-soft">{r.description}</span>
                        </span>
                      </Link>
                    </li>
                  ))}
                </ul>
              </>
            )}
          </div>
        </section>
      )}
    </>
  );
}
