import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { ArrowRight } from "lucide-react";
import { JsonLd } from "@/components/JsonLd";
import { CheckList, DarkBand, FaqList, SectionHead } from "@/components/academy/ui";
import { CertificateArt } from "@/components/academy/Visuals";
import { EnquiryForm } from "@/components/academy/EnquiryForm";
import { ACADEMY, LSA_COURSE_FAQS, LSA_COURSE_FOR, LSA_COURSE_TOPICS, LSA_UAE_FAQS, courseBySlug } from "@/lib/academy";
import { RelatedGuides } from "@/components/academy/RelatedGuides";
import { buildFaqSchema } from "@/lib/seo";

const course = courseBySlug("lsa-course");
const FAQS = [...LSA_COURSE_FAQS, ...LSA_UAE_FAQS];

export const metadata: Metadata = {
  title: "LSA Course — Learning Support Assistant Certificate",
  description:
    "A practical course for LSAs, shadow teachers and SEN teaching assistants in UAE schools, with a Special Minds certificate of completion. Register your interest in the next intake.",
  keywords: ["LSA course Dubai", "learning support assistant course UAE", "shadow teacher course Dubai", "LSA certificate UAE", "shadow teacher training Abu Dhabi"],
  alternates: { canonical: "/courses/lsa-course" },
  openGraph: { url: "/courses/lsa-course", title: "LSA Course | Special Minds Academy" },
};

const courseSchema = {
  "@context": "https://schema.org",
  "@type": "Course",
  name: "LSA Course — Learning Support Assistant certificate",
  description: course.summary,
  provider: { "@type": "EducationalOrganization", name: ACADEMY.name, url: ACADEMY.url },
};

export default function LsaCoursePage() {
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
              <span className="text-white/85">LSA Course</span>
            </nav>
            <p className="eyebrow mt-8 text-champagne">LSA Course · Foundation · Certificate</p>
            <h1 className="mt-4 text-[2.5rem] leading-[1.05] text-white sm:text-6xl">
              Walk into the classroom <span className="accent">ready.</span>
            </h1>
            <p className="mt-6 max-w-xl text-lg leading-relaxed text-white/80">
              A practical course for Learning Support Assistants and shadow teachers — the role, the child, the plan and the
              notes — from the team that places LSAs in UAE schools.
            </p>
            <div className="mt-9 flex flex-wrap gap-3">
              <Link href="#interest" className="btn btn-primary">
                Register your interest <ArrowRight size={16} aria-hidden="true" />
              </Link>
              <Link href="#topics" className="btn btn-ghost text-white">What it covers</Link>
            </div>
          </div>
          <div className="relative aspect-[4/3] overflow-hidden rounded-[1.6rem] border border-white/15 shadow-2xl">
            <Image src={course.image} alt="" fill priority sizes="(min-width: 1024px) 520px, 100vw" className="object-cover" />
            <div className="absolute inset-0 bg-gradient-to-t from-amethyst-deep/60 to-transparent" />
          </div>
        </div>
      </DarkBand>

      <section className="shell py-20 md:py-28">
        <div className="grid gap-12 lg:grid-cols-2">
          <SectionHead
            eyebrow="Who it's for"
            title="For the person"
            accent="beside the child."
            intro="An LSA is often the adult who spends the most time with a child at school. This course is about doing that job well."
          />
          <div className="rounded-2xl border border-hairline bg-surface p-7 md:p-9">
            <CheckList items={LSA_COURSE_FOR} />
          </div>
        </div>
      </section>

      <section id="topics" className="scroll-mt-24 bg-surface py-20 md:py-28">
        <div className="shell">
          <SectionHead eyebrow="What it covers" title="Six parts of" accent="the job, taught properly." />
          <ol className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {LSA_COURSE_TOPICS.map((t, i) => (
              <li key={t.title} className="card p-7">
                <span className="font-display text-3xl text-bronze">{String(i + 1).padStart(2, "0")}</span>
                <h3 className="mt-4 text-xl">{t.title}</h3>
                <p className="mt-2 leading-relaxed text-soft">{t.body}</p>
              </li>
            ))}
          </ol>
        </div>
      </section>

      <section className="shell py-20 md:py-28">
        <div className="grid items-center gap-14 lg:grid-cols-2">
          <CertificateArt
            course="LSA Course"
            meta={[
              { value: "Special Minds", label: "Issued by" },
              { value: "Classroom", label: "Focus" },
              { value: "Completion", label: "Award" },
            ]}
            className="mx-auto w-full max-w-md -rotate-2 transition-transform duration-500 hover:rotate-0" />
          <div>
            <SectionHead
              eyebrow="Certificate"
              title="Finish with"
              accent="something to show."
              intro="Complete the course and you receive a Special Minds certificate of completion — proof of training you can share with a school or an agency."
            />
            <div className="mt-8 rounded-2xl border border-hairline bg-paper p-6">
              <p className="font-semibold text-ink">Want an ABA credential too?</p>
              <p className="mt-1 text-soft">Many LSAs go on to IBT, the entry-level ABA credential. Its coursework is open now.</p>
              <Link href="/courses/ibt-training" className="mt-4 inline-flex items-center gap-2 font-semibold text-amethyst">
                See IBT Training <ArrowRight size={16} aria-hidden="true" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section id="interest" className="scroll-mt-20 bg-surface py-20 md:py-28">
        <div className="shell grid gap-12 lg:grid-cols-[1fr_1.1fr] lg:gap-16">
          <div>
            <SectionHead
              eyebrow="Next intake"
              title="Hear first"
              accent="when it opens."
              intro="We'll send the format, fee and start date as soon as they're set. No payment and no obligation."
            />
            <div className="mt-10">
              <FaqList items={FAQS} />
            </div>
          </div>
          <div className="self-start rounded-[1.4rem] border border-hairline bg-surface p-6 shadow-lift md:p-8">
            <p className="font-display text-2xl text-ink">Register interest in the LSA Course</p>
            <p className="mb-6 mt-1 text-sm text-soft">Takes a minute. We&apos;ll reply on WhatsApp or email.</p>
            <EnquiryForm course="lsa-course" submitLabel="Register my interest" />
          </div>
        </div>
      </section>
      <RelatedGuides slugs={["shadow-teacher-training-uae", "aba-career-path-uae", "what-is-ibt"]} />
    </>
  );
}
