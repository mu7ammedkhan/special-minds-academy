import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { ArrowRight, ArrowUpRight } from "lucide-react";
import { CheckList, DarkBand, SectionHead } from "@/components/academy/ui";
import { ACADEMY, WHY_ACADEMY } from "@/lib/academy";
import { MAIN_SITE_URL } from "@/lib/urls";
import { IBT_DIRECTOR, IBT_TRAINER_NOTE } from "@/lib/ibt";
import { LEGAL } from "@/lib/site";

export const metadata: Metadata = {
  title: "About the Academy",
  description:
    "Special Minds Academy is the training arm of Special Minds, which places LSAs, shadow teachers and therapists in UAE schools and homes under clinical supervision.",
  alternates: { canonical: "/about" },
  openGraph: { url: "/about", title: "About | Special Minds Academy" },
};

// The standards the academy holds itself to — the same rules lib/ibt.ts
// enforces on the IBT copy, said out loud.
const STANDARDS = [
  "We say who issues a credential. IBAO issues IBT and IBA; we provide training and a certificate of completion.",
  "We name the credential of whoever teaches: a practising BCBA, IBA or QBA.",
  "We don't promise jobs. Placement through Special Minds is real, best-effort work — never a guarantee.",
  "We don't publish a fee or a start date until it's confirmed.",
];

export default function AboutPage() {
  return (
    <>
      <DarkBand>
        <div className="shell grid items-center gap-14 pb-20 pt-14 md:pt-20 lg:grid-cols-[1.15fr_1fr]">
          <div>
            <p className="eyebrow text-champagne">About the academy</p>
            <h1 className="mt-4 text-[2.5rem] leading-[1.05] text-white sm:text-6xl">
              We train the people <span className="accent">we&apos;d want to place.</span>
            </h1>
            <p className="mt-6 max-w-xl text-lg leading-relaxed text-white/80">
              {ACADEMY.name} is the training arm of Special Minds — the team that places LSAs, shadow teachers and therapists in
              UAE schools and homes, and supervises them once they&apos;re there.
            </p>
            <a href={MAIN_SITE_URL} className="btn btn-ghost mt-9 text-white">
              Visit Special Minds <ArrowUpRight size={16} aria-hidden="true" />
            </a>
          </div>
          <div className="relative aspect-[4/3] overflow-hidden rounded-[1.6rem] border border-white/15 shadow-2xl">
            <Image src="/images/audiences/practitioners.jpg" alt="" fill priority sizes="(min-width: 1024px) 520px, 100vw" className="object-cover" />
          </div>
        </div>
      </DarkBand>

      <section className="shell py-20 md:py-28">
        <div className="grid gap-12 lg:grid-cols-2">
          <SectionHead
            eyebrow="Why an academy"
            title="Good placements start"
            accent="with good training."
            intro="Schools and families in the UAE ask us for specialists who already know the work. Teaching it ourselves is how we make sure they do — and it gives people a clear way into a career that's in demand."
          />
          <ul className="grid gap-5 sm:grid-cols-2">
            {WHY_ACADEMY.map((w) => (
              <li key={w.title} className="card p-6">
                <h2 className="text-lg">{w.title}</h2>
                <p className="mt-2 text-sm leading-relaxed text-soft">{w.body}</p>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="bg-surface py-20 md:py-28">
        <div className="shell grid items-center gap-12 md:grid-cols-[auto_1fr]">
          <div className="relative mx-auto h-48 w-48 overflow-hidden rounded-full ring-8 ring-paper md:h-60 md:w-60">
            <Image src="/images/sara-omar-michael.jpg" alt={IBT_DIRECTOR.name} fill sizes="240px" className="object-cover" />
          </div>
          <div>
            <p className="eyebrow">People</p>
            <h2 className="mt-3 text-3xl md:text-4xl">{IBT_DIRECTOR.name}</h2>
            <p className="mt-1 text-soft">{IBT_DIRECTOR.title}</p>
            <ul className="mt-4 flex flex-wrap gap-2">
              {IBT_DIRECTOR.credentials.map((c) => (
                <li key={c} className="rounded-full bg-paper px-3 py-1 text-xs font-semibold text-ink ring-1 ring-hairline">{c}</li>
              ))}
            </ul>
            <p className="mt-6 max-w-2xl leading-relaxed text-soft">{IBT_TRAINER_NOTE}</p>
          </div>
        </div>
      </section>

      <section className="shell py-20 md:py-28">
        <div className="grid gap-12 lg:grid-cols-2">
          <SectionHead eyebrow="Our standards" title="What we will" accent="and won't say." />
          <div className="rounded-2xl border border-hairline bg-surface p-7 md:p-9">
            <CheckList items={STANDARDS} />
          </div>
        </div>
        <p className="mt-12 text-sm text-soft">
          {ACADEMY.name} is operated by {LEGAL.entity}, licensed by the {LEGAL.authority}, part of {LEGAL.group}.
        </p>
        <Link href="/courses" className="btn btn-dark mt-8">
          See the courses <ArrowRight size={16} aria-hidden="true" />
        </Link>
      </section>
    </>
  );
}
