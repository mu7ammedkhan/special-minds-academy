import type { Metadata } from "next";
import Link from "next/link";
import { ShieldCheck, Printer, Search, Ban } from "lucide-react";
import { DarkBand, SectionHead } from "@/components/academy/ui";
import { CertificateArt } from "@/components/academy/Visuals";
import { VerifyForm } from "@/components/academy/VerifyForm";

export const metadata: Metadata = {
  title: "Certificates & Verification",
  description:
    "Every Special Minds IBT certificate carries a serial number. Check one here in seconds — no account needed.",
  alternates: { canonical: "/certificates" },
  openGraph: { url: "/certificates", title: "Certificates & Verification | Special Minds Academy" },
};

const POINTS = [
  { icon: Printer, title: "Yours to keep", body: "Students print their certificate or save it as a PDF from the student portal." },
  { icon: Search, title: "Checkable by anyone", body: "An employer types the serial here and sees who it was issued to, for which course, and when." },
  { icon: Ban, title: "Revocation shows at once", body: "If a certificate is ever withdrawn, this page says so straight away." },
  { icon: ShieldCheck, title: "Nothing extra shared", body: "Verification shows less than the certificate itself — no contact details, no grades." },
];

export default function CertificatesPage() {
  return (
    <>
      <DarkBand>
        <div className="shell grid items-center gap-14 pb-20 pt-14 md:pt-20 lg:grid-cols-[1.1fr_1fr]">
          <div>
            <p className="eyebrow text-champagne">Certificates</p>
            <h1 className="mt-4 text-[2.5rem] leading-[1.05] text-white sm:text-6xl">
              Check a certificate <span className="accent">in seconds.</span>
            </h1>
            <p className="mt-6 max-w-xl text-lg leading-relaxed text-white/80">
              Every IBT certificate we issue carries a serial number. Enter it below to confirm it&apos;s genuine and still valid.
            </p>
            <div className="mt-9 max-w-lg rounded-2xl bg-surface p-6 shadow-lift">
              <VerifyForm />
            </div>
          </div>
          <CertificateArt className="mx-auto w-full max-w-md rotate-2" />
        </div>
      </DarkBand>

      <section className="shell py-20 md:py-28">
        <SectionHead eyebrow="How it works" title="A certificate" accent="you can stand behind." />
        <ul className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {POINTS.map(({ icon: Icon, title, body }) => (
            <li key={title} className="card p-6">
              <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-amethyst/10 text-amethyst">
                <Icon size={20} aria-hidden="true" />
              </span>
              <h2 className="mt-5 text-lg">{title}</h2>
              <p className="mt-2 text-sm leading-relaxed text-soft">{body}</p>
            </li>
          ))}
        </ul>
        <p className="mt-10 max-w-3xl text-sm leading-relaxed text-soft">
          A Special Minds certificate confirms completion of our training. The IBT and IBA credentials themselves are issued by
          IBAO, the International Behavior Analysis Organization, once its requirements are met.{" "}
          <Link href="/courses" className="font-semibold text-bronze hover:underline">See the courses</Link>.
        </p>
      </section>
    </>
  );
}
