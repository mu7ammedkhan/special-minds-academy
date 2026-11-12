// Special Minds Academy — the training arm, on specialminds.academy.
//
// Single source of truth for the academy's copy. The IBT facts are not
// restated here: they come from lib/ibt.ts and lib/ibt-pathway.ts, which carry
// the sourcing notes (IBAO's published requirements, the fulfilment
// agreement's credential wording) and the rules that go with them — "BCBA, IBA
// or QBA", never "BCBA" alone; placement is best-effort, never guaranteed; no
// IBAO "Approved Content Provider" claim, because that status isn't confirmed.
// Those rules hold on every academy page too.
//
// Anything marked [confirm] is not yet confirmed by Special Minds and is
// written so it promises nothing: no fee, no date, no hours, no approval.
import type { FaqItem } from "@/lib/seo";
import { SITE } from "@/lib/site";
import { IBT_COHORT_1, IBT_TRAINER_NOTE } from "@/lib/ibt";
import { DEPOSIT_AED, BALANCE_AED, BALANCE_DUE_LABEL } from "@/lib/ibt-pathway";
import { ACADEMY_URL, MAIN_SITE_URL } from "@/lib/urls";

const aed = (n: number) => `AED ${n.toLocaleString("en-US")}`;

export const ACADEMY = {
  name: "Special Minds Academy",
  url: ACADEMY_URL,
  tagline: "ABA and SEN training, taught by people who do the work.",
  description:
    "IBT coursework, ABAT and IBA training and an LSA certificate course from Special Minds — taught by practising behaviour analysts, online, across the UAE.",
} as const;

/** Signed-in students land in their course; anyone else is asked to sign in first. */
export const STUDENT_LOGIN_URL = `${MAIN_SITE_URL}/portal/training`;
export const REGISTER_URL = `${MAIN_SITE_URL}/register`;
export const SIGN_IN_URL = `${MAIN_SITE_URL}/login`;

export const ACADEMY_WHATSAPP = `${SITE.contact.whatsapp}?text=${encodeURIComponent(
  "Hi! I'd like to know more about Special Minds Academy courses.",
)}`;

export type CourseSlug = "ibt-training" | "abat-training" | "iba-training" | "lsa-course";

export type Course = {
  slug: CourseSlug;
  href: string;
  code: string;
  name: string;
  /** The credential or award, as its issuer names it. */
  credential: string;
  /** A few words for tight spots: the hero's course stack. */
  tagline: string;
  level: string;
  summary: string;
  forWho: string;
  facts: { label: string; value: string }[];
  /** "open": takes payment today. "interest": the next intake isn't announced. */
  status: "open" | "interest";
  statusLabel: string;
  cta: string;
  image: string;
  /** Tailwind classes for the course's colour band. */
  band: string;
};

