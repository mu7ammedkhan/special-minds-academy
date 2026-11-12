import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { ArrowRight, BadgeCheck, Clock, Laptop, MessageCircle, UserCheck } from "lucide-react";
import { JsonLd } from "@/components/JsonLd";
import { CheckList, DarkBand, FaqList, SectionHead } from "@/components/academy/ui";
import { RelatedGuides } from "@/components/academy/RelatedGuides";
import { CertificateArt, PortalPreview } from "@/components/academy/Visuals";
import { EnrolSection } from "@/components/academy/EnrolSection";
import { AcademyWhatsAppLink } from "@/components/academy/AcademyWhatsApp";
import { ACADEMY, IBT_AFTER_ENROL, IBT_ROUTE, IBT_UAE_FAQS } from "@/lib/academy";
import { IBT_COHORT_1, IBT_DIRECTOR, IBT_FAQS, IBT_FIT, IBT_TRAINER_NOTE, IBT_VALUE_STACK, IBT_VS_ABAT } from "@/lib/ibt";
import { DEPOSIT_AED, PATHWAY_CURRICULUM, PATHWAY_FAQS } from "@/lib/ibt-pathway";
import { buildFaqSchema } from "@/lib/seo";

const PRICE = `AED ${IBT_COHORT_1.coursePriceAed.toLocaleString("en-US")}`;

export const metadata: Metadata = {
  title: "IBT Training — 40-Hour IBT Coursework, Online",
  description: `The ${IBT_COHORT_1.courseHours}-hour International Behavior Therapist (IBT) coursework, 100% online and taught by a practising BCBA, IBA or QBA. ${PRICE}, or reserve with AED ${DEPOSIT_AED}.`,
  keywords: ["IBT course UAE", "IBT training Dubai", "IBT course online", "International Behavior Therapist course", "IBT certification Abu Dhabi", "40 hour IBT training"],
  alternates: { canonical: "/courses/ibt-training" },
  openGraph: { url: "/courses/ibt-training", title: "IBT Training | Special Minds Academy" },
};

// Both landing pages' questions, without the two that only made sense on one
// of them (the cohort page's "no instalments" answer is wrong now that the
// deposit sits on the same page). Order: what it is, how it runs, money, fit.
const FAQS = [
  IBT_FAQS[0], // coursework vs full certification
  PATHWAY_FAQS[0], // accredited?
  PATHWAY_FAQS[4], // schedule and format (live or recorded)
  PATHWAY_FAQS[5], // who teaches
  {
    // The two success pages' instructions, in one answer: the course unlocks
    // itself when the account's email matches the payment's (docs/IBT_PORTAL.md).
    q: "What happens after I pay?",
    a: "Paid in full: create your student account at specialminds.ae with the same email you paid with, and the course unlocks straight away. Reserved with a deposit: we'll be in touch on WhatsApp or email about the balance, and the course opens as soon as it's settled.",
  },
  PATHWAY_FAQS[2], // deposit refundable
  PATHWAY_FAQS[3], // balance, when due
  IBT_FAQS[3], // full fee refundable
  IBT_FAQS[6], // experience needed
  IBT_FAQS[7], // already hold RBT
  PATHWAY_FAQS[1], // job guaranteed?
  ...IBT_UAE_FAQS,
];

const courseSchema = {
  "@context": "https://schema.org",
  "@type": "Course",
  name: "IBT Training — International Behavior Therapist coursework",
  description: `The ${IBT_COHORT_1.courseHours}-hour coursework requirement for IBAO's International Behavior Therapist credential, taught online by a practising behaviour analyst.`,
  provider: { "@type": "EducationalOrganization", name: ACADEMY.name, url: ACADEMY.url },
  offers: { "@type": "Offer", price: IBT_COHORT_1.coursePriceAed, priceCurrency: "AED", category: "Paid", availability: "https://schema.org/InStock" },
  hasCourseInstance: { "@type": "CourseInstance", courseMode: "Online", courseWorkload: `PT${IBT_COHORT_1.courseHours}H` },
};

