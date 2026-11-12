"use client";
import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import { usePathname } from "next/navigation";
import { ChevronDown, LogIn, Menu, X } from "lucide-react";
import { AcademyLogo } from "@/components/academy/AcademyLogo";
import { COURSES, STUDENT_LOGIN_URL } from "@/lib/academy";

// `wide`: only in the desktop bar from xl up. At lg the bar has room for four
// links beside the logo and the sign-in cluster, not five; About stays in the
// mobile menu and the footer.
const LINKS: { href: string; label: string; wide?: boolean }[] = [
  { href: "/guides", label: "Guides" },
  { href: "/certificates", label: "Certificates" },
  { href: "/about", label: "About", wide: true },
  { href: "/contact", label: "Contact" },
];

// On the academy domain the address bar reads /courses/...; served straight
// from the route tree (a preview, a test) it reads /academy/courses/....
const strip = (p: string) => p.replace(/^\/academy(?=\/|$)/, "") || "/";

export function AcademyHeader() {
  const pathname = strip(usePathname());
  const [menuOpen, setMenuOpen] = useState(false);
  const [coursesOpen, setCoursesOpen] = useState(false);
  const coursesRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    setMenuOpen(false);
    setCoursesOpen(false);
  }, [pathname]);

  useEffect(() => {
    if (!coursesOpen && !menuOpen) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        setCoursesOpen(false);
        setMenuOpen(false);
      }
    };
    const onClick = (e: MouseEvent) => {
      if (coursesRef.current && !coursesRef.current.contains(e.target as Node)) setCoursesOpen(false);
    };
    document.addEventListener("keydown", onKey);
    document.addEventListener("click", onClick);
    return () => {
      document.removeEventListener("keydown", onKey);
      document.removeEventListener("click", onClick);
    };
  }, [coursesOpen, menuOpen]);

  // The phone menu covers the page; the page shouldn't scroll underneath it.
  useEffect(() => {
    document.documentElement.style.overflow = menuOpen ? "hidden" : "";
    return () => {
      document.documentElement.style.overflow = "";
    };
  }, [menuOpen]);

  const active = (href: string) => pathname === href || pathname.startsWith(`${href}/`);

  return (
    <header className="sticky top-0 z-50 border-b border-hairline bg-paper/90 backdrop-blur-md">
      <div className="shell flex h-[4.5rem] items-center justify-between gap-6">
        <Link href="/" className="shrink-0" aria-label="Special Minds Academy home">
          <AcademyLogo />
        </Link>

        <nav aria-label="Academy" className="hidden items-center gap-1 lg:flex">
          <div ref={coursesRef} className="relative" onMouseLeave={() => setCoursesOpen(false)}>
            <button
              type="button"
              aria-expanded={coursesOpen}
              aria-controls="academy-courses-menu"
              onClick={() => setCoursesOpen((o) => !o)}
              onMouseEnter={() => setCoursesOpen(true)}
              className={`flex items-center gap-1 rounded-full px-4 py-2 text-[0.95rem] font-medium transition-colors hover:text-amethyst ${
                active("/courses") ? "text-amethyst" : "text-ink"
              }`}
            >
              Courses <ChevronDown size={16} className={`transition-transform ${coursesOpen ? "rotate-180" : ""}`} aria-hidden="true" />
            </button>
            {coursesOpen && (
              <div id="academy-courses-menu" className="absolute left-1/2 top-full w-[26rem] -translate-x-1/2 pt-3">
                <div className="rounded-2xl border border-hairline bg-surface p-2 shadow-[0_24px_60px_rgba(34,26,51,0.16)]">
                  {COURSES.map((c) => (
                    <Link
                      key={c.slug}
                      href={c.href}
                      className="flex items-start gap-4 rounded-xl p-3 transition-colors hover:bg-paper"
                    >
                      <span className={`mt-0.5 flex h-11 w-11 shrink-0 items-center justify-center rounded-lg font-display text-sm font-semibold text-white ${c.band}`}>
                        {c.code}
                      </span>
                      <span className="min-w-0">
                        <span className="flex items-center gap-2 font-semibold text-ink">
                          {c.name}
                          <span className="text-[0.65rem] font-semibold uppercase tracking-wider text-soft">{c.level}</span>
                        </span>
                        <span className="mt-0.5 block text-sm leading-snug text-soft">{c.forWho}</span>
                      </span>
                    </Link>
                  ))}
                  <div className="mt-1 flex flex-wrap gap-x-4 px-3 py-2.5 text-sm font-semibold text-bronze">
                    <Link href="/courses" className="hover:underline">Compare all courses →</Link>
                    <Link href="/training" className="hover:underline">Supervision, exam prep and workshops →</Link>
                  </div>
                </div>
              </div>
            )}
          </div>
          {LINKS.map((l) => (
            <Link
              key={l.href}
              href={l.href}
              className={`rounded-full px-4 py-2 text-[0.95rem] font-medium transition-colors hover:text-amethyst ${
                active(l.href) ? "text-amethyst" : "text-ink"
              } ${l.wide ? "hidden xl:inline-flex" : ""}`}
            >
              {l.label}
            </Link>
          ))}
        </nav>

        <div className="hidden items-center gap-3 lg:flex">
          <a href={STUDENT_LOGIN_URL} className="flex items-center gap-2 rounded-full px-3 py-2 text-[0.95rem] font-medium text-ink hover:text-amethyst">
            <LogIn size={17} aria-hidden="true" /> Student login
          </a>
          <Link href="/courses/ibt-training#enrol" className="btn btn-dark px-5 py-2.5 text-xs">
            Enrol in IBT
          </Link>
        </div>

        <button
          type="button"
          className="flex h-11 w-11 items-center justify-center rounded-full border border-hairline bg-surface text-ink lg:hidden"
          aria-expanded={menuOpen}
          aria-controls="academy-mobile-menu"
          onClick={() => setMenuOpen((o) => !o)}
        >
          {menuOpen ? <X size={20} aria-hidden="true" /> : <Menu size={20} aria-hidden="true" />}
          <span className="sr-only">{menuOpen ? "Close menu" : "Open menu"}</span>
        </button>
      </div>

      {menuOpen && (
        <div id="academy-mobile-menu" className="h-[calc(100dvh-4.5rem)] overflow-y-auto border-t border-hairline bg-paper lg:hidden">
          <nav aria-label="Academy" className="shell grid gap-2 py-6">
            <p className="eyebrow mb-1">Courses</p>
            {COURSES.map((c) => (
              <Link key={c.slug} href={c.href} className="flex items-center gap-3 rounded-xl border border-hairline bg-surface p-3">
                <span className={`flex h-10 w-10 shrink-0 items-center justify-center rounded-lg font-display text-sm font-semibold text-white ${c.band}`}>
                  {c.code}
                </span>
                <span>
                  <span className="block font-semibold text-ink">{c.name}</span>
                  <span className="block text-xs text-soft">{c.level} · {c.statusLabel}</span>
                </span>
              </Link>
            ))}
            <Link href="/courses" className="px-1 py-2 text-sm font-semibold text-bronze">Compare all courses →</Link>
            <Link href="/training" className="px-1 py-2 text-sm font-semibold text-bronze">Supervision, exam prep and workshops →</Link>
            <div className="mt-2 grid border-t border-hairline pt-2">
              {LINKS.map((l) => (
                <Link key={l.href} href={l.href} className="border-b border-hairline px-1 py-3.5 text-lg font-medium text-ink">
                  {l.label}
                </Link>
              ))}
            </div>
            <div className="mt-4 grid gap-3">
              <Link href="/courses/ibt-training#enrol" className="btn btn-dark justify-center">Enrol in IBT</Link>
              <a href={STUDENT_LOGIN_URL} className="btn btn-ghost justify-center text-ink">
                <LogIn size={16} aria-hidden="true" /> Student login
              </a>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
}
