import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { ArrowRight, ExternalLink } from "lucide-react";
import { JsonLd } from "@/components/JsonLd";
import { CheckList, DarkBand, FaqList, SectionHead } from "@/components/academy/ui";
import { EnquiryForm } from "@/components/academy/EnquiryForm";
import { RelatedGuides } from "@/components/academy/RelatedGuides";
import { ABAT_FAQS, ABAT_ROLE, ACADEMY, courseBySlug } from "@/lib/academy";
import { CREDENTIALS, SOURCES } from "@/lib/academy-facts";
import { buildFaqSchema } from "@/lib/seo";

const course = courseBySlug("abat-training");
const abat = CREDENTIALS.abat;

export const metadata: Metadata = {
  title: "ABAT Training — Applied Behavior Analysis Technician (QABA)",
  description:
    "QABA's Applied Behavior Analysis Technician (ABAT) for people in the UAE: what it takes, what it costs, how it compares with IBT. Register interest in our course.",
  keywords: ["ABAT course UAE", "ABAT training Dubai", "QABA ABAT", "ABA technician course", "ABAT certification Abu Dhabi"],
  alternates: { canonical: "/courses/abat-training" },
  openGraph: { url: "/courses/abat-training", title: `ABAT Training | ${ACADEMY.name}` },
};

// Not open, so no Offer or CourseInstance: a Course with a provider is
// everything that's true today. The credential is QABA's, so it's named as
// what the course works toward, never as something we award.
const courseSchema = {
  "@context": "https://schema.org",
  "@type": "Course",
  name: "ABAT Training — Applied Behavior Analysis Technician",
  description: course.summary,
  provider: { "@type": "EducationalOrganization", name: ACADEMY.name, url: ACADEMY.url },
  about: { "@type": "EducationalOccupationalCredential", name: "Applied Behavior Analysis Technician (ABAT)", recognizedBy: { "@type": "Organization", name: abat.issuerFull } },
};

const REQUIREMENTS = [
  { title: "Who can apply", body: abat.eligibility },
  { title: "40 hours of coursework", body: abat.coursework },
  { title: "15 hours of fieldwork", body: abat.practice },
  { title: "QABA's exam", body: abat.exam },
  { title: "Fees", body: abat.fees },
  { title: "Keeping it", body: abat.renewal },
];

const VS = [
  ["Issued by", "QABA", "IBAO"],
  ["Coursework", "40 hours", "40 hours"],
  ["Supervised practice", "15 hours of fieldwork", "300 hours"],
  ["Fee to the board", "US$125", "US$120, exam included"],
  ["Leads to", "QASP-S, then QBA", "IBA"],
  ["With us", "Not open yet", "Open now, AED 1,499"],
];