const HERO_FACTS = [
  { icon: Clock, label: `${IBT_COHORT_1.courseHours} hours`, sub: "the full coursework requirement" },
  { icon: Laptop, label: "100% online", sub: "live or recorded" },
  { icon: UserCheck, label: "BCBA, IBA or QBA", sub: "teaches every session" },
  { icon: BadgeCheck, label: "Certificate", sub: "verifiable online" },
];

export default function IbtCoursePage() {
  return (
    <>
      <JsonLd data={courseSchema} />
      <JsonLd data={buildFaqSchema(FAQS)} />

      <DarkBand>
        <div className="shell grid items-center gap-14 pb-16 pt-14 md:pt-20 lg:grid-cols-[1.2fr_1fr] lg:pb-24">
          <div>
            <nav aria-label="Breadcrumb" className="text-sm text-white/60">
              <Link href="/" className="hover:text-white">Academy</Link> <span aria-hidden="true">/</span>{" "}
              <Link href="/courses" className="hover:text-white">Courses</Link> <span aria-hidden="true">/</span>{" "}
              <span className="text-white/85">IBT Training</span>
            </nav>
            <p className="eyebrow mt-8 text-champagne">IBT Training · Entry level · Enrolling now</p>
            <h1 className="mt-4 text-[2.5rem] leading-[1.05] text-white sm:text-6xl">
              Your first ABA credential <span className="accent">starts here.</span>
            </h1>
            <p className="mt-6 max-w-xl text-lg leading-relaxed text-white/80">
              The {IBT_COHORT_1.courseHours}-hour coursework IBAO requires for the International Behavior Therapist credential —
              online, at your own pace, taught by a practising behaviour analyst.
            </p>
            <div className="mt-9 flex flex-wrap items-center gap-3">
              <Link href="#enrol" className="btn btn-primary">
                Enrol — {PRICE} <ArrowRight size={16} aria-hidden="true" />
              </Link>
              <Link href="?plan=deposit#enrol" className="btn btn-ghost text-white">
                Or reserve with AED {DEPOSIT_AED}
              </Link>
            </div>
          </div>
          <div className="relative">
            <div className="relative aspect-[4/3] overflow-hidden rounded-[1.6rem] border border-white/15 shadow-2xl">
              <Image
                src="/images/conditions/learning-difficulties-dyslexia-support-dubai.jpg"
                alt=""
                fill
                priority
                sizes="(min-width: 1024px) 520px, 100vw"
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-amethyst-deep/70 to-transparent" />
            </div>
            <div className="absolute -bottom-6 left-4 right-4 rounded-2xl border border-white/15 bg-amethyst-deep/85 p-4 backdrop-blur-md sm:left-auto sm:right-[-1rem] sm:w-72">
              <p className="text-xs uppercase tracking-wider text-white/60">Tuition</p>
              <p className="font-display text-3xl text-champagne">{PRICE}</p>
              <p className="text-xs text-white/70">or AED {DEPOSIT_AED} today to hold your seat</p>
            </div>
          </div>
        </div>
        <div className="border-t border-white/10">
          <dl className="shell grid grid-cols-2 gap-6 py-8 lg:grid-cols-4">
            {HERO_FACTS.map(({ icon: Icon, label, sub }) => (
              <div key={label} className="flex items-start gap-3">
                <Icon size={20} className="mt-1 shrink-0 text-champagne" aria-hidden="true" />
                <div>
                  <dt className="font-semibold text-white">{label}</dt>
                  <dd className="text-sm text-white/65">{sub}</dd>
                </div>
              </div>
            ))}
          </dl>
        </div>
      </DarkBand>

      {/* What the course is, and the route to the credential */}
      <section className="shell py-20 md:py-28">
        <div className="grid gap-14 lg:grid-cols-[1fr_1.2fr]">
          <div>
            <SectionHead
              eyebrow="What you're signing up for"
              title="The coursework now,"
              accent="the credential when you're ready."
              intro="IBT is issued by IBAO, the International Behavior Analysis Organization. It takes three things: the 40-hour coursework, 300 hours of supervised practice, and IBAO's exam. This course is the first, done properly."
            />
            <div className="mt-8">
              <CheckList items={IBT_VALUE_STACK} />
            </div>
          </div>
          <ol className="relative grid gap-4">
            {IBT_ROUTE.map((s, i) => (
              <li
                key={s.title}
                className={`flex gap-5 rounded-2xl border p-6 ${s.ours ? "border-amethyst bg-surface shadow-lift" : "border-hairline bg-surface/60"}`}
              >
                <span
                  className={`flex h-11 w-11 shrink-0 items-center justify-center rounded-full font-display text-lg ${
                    s.ours ? "bg-amethyst text-champagne" : "bg-paper text-soft ring-1 ring-hairline"
                  }`}
                >
                  {i + 1}
                </span>
                <div>
                  <p className="flex flex-wrap items-center gap-2 text-lg font-semibold text-ink">
                    {s.title}
                    {s.ours && (
                      <span className="rounded-full bg-amethyst px-2.5 py-0.5 text-[0.65rem] font-semibold uppercase tracking-wider text-white">
                        This course
                      </span>
                    )}
                  </p>
                  <p className="mt-1 text-soft">{s.body}</p>
                </div>
              </li>
            ))}
          </ol>
        </div>
      </section>

      {/* Curriculum */}
      <section className="bg-surface py-20 md:py-28">
        <div className="shell">
          <SectionHead
            eyebrow="Curriculum"
            title="The seven areas"
            accent="IBAO requires."
            intro="Every IBT coursework provider has to cover these seven topic areas, set out in IBAO's published IBT requirements."
          />
          <ol className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {PATHWAY_CURRICULUM.map((m, i) => (
              <li key={m.title} className="card p-6">
                <span className="font-display text-3xl text-bronze">{String(i + 1).padStart(2, "0")}</span>
                <h3 className="mt-4 text-lg">{m.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-soft">{m.detail}</p>
              </li>
            ))}
            <li className="card flex flex-col justify-between bg-amethyst p-6 text-white">
              <p className="font-display text-xl leading-snug">
                Plus module quizzes and a final assessment, inside the student portal.
              </p>
              <Link href="#how-it-works" className="mt-6 flex items-center gap-2 text-sm font-semibold text-champagne">
                How the portal works <ArrowRight size={15} aria-hidden="true" />
              </Link>
            </li>
          </ol>
        </div>
      </section>

      {/* Portal */}
      <section id="how-it-works" className="shell scroll-mt-24 py-20 md:py-28">
        <div className="grid items-center gap-14 lg:grid-cols-[1.1fr_1fr]">
          <PortalPreview />
          <div>
            <SectionHead
              eyebrow="How it works"
              title="Learn at your pace,"
              accent="with a teacher behind it."
              intro={IBT_TRAINER_NOTE}
            />
            <ol className="mt-8 grid gap-4">
              {IBT_AFTER_ENROL.map((s, i) => (
                <li key={s.title} className="flex gap-4">
                  <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-amethyst/10 font-display text-amethyst">{i + 1}</span>
                  <span>
                    <span className="block font-semibold text-ink">{s.title}</span>
                    <span className="block text-soft">{s.body}</span>
                  </span>
                </li>
              ))}
            </ol>
          </div>
        </div>
      </section>

      {/* IBT vs ABAT */}
      <section className="bg-surface py-20 md:py-28">
        <div className="shell">
          <SectionHead
            eyebrow="IBT or ABAT?"
            title="Two good credentials."
            accent="Why we teach IBT."
            intro="How the two entry-level credentials compare, from IBAO's and QABA's own published requirements."
          />
          <div className="mt-10 overflow-x-auto rounded-2xl border border-hairline">
            <table className="w-full min-w-[640px] border-collapse text-left">
              <thead>
                <tr className="bg-paper text-sm">
                  <th scope="col" className="w-[34%] p-4 font-semibold text-soft"></th>
                  <th scope="col" className="p-4 font-display text-lg text-amethyst">IBT</th>
                  <th scope="col" className="p-4 font-display text-lg text-ink">ABAT</th>
                </tr>
              </thead>
              <tbody>
                {IBT_VS_ABAT.rows.map((r) => (
                  <tr key={r.label} className="border-t border-hairline align-top">
                    <th scope="row" className="p-4 text-sm font-semibold text-ink">{r.label}</th>
                    <td className="bg-amethyst/[0.04] p-4 text-sm text-ink">{r.ibt}</td>
                    <td className="p-4 text-sm text-soft">{r.abat}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="mt-5 max-w-3xl text-sm leading-relaxed text-soft">{IBT_VS_ABAT.closing}</p>
        </div>
      </section>

      {/* Fit */}
      <section className="shell py-20 md:py-28">
        <SectionHead eyebrow="Is it for you?" title="Built for some people," accent="honestly not everyone." />
        <div className="mt-10 grid gap-6 md:grid-cols-2">
          <div className="rounded-2xl border border-hairline bg-surface p-7">
            <p className="font-display text-xl text-ink">A good fit if…</p>
            <div className="mt-5">
              <CheckList items={IBT_FIT.goodFit} />
            </div>
          </div>
          <div className="rounded-2xl border border-hairline bg-paper p-7">
            <p className="font-display text-xl text-ink">Probably not, if…</p>
            <ul className="mt-5 space-y-3">
              {IBT_FIT.notFit.map((n) => (
                <li key={n} className="flex items-start gap-3 text-soft">
                  <span className="mt-2 h-1.5 w-3 shrink-0 rounded-full bg-field" aria-hidden="true" />
                  {n}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* Enrol */}
      <section id="enrol" className="scroll-mt-20 bg-gradient-to-b from-paper to-[#efe9f7] py-20 md:py-28">
        <div className="shell">
          <SectionHead
            center
            eyebrow="Enrol"
            title="Choose how"
            accent="you'd like to pay."
            intro={`${PRICE} in full, or AED ${DEPOSIT_AED} today to hold your seat. Either way it's the same course.`}
          />
          <div className="mt-12">
            <EnrolSection />
          </div>
        </div>
      </section>

      {/* Certificate + director */}
      <section className="shell py-20 md:py-28">
        <div className="grid items-center gap-14 lg:grid-cols-2">
          <div>
            <SectionHead
              eyebrow="When you finish"
              title="A certificate"
              accent="employers can check."
              intro="Your certificate carries a serial number. Anyone can confirm it at specialminds.academy/certificates — or on specialminds.ae/verify, where earlier certificates point."
            />
            <div className="mt-8 flex items-center gap-4 rounded-2xl border border-hairline bg-surface p-5">
              <div className="relative h-16 w-16 shrink-0 overflow-hidden rounded-full">
                <Image src="/images/sara-omar-michael.jpg" alt="" fill sizes="64px" className="object-cover" />
              </div>
              <div>
                <p className="font-semibold text-ink">{IBT_DIRECTOR.name}</p>
                <p className="text-sm text-soft">{IBT_DIRECTOR.title} · {IBT_DIRECTOR.credentials.join(" · ")}</p>
              </div>
            </div>
          </div>
          <CertificateArt className="mx-auto w-full max-w-md rotate-2 transition-transform duration-500 hover:rotate-0" />
        </div>
      </section>

      {/* FAQ */}
      <section className="bg-surface py-20 md:py-28">
        <div className="shell grid gap-12 lg:grid-cols-[0.8fr_1.2fr]">
          <div>
            <SectionHead eyebrow="Questions" title="Everything people" accent="ask before enrolling." />
            <AcademyWhatsAppLink className="btn btn-dark mt-8" where="ibt-faq">
              <MessageCircle size={16} aria-hidden="true" /> Ask us on WhatsApp
            </AcademyWhatsAppLink>
          </div>
          <FaqList items={FAQS} />
        </div>
      </section>

      {/* Closing */}
      <DarkBand>
        <div className="shell flex flex-col items-start justify-between gap-8 py-16 md:flex-row md:items-center">
          <div>
            <p className="font-display text-3xl text-white md:text-4xl">
              Ready for your first credential? <span className="accent">Start with the coursework.</span>
            </p>
            <p className="mt-2 text-white/70">{PRICE} in full, or AED {DEPOSIT_AED} to reserve.</p>
          </div>
          <Link href="#enrol" className="btn btn-primary shrink-0">
            Enrol now <ArrowRight size={16} aria-hidden="true" />
          </Link>
        </div>
      </DarkBand>
      <RelatedGuides slugs={["how-to-become-an-ibt-in-the-uae", "ibt-requirements", "ibt-vs-abat-vs-rbt"]} />
    </>
  );
}
