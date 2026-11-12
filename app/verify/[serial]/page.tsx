import type { Metadata } from "next";
import Link from "next/link";
import { ShieldAlert, ShieldCheck, ShieldX } from "lucide-react";
import { createClient } from "@/lib/supabase/server";
import { VerifyForm } from "@/components/academy/VerifyForm";

type VerifyResult = {
  found: boolean;
  serial?: string;
  holder?: string | null;
  course?: string;
  hours?: number;
  issued_on?: string;
  revoked?: boolean;
  revoked_on?: string | null;
  verified_by?: string | null;
  verifier_credential?: string | null;
};

// Not indexable, for the same reason as specialminds.ae/verify/<serial>: a
// crawl of these would turn "who holds a certificate" into a browsable list.
export const metadata: Metadata = { title: "Certificate verification", robots: { index: false } };

const dateLabel = (iso: string) => new Date(iso).toLocaleDateString("en-GB", { day: "numeric", month: "long", year: "numeric" });

export default async function AcademyVerifySerialPage({ params }: { params: { serial: string } }) {
  const serial = decodeURIComponent(params.serial);

  // The same anon-granted lookup the main site's page uses. It returns strictly
  // less than the certificate the holder is already showing. A failed call
  // reads as "not found" rather than an error page.
  let result: VerifyResult = { found: false };
  try {
    const { data } = await createClient().rpc("ibt_verify_certificate", { p_serial: serial });
    if (data) result = data as VerifyResult;
  } catch {
    result = { found: false };
  }

  const state = !result.found ? "not_found" : result.revoked ? "revoked" : "valid";
  const TONE = {
    valid: { icon: ShieldCheck, colour: "text-emerald-600 bg-emerald-50", heading: "This certificate is valid" },
    revoked: { icon: ShieldAlert, colour: "text-danger bg-danger/10", heading: "This certificate has been revoked" },
    not_found: { icon: ShieldX, colour: "text-soft bg-paper", heading: "No certificate found" },
  }[state];
  const Icon = TONE.icon;

  return (
    <section className="shell py-16 md:py-24">
      <div className="mx-auto max-w-xl">
        <p className="eyebrow text-center">Certificate verification</p>
        <div className="mt-6 rounded-[1.4rem] border border-hairline bg-surface p-8 text-center shadow-lift">
          <span className={`mx-auto flex h-16 w-16 items-center justify-center rounded-full ${TONE.colour}`}>
            <Icon size={32} aria-hidden="true" />
          </span>
          <h1 className="mt-5 text-2xl md:text-3xl">{TONE.heading}</h1>

          {state === "not_found" ? (
            <p className="mx-auto mt-4 max-w-md text-soft">
              We couldn&apos;t find a certificate with the serial <strong className="break-all text-ink">{serial}</strong>. Check
              it exactly as printed — or contact us if you believe a certificate is being misrepresented.
            </p>
          ) : (
            <>
              <dl className="mt-8 grid gap-3 text-left">
                {[
                  ["Issued to", result.holder ?? "—"],
                  ["Course", result.course ?? "—"],
                  ["Coursework hours", result.hours ? `${result.hours} hours` : "—"],
                  ["Issued on", result.issued_on ? dateLabel(result.issued_on) : "—"],
                  [
                    "Signed off by",
                    result.verified_by ? `${result.verified_by}${result.verifier_credential ? `, ${result.verifier_credential}` : ""}` : "—",
                  ],
                  ["Serial", result.serial ?? serial],
                ].map(([label, value]) => (
                  <div key={label} className="flex flex-wrap justify-between gap-2 border-b border-hairline pb-2 last:border-0">
                    <dt className="text-sm text-soft">{label}</dt>
                    <dd className="text-sm font-semibold text-ink">{value}</dd>
                  </div>
                ))}
              </dl>
              {state === "revoked" && (
                <p className="mt-6 rounded-xl border border-danger/30 bg-danger/5 p-4 text-sm text-danger">
                  This certificate was revoked{result.revoked_on ? ` on ${dateLabel(result.revoked_on)}` : ""}. It should not be
                  relied on as evidence of completion.
                </p>
              )}
            </>
          )}
        </div>

        <div className="mt-8 rounded-2xl border border-hairline bg-surface p-6">
          <VerifyForm />
        </div>
        <p className="mt-6 text-center text-sm text-soft">
          <Link href="/courses/ibt-training" className="font-semibold text-bronze hover:underline">About IBT Training</Link>
        </p>
      </div>
    </section>
  );
}
