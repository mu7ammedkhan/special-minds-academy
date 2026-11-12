import Link from "next/link";
import { ArrowRight, Award, CheckCircle2, Lock, MessageSquare, PlayCircle } from "lucide-react";
import { CAREER_PATH } from "@/lib/academy";

/** LSA course → IBT → IBA, as a ladder you can click into. */
export function CareerPath() {
  return (
    <ol className="grid gap-4 md:grid-cols-3 md:gap-0">
      {CAREER_PATH.map((s, i) => (
        <li key={s.step} className="relative md:pr-6">
          {i < CAREER_PATH.length - 1 && (
            <span aria-hidden="true" className="absolute left-[calc(100%-1.5rem)] top-9 hidden h-px w-6 bg-champagne/50 md:block" />
          )}
          <Link
            href={s.href}
            className="group flex h-full flex-col rounded-2xl border border-white/15 bg-white/[0.06] p-6 backdrop-blur-sm transition-colors hover:border-champagne/60 hover:bg-white/[0.1]"
          >
            <span className="flex items-center justify-between">
              <span className="font-display text-4xl text-champagne">{String(i + 1).padStart(2, "0")}</span>
              <span className="rounded-full bg-white/10 px-3 py-1 text-[0.68rem] font-semibold uppercase tracking-wider text-white/85">{s.tag}</span>
            </span>
            <span className="mt-6 font-display text-2xl text-white">{s.step}</span>
            <span className="mt-2 text-sm leading-relaxed text-white/75">{s.body}</span>
            <span className="mt-auto flex items-center gap-1.5 pt-5 text-sm font-semibold text-champagne">
              Explore <ArrowRight size={15} className="transition-transform group-hover:translate-x-1" aria-hidden="true" />
            </span>
          </Link>
        </li>
      ))}
    </ol>
  );
}

/**
 * A drawing of the student portal, not a screenshot: the real one is behind a
 * login and full of a real student's progress. Every element in it is a
 * feature that exists (docs/IBT_PORTAL.md) — lessons unlocking in order,
 * coverage, the question box, the certificate.
 */
export function PortalPreview() {
  const lessons = [
    { t: "Behavioural basics", d: "18 min", s: "done" },
    { t: "Data collection", d: "24 min", s: "done" },
    { t: "Teaching skills", d: "31 min", s: "now" },
    { t: "Challenging behaviours", d: "27 min", s: "locked" },
  ] as const;
  return (
    <div aria-hidden="true" className="rounded-[1.4rem] border border-hairline bg-surface p-2 shadow-[0_30px_70px_rgba(34,26,51,0.18)]">
      <div className="flex items-center gap-1.5 px-3 py-2">
        <span className="h-2.5 w-2.5 rounded-full bg-hairline" />
        <span className="h-2.5 w-2.5 rounded-full bg-hairline" />
        <span className="h-2.5 w-2.5 rounded-full bg-hairline" />
        <span className="ml-3 truncate rounded-full bg-paper px-3 py-0.5 text-[0.65rem] text-soft">specialminds.ae/portal/training</span>
      </div>
      <div className="grid gap-2 rounded-2xl bg-paper p-3 sm:grid-cols-[1.35fr_1fr]">
        <div className="overflow-hidden rounded-xl bg-amethyst-deep">
          <div className="relative flex aspect-video items-center justify-center bg-gradient-to-br from-amethyst to-amethyst-deep">
            <PlayCircle size={46} strokeWidth={1.3} className="text-champagne" />
            <span className="absolute bottom-2 left-3 rounded bg-black/40 px-1.5 py-0.5 text-[0.6rem] text-white">CC</span>
            <span className="absolute inset-x-3 bottom-8 h-1 rounded-full bg-white/20">
              <span className="block h-1 w-[62%] rounded-full bg-champagne" />
            </span>
          </div>
          <div className="space-y-1.5 p-3">
            <p className="text-[0.7rem] font-semibold text-white">Module 5 · Teaching skills</p>
            <p className="flex items-center gap-1.5 text-[0.62rem] text-white/70">
              <MessageSquare size={11} /> Ask a question on this lesson
            </p>
          </div>
        </div>
        <div className="rounded-xl bg-surface p-3">
          <p className="text-[0.62rem] font-semibold uppercase tracking-wider text-soft">Your course</p>
          <p className="mt-1 font-display text-2xl text-ink">48%</p>
          <span className="mt-1 block h-1.5 rounded-full bg-paper">
            <span className="block h-1.5 w-[48%] rounded-full bg-amethyst" />
          </span>
          <ul className="mt-3 space-y-1.5">
            {lessons.map((l) => (
              <li key={l.t} className={`flex items-center gap-2 rounded-lg px-2 py-1.5 text-[0.66rem] ${l.s === "now" ? "bg-amethyst/10" : ""}`}>
                {l.s === "done" ? (
                  <CheckCircle2 size={13} className="shrink-0 text-bronze" />
                ) : l.s === "locked" ? (
                  <Lock size={12} className="shrink-0 text-soft" />
                ) : (
                  <PlayCircle size={13} className="shrink-0 text-amethyst" />
                )}
                <span className={`min-w-0 flex-1 truncate ${l.s === "locked" ? "text-soft" : "text-ink"}`}>{l.t}</span>
                <span className="text-soft">{l.d}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}

/**
 * Illustrative only: no real name, serial or signature. It shows the shape of
 * what a student receives, not a document anyone was issued.
 */
const IBT_CERT_META = [
  { value: "40 hours", label: "Coursework" },
  { value: "Online", label: "Format" },
  { value: "SM-IBT-····", label: "Serial" },
];

export function CertificateArt({
  course = "IBT Training",
  meta = IBT_CERT_META,
  className = "",
}: {
  course?: string;
  meta?: { value: string; label: string }[];
  className?: string;
}) {
  return (
    <div aria-hidden="true" className={`relative rounded-[1.4rem] bg-gradient-to-br from-champagne via-[#efe4cf] to-bronze p-[3px] shadow-[0_30px_70px_rgba(34,26,51,0.25)] ${className}`}>
      <div className="relative overflow-hidden rounded-[1.25rem] bg-surface px-7 py-8">
        <div className="pointer-events-none absolute inset-3 rounded-2xl border border-champagne/60" />
        <div className="relative flex items-start justify-between">
          <div>
            <p className="text-[0.62rem] font-bold uppercase tracking-[0.2em] text-amethyst">Special Minds</p>
            <p className="font-display text-sm italic text-ink">Academy</p>
          </div>
          <span className="flex h-12 w-12 items-center justify-center rounded-full bg-gradient-to-br from-champagne to-bronze text-amethyst-deep ring-4 ring-champagne/30">
            <Award size={22} strokeWidth={1.6} />
          </span>
        </div>
        <p className="relative mt-7 text-[0.62rem] font-semibold uppercase tracking-[0.18em] text-bronze">Certificate of completion</p>
        <p className="relative mt-1 font-display text-2xl leading-tight text-ink">{course}</p>
        <p className="relative mt-5 text-[0.6rem] uppercase tracking-wider text-soft">Awarded to</p>
        <p className="relative font-display text-xl italic text-ink">Your name here</p>
        <div className="relative mt-6 grid grid-cols-3 gap-3 border-t border-hairline pt-4 text-[0.6rem]">
          {meta.map((m) => (
            <div key={m.label}>
              <p className="font-semibold text-ink">{m.value}</p>
              <p className="text-soft">{m.label}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