export const COURSES: Course[] = [
  {
    slug: "ibt-training",
    href: "/courses/ibt-training",
    code: "IBT",
    name: "IBT Training",
    credential: "International Behavior Therapist (IBT) coursework",
    tagline: "40-hour coursework, online",
    level: "Entry level",
    summary: `The ${IBT_COHORT_1.courseHours}-hour coursework IBAO requires for the IBT credential, taught by a practising behaviour analyst.`,
    forWho: "New and working LSAs, shadow teachers, SEN assistants and psychology students.",
    facts: [
      { label: "Length", value: `${IBT_COHORT_1.courseHours} hours` },
      { label: "Format", value: "100% online, live or recorded" },
      { label: "Fee", value: aed(IBT_COHORT_1.coursePriceAed) },
      { label: "Certificate", value: "Yes, verifiable online" },
    ],
    status: "open",
    statusLabel: "Enrolling now",
    cta: "See the course",
    image: "/images/conditions/learning-difficulties-dyslexia-support-dubai.jpg",
    band: "bg-amethyst",
  },
  {
    slug: "abat-training",
    href: "/courses/abat-training",
    code: "ABAT",
    name: "ABAT Training",
    credential: "Applied Behavior Analysis Technician (ABAT), issued by QABA",
    tagline: "QABA's technician credential",
    level: "Entry level",
    summary: "Training toward QABA's Applied Behavior Analysis Technician (ABAT) credential, the other international entry-level ABA credential.",
    forWho: "People starting in ABA who want QABA's technician credential, or both IBT and ABAT.",
    // [confirm] Not open: QABA only counts ABAT coursework from its approved
    // providers, and Special Minds' approval isn't confirmed. No fee, date,
    // format or approval is stated until it is — see docs/ACADEMY_CONFIRMATIONS.md.
    facts: [
      { label: "Level", value: "Technician" },
      { label: "Credential", value: "Issued by QABA" },
      { label: "Fee", value: "On request" },
      { label: "Status", value: "Not open yet" },
    ],
    status: "interest",
    statusLabel: "Coming: register interest",
    cta: "Register interest",
    image: "/images/audiences/families.jpg",
    band: "bg-ink",
  },
  {
    slug: "iba-training",
    href: "/courses/iba-training",
    code: "IBA",
    name: "IBA Training",
    credential: "International Behavior Analyst (IBA)",
    tagline: "The analyst-level credential",
    level: "Analyst level",
    summary: "For graduates moving into designing and supervising ABA programmes — the analyst-level credential from IBAO.",
    forWho: "Graduates already working in ABA who want to design programmes and supervise others.",
    // [confirm] format, length, fee and start date of Special Minds' IBA training.
    facts: [
      { label: "Level", value: "Analyst" },
      { label: "Credential", value: "Issued by IBAO" },
      { label: "Fee", value: "On request" },
      { label: "Certificate", value: "On completion" },
    ],
    status: "interest",
    statusLabel: "Next intake: register interest",
    cta: "Register interest",
    image: "/images/audiences/practitioners.jpg",
    band: "bg-amethyst-deep",
  },
  {
    slug: "lsa-course",
    href: "/courses/lsa-course",
    code: "LSA",
    name: "LSA Course",
    credential: "Learning Support Assistant certificate",
    tagline: "Classroom support, certified",
    level: "Classroom support",
    summary: "A practical course for the classroom side of special needs support, with a Special Minds certificate at the end.",
    forWho: "Anyone starting out, or already working, as an LSA, shadow teacher or SEN teaching assistant.",
    // [confirm] format, length, fee and start date of the LSA course.
    facts: [
      { label: "Level", value: "Foundation" },
      { label: "Setting", value: "UAE schools and nurseries" },
      { label: "Fee", value: "On request" },
      { label: "Certificate", value: "Special Minds certificate" },
    ],
    status: "interest",
    statusLabel: "Next intake: register interest",
    cta: "Register interest",
    image: "/images/audiences/schools.jpg",
    band: "bg-bronze",
  },
];

export const courseBySlug = (slug: CourseSlug) => COURSES.find((c) => c.slug === slug)!;

/** What the enquiry form's course picker offers, and what staff see on the lead. */
export const ENQUIRY_COURSES: { value: string; label: string }[] = [
  { value: "ibt-training", label: "IBT Training" },
  { value: "abat-training", label: "ABAT Training" },
  { value: "iba-training", label: "IBA Training" },
  { value: "lsa-course", label: "LSA Course" },
  { value: "supervision", label: "Supervision and competency assessment" },
  { value: "exam-prep", label: "Exam preparation" },
  { value: "workshops", label: "Workshops and CPD" },
  { value: "school-training", label: "Training for my school or centre" },
  { value: "info-session", label: "Free online information session" },
  { value: "not-sure", label: "Not sure yet" },
];

export const HOME_STATS = [
  { value: `${IBT_COHORT_1.courseHours}h`, label: "IBT coursework, the full requirement" },
  { value: "100%", label: "online, live or recorded" },
  { value: "Analyst-led", label: "every session: a BCBA, IBA or QBA" },
  // The same figure the Managed LSA page has carried since 2026-08 (lib/managed-lsa.ts).
  { value: "70+", label: "UAE schools that know our team" },
];

export const WHY_ACADEMY = [
  {
    title: "Taught by people who do the work",
    body: IBT_TRAINER_NOTE,
  },
  {
    title: "From a UAE placement team",
    body: "Special Minds places LSAs, shadow teachers and therapists in UAE schools and homes. We teach toward that work, and toward the credentials UAE employers ask for.",
  },
  {
    title: "A route into work",
    body: "IBT graduates can join the Special Minds placement pool, the network our own specialists are placed through. Placement is best-effort and never guaranteed.",
  },
  {
    title: "Certificates anyone can check",
    body: "Every IBT certificate carries a serial number. An employer can confirm it online in seconds, no account needed.",
  },
];

