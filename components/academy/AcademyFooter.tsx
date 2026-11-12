import Link from "next/link";
import { ArrowUpRight, Mail, MessageCircle, Phone } from "lucide-react";
import { AcademyLogo } from "@/components/academy/AcademyLogo";
import { ACADEMY, ACADEMY_WHATSAPP, COURSES, STUDENT_LOGIN_URL } from "@/lib/academy";
import { MAIN_SITE_URL } from "@/lib/urls";
import { LEGAL, SITE } from "@/lib/site";

export function AcademyFooter() {
  return (
    <footer className="on-dark bg-amethyst-deep text-white">
      <div className="shell grid gap-12 py-16 md:grid-cols-2 lg:grid-cols-[1.4fr_1fr_1fr_1.2fr] lg:gap-10">
        <div>
          <AcademyLogo onDark />
          <p className="mt-5 max-w-xs text-sm leading-relaxed text-white/75">{ACADEMY.tagline}</p>
          <a
            href={MAIN_SITE_URL}
            className="mt-6 inline-flex items-center gap-1.5 text-sm font-semibold text-champagne hover:underline"
          >
            Part of Special Minds <ArrowUpRight size={15} aria-hidden="true" />
          </a>
        </div>

        <div>
          <p className="eyebrow text-champagne">Courses</p>
          <ul className="mt-4 space-y-2.5 text-sm">
            {COURSES.map((c) => (
              <li key={c.slug}>
                <Link href={c.href} className="footer-link text-white/85 hover:text-white">{c.name}</Link>
              </li>
            ))}
            <li>
              <Link href="/courses" className="footer-link text-white/85 hover:text-white">Compare courses</Link>
            </li>
            <li>
              <Link href="/training" className="footer-link text-white/85 hover:text-white">Supervision and workshops</Link>
            </li>
          </ul>
        </div>

        <div>
          <p className="eyebrow text-champagne">Academy</p>
          <ul className="mt-4 space-y-2.5 text-sm">
            <li><a href={STUDENT_LOGIN_URL} className="footer-link text-white/85 hover:text-white">Student login</a></li>
            <li><Link href="/guides" className="footer-link text-white/85 hover:text-white">Guides</Link></li>
            <li><Link href="/glossary" className="footer-link text-white/85 hover:text-white">ABA glossary</Link></li>
            <li><Link href="/certificates" className="footer-link text-white/85 hover:text-white">Verify a certificate</Link></li>
            <li><Link href="/about" className="footer-link text-white/85 hover:text-white">About the academy</Link></li>
            <li><Link href="/contact" className="footer-link text-white/85 hover:text-white">Contact</Link></li>
          </ul>
        </div>

        <div>
          <p className="eyebrow text-champagne">Talk to us</p>
          <ul className="mt-4 space-y-3 text-sm">
            <li>
              <a href={ACADEMY_WHATSAPP} target="_blank" rel="noopener" className="flex items-center gap-2.5 text-white/85 hover:text-white">
                <MessageCircle size={16} className="text-champagne" aria-hidden="true" /> WhatsApp {SITE.contact.whatsappDisplay}
              </a>
            </li>
            <li>
              <a href={SITE.contact.phoneHref} className="flex items-center gap-2.5 text-white/85 hover:text-white">
                <Phone size={16} className="text-champagne" aria-hidden="true" /> {SITE.contact.phone}
              </a>
            </li>
            <li>
              <a href={`mailto:${SITE.contact.email}`} className="flex items-center gap-2.5 break-all text-white/85 hover:text-white">
                <Mail size={16} className="shrink-0 text-champagne" aria-hidden="true" /> {SITE.contact.email}
              </a>
            </li>
          </ul>
        </div>
      </div>

      <div className="border-t border-white/10">
        <div className="shell flex flex-col gap-2 py-6 text-xs text-white/60 md:flex-row md:items-center md:justify-between">
          <p>© {new Date().getFullYear()} {ACADEMY.name}. Operated by {LEGAL.entity}, licensed by {LEGAL.authorityShort}.</p>
          <p>IBT and IBA are credentials of IBAO, the International Behavior Analysis Organization.</p>
        </div>
      </div>
    </footer>
  );
}
