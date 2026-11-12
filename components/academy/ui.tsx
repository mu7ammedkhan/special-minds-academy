import Link from "next/link";
import Image from "next/image";
import type { ReactNode } from "react";
import { ArrowRight, Check, Plus } from "lucide-react";
import type { Course } from "@/lib/academy";
import type { FaqItem } from "@/lib/seo";
import { Knot } from "@/components/academy/Knot";

/** Eyebrow, heading with an italic accent, and an optional intro — the head of every section. */
export function SectionHead({
  eyebrow,
  title,
  accent,
  intro,
  center = false,
  onDark = false,
}: {
  eyebrow: string;
  title: string;
  accent?: string;
  intro?: ReactNode;
  center?: boolean;
  onDark?: boolean;
}) {
  return (
    <div className={center ? "mx-auto max-w-2xl text-center" : "max-w-2xl"}>
      <p className={`eyebrow ${onDark ? "text-champagne" : ""}`}>{eyebrow}</p>
      <h2 className={`mt-3 text-3xl md:text-[2.6rem] ${onDark ? "text-white" : ""}`}>
        {title}
        {accent && (
          <>
            {" "}
            <span className="accent">{accent}</span>
          </>
        )}
      </h2>
      {intro && <p className={`mt-4 text-[1.075rem] leading-[1.7] ${onDark ? "text-white/75" : "text-soft"}`}>{intro}</p>}
    </div>
  );
}

export function CheckList({ items, onDark = false }: { items: string[]; onDark?: boolean }) {
  return (
    <ul className="space-y-3">
      {items.map((item) => (
        <li key={item} className={`flex items-start gap-3 ${onDark ? "text-white/85" : "text-ink"}`}>
          <span
            className={`mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full ${
              onDark ? "bg-champagne text-amethyst-deep" : "bg-amethyst text-champagne"
            }`}
            aria-hidden="true"
          >
            <Check size={12} strokeWidth={3} />
          </span>
          <span className="leading-snug">{item}</span>
        </li>
      ))}
    </ul>
  );
}

/** Native <details>, so every answer is in the HTML and works without JavaScript. */
export function FaqList({ items }: { items: FaqItem[] }) {
  return (
    <div className="divide-y divide-hairline rounded-2xl border border-hairline bg-surface">
      {items.map((f) => (
        <details key={f.q} className="group px-5 py-1 md:px-7">
          <summary className="flex cursor-pointer list-none items-start justify-between gap-4 py-5 text-left font-semibold text-ink [&::-webkit-details-marker]:hidden">
            <span className="text-[1.05rem]">{f.q}</span>
            <Plus size={20} className="mt-0.5 shrink-0 text-bronze transition-transform duration-300 group-open:rotate-45" aria-hidden="true" />
          </summary>
          <p className="pb-6 pr-8 leading-relaxed text-soft">{f.a}</p>
        </details>
      ))}
    </div>
  );
}

export function StatusPill({ course, onDark = false }: { course: Course; onDark?: boolean }) {
  const open = course.status === "open";
  return (
    <span
      className={`inline-flex w-fit items-center gap-2 rounded-full px-3 py-1 text-[0.7rem] font-semibold uppercase tracking-wider ${
        open
          ? onDark
            ? "bg-champagne text-amethyst-deep"
            : "bg-amethyst/10 text-amethyst"
          : onDark
            ? "bg-white/10 text-white"
            : "bg-paper text-soft ring-1 ring-hairline"
      }`}
    >
      <span className={`h-1.5 w-1.5 rounded-full ${open ? "bg-emerald-500" : "bg-apricot"}`} aria-hidden="true" />
      {course.statusLabel}
    </span>
  );
}

/** A course on a grid: colour band and code, the essentials, one way in. */
export function CourseCard({ course }: { course: Course }) {
  return (
    <Link
      href={course.href}
      className="card group flex h-full flex-col overflow-hidden p-0 transition-transform duration-300 hover:-translate-y-1"
    >
      <div className="relative aspect-[16/9] overflow-hidden">
        <Image
          src={course.image}
          alt=""
          fill
          sizes="(min-width: 1024px) 380px, (min-width: 768px) 50vw, 100vw"
          className="object-cover transition-transform duration-700 group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-amethyst-deep/80 via-amethyst-deep/10 to-transparent" />
        <span className={`absolute bottom-4 left-5 flex h-14 w-14 items-center justify-center rounded-xl font-display text-lg font-semibold text-white shadow-lg ring-2 ring-white/30 ${course.band}`}>
          {course.code}
        </span>
        <span className="absolute right-4 top-4 rounded-full bg-paper/95 px-3 py-1 text-[0.68rem] font-semibold uppercase tracking-wider text-ink">
          {course.level}
        </span>
      </div>
      <div className="flex flex-1 flex-col p-6">
        <StatusPill course={course} />
        <h3 className="mt-4 text-2xl">{course.name}</h3>
        <p className="mt-1 text-sm font-medium text-bronze">{course.credential}</p>
        <p className="mt-3 leading-relaxed text-soft">{course.summary}</p>
        <dl className="mt-5 grid grid-cols-2 gap-x-4 gap-y-3 border-t border-hairline pt-5">
          {course.facts.map((f) => (
            <div key={f.label}>
              <dt className="text-[0.68rem] font-semibold uppercase tracking-wider text-soft">{f.label}</dt>
              <dd className="mt-0.5 text-sm font-semibold text-ink">{f.value}</dd>
            </div>
          ))}
        </dl>
        <span className="mt-auto flex items-center gap-2 pt-6 font-semibold text-amethyst">
          {course.cta} <ArrowRight size={16} className="transition-transform group-hover:translate-x-1" aria-hidden="true" />
        </span>
      </div>
    </Link>
  );
}

/**
 * The dark band behind the academy's heroes and feature sections. Deep
 * amethyst, one warm glow, and the Special Minds knot drawn large off the
 * right-hand edge: a faint ribbon at the logo's own weight, with a fine
 * champagne thread running down its middle that ties itself when the page
 * opens. The whole knot turns, very slowly, about its own centre, and fades out
 * on the side facing the copy so the thread never runs hard through text. With
 * reduced motion it simply sits there, fully drawn (the animation lives in
 * globals.css under .academy-knot).
 */
export function DarkBand({ children, className = "" }: { children: ReactNode; className?: string }) {
  return (
    <section className={`on-dark relative isolate overflow-hidden bg-amethyst-deep text-white ${className}`}>
      <div aria-hidden="true" className="absolute -right-40 -top-40 -z-10 h-[34rem] w-[34rem] rounded-full bg-champagne/[0.13] blur-[120px]" />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -right-56 top-1/2 -z-10 aspect-square w-[30rem] -translate-y-1/2 sm:-right-64 sm:w-[40rem] lg:-right-60 lg:w-[48rem]"
        style={{
          maskImage: "linear-gradient(to left, #000 55%, transparent 100%)",
          WebkitMaskImage: "linear-gradient(to left, #000 55%, transparent 100%)",
        }}
      >
        <div className="academy-knot absolute inset-0">
          <Knot className="absolute inset-0 h-full w-full text-champagne opacity-[0.07]" />
          <Knot draw strokeWidth={0.45} className="academy-knot-thread absolute inset-0 h-full w-full text-champagne opacity-50" />
        </div>
      </div>
      {children}
    </section>
  );
}
