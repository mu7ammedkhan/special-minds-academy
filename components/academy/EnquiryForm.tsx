"use client";
import { useEffect } from "react";
import { useFormState, useFormStatus } from "react-dom";
import { usePathname } from "next/navigation";
import { sendGAEvent } from "@next/third-parties/google";
import { CheckCircle2 } from "lucide-react";
import { sendAcademyEnquiry, type EnquiryState } from "@/app/actions";
import { ENQUIRY_COURSES } from "@/lib/academy";
import { SITE } from "@/lib/site";

const field =
  "w-full min-w-0 rounded-xl border border-field bg-surface px-4 py-3 text-ink outline-none transition focus:border-amethyst focus:ring-2 focus:ring-amethyst/20";

const BACKGROUNDS = [
  "Working as an LSA or shadow teacher",
  "Teacher or teaching assistant",
  "Psychology or education student / graduate",
  "Already working in ABA",
  "Parent or carer",
  "Something else",
];

function Submit({ label }: { label: string }) {
  const { pending } = useFormStatus();
  return (
    <button className="btn btn-dark w-full justify-center py-4" disabled={pending}>
      {pending ? "Sending…" : label}
    </button>
  );
}

/**
 * Register interest in a course, or ask a question. Goes to the leads table
 * (staff see it on /staff/leads). A GA lead event only — no Google Ads
 * conversion, because no campaign buys traffic for these courses yet.
 */
export function EnquiryForm({ course = "not-sure", submitLabel = "Send my enquiry" }: { course?: string; submitLabel?: string }) {
  const [state, action] = useFormState<EnquiryState, FormData>(sendAcademyEnquiry, {});
  const page = usePathname().replace(/^\/academy(?=\/|$)/, "") || "/";

  useEffect(() => {
    if (state.ok) sendGAEvent("event", "generate_lead", { flow: "academy_enquiry", course, method: "form" });
  }, [state.ok, course]);

  if (state.ok) {
    return (
      <div className="grid gap-3 py-6 text-center" role="status">
        <CheckCircle2 size={40} className="mx-auto text-bronze" aria-hidden="true" />
        <p className="font-display text-2xl text-ink">Thank you — we&apos;ve got your details.</p>
        <p className="text-soft">We&apos;ll be in touch on WhatsApp or email.</p>
        {state.preview && (
          <p className="rounded-xl bg-apricot/20 p-3 text-sm text-ink">
            Preview site: nothing was saved or sent. On the live academy this goes to the team&apos;s Leads page.
          </p>
        )}
      </div>
    );
  }

  return (
    <form action={action} className="grid gap-4">
      <input type="hidden" name="page" value={page} />
      <label className="grid min-w-0 gap-1.5 text-sm font-medium text-ink">
        Full name
        <input name="name" required autoComplete="name" className={field} />
      </label>
      <div className="grid gap-4 sm:grid-cols-2">
        <label className="grid min-w-0 gap-1.5 text-sm font-medium text-ink">
          Email
          <input name="email" type="email" autoComplete="email" className={field} />
        </label>
        <label className="grid min-w-0 gap-1.5 text-sm font-medium text-ink">
          Phone / WhatsApp
          <input name="phone" type="tel" autoComplete="tel" className={field} />
        </label>
      </div>
      <div className="grid gap-4 sm:grid-cols-2">
        <label className="grid min-w-0 gap-1.5 text-sm font-medium text-ink">
          Course
          <select name="course" defaultValue={course} className={field}>
            {ENQUIRY_COURSES.map((c) => (
              <option key={c.value} value={c.value}>{c.label}</option>
            ))}
          </select>
        </label>
        <label className="grid min-w-0 gap-1.5 text-sm font-medium text-ink">
          Emirate
          <select name="emirate" defaultValue="" className={field}>
            <option value="">Choose one</option>
            {SITE.areaServed.map((e) => (
              <option key={e} value={e}>{e}</option>
            ))}
            <option value="Outside the UAE">Outside the UAE</option>
          </select>
        </label>
      </div>
      <label className="grid min-w-0 gap-1.5 text-sm font-medium text-ink">
        Where are you now?
        <select name="background" defaultValue="" className={field}>
          <option value="">Choose one</option>
          {BACKGROUNDS.map((b) => (
            <option key={b} value={b}>{b}</option>
          ))}
        </select>
      </label>
      <label className="grid min-w-0 gap-1.5 text-sm font-medium text-ink">
        <span>
          Anything you&apos;d like to ask? <span className="font-normal text-soft">(optional)</span>
        </span>
        <textarea name="message" rows={3} className={field} />
      </label>
      {state.error && <p className="text-sm text-danger" role="alert">{state.error}</p>}
      <Submit label={submitLabel} />
      <p className="text-center text-xs text-soft">No payment, no obligation. We only use your details to reply.</p>
    </form>
  );
}