export default function AbatCoursePage() {
  return (
    <>
      <JsonLd data={courseSchema} />
      <JsonLd data={buildFaqSchema(ABAT_FAQS)} />

      <DarkBand>
        <div className="shell grid items-center gap-14 pb-20 pt-14 md:pt-20 lg:grid-cols-[1.2fr_1fr] lg:pb-24 [&>*]:min-w-0">
          <div>
            <nav aria-label="Breadcrumb" className="text-sm text-white/60">
              <Link href="/" className="hover:text-white">Academy</Link> <span aria-hidden="true">/</span>{" "}
              <Link href="/courses" className="hover:text-white">Courses</Link> <span aria-hidden="true">/</span>{" "}
              <span className="text-white/85">ABAT Training</span>
            </nav>
            <p className="eyebrow mt-8 text-champagne">ABAT Training · Technician level · Not open yet</p>
            <h1 className="mt-4 text-[2.5rem] leading-[1.05] text-white sm:text-6xl">
              QABA&apos;s technician credential, <span className="accent">explained.</span>
            </h1>
            <p className="mt-6 max-w-xl text-lg leading-relaxed text-white/80">
              The Applied Behavior Analysis Technician (ABAT) is QABA&apos;s entry-level ABA credential, open to people living in
              the UAE.{" "}
              Our ABAT course isn't open yet. Register your interest and you'll hear first.
            </p>
            <div className="mt-9 flex flex-wrap gap-3">
              <Link href="#interest" className="btn btn-primary">
                Register your interest <ArrowRight size={16} aria-hidden="true" />
              </Link>
              <Link href="#requirements" className="btn btn-ghost text-white">What QABA requires</Link>
            </div>
          </div>
          <div className="relative aspect-[4/3] overflow-hidden rounded-[1.6rem] border border-white/15 shadow-2xl">
            <Image src={course.image} alt="" fill priority sizes="(min-width: 1024px) 520px, 100vw" className="object-cover" />
            <div className="absolute inset-0 bg-gradient-to-t from-amethyst-deep/75 to-transparent" />
            <p className="absolute bottom-5 left-5 right-5 font-display text-xl text-white">
              40 hours of coursework. <span className="text-champagne">15 hours of fieldwork. One exam.</span>
            </p>
          </div>
        </div>
      </DarkBand>

      <section className="shell py-20 md:py-28">
        <div className="grid gap-12 lg:grid-cols-2">
          <SectionHead
            eyebrow="The role"
            title="What an ABAT"
            accent="does."
            intro="ABATs deliver ABA programmes day to day, under the direction of a supervising behaviour analyst."
          />
          <div className="rounded-2xl border border-hairline bg-surface p-7 md:p-9">
            <CheckList items={ABAT_ROLE} />
          </div>
        </div>
      </section>

      <section id="requirements" className="scroll-mt-24 bg-surface py-20 md:py-28">
        <div className="shell">
          <SectionHead
            eyebrow="QABA's requirements"
            title="What it takes to"
            accent="become an ABAT."
            intro="As QABA publishes them. QABA sets and changes these, so check the current version before you start."
          />
          <ol className="mt-12 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
            {REQUIREMENTS.map((r, i) => (
              <li key={r.title} className="card flex flex-col p-6">
                <span className="font-display text-3xl text-bronze">{String(i + 1).padStart(2, "0")}</span>
                <h3 className="mt-4 text-lg">{r.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-soft">{r.body}</p>
              </li>
            ))}
          </ol>
          <div className="mt-8 flex flex-wrap gap-x-6 gap-y-2 text-sm font-semibold">
            <a href={SOURCES.qabaAbat.url} target="_blank" rel="noopener" className="inline-flex items-center gap-2 text-bronze hover:underline">
              QABA&apos;s ABAT requirements <ExternalLink size={14} aria-hidden="true" />
            </a>
            <Link href="/guides/abat-requirements" className="inline-flex items-center gap-2 text-amethyst hover:underline">
              Our ABAT requirements guide <ArrowRight size={14} aria-hidden="true" />
            </Link>
          </div>
        </div>
      </section>

      <section className="shell py-20 md:py-28">
        <div className="grid gap-12 lg:grid-cols-[1fr_1.15fr] lg:gap-16">
          <div>
            <SectionHead
              eyebrow="ABAT or IBT?"
              title="Two boards,"
              accent="two technician credentials."
              intro="Both start with 40 hours of coursework. The difference is how much supervised practice comes next, and which analyst-level credential you're heading for."
            />
            <div className="mt-8 rounded-2xl border border-hairline bg-paper p-6">
              <p className="font-semibold text-ink">Ready to start now?</p>
              <p className="mt-1 text-soft">Our IBT coursework is open today, and nothing stops you holding both credentials later.</p>
              <Link href="/courses/ibt-training" className="mt-4 inline-flex items-center gap-2 font-semibold text-amethyst">
                See IBT Training <ArrowRight size={16} aria-hidden="true" />
              </Link>
            </div>
          </div>
          <div className="overflow-x-auto rounded-2xl border border-hairline" role="region" aria-label="ABAT and IBT compared" tabIndex={0}>
            <table className="w-full min-w-[28rem] border-collapse text-left text-sm">
              <thead className="bg-amethyst-deep text-white">
                <tr>
                  <th scope="col" className="px-4 py-3"><span className="sr-only">Requirement</span></th>
                  <th scope="col" className="px-4 py-3 font-semibold">ABAT</th>
                  <th scope="col" className="px-4 py-3 font-semibold">IBT</th>
                </tr>
              </thead>
              <tbody>
                {VS.map(([label, a, b]) => (
                  <tr key={label} className="border-t border-hairline odd:bg-surface even:bg-paper">
                    <th scope="row" className="px-4 py-3 font-semibold text-ink">{label}</th>
                    <td className="px-4 py-3 text-ink/80">{a}</td>
                    <td className="px-4 py-3 text-ink/80">{b}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      <section id="interest" className="scroll-mt-20 bg-surface py-20 md:py-28">
        <div className="shell grid gap-12 lg:grid-cols-[1fr_1.1fr] lg:gap-16">
          <SectionHead
            eyebrow="Register interest"
            title="Hear first if"
            accent="our ABAT course opens."
            intro="QABA only counts ABAT coursework from its approved providers, so we'll say plainly on this page if and when ours is approved. Registering interest costs nothing and commits you to nothing."
          />
          <div className="rounded-[1.4rem] border border-hairline bg-paper p-6 shadow-lift md:p-8">
            <p className="font-display text-2xl text-ink">Register interest in ABAT Training</p>
            <p className="mb-6 mt-1 text-sm text-soft">Takes a minute. We&apos;ll reply on WhatsApp or email.</p>
            <EnquiryForm course="abat-training" submitLabel="Register my interest" />
          </div>
        </div>
      </section>

      <section className="shell py-20 md:py-28">
        <div className="grid gap-12 lg:grid-cols-[0.8fr_1.2fr]">
          <SectionHead eyebrow="Questions" title="About the" accent="ABAT." />
          <FaqList items={ABAT_FAQS} />
        </div>
      </section>

      <RelatedGuides slugs={["what-is-abat", "abat-requirements", "ibt-vs-abat-vs-rbt"]} />
    </>
  );
}
