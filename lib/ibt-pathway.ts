// Single source of truth for /ibt-training/pathway — a strategic-reframe
// test variant of the same Cohort 1 training sold on
// app/ibt-training/cohort-1 (see lib/ibt.ts), this one leading with the
// placement-pathway outcome and a lower-friction AED 99 deposit instead of
// the AED 1,499 full payment. Reuses real, already-verified facts from
// lib/ibt.ts (director, trainer note, hours, price, testimonial) rather
// than restating them, and where a claim was genuinely researchable (IBAO's
// own published IBT requirements — theibao.com/docs/IBT-Requirements-v100.pdf),
// it's filled in with cited, real content instead of a placeholder. What's
// left bracketed is only what's genuinely internal to Special Minds — a
// scheduling, pricing, or staffing decision no amount of research can
// answer, or (for testimonials) a hard "never fabricate" rule — see the
// bottom of this file for the full list handed back to the owner.
import type { FaqItem } from "@/lib/seo";
import { SITE } from "@/lib/site";
import { IBT_COHORT_1, IBT_TRAINER_NOTE } from "@/lib/ibt";

export const DEPOSIT_AED = 99;
// Arithmetic, not a placeholder — always 100% of the deposit applied to tuition.
export const BALANCE_AED = IBT_COHORT_1.coursePriceAed - DEPOSIT_AED;

// Deliberately relative to the individual candidate, not absolute dates.
//
// This page previously carried a hardcoded "starts 1 August" and "balance due
// by 27 July". Both silently went stale — by 3 August 2026 the live page was
// advertising a start date two days past and a payment deadline a week past,
// which is exactly the sort of thing that reads as abandoned to a visitor and
// as misleading to Google Ads review. Don't reintroduce a fixed date here.
//
// It also matches how the product actually works: the portal is evergreen and
// self-paced (see docs/IBT_PORTAL.md), so there is no real fixed cohort start
// to name. The "cohort" framing is an urgency device on the marketing side
// only. [confirm the 14-day balance window with Special Minds]
export const BALANCE_DUE_DAYS = 14;
// Phrased without a possessive so it reads correctly in both the site's
// second person ("your balance is due…") and the consent checkbox's first
// person ("I understand the balance is due…").
export const BALANCE_DUE_LABEL = `within ${BALANCE_DUE_DAYS} days of the deposit`;
export const COURSE_START_LABEL = "as soon as your balance is settled";

// Real, confirmed by Special Minds. Seats-left is intentionally kept as the
// range they gave ("fewer than 8") rather than a specific count they didn't
// state — no live seat-count tracking exists in the app yet (a real number
// would need a capacity column + a count against ibt_registrations).
export const SEATS_TOTAL = 50;
export const SEATS_LEFT_LABEL = "fewer than 8";

// Confirmed by Special Minds: no founding-cohort discount applies. The page
// states the real AED 1,499 total tuition plainly — this stays null so
// nothing renders unless a real discount is approved later.
export const FOUNDING_DISCOUNT_LABEL: string | null = null;

export const PATHWAY_WHATSAPP_LINK = `${SITE.contact.whatsapp}?text=${encodeURIComponent(
  "Hi! I'd like to know more about the IBT Training placement pathway."
)}`;

export const PATHWAY_PROMISE = [
  "Complete the same 40-hour, analyst-led IBT coursework as Cohort 1.",
  "Walk away with a certificate you can add to your CV and LinkedIn immediately.",
  "Enter Special Minds' active placement pool — the same network our own specialists are placed through.",
  "Get first access to real openings as they come up (placement is best-effort, never guaranteed).",
];

export const PATHWAY_STEPS = [
  { title: "Train", detail: "40 hours of coursework, live or recorded, taught by a registered BCBA, IBA or QBA." },
  { title: "Get certified", detail: "Finish the coursework and receive your certificate of completion." },
  { title: "Enter the pool", detail: "Your profile joins Special Minds' active placement pool, alongside our existing specialist network." },
  { title: "We actively place you", detail: "Our placement team works to match you against real openings — placement is best-effort and never guaranteed." },
];

