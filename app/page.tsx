import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { ArrowRight, Briefcase, LogIn, MapPin, ShieldCheck, Users } from "lucide-react";
import { JsonLd } from "@/components/JsonLd";
import { CourseCard, DarkBand, FaqList, SectionHead, StatusPill } from "@/components/academy/ui";
import { CareerPath, CertificateArt, PortalPreview } from "@/components/academy/Visuals";
import { EnquiryForm } from "@/components/academy/EnquiryForm";
import { AcademyWhatsAppLink } from "@/components/academy/AcademyWhatsApp";
import { VerifyForm } from "@/components/academy/VerifyForm";
import { RelatedGuides } from "@/components/academy/RelatedGuides";
import {
  ACADEMY,
  ACADEMY_FAQS,
  COURSES,
  HOME_STATS,
  PORTAL_FEATURES,
  STUDENT_LOGIN_URL,
  WHY_ACADEMY,
} from "@/lib/academy";
import { IBT_DIRECTOR, IBT_TRAINER_NOTE } from "@/lib/ibt";
import { buildFaqSchema } from "@/lib/seo";

export const metadata: Metadata = {
  title: { absolute: "Special Minds Academy | IBT, ABAT, IBA & LSA Training in the UAE" },
  description: ACADEMY.description,
  keywords: [
    "IBT course UAE",
    "IBT training Dubai",
    "ABAT course UAE",
    "IBA training UAE",
    "ABA training Dubai",
    "behaviour therapist course Dubai",
    "LSA course Dubai",
    "shadow teacher training UAE",
  ],
  alternates: { canonical: "/" },
  openGraph: { url: "/", title: "Special Minds Academy", description: ACADEMY.description },
};

const WHY_ICONS = [Users, MapPin, Briefcase, ShieldCheck];