/** The student portal, as built — see docs/IBT_PORTAL.md. Nothing here is aspirational. */
export const PORTAL_FEATURES = [
  { title: "Video lessons with captions", body: "Stream on your phone or laptop. Your progress saves as you watch." },
  { title: "Lessons that unlock in order", body: "Each one opens when you've finished the one before, so nothing gets skipped." },
  { title: "Quizzes and a final assessment", body: "Module quizzes as you go, then the final assessment when the coursework is done." },
  { title: "Ask on any lesson", body: "Questions go to the teaching team; the useful answers are pinned for everyone." },
  { title: "Your certificate, on file", body: "Print it or save it as a PDF, with a serial an employer can verify." },
];

/** The ladder, in the order people climb it. */
export const CAREER_PATH = [
  {
    step: "LSA Course",
    href: "/courses/lsa-course",
    tag: "Start here",
    body: "Classroom support: the role, the child, the plan, the notes.",
  },
  {
    step: "IBT",
    href: "/courses/ibt-training",
    tag: "First ABA credential",
    body: `${IBT_COHORT_1.courseHours} hours of coursework, then 300 supervised practice hours and IBAO's exam.`,
  },
  {
    step: "IBA",
    href: "/courses/iba-training",
    tag: "Analyst level",
    body: "A degree, IBAO's coursework objectives, 1,500 practice hours, 75 hours of supervision and IBAO's exam.",
  },
];

// ---------------------------------------------------------------------------
// IBT — the course page's own words. The facts underneath are lib/ibt.ts and
// lib/ibt-pathway.ts; only the framing for the academy page lives here.
// ---------------------------------------------------------------------------

export const IBT_PLANS = {
  full: {
    key: "full" as const,
    label: "Pay in full",
    price: aed(IBT_COHORT_1.coursePriceAed),
    note: "Your seat is confirmed the moment you pay, and the coursework opens as soon as you create your account.",
    points: [
      `All ${IBT_COHORT_1.courseHours} hours of coursework`,
      "Certificate of completion",
      "Priority consideration for Special Minds placements",
    ],
  },
  deposit: {
    key: "deposit" as const,
    label: "Reserve with a deposit",
    price: aed(DEPOSIT_AED),
    note: `Holds your seat today. The remaining ${aed(BALANCE_AED)} is due ${BALANCE_DUE_LABEL}, and the coursework opens once it's settled.`,
    points: [
      `100% of the ${aed(DEPOSIT_AED)} goes toward the ${aed(IBT_COHORT_1.coursePriceAed)} fee`,
      `${aed(BALANCE_AED)} balance ${BALANCE_DUE_LABEL}`,
      "Non-refundable, unless we cancel your place",
    ],
  },
};

/** IBAO's route to the full credential. Sourced in lib/ibt.ts (IBT_VS_ABAT) and lib/ibt-pathway.ts. */
export const IBT_ROUTE = [
  { title: `${IBT_COHORT_1.courseHours} hours of coursework`, body: "This course. It completes the coursework requirement in full.", ours: true },
  { title: "300 supervised practice hours", body: "Working under a qualified supervisor, after or alongside the coursework.", ours: false },
  { title: "IBAO's online exam", body: "Registration and the exam are one combined fee of US$120, paid to IBAO.", ours: false },
  { title: "IBT credential issued", body: "By IBAO, the International Behavior Analysis Organization — not by us.", ours: false },
];

export const IBT_AFTER_ENROL = [
  { title: "Pay securely", body: "Through Ziina's secure checkout, in a couple of minutes." },
  { title: "Create your student account", body: `At specialminds.ae, with the same email you paid with — that's how the course unlocks itself.` },
  { title: "Work through the 40 hours", body: "Join live or watch the recordings, at your own pace." },
  { title: "Get your certificate", body: "Print it, save it, and add the serial to your CV." },
];

// ---------------------------------------------------------------------------
// IBA — IBAO's requirements, as published. Sources, read 2026-11-10:
//   IBAO, "International Behavior Analyst Requirements" (2021, v101) —
//     theibao.com/docs/IBA-Requirements-v101-ENG.pdf: the two routes (bachelor's
//     degree or regional equivalent of 2 years' post-secondary study for the
//     Experience route, master's for the Graduate route), the Required
//     Educational Objectives, supervision, the online exam.
//   IBAO, "The Revolution Continues" — academy.theibao.com/blog/revolution:
//     candidates registering on or after 1 October 2025 need 1,500 practice
//     hours (600 implementing, 600 programming, 300 either) and 75 supervision
//     hours (30 observing, 30 non-observing, 15 either); QBA, QASP-S (bridge
//     course alone) and BCaBA no longer qualify for the IBA Addition.
//   IBAO, theibao.com/apply-for-iba: registration US$299 including the exam;
//     IBA Addition US$99 for existing certificants.
// Special Minds' own IBA offering is [confirm]: none of its format, length,
// fee, dates, tutors or approval status is stated anywhere on the page.
// ---------------------------------------------------------------------------