// The 7 topic areas IBAO's own published "IBT 40 Hour Training Content"
// requires every Approved Content Provider to cover (International Behavior
// Analysis Organization, "International Behavior Therapist Requirements",
// 2021 v100, p.4 — theibao.com/docs/IBT-Requirements-v100.pdf). This is what
// IBAO mandates the coursework address, not Special Minds' own lesson-by-
// lesson syllabus — the exact sequencing/materials for Cohort 1 specifically
// still needs Special Minds' confirmation.
export const PATHWAY_CURRICULUM = [
  { title: "Disabilities", detail: "The range of developmental disabilities and support needs you'll encounter in the field." },
  { title: "Behavioural basics", detail: "The foundational principles of Applied Behaviour Analysis (ABA) everything else builds on." },
  { title: "Data collection", detail: "How to record and track behaviour and progress accurately, the backbone of every ABA programme." },
  { title: "Assistance in assessment procedures", detail: "Supporting your supervising analyst's assessment process, not conducting assessments independently." },
  { title: "Teaching skills", detail: "Practical techniques for teaching new skills and behaviours, IBAO's core hands-on competency." },
  { title: "Challenging behaviours", detail: "Recognising and responding to challenging behaviour under a supervisor's behaviour plan." },
  { title: "Professionalism", detail: "IBAO's ethical and professional-conduct expectations for anyone implementing ABA services." },
];

export const PATHWAY_INCLUDED = [
  `${IBT_COHORT_1.courseHours} hours of analyst-led coursework, live or recorded`,
  "A certificate of completion",
  "Entry into Special Minds' active placement pool",
];

export const PATHWAY_FAQS: FaqItem[] = [
  {
    q: "Is this course accredited?",
    // Real, sourced context (IBAO, "International Behavior Therapist
    // Requirements", 2021 v100) — states how IBT accreditation actually
    // works without asserting Special Minds' own IBAO "Approved Content
    // Provider" registration status, which isn't confirmed.
    a: "The IBT (International Behavior Therapist) credential itself is issued directly by IBAO (the International Behavior Analysis Organization) once a candidate completes the 40-hour coursework, 300 hours of supervised practice, and passes IBAO's online exam. The 40-hour coursework must come from an IBAO-recognised Approved Content Provider.",
  },
  {
    q: "Will I definitely get a job after this?",
    a: "No program can guarantee employment. Completing this course gets you certified and enters you into Special Minds' active placement pool — we actively place vetted graduates against real openings, but placement always depends on the specific role, your fit, and availability. It's never guaranteed.",
  },
  {
    q: `Is the AED ${DEPOSIT_AED} deposit refundable?`,
    a: `The AED ${DEPOSIT_AED} deposit is non-refundable once paid, and 100% of it is applied toward your AED ${IBT_COHORT_1.coursePriceAed} tuition — you're not paying anything extra on top of it. It's only refunded in full if Special Minds cancels your place.`,
  },
  {
    q: "What's the remaining balance, and when is it due?",
    a: `AED ${BALANCE_AED}, due ${BALANCE_DUE_LABEL}. Your coursework opens ${COURSE_START_LABEL}, and from there it's self-paced — there's no fixed start date you have to wait for.`,
  },
  {
    q: "What's the schedule and format?",
    // Confirmed by Special Minds: sessions can be joined live or completed
    // online — no fixed weekly schedule to work around. The "2 to 10 weeks"
    // figure is real and sourced (IBAO, "International Behavior Therapist
    // Requirements", 2021 v100, p.4).
    a: `${IBT_COHORT_1.courseHours} hours total. Sessions can be joined live or completed online at your own pace, so there's no fixed weekly schedule to work around — training like this typically takes 2 to 10 weeks to complete.`,
  },
  {
    q: "Who teaches it?",
    // Reuses the same honest, already-shipped framing as Cohort 1 — the
    // coursework instructor's name is intentionally withheld until Special
    // Minds confirms who's teaching this cohort (see lib/ibt.ts). The
    // credential list is real, sourced context: IBAO's own supervisor
    // requirements (same document, p.5) list BCBA, IBA and QBA among the
    // accepted credentials for supervising IBT candidates and content.
    a: `${IBT_TRAINER_NOTE} BCBA, IBA and QBA are all credentials IBAO itself recognises as qualified to supervise IBT training and practice.`,
  },
];
