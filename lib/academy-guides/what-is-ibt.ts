import type { Guide } from "./types";

// The definition and the role: what an IBT is, what it does and doesn't do,
// who it suits, and where it sits below IBA. Every figure is from CREDENTIALS
// (lib/academy-facts.ts), apart from our own coursework fee and hours.

export const guide: Guide = {
  slug: "what-is-ibt",
  category: "IBT",
  title: "What is IBT? The International Behavior Therapist credential explained",
  metaTitle: "What Is IBT? International Behavior Therapist in the UAE",
  description:
    "IBT is IBAO's entry-level ABA credential. What an International Behavior Therapist does, who it suits, how to earn it in the UAE, and how it leads to IBA.",
  keywords: [
    "what is IBT",
    "IBT certification meaning",
    "International Behavior Therapist UAE",
    "IBT credential Dubai",
    "what does an IBT do",
    "IBT in ABA",
    "IBT Abu Dhabi",
  ],
  answer:
    "IBT, short for International Behavior Therapist, is the entry-level credential in applied behaviour analysis (ABA) from IBAO, the International Behavior Analysis Organization. An IBT runs a learner's ABA programme day to day under a supervising analyst. You earn it with 40 hours of coursework, 300 hours of supervised practice and IBAO's online exam, and it is open to people living in the UAE.",
  keyFacts: [
    { label: "Full name", value: "International Behavior Therapist" },
    { label: "Issued by", value: "IBAO, the International Behavior Analysis Organization" },
    { label: "To earn it", value: "40 hours of coursework · 300 hours of supervised practice · IBAO's online exam" },
    { label: "Fee to IBAO", value: "US$120, exam included" },
    { label: "Open to UAE residents", value: "Yes" },
    { label: "Next step up", value: "IBA, IBAO's analyst-level credential" },
  ],
  sections: [
    {
      id: "what-it-means",
      heading: "What does IBT stand for, and who issues it?",
      blocks: [
        {
          type: "p",
          text: "IBT stands for International Behavior Therapist. It's a professional credential, not a course or a job title: IBAO, the International Behavior Analysis Organization, awards it to people who meet its requirements and pass its exam. The letters name the person too, so someone who holds the credential is an IBT.",
        },
        {
          type: "p",
          text: "The field is applied behaviour analysis, or ABA: a structured approach to teaching useful skills and reducing behaviour that gets in a learner's way. Skills are broken into small steps, progress is rewarded, and every session is recorded so the plan can be judged on evidence. IBT is the first rung of IBAO's ladder — the credential for the person who delivers an ABA programme, not the one who designs it.",
        },
      ],
    },
    {
      id: "what-an-ibt-does",
      heading: "What does an IBT do day to day?",
      blocks: [
        {
          type: "p",
          text: "An IBT works directly with a learner, often individually, carrying out the programme and behaviour plan a supervising analyst has written. Most of the day is teaching, responding to behaviour the way the plan sets out, and recording what happened, so the analyst can see what is working.",
        },
        {
          type: "list",
          items: [
            "Teaching skills in small, planned steps: communication, play, self-care, classroom routines, whatever the programme targets.",
            "Following the behaviour plan when challenging behaviour happens, calmly and the same way every time.",
            "Recording data in each session, such as how often a behaviour occurred or how much help a learner needed.",
            "Helping with assessments the analyst leads, for example by observing and taking notes.",
            "Reporting back to the supervisor and raising concerns early, rather than changing the plan alone.",
            "Working with the class teacher or the family, so the learner meets the same approach all day.",
          ],
        },
        {
          type: "p",
          text: "The setting shapes the job. In a school, an IBT may work as a shadow teacher or learning support assistant (LSA) beside a single child; at home, sessions fit around the family's routine; in a therapy centre, the IBT is part of a wider clinical team.",
        },
      ],
    },
    {
      id: "what-an-ibt-doesnt-do",
      heading: "What doesn't an IBT do?",
      blocks: [
        {
          type: "p",
          text: "An IBT doesn't design programmes, write behaviour plans or decide when a plan should change. Those decisions belong to the supervising analyst, who assesses the learner, sets the goals, reads the data and oversees the IBT's work. The IBT's part is to deliver the plan faithfully and report back accurately.",
        },
        {
          type: "table",
          caption: "Who does what in an ABA programme",
          head: ["Task", "IBT", "Supervising analyst"],
          rows: [
            ["Assessing the learner", "Helps, for example by recording data", "Leads the assessment"],
            ["Writing the programme and behaviour plan", "No", "Yes"],
            ["Running sessions day to day", "Yes", "Observes and gives feedback"],
            ["Recording data", "Yes, in every session", "Reviews and interprets it"],
            ["Changing goals or methods", "Reports what they see", "Decides"],
            ["Supervising other staff", "No", "Yes"],
          ],
        },
        {
          type: "p",
          text: "Diagnosis is outside the role too. If you want to be the one who assesses learners and designs programmes, you're aiming at analyst level, which at IBAO means IBA.",
        },
      ],
    },
    {
      id: "who-its-for",
      heading: "Who is the IBT credential for?",
      blocks: [
        {
          type: "p",
          text: "IBT suits people who want hands-on ABA work with children and are glad to learn under supervision. That includes learning support assistants, shadow teachers and special educational needs (SEN) assistants who already support a child, and newcomers such as psychology graduates who want a structured way into the field.",
        },
        {
          type: "list",
          items: [
            "You support a child at school or at home and want proper training, and a credential, behind what you already do.",
            "You're new to ABA and want a first step that builds real supervised experience.",
            "You're studying psychology or education and want practical experience before you go further.",
            "You're thinking about IBA later and would rather build towards it with the same board.",
          ],
        },
        {
          type: "p",
          text: "If you already hold a behaviour-analysis certification, look at IBAO's IBT Addition, at US$69, before the full route. Our [IBT Training](/courses/ibt-training) is written for the people in the list above: 40 hours, online, live or recorded, taught by a practising behaviour analyst (BCBA, IBA or QBA), for AED 1,499.",
        },
      ],
    },
    {
      id: "how-to-get-it",
      heading: "How do you become an IBT?",
      blocks: [
        {
          type: "p",
          text: "You meet three requirements, all set by IBAO: a 40-hour training, 300 hours of supervised practice and a pass in IBAO's online exam. Registering with IBAO costs US$120, and the exam is included.",
        },
        {
          type: "list",
          ordered: true,
          items: [
            "Coursework: 40 hours across IBAO's seven content areas. IBAO's requirements ask for it to come from an Approved Content Provider that IBAO recognises, so ask any provider, us included, before you pay. IBAO gives 2 to 10 weeks as the usual time.",
            "Supervised practice: 300 hours under a supervisor who meets IBAO's requirements, plus supervision-related tasks and activities.",
            "The exam: IBAO's own, taken online. Once you've met every requirement and passed, IBAO issues the credential.",
          ],
        },
        {
          type: "note",
          title: "Certificate or credential?",
          text: "A coursework certificate, ours included, shows you completed the training. The IBT itself comes only from IBAO.",
        },
        {
          type: "p",
          text: "The practical route, with timelines and costs, is in [how to become an IBT in the UAE](/guides/how-to-become-an-ibt-in-the-uae). Each requirement in detail, including what IBAO's pages leave unstated, is in [IBT requirements](/guides/ibt-requirements).",
        },
      ],
    },
    {
      id: "in-the-uae",
      heading: "Can you become an IBT if you live in the UAE?",
      blocks: [
        {
          type: "p",
          text: "Yes. Whether you live in Dubai, Abu Dhabi or anywhere else in the UAE, you can work towards the IBT: IBAO's credentials are international and open to UAE residents, and its exam is taken online. That matters here, because the BACB (Behavior Analyst Certification Board), which issues the RBT (Registered Behavior Technician), hasn't accepted new applicants living in the UAE since 1 January 2023.",
        },
        {
          type: "p",
          text: "The other technician credential open to UAE residents is the ABAT (Applied Behavior Analysis Technician) from QABA, the Qualified Applied Behavior Analysis Credentialing Board; [IBT vs ABAT vs RBT](/guides/ibt-vs-abat-vs-rbt) compares all three. And because IBT is an international credential rather than a UAE one, check with the employer, or the relevant regulator, if a role might need anything more.",
        },
      ],
    },
    {
      id: "ibt-and-iba",
      heading: "How does IBT relate to IBA?",
      blocks: [
        {
          type: "p",
          text: "IBA, the International Behavior Analyst, is the next step up IBAO's ladder. Where an IBT delivers a programme, an IBA assesses the learner, designs the programme and supervises the people running it, IBTs included.",
        },
        {
          type: "p",
          text: "The bar is much higher. IBA asks for a bachelor's degree, or the regional equivalent of two years of post-secondary study, for IBAO's Experience route, or a master's degree for its Graduate route. It also needs coursework covering IBAO's Required Educational Objectives and, for candidates registering on or after 1 October 2025, 1,500 practice hours and 75 hours of supervision, before IBAO's online exam. Registration is US$299, exam included.",
        },
        {
          type: "p",
          text: "Whether hours you log as an IBT count towards IBA is for IBAO to say, so ask before you plan around it. The full picture is in [IBA requirements](/guides/iba-requirements). Our own IBA intake isn't announced yet; you can register interest.",
        },
      ],
    },
  ],
  faqs: [
    {
      q: "What does IBT mean in ABA?",
      a: "In ABA, IBT means International Behavior Therapist: IBAO's credential for people who deliver behaviour-analytic programmes under a supervising analyst. It has nothing to do with the TOEFL iBT, an English-language test that happens to share the letters.",
    },
    {
      q: "Is IBT the same as RBT?",
      a: "No. Both are technician-level ABA credentials, but IBAO issues the IBT and the BACB issues the RBT. The BACB hasn't accepted new applicants living in the UAE since 1 January 2023, while IBT is open to them.",
    },
    {
      q: "Do I need a degree to become an IBT?",
      a: "IBAO sets the eligibility rules for IBT, and the IBAO pages we read in November 2026 don't state an education requirement. Confirm the current rules with IBAO before you register. A degree does come in at the next level: IBA asks for a bachelor's degree, or the regional equivalent of two years of post-secondary study.",
    },
    {
      q: "Can an IBT work without a supervisor?",
      a: "No. An IBT delivers a programme that a supervising analyst has designed and oversees; designing and running programmes independently is analyst-level work, which is what IBA is for. IBAO sets any ongoing supervision rules once you're credentialed, so check its current requirements.",
    },
    {
      q: "How long does IBT certification take?",
      a: "It depends mostly on your supervised hours. IBAO says the 40-hour coursework typically takes 2 to 10 weeks. At 20 supervised hours a week, the 300 hours take 15 weeks; at 10 a week, 30 weeks. Then comes IBAO's online exam.",
    },
    {
      q: "Is IBT recognised in the UAE?",
      a: "IBT is an international credential from IBAO, open to people living in the UAE; it isn't issued by a UAE authority. Employers set their own requirements, so ask the school, centre or agency you want to work for which credential it looks for, and check with the relevant regulator if a role needs more.",
    },
  ],
  sources: ["ibaoIbt", "ibaoIbtRequirements", "ibaoIba", "ibaoIbaRequirements", "ibaoOct2025", "qabaAbat", "bacbRbt", "bacbInternational"],
  relatedCourses: ["ibt-training", "iba-training"],
  relatedGuides: ["how-to-become-an-ibt-in-the-uae", "ibt-requirements", "ibt-vs-abat-vs-rbt", "iba-requirements"],
  published: "2026-11-12",
  updated: "2026-11-12",
};
