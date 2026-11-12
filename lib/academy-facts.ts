// Special Minds Academy — credential facts, with their sources.
//
// The single source for every number the academy's guides, comparison tables
// and llms.txt state about IBT, ABAT, RBT, IBA, QBA and BCBA. Each figure was
// read from the issuing body's own page on FACTS_CHECKED; the source keys say
// which. If a figure isn't here, the guides don't state it — an unverified
// number on an exam, fee or requirement is a promise a reader may act on.
//
// What is deliberately NOT here, because no issuer page we read states it:
//   - the IBT exam's format, length and pass mark, and IBT renewal rules;
//   - IBAO's education requirement for IBT;
//   - current RBT fees and the detail of the BACB's 2026 RBT changes.
// Write around these ("IBAO sets the exam; check its current rules") rather
// than estimating them.
//
// These bodies change their rules. Re-read the sources before relying on a
// figure that is more than a few months old, and update FACTS_CHECKED.

export const FACTS_CHECKED = "2026-11-12";
/** For prose: "as of November 2026". */
export const FACTS_CHECKED_LABEL = "November 2026";

export const SOURCES = {
  ibaoIbt: {
    label: "IBAO: International Behavior Therapist",
    url: "https://theibao.com/international-behavior-therapist",
  },
  ibaoIbtRequirements: {
    label: "IBAO: International Behavior Therapist Requirements (2021, v100)",
    url: "https://theibao.com/docs/IBT-Requirements-v100.pdf",
  },
  ibaoIba: {
    label: "IBAO: International Behavior Analyst",
    url: "https://theibao.com/international-behavior-analyst",
  },
  ibaoIbaRequirements: {
    label: "IBAO: International Behavior Analyst Requirements (2021, v101)",
    url: "https://theibao.com/docs/IBA-Requirements-v101-ENG.pdf",
  },
  ibaoOct2025: {
    label: "IBAO: The Revolution Continues (October 2025 IBA update)",
    url: "https://academy.theibao.com/blog/revolution",
  },
  qabaAbat: {
    label: "QABA: ABAT credential requirements",
    url: "https://qababoard.com/pages/aba-technician-credential-requirements/",
  },
  qabaProviders: {
    label: "QABA: Guidelines for ABAT and QASP-S coursework providers",
    url: "https://qababoard.com/guidelines-for-abat-or-qasp-coursework-providers/",
  },
  qabaQba: {
    label: "QABA: QBA credential",
    url: "https://qababoard.com/pages/qualified-behavior-analyst-credential/",
  },
  bacbRbt: {
    label: "BACB: Registered Behavior Technician",
    url: "https://www.bacb.com/rbt/",
  },
  bacbInternational: {
    label: "BACB: FAQs about the 2023 international changes",
    url: "https://www.bacb.com/faqs-about-the-2023-international-changes/",
  },
} as const;

export type SourceKey = keyof typeof SOURCES;

export type CredentialKey = "ibt" | "abat" | "rbt" | "iba" | "qba" | "bcba";

export type Credential = {
  key: CredentialKey;
  /** As the issuer writes it — US spelling, it's a proper noun. */
  name: string;
  short: string;
  issuer: string;
  issuerFull: string;
  level: "Technician" | "Analyst";
  eligibility: string;
  coursework: string;
  practice: string;
  exam: string;
  fees: string;
  renewal: string;
  /** Can someone living in the UAE start this credential today? */
  uae: string;
  nextStep: string;
  sources: SourceKey[];
};