export const IBA_REQUIREMENTS = [
  {
    title: "A degree",
    body: "A bachelor's degree, or the regional equivalent of two years of post-secondary study, for IBAO's Experience route; a master's degree for its Graduate route.",
  },
  {
    title: "IBAO's coursework objectives",
    body: "Coursework covering IBAO's Required Educational Objectives, the knowledge an analyst is expected to hold.",
  },
  {
    title: "1,500 practice hours",
    body: "600 implementing, 600 programming and 300 of either — the figure for candidates registering since 1 October 2025.",
  },
  {
    title: "75 hours of supervision",
    body: "30 observed, 30 non-observed and 15 of either, from a supervisor who meets IBAO's criteria.",
  },
  {
    title: "IBAO's online exam",
    body: "Registration with IBAO is US$299 and includes the exam, plus the skills testing and agreements on IBAO's checklist.",
  },
];

export const IBA_ROLE = [
  "Assessing a learner and writing the programme others will run",
  "Supervising IBTs, LSAs and therapists, and signing off their practice hours",
  "Reading the data, deciding what changes, and explaining why to families and schools",
];

export const IBA_FAQS: FaqItem[] = [
  {
    q: "What's the difference between IBT and IBA?",
    a: "IBT is the entry-level credential for people who run programmes under supervision. IBA is the analyst level: the person who assesses, designs the programme and supervises others. IBA needs a degree, much more coursework and practice, and its own IBAO exam.",
  },
  {
    q: "I already hold BCBA, BCaBA or QBA. Do I need the full route?",
    a: "IBAO offers an \"IBA Addition\" for some existing certifications, at US$99. Since 1 October 2025 it no longer accepts QBA, BCaBA or the QASP-S bridge course on its own. Check your own case with IBAO directly — the rules are theirs, and they change.",
  },
  {
    q: "When does the next intake start, and what does it cost?",
    a: "We'll announce the format, fee and dates for the next IBA intake shortly. Register your interest and you'll hear first, with no obligation.",
  },
  {
    q: "Who issues the IBA credential?",
    a: "IBAO, the International Behavior Analysis Organization. Training prepares you for it; IBAO decides whether you meet the requirements and holds the exam.",
  },
];

/** The UAE questions people search before choosing IBT. Figures: lib/academy-facts.ts. */
export const IBT_UAE_FAQS: FaqItem[] = [
  {
    q: "Can I become an IBT if I live in the UAE?",
    a: "Yes. IBAO is an international board and its IBT credential is open to people living in the UAE. That's not true of the BACB's RBT, which hasn't accepted new applicants living in the UAE since 1 January 2023.",
  },
  {
    q: "How much does it cost to become an IBT?",
    a: `Three parts: the coursework (ours is ${aed(IBT_COHORT_1.coursePriceAed)}), IBAO's US$120 registration, which includes the exam, and supervision for your 300 practice hours, which varies by supervisor.`,
  },
  {
    q: "How long does it take to become an IBT?",
    a: "IBAO says the 40-hour coursework typically takes 2 to 10 weeks. The 300 supervised practice hours depend on how many hours a week you work under supervision — at 20 hours a week, that's about 15 weeks.",
  },
  {
    q: "What's the difference between IBT and ABAT?",
    a: "Both are international technician credentials with 40 hours of coursework. IBT, from IBAO, then asks for 300 hours of supervised practice and leads to IBA; ABAT, from QABA, asks for 15 hours of supervised fieldwork and leads to QBA.",
  },
];

/** The analyst-level questions people search before choosing IBA. */
export const IBA_UAE_FAQS: FaqItem[] = [
  {
    q: "Can I become a BCBA if I live in the UAE?",
    a: "Not as a new applicant. Since 1 January 2023 the BACB only accepts new certification applications from people living in its authorised countries, and the UAE is not one of them. IBA, from IBAO, and QBA, from QABA, are the analyst-level credentials open to people living here.",
  },
  {
    q: "How long does the IBA take?",
    a: "Mostly as long as the practice takes: 1,500 hours for candidates registering since 1 October 2025, with 75 hours of supervision. At 30 practice hours a week, that's 50 weeks.",
  },
];

