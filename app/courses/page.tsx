import type { Metadata } from "next";
import Link from "next/link";
import { JsonLd } from "@/components/JsonLd";
import { CourseCard, DarkBand, FaqList, SectionHead } from "@/components/academy/ui";
import { CareerPath } from "@/components/academy/Visuals";
import { ACADEMY, ACADEMY_FAQS, COURSES, courseBySlug } from "@/lib/academy";
import { IBT_COHORT_1 } from "@/lib/ibt";
import { DEPOSIT_AED } from "@/lib/ibt-pathway";
import { buildFaqSchema } from "@/lib/seo";

export const metadata: Metadata = {
  title: "Courses — IBT, ABAT, IBA and LSA Training in the UAE",
  description:
    "Compare Special Minds Academy's courses: the 40-hour IBT coursework, ABAT and IBA training, and the LSA certificate course for classroom support staff.",
  keywords: ["ABA courses UAE", "IBT course Dubai", "ABAT course UAE", "IBA training UAE", "LSA course Dubai"],
  alternates: { canonical: "/courses" },
  openGraph: { url: "/courses", title: "Courses | Special Minds Academy" },
};

// The ladder's order, left to right. By slug, so adding a course can't shift a column.
const ORDER = (["lsa-course", "ibt-training", "abat-training", "iba-training"] as const).map(courseBySlug);

const ROWS: { label: string; values: string[] }[] = [
  { label: "Who it's for", values: ORDER.map((c) => c.forWho) },
  {
    label: "What you get",
    values: [
      "Special Minds certificate of completion",
      "The full 40-hour IBT coursework requirement and a certificate",
      "Training toward QABA's technician credential",
      "Training toward IBAO's analyst-level credential",
    ],
  },
  {
    label: "Credential issued by",
    values: ["Special Minds", "IBAO, after supervised hours and its exam", "QABA, after fieldwork and its exam", "IBAO, after practice hours, supervision and its exam"],
  },
  { label: "Format", values: ["Announced with the intake", "100% online, live or recorded", "Announced when it opens", "Announced with the intake"] },
  {
    label: "Fee",
    values: ["On request", `AED ${IBT_COHORT_1.coursePriceAed.toLocaleString("en-US")}, or AED ${DEPOSIT_AED} to reserve`, "On request", "On request"],
  },
  { label: "Status", values: ORDER.map((c) => c.statusLabel) },
];

const listSchema = {
  "@context": "https://schema.org",
  "@type": "ItemList",
  itemListElement: COURSES.map((c, i) => ({
    "@type": "ListItem",
    position: i + 1,
    url: `${ACADEMY.url}${c.href}`,
    name: c.name,
  })),
};

export default function CoursesPage() {
  return (
    <>
      <JsonLd data={listSchema} />
      <JsonLd data={buildFaqSchema(ACADEMY_FAQS)} />

      <DarkBand>
        <div className="shell pb-16 pt-14 md:pb-20 md:pt-20">
          <p className="eyebrow text-champagne">Courses</p>
          <h1 className="mt-4 max-w-3xl text-[2.5rem] leading-[1.05] text-white sm:text-6xl">
            Find the course that fits <span className="accent">where you are.</span>
          </h1>
          <p className="mt-6 max-w-2xl text-lg leading-relaxed text-white/80">
            Three courses, from your first day in a classroom to the analyst level. Start with one; most people come back for
            the next.
          </p>
          <div className="mt-12">
            <CareerPath />
          </div>
        </div>
      </DarkBand>

      <section className="shell py-20 md:py-28">
        <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-4">
          {ORDER.map((c) => (
            <CourseCard key={c.slug} course={c} />
          ))}
        </div>
      </section>

      <section className="bg-surface py-20 md:py-28">
        <div className="shell">
          <SectionHead eyebrow="Side by side" title="Compare" accent="the three courses." />
          <div className="mt-10 overflow-x-auto rounded-2xl border border-hairline">
            <table className="w-full min-w-[900px] border-collapse text-left">
              <thead>
                <tr className="bg-paper">
                  <th scope="col" className="w-[16%] p-4"></th>
                  {ORDER.map((c) => (
                    <th key={c.slug} scope="col" className="p-4">
                      <Link href={c.href} className="group flex items-center gap-3">
                        <span className={`flex h-10 w-10 shrink-0 items-center justify-center rounded-lg font-display text-sm text-white ${c.band}`}>
                          {c.code}
                        </span>
                        <span className="font-display text-lg text-ink group-hover:text-amethyst">{c.name}</span>
                      </Link>
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {ROWS.map((r) => (
                  <tr key={r.label} className="border-t border-hairline align-top">
                    <th scope="row" className="p-4 text-sm font-semibold text-ink">{r.label}</th>
                    {r.values.map((v, i) => (
                      <td key={i} className={`p-4 text-sm ${i === 1 ? "bg-amethyst/[0.04] text-ink" : "text-soft"}`}>{v}</td>
                    ))}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      <section className="shell py-20 md:py-28">
        <div className="grid gap-12 lg:grid-cols-[0.8fr_1.2fr]">
          <SectionHead eyebrow="Questions" title="Choosing" accent="a course." />
          <FaqList items={ACADEMY_FAQS} />
        </div>
      </section>
    </>
  );
}