export default function AcademyHome() {
  return (
    <>
      <JsonLd data={buildFaqSchema(ACADEMY_FAQS)} />

      {/* Hero */}
      <DarkBand>
        <div className="shell grid items-center gap-14 pb-20 pt-16 md:pt-24 lg:grid-cols-[1.15fr_1fr] lg:pb-28 [&>*]:min-w-0">
          <div>
            <p className="eyebrow text-champagne">Special Minds Academy · UAE</p>
            <h1 className="mt-5 text-[2.6rem] leading-[1.05] text-white sm:text-6xl lg:text-[4.2rem]">
              Train in ABA with the people who <span className="accent">do the work.</span>
            </h1>
            <p className="mt-6 max-w-xl text-lg leading-relaxed text-white/80">
              IBT coursework, IBA training and an LSA certificate course — taught by practising behaviour analysts, from the
              team that places specialists in UAE schools and homes.
            </p>
            <div className="mt-9 flex flex-wrap gap-3">
              <Link href="#courses" className="btn btn-primary">
                Explore the courses <ArrowRight size={16} aria-hidden="true" />
              </Link>
              <Link href="/courses/ibt-training#enrol" className="btn btn-ghost text-white">
                Enrol in IBT
              </Link>
            </div>
            <a href={STUDENT_LOGIN_URL} className="mt-7 inline-flex items-center gap-2 text-sm text-white/70 hover:text-white">
              <LogIn size={15} aria-hidden="true" /> Already a student? Sign in to your course
            </a>
          </div>

          {/* The courses as a stack of cards — the catalogue at a glance. */}
          <div className="relative mx-auto w-full max-w-md lg:max-w-none">
            <div className="grid gap-4 lg:block">
              {COURSES.map((c, i) => (
                <Link
                  key={c.slug}
                  href={c.href}
                  className={`group flex items-center gap-4 rounded-2xl border border-white/15 bg-white/[0.07] p-4 backdrop-blur-md transition hover:border-champagne/60 hover:bg-white/[0.12] lg:relative lg:w-[88%] lg:p-5 ${
                    i === 0 ? "lg:ml-0" : i === 1 ? "lg:-mt-3 lg:ml-[12%]" : "lg:-mt-3 lg:ml-[5%]"
                  }`}
                  style={{ zIndex: 10 - i }}
                >
                  <span className={`flex h-14 w-14 shrink-0 items-center justify-center rounded-xl font-display text-lg font-semibold text-white ring-1 ring-white/25 ${c.band}`}>
                    {c.code}
                  </span>
                  <span className="min-w-0 flex-1">
                    <span className="flex flex-wrap items-center gap-2">
                      <span className="font-display text-xl text-white">{c.name}</span>
                    </span>
                    <span className="mt-0.5 block text-sm text-white/70">{c.tagline}</span>
                    <span className="mt-2 block">
                      <StatusPill course={c} onDark />
                    </span>
                  </span>
                  <ArrowRight size={18} className="shrink-0 text-champagne transition-transform group-hover:translate-x-1" aria-hidden="true" />
                </Link>
              ))}
            </div>
          </div>
        </div>

        <div className="border-t border-white/10">
          <dl className="shell grid grid-cols-2 gap-y-8 py-10 lg:grid-cols-4">
            {HOME_STATS.map((s) => (
              <div key={s.label} className="pr-4">
                <dt className="sr-only">{s.label}</dt>
                <dd>
                  <span className="block font-display text-3xl text-champagne md:text-4xl">{s.value}</span>
                  <span className="mt-1 block text-sm text-white/70">{s.label}</span>
                </dd>
              </div>
            ))}
          </dl>
        </div>
      </DarkBand>

      {/* Courses */}
      <section id="courses" className="shell scroll-mt-24 py-20 md:py-28">
        <div className="flex flex-wrap items-end justify-between gap-6">
          <SectionHead
            eyebrow="Courses"
            title="Three courses,"
            accent="one direction."
            intro="Start where you are: the classroom role, your first ABA credential, or the analyst level."
          />
          <Link href="/courses" className="flex items-center gap-2 font-semibold text-amethyst hover:underline">
            Compare all courses <ArrowRight size={16} aria-hidden="true" />
          </Link>
        </div>
        <div className="mt-12 grid gap-6 md:grid-cols-2 xl:grid-cols-4">
          {COURSES.map((c) => (
            <CourseCard key={c.slug} course={c} />
          ))}
        </div>
      </section>

      {/* Path */}
      <DarkBand>
        <div className="shell py-20 md:py-28">
          <SectionHead
            onDark
            eyebrow="Your path in ABA"
            title="From the classroom"
            accent="to the analyst's chair."
            intro="Most people climb it a step at a time. Each course stands on its own, and each one sets up the next."
          />
          <div className="mt-12">
            <CareerPath />
          </div>
          <p className="mt-8 max-w-3xl text-sm leading-relaxed text-white/60">
            IBT and IBA are credentials issued by IBAO, the International Behavior Analysis Organization, once you meet its
            requirements and pass its exam. Our courses give you the training and a certificate of completion.
          </p>
        </div>
      </DarkBand>

      {/* Why */}
      <section className="shell py-20 md:py-28">
        <div className="grid gap-12 lg:grid-cols-[1fr_1.1fr] lg:gap-16">
          <div className="lg:sticky lg:top-28 lg:self-start">
            <SectionHead eyebrow="Why train with us" title="Not a video library." accent="A teaching team." />
            <div data-reveal-media className="relative mt-10 aspect-[4/3] overflow-hidden rounded-[1.4rem] border border-hairline shadow-lift">
              <Image src="/images/audiences/schools.jpg" alt="" fill sizes="(min-width: 1024px) 520px, 100vw" className="object-cover" />
            </div>
          </div>
          <ul className="grid gap-5 sm:grid-cols-2 lg:grid-cols-1 xl:grid-cols-2">
            {WHY_ACADEMY.map((w, i) => {
              const Icon = WHY_ICONS[i];
              return (
                <li key={w.title} className="card p-7">
                  <span className="flex h-12 w-12 items-center justify-center rounded-xl bg-amethyst/10 text-amethyst">
                    <Icon size={22} aria-hidden="true" />
                  </span>
                  <h3 className="mt-5 text-xl">{w.title}</h3>
                  <p className="mt-2 leading-relaxed text-soft">{w.body}</p>
                </li>
              );
            })}
          </ul>
        </div>
      </section>

      {/* Portal */}
      <section className="bg-surface py-20 md:py-28">
        <div className="shell grid items-center gap-14 lg:grid-cols-[1fr_1.15fr]">
          <div>
            <SectionHead
              eyebrow="How you learn"
              title="Your course,"
              accent="in the student portal."
              intro="Everything happens in one place, on your phone or laptop — the same portal and the same login students already use."
            />
            <ul className="mt-8 space-y-5">
              {PORTAL_FEATURES.map((f) => (
                <li key={f.title} className="flex gap-4">
                  <span className="mt-2 h-2 w-2 shrink-0 rounded-full bg-bronze" aria-hidden="true" />
                  <span>
                    <span className="block font-semibold text-ink">{f.title}</span>
                    <span className="block text-soft">{f.body}</span>
                  </span>
                </li>
              ))}
            </ul>
            <a href={STUDENT_LOGIN_URL} className="btn btn-dark mt-9">
              <LogIn size={16} aria-hidden="true" /> Student login
            </a>
          </div>
          <PortalPreview />
        </div>
      </section>

      {/* People */}
      <section className="shell py-20 md:py-28">
        <div className="grid items-center gap-12 rounded-[1.6rem] border border-hairline bg-surface p-8 shadow-lift md:grid-cols-[auto_1fr] md:p-12">
          <div className="relative mx-auto h-44 w-44 overflow-hidden rounded-full ring-8 ring-paper md:h-56 md:w-56">
            <Image src="/images/sara-omar-michael.jpg" alt={IBT_DIRECTOR.name} fill sizes="224px" className="object-cover" />
          </div>
          <div>
            <p className="eyebrow">Who teaches</p>
            <h2 className="mt-3 text-3xl md:text-4xl">
              Taught by practising analysts, <span className="accent">run by our Program Director.</span>
            </h2>
            <p className="mt-4 leading-relaxed text-soft">{IBT_TRAINER_NOTE}</p>
            <div className="mt-6 border-t border-hairline pt-6">
              <p className="font-display text-xl text-ink">{IBT_DIRECTOR.name}</p>
              <p className="text-sm text-soft">{IBT_DIRECTOR.title}</p>
              <ul className="mt-3 flex flex-wrap gap-2">
                {IBT_DIRECTOR.credentials.map((c) => (
                  <li key={c} className="rounded-full bg-paper px-3 py-1 text-xs font-semibold text-ink ring-1 ring-hairline">
                    {c}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Certificates */}
      <section className="bg-surface py-20 md:py-28">
        <div className="shell grid items-center gap-14 lg:grid-cols-2">
          <CertificateArt className="mx-auto w-full max-w-md rotate-[-2deg] transition-transform duration-500 hover:rotate-0" />
          <div>
            <SectionHead
              eyebrow="Certificates"
              title="Something real"
              accent="to show for it."
              intro="Finish a course and you receive a Special Minds certificate of completion. Every IBT certificate carries a serial number an employer can check here, in seconds."
            />
            <div className="mt-8 max-w-md">
              <VerifyForm />
            </div>
          </div>
        </div>
      </section>

      {/* Guides: the questions people ask before they choose, answered in full. */}
      <div className="bg-surface">
        <RelatedGuides
          slugs={["ibt-vs-abat-vs-rbt", "how-to-become-an-ibt-in-the-uae", "what-is-abat", "can-i-become-an-rbt-or-bcba-in-the-uae", "iba-requirements", "aba-career-path-uae"]}
          title="Guides to IBT, ABAT and IBA"
        />
      </div>

      {/* FAQ */}
      <section className="shell py-20 md:py-28">
        <div className="grid gap-12 lg:grid-cols-[0.8fr_1.2fr]">
          <SectionHead eyebrow="Questions" title="Before you" accent="choose a course." />
          <FaqList items={ACADEMY_FAQS} />
        </div>
      </section>

      {/* Enquire */}
      <DarkBand>
        <div className="shell grid gap-12 py-20 md:py-28 lg:grid-cols-[1fr_1.1fr] lg:gap-16">
          <div>
            <SectionHead
              onDark
              eyebrow="Talk to us"
              title="Not sure where"
              accent="to start?"
              intro="Tell us where you are now and we'll point you to the right course — or answer anything first on WhatsApp."
            />
            <AcademyWhatsAppLink className="btn btn-primary mt-8" where="home-enquire">
              Message us on WhatsApp
            </AcademyWhatsAppLink>
          </div>
          <div className="rounded-[1.4rem] bg-surface p-6 text-ink shadow-lift md:p-8">
            <EnquiryForm />
          </div>
        </div>
      </DarkBand>
    </>
  );
}
