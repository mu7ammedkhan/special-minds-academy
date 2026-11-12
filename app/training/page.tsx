import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, CalendarCheck, ClipboardCheck, GraduationCap, School, Users } from "lucide-react";
import { DarkBand, SectionHead } from "@/components/academy/ui";
import { EnquiryForm } from "@/components/academy/EnquiryForm";
import { RelatedGuides } from "@/components/academy/RelatedGuides";
import { ACADEMY, TRAINING_OFFERS, type TrainingOffer } from "@/lib/academy";

export const metadata: Metadata = {
  title: "Supervision, Exam Prep, Workshops and School Training",
  description:
    "Supervision and competency checks for IBT and ABAT candidates, exam preparation, short ABA workshops and in-house training for UAE schools. Register interest.",
  keywords: ["IBT supervision UAE", "ABAT competency assessment", "IBT exam preparation", "ABA workshop Dubai", "LSA training for schools UAE"],
  alternates: { canonical: "/training" },
  openGraph: { url: "/training", title: `More training | ${ACADEMY.name}` },
};

const ICONS: Record<TrainingOffer["slug"], typeof Users> = {
  supervision: ClipboardCheck,
  "exam-prep": GraduationCap,
  workshops: Users,
  "school-training": School,
  "info-session": CalendarCheck,
};

export default function TrainingPage() {
  return (
    <>
      <DarkBand>
        <div className="shell pb-16 pt-14 md:pb-20 md:pt-20">
          <nav aria-label="Breadcrumb" className="text-sm text-white/60">
            <Link href="/" className="hover:text-white">Academy</Link> <span aria-hidden="true">/</span>{" "}
            <span className="text-white/85">More training</span>
          </nav>
          <p className="eyebrow mt-8 text-champagne">More training · Register interest</p>
          <h1 className="mt-4 max-w-3xl text-[2.5rem] leading-[1.05] text-white sm:text-6xl">
            Beyond the coursework: <span className="accent">supervision, exam prep and workshops.</span>
          </h1>
          <p className="mt-6 max-w-2xl text-lg leading-relaxed text-white/80">
            A credential takes more than a course. These are the next things we&apos;re lining up around our courses. None of them
            is open yet — tell us which you&apos;d like and you&apos;ll hear first.
          </p>
          <ul className="mt-9 flex flex-wrap gap-2">
            {TRAINING_OFFERS.map((o) => (
              <li key={o.slug}>
                <a href={`#${o.slug}`} className="inline-flex rounded-full border border-white/25 px-4 py-2 text-sm text-white/85 hover:border-champagne hover:text-white">
                  {o.title}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </DarkBand>

      <div className="shell space-y-6 py-16 md:py-24">
        {TRAINING_OFFERS.map((o) => {
          const Icon = ICONS[o.slug];
          return (
            <section key={o.slug} id={o.slug} aria-labelledby={`${o.slug}-h`} className="card scroll-mt-28 grid gap-8 p-7 md:grid-cols-[minmax(0,1.2fr)_minmax(0,1fr)] md:p-10">
              <div>
                <span className="flex h-12 w-12 items-center justify-center rounded-xl bg-amethyst/10 text-amethyst">
                  <Icon size={22} aria-hidden="true" />
                </span>
                <h2 id={`${o.slug}-h`} className="mt-5 text-2xl text-ink md:text-3xl">{o.title}</h2>
                <p className="mt-1 text-sm font-semibold text-bronze">For {o.who.charAt(0).toLowerCase() + o.who.slice(1)}</p>
                <p className="mt-4 leading-relaxed text-soft">{o.body}</p>
              </div>
              <div className="flex flex-col justify-between gap-6 rounded-2xl bg-paper p-6">
                <ul className="space-y-3">
                  {o.points.map((p) => (
                    <li key={p} className="flex gap-3 text-ink/85">
                      <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-bronze" aria-hidden="true" />
                      {p}
                    </li>
                  ))}
                </ul>
                <a href="#interest" className="inline-flex items-center gap-2 font-semibold text-amethyst hover:underline">
                  Register interest <ArrowRight size={16} aria-hidden="true" />
                </a>
              </div>
            </section>
          );
        })}
      </div>

      <section id="interest" className="scroll-mt-20 bg-surface py-20 md:py-28">
        <div className="shell grid gap-12 lg:grid-cols-[1fr_1.1fr] lg:gap-16">
          <SectionHead
            eyebrow="Register interest"
            title="Tell us what"
            accent="you'd like."
            intro="Pick the training you're interested in. We'll get in touch when it opens — no fee, no obligation."
          />
          <div className="rounded-[1.4rem] border border-hairline bg-paper p-6 shadow-lift md:p-8">
            <EnquiryForm submitLabel="Register my interest" />
          </div>
        </div>
      </section>

      <RelatedGuides slugs={["how-to-become-an-ibt-in-the-uae", "abat-requirements", "aba-training-in-dubai"]} title="Guides" />
    </>
  );
}
