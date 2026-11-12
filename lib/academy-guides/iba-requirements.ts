import type { Guide } from "./types";

// IBAO's IBA requirements in detail: the two routes, the coursework, the hours
// for candidates registering on or after 1 October 2025, the exam and fees, and
// the IBA Addition. Figures from CREDENTIALS.iba (lib/academy-facts.ts); every
// week count is arithmetic on those figures, shown where it's used.

export const guide: Guide = {
  slug: "iba-requirements",
  category: "Analyst level",
  title: "IBA requirements: IBAO's routes, hours, exam and fees",
  metaTitle: "IBA Requirements: IBAO Hours, Supervision and Fees",
  description:
    "IBAO's IBA requirements: the Experience and Graduate routes, 1,500 practice and 75 supervision hours from 1 October 2025, the exam, fees and the IBA Addition.",
  keywords: [
    "IBA requirements",
    "IBAO IBA requirements 2025",
    "International Behavior Analyst UAE",
    "IBA supervision hours",
    "IBA certification Dubai",
    "IBA 1500 practice hours",
    "IBA Addition",
    "how to become an IBA in Abu Dhabi",
  ],
  answer:
    "IBAO's International Behavior Analyst (IBA) credential asks for a bachelor's degree, or the regional equivalent of two years of post-secondary study, on its Experience route, or a master's on its Graduate route. You also need coursework covering IBAO's Required Educational Objectives and, if registering on or after 1 October 2025, 1,500 practice hours and 75 supervision hours, then IBAO's online exam. Registration is US$299, exam included.",
  keyFacts: [
    { label: "Open to UAE residents", value: "Yes: IBAO credentials are international" },
    {
      label: "Education",
      value: "Experience route: a bachelor's, or the regional equivalent of two years of post-secondary study · Graduate route: a master's",
    },
    {
      label: "Practice hours",
      value: "1,500 for candidates registering on or after 1 October 2025: 600 implementing, 600 programming, 300 of either",
    },
    { label: "Supervision hours", value: "75: 30 observing, 30 non-observing, 15 of either" },
    { label: "Fee to IBAO", value: "US$299, exam included · IBA Addition: US$99" },
  ],
  sections: [
    {
      id: "routes",
      heading: "Which IBA route fits your education?",
      blocks: [
        {
          type: "p",
          text: "The qualification you hold decides it. IBAO's Experience route accepts a bachelor's degree, or the regional equivalent of two years of post-secondary study. Its Graduate route is for people with a master's degree.",
        },
        {
          type: "table",
          caption: "IBAO's two routes to the IBA",
          head: ["Route", "Education IBAO asks for"],
          rows: [
            ["Experience route", "A bachelor's degree, or the regional equivalent of two years of post-secondary study"],
            ["Graduate route", "A master's degree"],
          ],
        },
        {
          type: "p",
          text: "Post-secondary means study after school, at a college, institute or university. If your qualifications don't map neatly onto either route — a diploma from one country and a degree from another, say — ask IBAO which route applies before you register. That decision is IBAO's, not your training provider's.",
        },
      ],
    },
    {
      id: "coursework",
      heading: "What coursework does the IBA need?",
      blocks: [
        {
          type: "p",
          text: "Coursework that covers IBAO's Required Educational Objectives: its list of what an International Behavior Analyst is expected to know. IBAO sets them out in its [IBA requirements document](https://theibao.com/docs/IBA-Requirements-v101-ENG.pdf), and a course toward the IBA should be able to show you how it covers them. Before you pay for one, ask the provider these questions.",
        },
        {
          type: "list",
          items: [
            "Does it cover all of IBAO's Required Educational Objectives, or only some?",
            "Who teaches it, and which credential do they hold?",
            "What will you have at the end to show IBAO you've completed it?",
            "Is supervision for your practice hours included, or arranged separately?",
          ],
        },
      ],
    },
    {
      id: "hours",
      heading: "How many practice and supervision hours does the IBA need?",
      blocks: [
        {
          type: "p",
          text: "For candidates registering on or after 1 October 2025, IBAO asks for 1,500 practice hours and 75 supervision hours. Each total is split into set parts plus a flexible remainder, so the kind of work you log matters as much as the amount.",
        },
        {
          type: "table",
          caption: "IBA hours for candidates registering on or after 1 October 2025",
          head: ["", "Total", "How it splits"],
          rows: [
            ["Practice hours", "1,500", "600 implementing + 600 programming + 300 of either"],
            ["Supervision hours", "75", "30 observing + 30 non-observing + 15 of either"],
          ],
        },
        {
          type: "list",
          items: [
            "Implementing: broadly, delivering programmes with learners.",
            "Programming: broadly, designing them — assessing, writing and adjusting programmes, and working from the data.",
            "Observing supervision: your supervisor watches you work.",
            "Non-observing supervision: supervision that doesn't involve watching you work, such as going through your programmes and data together.",
            "Of either: the remaining 300 practice hours and 15 supervision hours can be any mix of the two kinds.",
          ],
        },
        {
          type: "p",
          text: "IBAO's requirements define exactly what counts as each kind of hour, and your supervisor must meet IBAO's criteria. Hours logged under someone who doesn't may not count.",
        },
        {
          type: "note",
          title: "Registered before 1 October 2025?",
          text: "These figures are for candidates registering on or after that date. If you registered earlier, ask IBAO which rules apply to you.",
        },
      ],
    },
    {
      id: "planning-the-hours",
      heading: "How long will 1,500 practice hours take you?",
      blocks: [
        {
          type: "p",
          text: "Divide 1,500 by the qualifying hours you can log each week. At 30 hours a week that's 50 weeks, just under a year; at 10 hours a week it's 150 weeks, just under three years. Count only the hours that meet IBAO's rules, not every hour you work.",
        },
        {
          type: "table",
          caption: "Weeks to reach 1,500 practice hours (1,500 ÷ hours a week)",
          head: ["Practice hours a week", "Weeks", "Roughly"],
          rows: [
            ["10", "150", "Just under three years"],
            ["20", "75", "About 17 months"],
            ["30", "50", "Just under a year"],
            ["40", "37.5", "Under nine months"],
          ],
        },
        {
          type: "p",
          text: "Watch the split as well as the total. If only 5 hours of your week are programming work, the 600 programming hours alone take 120 weeks, however many sessions you run. Ask your supervisor early for assessment and programme-writing work, so both parts grow together.",
        },
        {
          type: "p",
          text: "Supervision runs alongside. Spread evenly, 75 supervision hours across 1,500 practice hours is 1 hour for every 20, or 1.5 hours a week at a 30-hour pace. That's a planning sum, not IBAO's rule: agree a schedule with your supervisor that meets IBAO's requirements.",
        },
      ],
    },
    {
      id: "exam-and-fees",
      heading: "What do the IBA exam and registration involve?",
      blocks: [
        {
          type: "p",
          text: "You register with IBAO for US$299, and the fee includes its online exam. Alongside the exam, you complete the skills testing and agreements on IBAO's checklist.",
        },
        {
          type: "p",
          text: "IBAO sets the exam's format and the IBA's renewal rules, and boards revise their rules, so read IBAO's current versions before you book. Coursework and supervision sit outside IBAO's fee and are priced by whoever provides them; ask your employer whether supervision can be arranged through work.",
        },
      ],
    },
    {
      id: "iba-addition",
      heading: "Who can still use the IBA Addition?",
      blocks: [
        {
          type: "p",
          text: "Only people whose existing certification IBAO still accepts for it. The IBA Addition is IBAO's route, at US$99, for people who already hold certain other certifications — and since 1 October 2025, QBA, BCaBA and the QASP-S bridge course on its own no longer qualify.",
        },
        {
          type: "p",
          text: "QBA is QABA's analyst-level credential; BCaBA, or Board Certified Assistant Behavior Analyst, is the BACB's assistant level; QASP-S is the QABA step between its ABAT technician credential and the QBA. If you hold one of these and want the IBA, expect to meet IBAO's full requirements — the education, coursework, hours and exam above — unless IBAO tells you otherwise, and check your own case with IBAO before you pay. [IBA vs BCBA vs QBA](/guides/iba-vs-bcba-vs-qba) covers moving between boards.",
        },
      ],
    },
    {
      id: "who-it-suits",
      heading: "Who is the IBA for, and where should you start?",
      blocks: [
        {
          type: "p",
          text: "The IBA suits graduates already working in ABA (applied behaviour analysis) who want to move from delivering programmes to designing them: assessing a learner, writing the programme, reading the data and supervising the people who run it.",
        },
        {
          type: "list",
          items: [
            "IBTs and behaviour therapists who meet one of IBAO's education routes and are ready to design programmes, not only deliver them.",
            "LSAs and shadow teachers with the education for a route, who are moving into ABA work and can start building practice hours.",
            "Graduates living in the UAE who want an analyst credential, now that the BACB's BCBA is closed to new applicants here.",
          ],
        },
        {
          type: "p",
          text: "Not at analyst level yet? The IBT, IBAO's technician credential, is the step below — see [IBT requirements](/guides/ibt-requirements).",
        },
        {
          type: "p",
          text: "Our [IBA Training](/courses/iba-training) intake isn't announced yet. Register your interest and we'll tell you the format, fee and dates once they're set, with no obligation. For the step below, our 40-hour [IBT coursework](/courses/ibt-training) is open now: online, live or recorded, taught by a practising behaviour analyst (BCBA, IBA or QBA), for AED 1,499.",
        },
      ],
    },
  ],
  faqs: [
    {
      q: "How long does it take to become an IBA?",
      a: "Mostly as long as your 1,500 practice hours take: 75 weeks at 20 qualifying hours a week, or 50 weeks at 30. Add time for the coursework and the exam, and for the education your route needs, if you don't have it yet.",
    },
    {
      q: "How much does the IBA cost?",
      a: "IBAO charges US$299 to register, and that includes the exam. The IBA Addition, for people whose existing certification still qualifies, is US$99. Coursework and supervision are paid for separately, to whoever provides them.",
    },
    {
      q: "Can I become an IBA with a bachelor's degree?",
      a: "Yes. IBAO's Experience route accepts a bachelor's degree, or the regional equivalent of two years of post-secondary study; the Graduate route is for people with a master's. If you're not sure which applies to you, ask IBAO before you register.",
    },
    {
      q: "I'm a QBA or BCaBA. Can I get the IBA through the Addition?",
      a: "Not on that alone. Since 1 October 2025 IBAO no longer accepts QBA, BCaBA or the QASP-S bridge course on its own for the IBA Addition. Unless you hold another certification it accepts, plan for the full requirements, and confirm your case with IBAO.",
    },
    {
      q: "Who can supervise my IBA hours?",
      a: "Someone who meets IBAO's criteria for IBA supervisors. Check the criteria in IBAO's requirements before you start logging, because hours supervised by someone who doesn't meet them may not count.",
    },
    {
      q: "Is the IBA recognised in the UAE?",
      a: "IBAO's credentials are international and open to people living in the UAE. Whether a school, centre or other employer accepts the IBA for a particular role is their decision, so ask them; if the role needs a licence, check with the regulator too.",
    },
    {
      q: "Can I take the IBA exam from the UAE?",
      a: "IBAO's exam is an online exam, and its credentials are open to people living in the UAE. IBAO sets the exam's format and rules, so check its current requirements before you register.",
    },
  ],
  sources: ["ibaoIba", "ibaoIbaRequirements", "ibaoOct2025", "ibaoIbt", "qabaAbat", "bacbInternational"],
  relatedCourses: ["iba-training", "ibt-training"],
  relatedGuides: ["iba-vs-bcba-vs-qba", "aba-career-path-uae", "ibt-requirements"],
  published: "2026-11-12",
  updated: "2026-11-12",
};
