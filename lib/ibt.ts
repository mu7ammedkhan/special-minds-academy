// Single source of truth for the IBT Training Cohort 1 landing page's
// copy/constants — mirrors the lib/site.ts pattern for brand facts.
import { SITE } from "@/lib/site";
import type { FaqItem } from "@/lib/seo";

export const IBT_COHORT_1 = {
  slug: "cohort-1",
  coursePriceAed: 1499,
  courseHours: 40,
} as const;

// The behaviour analyst delivering the coursework is a separate person from
// the Program Director below and is intentionally unnamed until Special
// Minds confirms who's teaching Cohort 1 — reference the credential only,
// never a placeholder name, anywhere on the page.
//
// Say "BCBA, IBA or QBA", never "BCBA" alone: the credential set IBAO accepts
// for supervising IBT training is wider than the BACB's, and the analyst
// actually contracted to deliver this coursework holds IBA (IBAO) and QBA
// (QABA), not BCBA. Narrowing this back to "BCBA" is a false credential
// claim on a paid course and breaches Clause 10.2 of the fulfilment
// agreement — see docs/contracts/.
export const IBT_TRAINER_NOTE = "Every session — live or recorded — is delivered by a currently practising, registered behaviour analyst (BCBA, IBA or QBA).";

// Kept to 3 — the hero should read at a glance, not compete for attention
// with a 4th chip that's really a restatement of "online" (flexible
// schedule). Full detail lives in the "What you'll get" section below.
export const IBT_STAT_CHIPS = ["40 hours", "100% online", "Led by a BCBA/IBA/QBA"];

export const IBT_FEATURE_BULLETS = [
  { title: "Taught by a behaviour analyst", detail: "Registered BCBA, IBA or QBA" },
  { title: "100% online", detail: "Live or recorded, join from anywhere in the UAE" },
  { title: "Flexible schedule", detail: "Fits around your current job" },
  { title: "Certificate included", detail: "Recognised proof of your training" },
];

// Why the credential itself is worth having — grounded in the same
// ground-truth research as the accuracy section below, not invented.
export const IBT_VALUE_PROPS = [
  {
    title: "Built for the UAE market",
    detail:
      "Unlike RBT, which is a US-specific credential, IBT is built for international, multilingual practice — it's what UAE staffing agencies, schools and centres actually ask for.",
  },
  {
    title: "Opens more than one door",
    detail: "Homes, schools, nurseries and centres across the UAE all hire against this credential — not just one type of employer.",
  },
  {
    title: "A step, not a dead end",
    detail: "Most people don't stop at IBT. It's the common on-ramp toward RBT, BCaBA and BCBA certifications later in your career.",
  },
  {
    title: "Taught by someone who does the work",
    detail: "Your instructor is a practising, registered behaviour analyst (BCBA, IBA or QBA) who teaches the material directly — not a generic, off-the-shelf course with no real teacher behind it.",
  },
];

// IBT vs. ABAT (Applied Behavior Analysis Technician, issued by QABA) — the
// other respected international entry-level ABA credential. Every figure
// here is sourced directly from IBAO's and QABA's own published
// requirements, not estimated: IBAO (theibao.com/international-behavior-therapist,
// theibao.com "what are the requirements to obtain the IBT") and QABA
// (qababoard.com/pages/aba-technician-credential-requirements). Framed
// around the axes that are honestly favourable to IBT — do not add a claim
// (e.g. "more recognised") that isn't backed by one of these sources.
export const IBT_VS_ABAT = {
  rows: [
    { label: "Issuing body", ibt: "IBAO", abat: "QABA" },
    { label: "Coursework", ibt: "40 hours", abat: "40 hours" },
    { label: "Supervised practice before you're exam-ready", ibt: "300 hours", abat: "15 hours" },
    { label: "IBAO / QABA registration + exam fee", ibt: "$120, one combined fee", abat: "$125 exam fee, separate from training cost" },
    { label: "Next steps up the ladder", ibt: "RBT → BCaBA → BCBA — the most widely-recognised ABA career ladder globally", abat: "QASP-S → QBA" },
    { label: "Special Minds placement priority", ibt: "Yes — this is the credential our own placements are built around", abat: "Not currently part of our placement network" },
  ],
  closing:
    "Both are legitimate, internationally-recognised entry-level credentials — this isn't a case of one being fake and the other real. We teach IBT specifically because it asks for far deeper supervised practice before you're exam-ready, and because it's the credential our own placement network is built around.",
};

// What the AED 1,499 payment actually buys, itemised — reframes a single
// price into the concrete value behind it. Every line is something this
// build already delivers; nothing here implies free job-board access, which
// is a separate paid membership tier (see lib/membership).
export const IBT_VALUE_STACK = [
  "40 hours of coursework, live or recorded, taught by a registered BCBA, IBA or QBA",
  "A certificate you can add to your CV and LinkedIn as soon as you finish",
  "Your 40-hour coursework requirement toward full IBT certification — done",
  "Priority consideration if you apply to join the Special Minds specialist network afterwards",
];