/** Classroom-support questions people search before choosing the LSA course. */
export const LSA_UAE_FAQS: FaqItem[] = [
  {
    q: "What's the difference between an LSA and a shadow teacher?",
    a: "The titles overlap. Both support children with additional needs in class; a shadow teacher usually works one-to-one with a single child, while an LSA may support several children or a whole class. Schools use the words differently, so read the job description.",
  },
  {
    q: "Do I need an ABA credential to work as an LSA?",
    a: "Not usually, though requirements vary by school and by the child's plan. Many LSAs and shadow teachers add an ABA credential such as IBT later, when they want to work more closely with a behaviour analyst's programme.",
  },
];

// ---------------------------------------------------------------------------
// LSA course. Everything below the role description is [confirm]: the
// syllabus is a working outline of what the course should cover, written so
// it promises no hours, fee or accreditation. Replace with the real syllabus.
// ---------------------------------------------------------------------------

export const LSA_COURSE_TOPICS = [
  { title: "The LSA's role in a UAE classroom", body: "Working beside the class teacher and the inclusion team, and where the job starts and stops." },
  { title: "Understanding the child", body: "Autism, ADHD, learning difficulties and speech and language needs — what each can look like in class." },
  { title: "Supporting behaviour", body: "Following a behaviour plan someone qualified has written, and staying calm when it's hard." },
  { title: "Notes and data", body: "Writing down what happened, accurately, so the plan can be judged on facts." },
  { title: "Working with families and schools", body: "Clear, kind communication, and knowing what to pass on to whom." },
  { title: "Professional practice", body: "Confidentiality, safeguarding and the child's dignity, every day." },
];

export const LSA_COURSE_FOR = [
  "You're starting out as an LSA or shadow teacher and want to walk in prepared.",
  "You already support a child in class and want structure behind what you do.",
  "You're a teaching assistant moving into one-to-one special needs support.",
];

export const LSA_COURSE_FAQS: FaqItem[] = [
  {
    q: "Is the LSA course the same as IBT?",
    a: "No. The LSA course is about the classroom role itself. IBT is an ABA credential from IBAO, with its own coursework, supervised hours and exam. Many people take the LSA course first and IBT next.",
  },
  {
    q: "Do I get a certificate?",
    a: "Yes — a Special Minds certificate of completion when you finish the course.",
  },
  {
    q: "When is the next intake, and what does it cost?",
    a: "We'll announce the format, fee and dates shortly. Register your interest and you'll hear first, with no obligation.",
  },
  {
    q: "Will the course help me find LSA work?",
    a: "It prepares you for the role. Special Minds places LSAs and shadow teachers in UAE schools, and we look at course graduates first — but no course can guarantee a job.",
  },
];

// ---------------------------------------------------------------------------
// More training (/training): what UAE training providers sell around the core
// courses — supervision, competency checks, exam prep, short workshops, school
// training, free information sessions. All [confirm]: each is a "register
// interest" offer with no fee, date, hours or approval stated, until Special
// Minds decides what it will run (docs/ACADEMY_CONFIRMATIONS.md).
// ---------------------------------------------------------------------------

export type TrainingOffer = {
  /** The #anchor on /training, and the enquiry form's course value. */
  slug: "supervision" | "exam-prep" | "workshops" | "school-training" | "info-session";
  title: string;
  who: string;
  body: string;
  points: string[];
};

export const TRAINING_OFFERS: TrainingOffer[] = [
  {
    slug: "supervision",
    title: "Supervision and competency assessment",
    who: "IBT and ABAT candidates, including people who trained elsewhere",
    body: "Both technician credentials need supervised practice before they're issued: 300 hours for IBT, 15 hours of fieldwork for ABAT. We're planning supervision with a practising behaviour analyst, with your hours recorded the way the board asks for them.",
    points: [
      "Supervised practice hours toward IBT or ABAT",
      "Competency checks before you sit the exam",
      "Online, with a practising behaviour analyst (BCBA, IBA or QBA)",
    ],
  },
  {
    slug: "exam-prep",
    title: "Exam preparation",
    who: "Anyone preparing for a technician exam",
    body: "Revision built on the same question bank our IBT students use: practice questions across IBAO's seven content areas, timed mock exams, and a clear view of the topics to go back to.",
    points: ["Practice questions by topic", "Timed mock exams", "Your weak spots, by content area"],
  },
  {
    slug: "workshops",
    title: "Workshops and CPD",
    who: "Teachers, SENCOs, LSAs, therapists and parents",
    body: "Short, practical sessions on one topic at a time — for example supporting behaviour in the classroom, taking notes that help a plan, working well with a shadow teacher, or ABA explained for parents.",
    points: ["A few hours, one topic", "Practical, with real classroom examples", "A certificate of attendance"],
  },
  {
    slug: "school-training",
    title: "Training for your school or centre",
    who: "Schools, nurseries and therapy centres",
    body: "Your LSAs and teaching assistants trained together, around your calendar. Tell us what your team needs and we'll propose a plan.",
    points: ["Built around your team and your learners", "Online or in person", "From the team that places LSAs in UAE schools"],
  },
  {
    slug: "info-session",
    title: "Free online information sessions",
    who: "Anyone weighing up IBT, ABAT or IBA",
    body: "What each credential involves, how long it takes, what it costs and who it suits — with time for your own questions. Free, online, no obligation.",
    points: ["IBT, ABAT and IBA explained", "Live questions and answers", "Free"],
  },
];

