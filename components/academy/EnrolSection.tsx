"use client";
import { Suspense, useState } from "react";
import { useFormState, useFormStatus } from "react-dom";
import { useSearchParams } from "next/navigation";
import { sendGAEvent } from "@next/third-parties/google";
import { Check, ShieldCheck } from "lucide-react";
import { enrolInFull, reserveWithDeposit, type EnrolState } from "@/app/actions";
import { IBT_PLANS } from "@/lib/academy";
import { IBT_COHORT_1 } from "@/lib/ibt";
import { BALANCE_AED, BALANCE_DUE_LABEL, DEPOSIT_AED } from "@/lib/ibt-pathway";
import { adsSendTo } from "@/lib/google-ads";
import { stashContact } from "@/lib/enhanced-conversions";

type Plan = "full" | "deposit";

const field =
  "w-full min-w-0 rounded-xl border border-field bg-surface px-4 py-3 text-ink outline-none transition focus:border-amethyst focus:ring-2 focus:ring-amethyst/20";

// The tracking on each form is the specialminds.ae form's, unchanged
// (app/ibt-training/*/RegisterForm.tsx): the same GA flow names, the same
// enhanced-conversion stash across the Ziina redirect, and the deposit form's
// begin-checkout Ads action. Reports keep counting the same things.
function stash(form: HTMLFormElement) {
  stashContact({
    email: (form.elements.namedItem("email") as HTMLInputElement | null)?.value,
    phone: (form.elements.namedItem("phone") as HTMLInputElement | null)?.value,
  });
}

function Fields() {
  return (
    <>
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
      <label className="grid min-w-0 gap-1.5 text-sm font-medium text-ink">
        Emirate
        <input name="emirate" className={field} />
      </label>
      <p className="-mt-1 text-xs text-soft">Use the email you&apos;ll sign in with — it&apos;s how your payment unlocks the course.</p>
    </>
  );
}

function Submit({ label }: { label: string }) {
  const { pending } = useFormStatus();
  return (
    <button className="btn btn-dark w-full justify-center py-4" disabled={pending}>
      {pending ? "Redirecting to payment…" : label}
    </button>
  );
}

function Result({ state, amount }: { state: EnrolState; amount: number }) {
  if (state.error) return <p className="text-sm text-danger" role="alert">{state.error}</p>;
  if (state.preview)
    return (
      <p className="rounded-xl bg-apricot/20 p-3 text-sm text-ink" role="status">
        Preview site: on the live academy this opens Ziina&apos;s secure checkout for AED {amount}. Nothing was saved or charged.
      </p>
    );
  return null;
}

function FullForm() {
  const [state, action] = useFormState<EnrolState, FormData>(enrolInFull, {});
  return (
    <form
      action={action}
      className="grid gap-4"
      onSubmit={(e) => {
        sendGAEvent("event", "begin_checkout", { flow: "ibt_cohort1", value: IBT_COHORT_1.coursePriceAed, currency: "AED" });
        stash(e.currentTarget);
      }}
    >
      <Fields />
      <Result state={state} amount={IBT_COHORT_1.coursePriceAed} />
      <Submit label={`Enrol — pay AED ${IBT_COHORT_1.coursePriceAed.toLocaleString("en-US")}`} />
    </form>
  );
}

function DepositForm() {
  const [state, action] = useFormState<EnrolState, FormData>(reserveWithDeposit, {});
  return (
    <form
      action={action}
      className="grid gap-4"
      onSubmit={(e) => {
        sendGAEvent("event", "begin_checkout", { flow: "ibt_pathway", value: DEPOSIT_AED, currency: "AED" });
        stash(e.currentTarget);
        const sendTo = adsSendTo("ibtBeginCheckout");
        if (sendTo && typeof window.gtag === "function") {
          window.gtag("event", "conversion", { send_to: sendTo });
        }
      }}
    >
      <Fields />
      <label className="flex items-start gap-3 rounded-xl bg-paper p-3 text-xs leading-relaxed text-soft">
        <input type="checkbox" name="terms_accepted" required className="mt-0.5 h-4 w-4 shrink-0 accent-amethyst" />
        <span>
          I understand the AED {DEPOSIT_AED} deposit is non-refundable, that 100% of it is applied toward my AED{" "}
          {IBT_COHORT_1.coursePriceAed.toLocaleString("en-US")} tuition, and that the remaining AED {BALANCE_AED.toLocaleString("en-US")} balance is due{" "}
          {BALANCE_DUE_LABEL}. I understand the deposit is fully refunded only if Special Minds cancels my place.
        </span>
      </label>
      <Result state={state} amount={DEPOSIT_AED} />
      <Submit label={`Reserve my seat — pay AED ${DEPOSIT_AED}`} />
    </form>
  );
}

