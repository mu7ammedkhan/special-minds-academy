import type { Guide } from "./types";

// The reference page: each IBT requirement as IBAO states it, what IBAO's
// pages leave unstated, and a checklist. Every figure is from CREDENTIALS and
// IBT_CONTENT_AREAS (lib/academy-facts.ts), apart from our own coursework fee
// and hours. The content-area descriptions are plain summaries, not IBAO's text.

export const guide: Guide = {
  slug: "ibt-requirements",
  category: "IBT",
  title: "IBT requirements in 2026: coursework, supervised practice, exam and fee",
  metaTitle: "IBT Requirements 2026: Coursework, Hours, Exam, Fee",
  description:
    "IBAO's IBT requirements, checked November 2026: 40-hour training, its seven content areas, 300 supervised hours, who can supervise, the exam and US$120 fee.",
  keywords: [
    "IBT requirements",
    "IBAO IBT requirements 2026",
    "IBT supervision hours",
    "IBT exam fee",
    "IBT 40 hour training",
    "IBT eligibility",
    "IBT Addition",
    "IBT requirements UAE",
  ],
  answer:
    "For the IBT (International Behavior Therapist), IBAO, the International Behavior Analysis Organization, asks for a 40-hour training covering its seven content areas, from an Approved Content Provider it recognises; 300 hours of supervised practice, plus supervision-related tasks and activities; and its online exam. Registration costs US$120, exam included. People already holding a behaviour-analysis certification can apply for the IBT Addition, US$69. IBAO also sets eligibility and renewal.",
  keyFacts: [
    { label: "Coursework", value: "40 hours across IBAO's seven content areas, from an IBAO-recognised Approved Content Provider" },
    { label: "Supervised practice", value: "300 hours, plus supervision-related tasks and activities" },
    { label: "Supervisor", value: "Must meet IBAO's requirements; BCBA, IBA and QBA are among the accepted credentials" },
    { label: "Exam", value: "IBAO's online exam" },
    { label: "Fees", value: "US$120 to register, exam included · IBT Addition: US$69" },
    { label: "Checked", value: "November 2026, against IBAO's IBT page and IBT Requirements (2021, v100)" },
  ],
  sections: [
    {
      id: "at-a-glance",
      heading: "What are the IBT requirements?",
      blocks: [
        {
          type: "p",
          text: "IBAO, the International Behavior Analysis Organization, asks IBT candidates to complete a 40-hour training, log 300 hours of supervised practice and pass its online exam. Its credentials are international and open to people living in the UAE, so these are the requirements you work to here. The table sums up each one from IBAO's own pages, checked in November 2026.",
        },
        {
          type: "table",
          caption: "IBAO's IBT requirements at a glance",
          head: ["Requirement", "What IBAO asks for"],
          rows: [
            ["Eligibility", "Set by IBAO; check its current rules before you register"],
            ["Coursework", "A 40-hour training covering seven content areas, from an IBAO-recognised Approved Content Provider"],
            ["Supervised practice", "300 hours, plus supervision-related tasks and activities"],
            ["Supervisor", "Must meet IBAO's supervisor requirements; accepted credentials include BCBA, IBA and QBA"],
            ["Exam", "IBAO's online exam"],
            ["Fee", "US$120 to register, exam included"],
            ["Already certified", "The IBT Addition, US$69, for people who already hold a behaviour-analysis certification"],
            ["Renewal", "Set by IBAO; check its current rules"],
          ],
        },
        {
          type: "p",
          text: "The sources are IBAO's International Behavior Therapist page and its [IBT Requirements document](https://theibao.com/docs/IBT-Requirements-v100.pdf) (2021, v100). New to the credential? Start with [what an IBT is and does](/guides/what-is-ibt).",
        },
      ],
    },
    {
      id: "coursework",
      heading: "What must the 40-hour training cover?",
      blocks: [
        {
          type: "p",
          text: "It must cover IBAO's seven content areas and come from a provider IBAO recognises as an Approved Content Provider. IBAO says the training typically takes 2 to 10 weeks, which works out at 20 hours a week at the quick end (40 ÷ 2) and 4 hours a week at the slow end (40 ÷ 10).",
        },
        {
          type: "table",
          caption: "IBAO's seven IBT content areas",
          head: ["Content area", "What it covers"],
          rows: [
            ["Disabilities", "The developmental disabilities and support needs you're likely to meet, and how they can affect learning"],
            ["Behavioural basics", "The core principles of applied behaviour analysis (ABA) that every programme rests on"],
            ["Data collection", "Recording behaviour and progress accurately, so the analyst can judge what's working"],
            ["Assistance in assessment procedures", "Helping a supervising analyst with assessments, without running them yourself"],
            ["Teaching skills", "Practical methods for teaching new skills, step by step"],
            ["Challenging behaviours", "Understanding behaviour that harms or gets in the way, and responding to it under the supervisor's plan"],
            ["Professionalism", "Ethical, professional conduct with learners, families and colleagues"],
          ],
        },
        {
          type: "p",
          text: "A course that covers these topics isn't necessarily one IBAO accepts, so ask any provider, us included, whether IBAO recognises it, and confirm with IBAO. Our [IBT Training](/courses/ibt-training) is a 40-hour online course, live or recorded, taught by a practising behaviour analyst (BCBA, IBA or QBA), for AED 1,499.",
        },
      ],
    },
    {
      id: "supervised-practice",
      heading: "What are the supervised practice requirements?",
      blocks: [
        {
          type: "p",
          text: "IBAO asks for 300 hours of supervised practice, plus supervision-related tasks and activities, overseen by a supervisor who meets its requirements. Those supervisor requirements name BCBA, IBA and QBA among the credentials IBAO accepts.",
        },
        {
          type: "table",
          caption: "Supervisor credentials named in IBAO's IBT requirements",
          head: ["Credential", "Full name", "Issued by"],
          rows: [
            ["BCBA", "Board Certified Behavior Analyst", "BACB, the Behavior Analyst Certification Board"],
            ["IBA", "International Behavior Analyst", "IBAO"],
            ["QBA", "Qualified Behavior Analyst", "QABA, the Qualified Applied Behavior Analysis Credentialing Board"],
          ],
        },
        {
          type: "p",
          text: "Hours count only if they meet IBAO's rules, so settle the detail with your supervisor before you start: which activities count, how sessions are recorded, and how the supervision-related tasks fit in. IBAO's requirements document is the reference for all of it, including the full criteria a supervisor must meet.",
        },
      ],
    },
    {
      id: "exam-and-fee",
      heading: "What is the IBT exam, and what does it cost?",
      blocks: [
        {
          type: "p",
          text: "The exam is IBAO's own and is taken online. Registering with IBAO costs US$120, and the exam is included in that fee.",
        },
        {
          type: "p",
          text: "The US$120 covers IBAO's side only. You pay your coursework provider for the 40 hours (AED 1,499 with us) and your supervisor for supervision, at a fee that varies from one supervisor to the next. If you already hold a behaviour-analysis certification, the IBT Addition, covered next, is US$69.",
        },
      ],
    },
    {
      id: "ibt-addition",
      heading: "What is the IBT Addition?",
      blocks: [
        {
          type: "p",
          text: "The IBT Addition is IBAO's application for people who already hold a behaviour-analysis certification and want the IBT as well. It costs US$69, compared with US$120 for standard registration.",
        },
        {
          type: "p",
          text: "IBAO decides which certifications qualify and what you need to send, so check your own case with IBAO before you apply. These lists change: from 1 October 2025 IBAO narrowed which certifications qualify for its separate IBA Addition. Don't rely on older advice for either.",
        },
      ],
    },
    {
      id: "check-with-ibao",
      heading: "Which IBT rules should you check directly with IBAO?",
      blocks: [
        {
          type: "p",
          text: "Three things: the exam's format, length and pass mark; eligibility, including any education requirement; and renewal. The IBAO pages we checked in November 2026 don't set these out, so we don't state them here, and you should get them from IBAO itself.",
        },
        {
          type: "list",
          items: [
            "Exam details. IBAO runs the exam online, but its format, length and pass mark aren't on the pages we read. Ask IBAO when you register.",
            "Eligibility. IBAO sets who can apply, and the pages we read state no education requirement for IBT. The next level differs: IBAO's [IBA requirements](/guides/iba-requirements) start at a bachelor's degree, or the regional equivalent of two years of post-secondary study.",
            "Renewal. Whether the IBT has to be renewed, how often and on what conditions is IBAO's to say.",
          ],
        },
        {
          type: "p",
          text: "If anyone quotes you a pass mark, a minimum age or a renewal cycle for the IBT, ask where it comes from, and check it with IBAO before you act on it.",
        },
      ],
    },
    {
      id: "checklist",
      heading: "Have you covered every IBT requirement? A checklist",
      blocks: [
        {
          type: "p",
          text: "You have when every line below is ticked, from IBAO's rules and your coursework provider through to the exam and renewal. If a line is unclear, settle it with IBAO or your supervisor before moving on.",
        },
        {
          type: "list",
          ordered: true,
          items: [
            "Read IBAO's current IBT page and requirements document, including the eligibility rules.",
            "Confirm with IBAO that your coursework provider is an Approved Content Provider it recognises.",
            "Complete the 40-hour training across all seven content areas, and keep your certificate.",
            "Agree supervision with someone who meets IBAO's supervisor requirements, including how hours will be recorded.",
            "Log 300 hours of supervised practice and complete the supervision-related tasks and activities.",
            "Register with IBAO (US$120, exam included) and pass its online exam.",
            "Find out IBAO's renewal rules, so you know what keeping the credential involves.",
          ],
        },
        {
          type: "p",
          text: "For the practical side, from choosing a provider and finding a supervisor to the timeline and total cost, see [how to become an IBT in the UAE](/guides/how-to-become-an-ibt-in-the-uae).",
        },
      ],
    },
  ],
  faqs: [
    {
      q: "How many hours do you need for the IBT?",
      a: "340 hours in all: 40 hours of training plus 300 hours of supervised practice (40 + 300 = 340). The supervision-related tasks and activities IBAO lists, and the exam, come on top.",
    },
    {
      q: "How much is the IBT exam fee?",
      a: "US$120, paid to IBAO, covers registration and the exam together. If you already hold a behaviour-analysis certification, the IBT Addition is US$69. Coursework and supervision are paid for separately.",
    },
    {
      q: "Does any 40-hour course count towards the IBT?",
      a: "No. IBAO's requirements ask for a 40-hour training that covers its seven content areas and comes from an Approved Content Provider IBAO recognises. Check a provider's standing with IBAO before you pay, especially for a course designed for another credential.",
    },
    {
      q: "Can a BCBA in the UAE supervise my IBT hours?",
      a: "IBAO lists BCBA among the credentials it accepts for supervising IBT candidates, alongside IBA and QBA. The BACB hasn't accepted new applicants living in the UAE since 1 January 2023, but it says people already certified keep their certification for now. Check with IBAO that your supervisor meets its full criteria.",
    },
    {
      q: "Do I need to renew the IBT?",
      a: "IBAO sets the renewal rules, and the IBAO pages we checked in November 2026 don't spell them out. Ask IBAO what renewal involves when you register, so it doesn't catch you out later.",
    },
    {
      q: "Have IBAO's IBT requirements changed recently?",
      a: "The requirements document we checked is IBAO's 2021 version (v100), read alongside its IBT page in November 2026. IBAO does revise its rules: it changed the IBA requirements for candidates registering from 1 October 2025. Re-check IBAO's own pages before you register.",
    },
  ],
  sources: ["ibaoIbt", "ibaoIbtRequirements", "ibaoIba", "ibaoIbaRequirements", "ibaoOct2025", "qabaQba", "bacbInternational"],
  relatedCourses: ["ibt-training"],
  relatedGuides: ["how-to-become-an-ibt-in-the-uae", "what-is-ibt", "iba-requirements", "ibt-vs-abat-vs-rbt"],
  published: "2026-11-12",
  updated: "2026-11-12",
};