// What actually happens after payment — reduces last-mile hesitation by
// making the process concrete. Matches the FAQ answer below; keep both in
// sync if this changes.
export const IBT_NEXT_STEPS = [
  { title: "Your seat is confirmed instantly", detail: "No waiting to hear if you got in — payment secures your place in Cohort 1." },
  { title: "We reach out to confirm details", detail: "On WhatsApp or email, with the schedule, login details and course materials ahead of the start date." },
  { title: "You complete the 40 hours", detail: "Join live or work through the recordings — whichever fits your week." },
  { title: "You get your certificate", detail: "Proof of your coursework, ready to add to your CV." },
];

// Honest fit-check — who this is (and isn't) for. Being selective builds
// more trust than pretending it suits everyone, and matches the site's
// assessment-led voice (docs/MASTER_PROMPT.md §8).
export const IBT_FIT = {
  goodFit: [
    "You're already working as an LSA, shadow teacher or SEN support role and want a credential that's recognised UAE-wide.",
    "You're new to the field and want a structured, clinically-taught way in.",
    "You're a psychology student or parent who wants to properly understand ABA, not just informally.",
  ],
  notFit: [
    "You already hold full IBT, RBT or BCaBA certification — this covers the 40-hour coursework component specifically.",
    "You're looking for the 300 supervised practice hours or the IBAO exam itself — this course is the step that comes before those.",
  ],
};

// Real profile, publicly listed on her LinkedIn (linkedin.com/in/sara-special-minds).
// Credential is RBT — she's added here as Program Director, a distinct role
// from the (unnamed) behaviour analyst who delivers the coursework itself
// (see IBT_TRAINER_NOTE above). Don't conflate the two.
export const IBT_DIRECTOR = {
  name: "Sara Omar Michael",
  title: "Program Director, Special Minds",
  credentials: [
    "RBT",
    "M.A. Applied Psychology",
    "PG Cert. Special Education",
  ],
  // DRAFT — written for this page, addressed directly to candidates, not a
  // quote she's actually said. Needs her sign-off before shipping; replace
  // with her real words once she reviews it.
  message:
    "I don't place people who've just watched a few videos — I place specialists who've done the real work. This course is how you become one of them, and how you get on our radar for real placements.",
};

// A real, already-published quote from Special Minds' specialist network
// (lib/audiences.ts practitioners.proofQuote) — reused as-is, not written
// for this page. That source gives role and location but no name, so none
// is invented here either.
export const IBT_TESTIMONIAL = {
  quote: "It's the first agency where I felt like someone had my back clinically, not just administratively.",
  context: "LSA, Abu Dhabi",
};

// Placeholder structure only — ask Special Minds for the real Cohort-1 syllabus before shipping.
// [confirm final curriculum]
export const IBT_CURRICULUM = [
  { title: "ABA fundamentals and foundational principles", detail: "The theory every intervention plan rests on" },
  { title: "Teaching strategies for behaviour change", detail: "Practical techniques you'll use from week one" },
  { title: "Behaviour intervention plan implementation", detail: "How to run a BCBA-designed plan, not just read one" },
  { title: "Ethics and professional conduct", detail: "The standards IBAO and UAE employers expect" },
  { title: "Hands-on practice scenarios and case studies", detail: "Real situations, worked through before you're on the job" },
];

export const IBT_FAQS: FaqItem[] = [
  {
    q: "What's the difference between this coursework and full IBT certification?",
    a: "This program covers the 40-hour IBT coursework, taught by a registered behaviour analyst (BCBA, IBA or QBA) — one of three requirements for full IBT certification from the IBAO, alongside 300 hours of supervised practice and passing the IBAO exam. Completing this course finishes your coursework requirement and prepares you to pursue full certification; it isn't the certification itself.",
  },
  {
    q: "Is this a live or recorded course?",
    a: "Both, whichever fits you better. Cohort 1 runs 100% online — join sessions live, or work through the recordings on your own schedule. Either way it's the same analyst-led material, so you can fit it around your existing job from anywhere in the UAE.",
  },
  {
    q: "What happens after I register?",
    a: "Once your payment is confirmed, our team reaches out on WhatsApp or email to confirm your seat and share the schedule, login details, and course materials ahead of the start date.",
  },
  {
    q: "Is my payment refundable if I don't get a confirmed seat?",
    a: "No — once payment is complete, your seat in Cohort 1 is confirmed and the AED 1,499 course fee is non-refundable.",
  },
  {
    q: "Can I pay in installments?",
    a: "Not currently — Cohort 1 registration is a single payment of AED 1,499 via Ziina, paid in full to secure your seat.",
  },
  {
    q: "Does completing this guarantee a job?",
    a: "No program can guarantee employment. Completing your IBT coursework strengthens your shortlist chances with UAE employers and gives you priority consideration for Special Minds placements — but hiring always depends on the specific role and assessment.",
  },
  {
    q: "Do I need experience already to join?",
    a: "No — Cohort 1 is built for both new and working LSAs, shadow teachers, SEN educators, psychology students and parents. The coursework starts from foundational principles.",
  },
  {
    q: "What if I already hold RBT or another certification?",
    a: "This course covers the 40-hour IBT coursework component specifically. If you already hold full IBT, RBT or BCaBA certification, this likely isn't the right fit for you.",
  },
];

export const IBT_WHATSAPP_LINK = `${SITE.contact.whatsapp}?text=${encodeURIComponent(
  "Hi! I'd like to know more about the IBT Training Cohort 1."
)}`;