export const CREDENTIALS: Record<CredentialKey, Credential> = {
  ibt: {
    key: "ibt",
    name: "International Behavior Therapist",
    short: "IBT",
    issuer: "IBAO",
    issuerFull: "International Behavior Analysis Organization",
    level: "Technician",
    eligibility: "Set by IBAO; check its current rules before you register.",
    coursework:
      "A 40-hour training covering IBAO's seven content areas, from an IBAO-recognised Approved Content Provider. IBAO says this typically takes 2 to 10 weeks.",
    practice:
      "300 hours of supervised practice, plus supervision-related tasks and activities. IBAO's supervisor requirements list BCBA, IBA and QBA among the credentials accepted for supervising IBT candidates.",
    exam: "IBAO's online exam.",
    fees: "US$120 to register with IBAO, exam included. Existing behaviour-analysis certificants can apply for the IBT Addition for US$69.",
    renewal: "Set by IBAO; check its current rules.",
    uae: "Yes. IBAO credentials are international and open to people living in the UAE.",
    nextStep: "IBA, IBAO's analyst-level credential.",
    sources: ["ibaoIbt", "ibaoIbtRequirements"],
  },
  abat: {
    key: "abat",
    name: "Applied Behavior Analysis Technician",
    short: "ABAT",
    issuer: "QABA",
    issuerFull: "Qualified Applied Behavior Analysis Credentialing Board",
    level: "Technician",
    eligibility:
      "At least 18 years old, with a high school diploma or national equivalent, a background check and one professional recommendation.",
    coursework:
      "40 hours of approved, assessment-based ABA coursework, including 3 hours of ethics and 5 hours of autism core knowledge, developed or delivered by a master's-level professional in ABA and autism. QABA accepts it from its approved coursework providers.",
    practice:
      "15 hours of supervised fieldwork, with 1 hour of supervision for every 10 hours of independent fieldwork. You must be enrolled in the coursework before the hours start.",
    exam: "125 multiple-choice questions (100 scored, 25 unscored pre-test), 2 hours, 72% to pass, proctored by Premier Proctoring. You can sit it before your fieldwork is finished, but the credential isn't finalised until the fieldwork is. A second attempt can be booked straight after a fail, a third 7 days after the second, and no more than 8 attempts in a calendar year.",
    fees: "US$125 certification fee, retakes extra. QABA offers discounts for residents of developing countries.",
    renewal:
      "Every 2 years, with at least 12 CEUs. Once credentialed, supervision must total 5% of direct service time in every 30-day period; it can be remote, with at least one 1-hour contact in person or by live video.",
    uae: "Yes. QABA credentials are international and open to people living in the UAE.",
    nextStep: "QASP-S (Qualified Autism Services Practitioner-Supervisor), then QBA, QABA's analyst-level credential.",
    sources: ["qabaAbat", "qabaProviders"],
  },
  rbt: {
    key: "rbt",
    name: "Registered Behavior Technician",
    short: "RBT",
    issuer: "BACB",
    issuerFull: "Behavior Analyst Certification Board",
    level: "Technician",
    eligibility: "Set by the BACB, and new applicants must live in a BACB-authorised country.",
    coursework: "A 40-hour training, an initial competency assessment and a background check, under the BACB's rules (revised for 2026).",
    practice: "RBTs practise under the close supervision of an RBT Supervisor or Requirements Coordinator.",
    exam: "The BACB's RBT exam, taken through Pearson VUE.",
    fees: "Set by the BACB.",
    renewal: "Set by the BACB.",
    uae: "Not for new applicants. Since 1 January 2023 the BACB only accepts new certification applications from people living in its authorised countries, and the UAE is not one of them.",
    nextStep: "BCaBA or BCBA, under the same residency rule.",
    sources: ["bacbRbt", "bacbInternational"],
  },
  iba: {
    key: "iba",
    name: "International Behavior Analyst",
    short: "IBA",
    issuer: "IBAO",
    issuerFull: "International Behavior Analysis Organization",
    level: "Analyst",
    eligibility:
      "A bachelor's degree, or the regional equivalent of two years of post-secondary study, for IBAO's Experience route; a master's degree for its Graduate route.",
    coursework: "Coursework covering IBAO's Required Educational Objectives.",
    practice:
      "For candidates registering on or after 1 October 2025: 1,500 practice hours (600 implementing, 600 programming, 300 of either) and 75 supervision hours (30 observing, 30 non-observing, 15 of either).",
    exam: "IBAO's online exam, with the skills testing and agreements on IBAO's checklist.",
    fees: "US$299 to register with IBAO, exam included. The IBA Addition for existing certificants is US$99; since 1 October 2025 QBA, BCaBA and the QASP-S bridge course alone no longer qualify for it.",
    renewal: "Set by IBAO; check its current rules.",
    uae: "Yes. IBAO credentials are international and open to people living in the UAE.",
    nextStep: "It is IBAO's analyst level: you supervise IBTs and design programmes.",
    sources: ["ibaoIba", "ibaoIbaRequirements", "ibaoOct2025"],
  },
  qba: {
    key: "qba",
    name: "Qualified Behavior Analyst",
    short: "QBA",
    issuer: "QABA",
    issuerFull: "Qualified Applied Behavior Analysis Credentialing Board",
    level: "Analyst",
    eligibility:
      "A master's degree from an accredited institution in ABA, education, special education, psychology, social work or another related field.",
    coursework: "270 hours of approved coursework (18 semester credits), including 20 hours of ethics and 20 hours of autism core knowledge.",
    practice:
      "2,000 hours of supervised fieldwork: at least 1,200 indirect hours in oversight or supervision and at most 800 direct hours. Candidates who began before 1 January 2026 can still qualify on 1,500 hours if they finish within three years of starting.",
    exam: "QABA's QBA exam, proctored by Premier Proctoring.",
    fees: "US$350 application and exam fee (US$225 to retake).",
    renewal: "Every 2 years, with 32 CEs.",
    uae: "Yes. QABA credentials are international and open to people living in the UAE.",
    nextStep: "It is QABA's analyst level.",
    sources: ["qabaQba"],
  },
  bcba: {
    key: "bcba",
    name: "Board Certified Behavior Analyst",
    short: "BCBA",
    issuer: "BACB",
    issuerFull: "Behavior Analyst Certification Board",
    level: "Analyst",
    eligibility: "A master's degree, graduate-level behaviour-analytic coursework and supervised fieldwork, under the BACB's rules — and new applicants must live in a BACB-authorised country.",
    coursework: "Graduate-level behaviour-analytic coursework, as the BACB specifies.",
    practice: "Supervised fieldwork, as the BACB specifies.",
    exam: "The BACB's BCBA exam.",
    fees: "Set by the BACB.",
    renewal: "Set by the BACB.",
    uae: "Not for new applicants. Since 1 January 2023 the BACB only accepts new certification applications from people living in its authorised countries, and the UAE is not one of them. People already certified keep their certification for now, the BACB says, though it warns certificants may be affected as countries develop their own programmes; a lapsed certificant can't reapply through its past-certification route unless they live in an authorised country.",
    nextStep: "It is the BACB's analyst level.",
    sources: ["bacbInternational"],
  },
};

/** IBAO's seven IBT content areas (IBT Requirements, 2021 v100, p.4). */
export const IBT_CONTENT_AREAS = [
  "Disabilities",
  "Behavioural basics",
  "Data collection",
  "Assistance in assessment procedures",
  "Teaching skills",
  "Challenging behaviours",
  "Professionalism",
];

/**
 * What the academy itself offers against each credential, today. Keep in step
 * with COURSES in lib/academy.ts. "interest" means the page takes no payment
 * and promises no date, fee or approval.
 */
export const ACADEMY_OFFER: Record<"ibt" | "abat" | "iba", { status: "open" | "interest"; note: string }> = {
  ibt: { status: "open", note: "Our 40-hour IBT coursework is open for enrolment, AED 1,499, online." },
  abat: {
    status: "interest",
    note: "Our ABAT course isn't open yet. QABA only counts ABAT coursework from its approved providers, so we'll say so plainly on the course page if and when ours is approved.",
  },
  iba: { status: "interest", note: "Our next IBA intake isn't announced yet; you can register interest." },
};