function Enrol({ initialPlan, notice }: { initialPlan: Plan; notice: "cancelled" | "failed" | null }) {
  const [plan, setPlan] = useState<Plan>(initialPlan);
  const current = IBT_PLANS[plan];
  return (
    <div className="grid gap-8 lg:grid-cols-[1fr_1.1fr] lg:gap-12">
      <div>
        <fieldset className="grid gap-3">
          <legend className="sr-only">How would you like to pay?</legend>
          {(Object.keys(IBT_PLANS) as Plan[]).map((key) => {
            const p = IBT_PLANS[key];
            const on = plan === key;
            return (
              <label
                key={key}
                className={`flex cursor-pointer items-center justify-between gap-4 rounded-2xl border-2 p-5 transition has-[:focus-visible]:ring-2 has-[:focus-visible]:ring-amethyst/30 ${
                  on ? "border-amethyst bg-surface shadow-lift" : "border-hairline bg-surface/60 hover:border-amethyst/40"
                }`}
              >
                <input type="radio" name="ibt-plan" value={key} checked={on} onChange={() => setPlan(key)} className="sr-only" />
                <span className="flex items-center gap-4">
                  <span
                    className={`flex h-6 w-6 shrink-0 items-center justify-center rounded-full border-2 ${on ? "border-amethyst bg-amethyst text-white" : "border-field"}`}
                    aria-hidden="true"
                  >
                    {on && <Check size={14} strokeWidth={3} />}
                  </span>
                  <span>
                    <span className="block font-semibold text-ink">{p.label}</span>
                    <span className="block text-sm text-soft">{key === "full" ? "One payment, start straight away" : "Hold your seat, pay the rest later"}</span>
                  </span>
                </span>
                <span className="shrink-0 font-display text-2xl text-ink">{p.price}</span>
              </label>
            );
          })}
        </fieldset>
        <div className="mt-6 rounded-2xl border border-hairline bg-surface p-6">
          <p className="text-sm leading-relaxed text-soft">{current.note}</p>
          <ul className="mt-4 space-y-2.5">
            {current.points.map((pt) => (
              <li key={pt} className="flex items-start gap-2.5 text-sm text-ink">
                <Check size={16} className="mt-0.5 shrink-0 text-bronze" aria-hidden="true" />
                {pt}
              </li>
            ))}
          </ul>
        </div>
        <p className="mt-4 flex items-center gap-2 text-xs text-soft">
          <ShieldCheck size={15} className="text-bronze" aria-hidden="true" /> Secure checkout by Ziina. We never see your card details.
        </p>
      </div>

      <div className="rounded-[1.4rem] border border-hairline bg-surface p-6 shadow-lift md:p-8">
        {notice && (
          <p className="mb-5 rounded-xl bg-apricot/20 p-3 text-sm text-ink" role="status">
            {notice === "cancelled"
              ? "Your payment was cancelled — no charge was made. You can try again whenever you're ready."
              : "That payment didn't go through — please try again, or message us on WhatsApp and we'll help directly."}
          </p>
        )}
        <p className="font-display text-2xl text-ink">{plan === "full" ? "Enrol in IBT Training" : "Reserve your seat"}</p>
        <p className="mb-6 mt-1 text-sm text-soft">Two minutes, then Ziina&apos;s secure checkout.</p>
        {/* Keyed, so switching plans gives each form its own fresh state. */}
        {plan === "full" ? <FullForm key="full" /> : <DepositForm key="deposit" />}
      </div>
    </div>
  );
}

function EnrolFromUrl() {
  const params = useSearchParams();
  const initialPlan: Plan = params.get("plan") === "deposit" ? "deposit" : "full";
  const notice = params.get("cancelled") ? "cancelled" : params.get("failed") ? "failed" : null;
  // Keyed, so following "?plan=deposit#enrol" from the hero swaps the plan
  // even though the page itself doesn't remount.
  return <Enrol key={`${initialPlan}-${notice}`} initialPlan={initialPlan} notice={notice} />;
}

/**
 * The plan (?plan=deposit from the old pathway page and Ziina's return links)
 * and the cancelled/failed notice are read on the client, inside Suspense, so
 * the course page itself stays static. The fallback is the full form, so the
 * page works before — and without — JavaScript.
 */
export function EnrolSection() {
  return (
    <Suspense fallback={<Enrol initialPlan="full" notice={null} />}>
      <EnrolFromUrl />
    </Suspense>
  );
}
