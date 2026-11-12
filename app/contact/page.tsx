import type { Metadata } from "next";
import { LogIn, Mail, MessageCircle, Phone } from "lucide-react";
import { DarkBand } from "@/components/academy/ui";
import { EnquiryForm } from "@/components/academy/EnquiryForm";
import { AcademyWhatsAppLink } from "@/components/academy/AcademyWhatsApp";
import { STUDENT_LOGIN_URL } from "@/lib/academy";
import { SITE } from "@/lib/site";

export const metadata: Metadata = {
  title: "Contact",
  description: "Ask about a course, register interest in the next intake, or get help with your student account.",
  alternates: { canonical: "/contact" },
  openGraph: { url: "/contact", title: "Contact | Special Minds Academy" },
};

export default function ContactPage() {
  return (
    <DarkBand>
      <div className="shell grid gap-12 pb-20 pt-14 md:pt-20 lg:grid-cols-[1fr_1.1fr] lg:gap-16">
        <div>
          <p className="eyebrow text-champagne">Contact</p>
          <h1 className="mt-4 text-[2.5rem] leading-[1.05] text-white sm:text-6xl">
            Ask us <span className="accent">anything.</span>
          </h1>
          <p className="mt-6 max-w-lg text-lg leading-relaxed text-white/80">
            Which course fits, how the portal works, when the next intake opens — send a message and a person replies.
          </p>
          <ul className="mt-10 grid gap-4">
            <li>
              <AcademyWhatsAppLink
                className="flex items-center gap-4 rounded-2xl border border-white/15 bg-white/[0.06] p-5 transition hover:border-champagne/60"
                where="contact"
              >
                <MessageCircle size={22} className="text-champagne" aria-hidden="true" />
                <span>
                  <span className="block font-semibold text-white">WhatsApp</span>
                  <span className="block text-sm text-white/70">{SITE.contact.whatsappDisplay} — the quickest way to reach us</span>
                </span>
              </AcademyWhatsAppLink>
            </li>
            <li>
              <a href={SITE.contact.phoneHref} className="flex items-center gap-4 rounded-2xl border border-white/15 bg-white/[0.06] p-5 transition hover:border-champagne/60">
                <Phone size={22} className="text-champagne" aria-hidden="true" />
                <span>
                  <span className="block font-semibold text-white">Call</span>
                  <span className="block text-sm text-white/70">{SITE.contact.phone}</span>
                </span>
              </a>
            </li>
            <li>
              <a href={`mailto:${SITE.contact.email}`} className="flex items-center gap-4 rounded-2xl border border-white/15 bg-white/[0.06] p-5 transition hover:border-champagne/60">
                <Mail size={22} className="text-champagne" aria-hidden="true" />
                <span>
                  <span className="block font-semibold text-white">Email</span>
                  <span className="block text-sm text-white/70">{SITE.contact.email}</span>
                </span>
              </a>
            </li>
            <li>
              <a href={STUDENT_LOGIN_URL} className="flex items-center gap-4 rounded-2xl border border-white/15 bg-white/[0.06] p-5 transition hover:border-champagne/60">
                <LogIn size={22} className="text-champagne" aria-hidden="true" />
                <span>
                  <span className="block font-semibold text-white">Already a student?</span>
                  <span className="block text-sm text-white/70">Sign in to your course on specialminds.ae</span>
                </span>
              </a>
            </li>
          </ul>
        </div>
        <div className="self-start rounded-[1.4rem] bg-surface p-6 text-ink shadow-lift md:p-8">
          <p className="font-display text-2xl text-ink">Send us a message</p>
          <p className="mb-6 mt-1 text-sm text-soft">We&apos;ll reply on WhatsApp or email.</p>
          <EnquiryForm />
        </div>
      </div>
    </DarkBand>
  );
}
