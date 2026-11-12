import Link from "next/link";
import type { ReactNode } from "react";
import { CheckCircle2, Clock, LogIn, UserPlus } from "lucide-react";
import { AcademyWhatsAppLink } from "@/components/academy/AcademyWhatsApp";
import { REGISTER_URL, SIGN_IN_URL } from "@/lib/academy";

/**
 * The shell of both IBT payment confirmations. The account step links to
 * specialminds.ae by full URL: accounts live there, and the course unlocks
 * when the account's email matches the payment's (the signup trigger).
 */
export function PaymentResult({
  confirmed,
  title,
  lead,
  stepTitle,
  stepBody,
}: {
  confirmed: boolean;
  title: string;
  lead: ReactNode;
  stepTitle: string;
  stepBody: ReactNode;
}) {
  return (
    <section className="shell py-16 md:py-24">
      <div className="mx-auto max-w-xl text-center">
        {confirmed ? (
          <>
            <span className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-emerald-50 text-emerald-600">
              <CheckCircle2 size={34} aria-hidden="true" />
            </span>
            <h1 className="mt-5 text-3xl md:text-4xl">{title}</h1>
            <p className="mx-auto mt-3 max-w-lg text-soft">{lead}</p>

            <div className="mt-8 rounded-[1.4rem] border border-hairline bg-surface p-6 text-left shadow-lift md:p-7">
              <p className="flex items-center gap-2 font-semibold text-ink">
                <UserPlus size={18} className="text-bronze" aria-hidden="true" /> {stepTitle}
              </p>
              <p className="mt-2 text-sm leading-relaxed text-soft">{stepBody}</p>
              <a href={REGISTER_URL} className="btn btn-dark mt-5 w-full justify-center">
                Create your student account
              </a>
              <p className="mt-4 text-xs text-soft">
                Already have an account with Special Minds?{" "}
                <a href={SIGN_IN_URL} className="inline-flex items-center gap-1 font-semibold text-bronze hover:underline">
                  <LogIn size={12} aria-hidden="true" /> Sign in
                </a>{" "}
                and your course will be waiting.
              </p>
            </div>
          </>
        ) : (
          <>
            <span className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-paper text-bronze ring-1 ring-hairline">
              <Clock size={32} aria-hidden="true" />
            </span>
            <h1 className="mt-5 text-3xl md:text-4xl">Confirming your payment…</h1>
            <p className="mx-auto mt-3 max-w-lg text-soft">
              We&apos;re still confirming your payment with Ziina — this usually takes a minute or two. If this message doesn&apos;t
              update after a few minutes, message us on WhatsApp and we&apos;ll check it manually.
            </p>
          </>
        )}
        <div className="mt-8 flex flex-wrap justify-center gap-3">
          <AcademyWhatsAppLink className="btn btn-primary" where="payment-result">
            Message us on WhatsApp
          </AcademyWhatsAppLink>
          <Link href="/" className="btn btn-ghost text-ink">Back to the academy</Link>
        </div>
      </div>
    </section>
  );
}
