import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { ArrowRight, ExternalLink } from "lucide-react";
import { JsonLd } from "@/components/JsonLd";
import { CheckList, DarkBand, FaqList, SectionHead } from "@/components/academy/ui";
import { EnquiryForm } from "@/components/academy/EnquiryForm";
import { RelatedGuides } from "@/components/academy/RelatedGuides";
import { ACADEMY, IBA_FAQS, IBA_REQUIREMENTS, IBA_ROLE, IBA_UAE_FAQS, courseBySlug } from "@/lib/academy";
import { buildFaqSchema } from "@/lib/seo";

const course = courseBySlug("iba-training");
const FAQS = [...IBA_FAQS, ...IBA_UAE_FAQS];

export const metadata: Metadata = {
  title: "IBA Training — International Behavior Analyst",
  description:
    "Training toward IBAO's International Behavior Analyst (IBA) credential, for graduates moving into ABA programme design and supervision. Register your interest in the next intake.",
  keywords: ["IBA training UAE", "IBA course Dubai", "International Behavior Analyst course", "IBAO IBA", "BCBA alternative UAE"],
  alternates: { canonical: "/courses/iba-training" },
  openGraph: { url: "/courses/iba-training", title: "IBA Training | Special Minds Academy" },
};

// No price, dates or workload until the intake is announced, so no Offer or
// CourseInstance — a Course with a provider is everything that's true today.
const courseSchema = {
  "@context": "https://schema.org",
  "@type": "Course",
  name: "IBA Training — International Behavior Analyst",
  description: course.summary,
  provider: { "@type": "EducationalOrganization", name: ACADEMY.name, url: ACADEMY.url },
};

export default function IbaCoursePage() {
  return (
    <>
      <JsonLd data={courseSchema} />
      <JsonLd data={buildFaqSchema(FAQS)} />

      <DarkBand>
        <div className="shell grid items-center gap-14 pb-20 pt-14 md:pt-20 lg:grid-cols-[1.2fr_1fr] lg:pb-24">
          <div>
            <nav aria-label="Breadcrumb" className="text-sm text-white/60">
              <Link href="/" className="hover:text-white">Academy</Link> <span aria-hidden="true">/</span>{" "}
              <Link href="/courses" className="hover:text-white">Courses</Link> <span aria-hidden="true">/</span>{" "}
              <span className="text-white/85">IBA Training</span>
            </nav>
            <p className="eyebrow mt-8 text-champagne">IBA Training · Analyst level · Next intake</p>
            <h1 className="mt-4 text-[2.5rem] leading-[1.05] text-white sm:text-6xl">
              From running programmes <span className="accent">to designing them.</span>
            </h1>
            <p className="mt-6 max-w-xl text-lg leading-relaxed text-white/80">
              The International Behavior Analyst (IBA) is IBAO&apos;s analyst-level credential: the person who assesses,
              writes the programme and supervises the team. We&apos;re preparing our next IBA intake now.
            </p>
            <div className="mt-9 flex flex-wrap gap-3">
              <Link href="#interest" className="btn btn-primary">
                Register your interest <ArrowRight size={16} aria-hidden="true" />
              </Link>
              <Link href="#requirements" className="btn btn-ghost text-white">What IBAO requires</Link>
            </div>
          </div>
          <div className="relative aspect-[4/3] overflow-hidden rounded-[1.6rem] border border-white/15 shadow-2xl">
            <Image src={course.image} alt="" fill priority sizes="(min-width: 1024px) 520px, 100vw" className="object-cover" />
            <div className="absolute inset-0 bg-gradient-to-t from-amethyst-deep/70 to-transparent" />
            <p className="absolute bottom-5 left-5 right-5 font-display text-xl text-white">
              Analysts assess, design and supervise. <span className="text-champagne">Technicians deliver.</span>
            </p>
          </div>
        </div>
      </DarkBand>

      {/* The role */}
      <section className="shell py-20 md:py-28">
        <div className="grid gap-12 lg:grid-cols-2">
          <SectionHead
            eyebrow="The role"
            title="What an IBA"
            accent="actually does."
            intro="IBT is about delivering a programme well. IBA is about deciding what the programme should be — and being accountable for it."
          />
          <div className="rounded-2xl border border-hairline bg-surface p-7 md:p-9">
            <CheckList items={IBA_ROLE} />
          </div>
        </div>
      </section>

      {/* Requirements */}
      <section id="requirements" className="scroll-mt-24 bg-surface py-20 md:py-28">
        <div className="shell">
          <SectionHead
            eyebrow="IBAO's requirements"
            title="Five things stand between you"
            accent="and the credential."
            intro="As IBAO publishes them for candidates registering since 1 October 2025. IBAO sets and changes these, so always check the current version with them."
          />
          <ol className="mt-12 grid gap-5 md:grid-cols-2 lg:grid-cols-5">
            {IBA_REQUIREMENTS.map((r, i) => (
              <li key={r.title} className="card flex flex-col p-6">
                <span className="font-display text-3xl text-bronze">{String(i + 1).padStart(2, "0")}</span>
                <h3 className="mt-4 text-lg">{r.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-soft">{r.body}</p>
              </li>
            ))}
          </ol>
          <a
            href="https://theibao.com/apply-for-iba"
            target="_blank"
            rel="noopener"
            className="mt-8 inline-flex items-center gap-2 text-sm font-semibold text-bronze hover:underline"
          >
            IBAO&apos;s own IBA page <ExternalLink size={14} aria-hidden="true" />
          </a>
        </div>
      </section>

      {/* Interest */}
      <section id="interest" className="scroll-mt-20 shell py-20 md:py-28">
        <div className="grid gap-12 lg:grid-cols-[1fr_1.1fr] lg:gap-16">
          <div>
            <SectionHead
              eyebrow="Next intake"
              title="Be first to hear"
              accent="when it opens."
              intro="We'll send the format, fee and start date for the next IBA intake as soon as they're set. Registering interest costs nothing and commits you to nothing."
            />
            <div className="mt-8 rounded-2xl border border-hairline bg-paper p-6">
              <p className="font-semibold text-ink">Not at analyst level yet?</p>
              <p className="mt-1 text-soft">
                Most IBAs start as technicians. The IBT coursework is open now and is the usual first step.
              </p>
              <Link href="/courses/ibt-training" className="mt-4 inline-flex items-center gap-2 font-semibold text-amethyst">
                See IBT Training <ArrowRight size={16} aria-hidden="true" />
              </Link>
            </div>
          </div>
          <div className="rounded-[1.4rem] border border-hairline bg-surface p-6 shadow-lift md:p-8">
            <p className="font-display text-2xl text-ink">Register interest in IBA Training</p>
            <p className="mb-6 mt-1 text-sm text-soft">Takes a minute. We&apos;ll reply on WhatsApp or email.</p>
            <EnquiryForm course="iba-training" submitLabel="Register my interest" />
          </div>
        </div>
      </section>

      <section className="bg-surface py-20 md:py-28">
        <div className="shell grid gap-12 lg:grid-cols-[0.8fr_1.2fr]">
          <SectionHead eyebrow="Questions" title="About the" accent="IBA route." />
          <FaqList items={FAQS} />
        </div>
      </section>

      <RelatedGuides slugs={["iba-requirements", "iba-vs-bcba-vs-qba", "can-i-become-an-rbt-or-bcba-in-the-uae"]} />
    </>
  );
}