// ---------------------------------------------------------------------------
// ABAT (/courses/abat-training). QABA's requirements come from CREDENTIALS in
// lib/academy-facts.ts. The course itself is [confirm]: QABA only counts ABAT
// coursework from its approved providers, and Special Minds' approval isn't
// confirmed, so nothing here says or implies that it is.
// ---------------------------------------------------------------------------

export const ABAT_ROLE = [
  "Delivering a learner's ABA programme, as the supervising analyst wrote it",
  "Teaching new skills and following the behaviour plan, at school, at home or in a centre",
  "Recording data accurately, so the analyst can judge what's working",
];

export const ABAT_FAQS: FaqItem[] = [
  {
    q: "What is an ABAT?",
    a: "An Applied Behavior Analysis Technician: QABA's entry-level ABA credential for people who deliver ABA programmes under a supervisor. You need to be 18 or older with a high school diploma, complete 40 hours of approved coursework and 15 hours of supervised fieldwork, and pass QABA's exam.",
  },
  {
    q: "Is your ABAT course open?",
    a: "Not yet. QABA only counts ABAT coursework from its approved coursework providers, so we'll say plainly on this page if and when our course is approved. Register your interest and you'll hear first.",
  },
  {
    q: "Can I do IBT now and ABAT later?",
    a: "Yes. They're issued by different boards — IBT by IBAO, ABAT by QABA — and nothing stops you holding both. Our IBT coursework is open now; each board decides separately which coursework it accepts.",
  },
  {
    q: "What does the ABAT cost?",
    a: "QABA's certification fee is US$125, with retakes charged separately. Course fees are set by the coursework provider; we'll publish ours when the course opens.",
  },
  {
    q: "Is the ABAT open to people living in the UAE?",
    a: "Yes. QABA is an international board, and its credentials are open to people living in the UAE — unlike the BACB's RBT, which hasn't taken new applicants living in the UAE since 1 January 2023.",
  },
];

// ---------------------------------------------------------------------------
// Academy-wide questions (home and courses pages).
// ---------------------------------------------------------------------------

export const ACADEMY_FAQS: FaqItem[] = [
  {
    q: "Which course should I start with?",
    a: "New to the field, or already supporting a child in class without formal training: the LSA course. Ready for an ABA credential: IBT, which is open now, or ABAT, which we'll open later. Holding a degree and moving into programme design and supervision: IBA.",
  },
  {
    q: "Is Special Minds Academy part of Special Minds?",
    a: "Yes. It's the training arm of Special Minds, which places LSAs, shadow teachers and therapists in UAE schools and homes under clinical supervision.",
  },
  {
    q: "Are the courses online?",
    a: "IBT is 100% online — join sessions live or work through the recordings. Formats for IBA and the LSA course are announced with each intake.",
  },
  {
    q: "Who issues the IBT, ABAT and IBA credentials?",
    a: "IBAO, the International Behavior Analysis Organization, issues IBT and IBA. QABA, the Qualified Applied Behavior Analysis Credentialing Board, issues ABAT. Our courses give you the training and a certificate of completion; the board issues the credential once you meet its requirements and pass its exam.",
  },
  {
    q: "How do I sign in to my course?",
    a: "Use Student login at the top of any page. It's the same account as before, on specialminds.ae, where your lessons, quizzes and certificate live.",
  },
  {
    q: "Does a course guarantee a job?",
    a: "No course can. IBT graduates can join the Special Minds placement pool and we actively look for openings that fit, but placement always depends on the role and is never guaranteed.",
  },
];
