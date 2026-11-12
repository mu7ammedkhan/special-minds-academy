import type { Guide } from "./types";

// The analyst-level comparison: IBA, QBA and BCBA for someone living in the
// UAE. Figures from CREDENTIALS.iba, .qba and .bcba (lib/academy-facts.ts);
// where the facts file says "set by the BACB", so does this guide.

export const guide: Guide = {
  slug: "iba-vs-bcba-vs-qba",
  category: "Analyst level",
  title: "IBA vs BCBA vs QBA: which behaviour analyst credential can you get in the UAE?",
  metaTitle: "IBA vs BCBA vs QBA: Analyst Credentials in the UAE",
  description:
    "IBA, BCBA and QBA compared for the UAE: issuer, degree, coursework, hours, exam, fees and renewal, and why the BCBA is closed to new applicants living here.",
  keywords: [
    "IBA vs BCBA",
    "QBA vs BCBA",
    "IBA vs QBA",
    "BCBA alternative UAE",
    "behaviour analyst certification UAE",
    "BCBA in Dubai",
    "IBA or QBA which is better",
  ],
  answer:
    "If you live in the UAE, you can work toward the IBA, from IBAO, or the QBA, from QABA; the BACB's BCBA hasn't taken new applicants living here since 1 January 2023. The IBA accepts a bachelor's degree on its Experience route and asks new candidates for 1,500 practice hours. The QBA needs a master's degree, 270 hours of coursework and 2,000 hours of supervised fieldwork.",
  keyFacts: [
    { label: "Open to UAE residents", value: "IBA: yes · QBA: yes · BCBA: no new applicants since 1 January 2023" },
    {
      label: "Education",
      value: "IBA: a bachelor's, or the regional equivalent of two years of post-secondary study (Experience route), or a master's (Graduate route) · QBA: a master's · BCBA: a master's",
    },
    {
      label: "Supervised hours",
      value: "IBA: 1,500 practice + 75 supervision, if registering on or after 1 October 2025 · QBA: 2,000 of fieldwork",
    },
    { label: "Fee to the board", value: "IBA: US$299, exam included · QBA: US$350 · BCBA: set by the BACB" },
    { label: "Renewal", value: "IBA: set by IBAO · QBA: every 2 years, 32 CEs · BCBA: set by the BACB" },
  ],
  sections: [
    {
      id: "what-they-are",
      heading: "What do IBA, QBA and BCBA have in common?",
      blocks: [
        {
          type: "p",
          text: "All three are analyst-level credentials, for the person who assesses a learner, writes the ABA (applied behaviour analysis) programme, decides from the data what changes, and supervises the technicians who deliver it. Each is a different board's analyst level, with that board's technician credential below it.",
        },
        {
          type: "table",
          caption: "The three analyst credentials and each board's ladder",
          head: ["Credential", "Full name", "The board's ladder"],
          rows: [
            ["IBA", "International Behavior Analyst", "IBT → IBA"],
            ["QBA", "Qualified Behavior Analyst", "ABAT → QASP-S → QBA"],
            ["BCBA", "Board Certified Behavior Analyst", "RBT → BCaBA (the assistant level) or BCBA"],
          ],
        },
      ],
    },
    {
      id: "side-by-side",
      heading: "How do IBA, QBA and BCBA compare, requirement by requirement?",
      blocks: [
        {
          type: "p",
          text: "IBA and QBA differ most in the education they ask for and the hours you log. The BCBA column is short because its detail doesn't help new applicants living in the UAE, who can't apply. Every figure comes from the board's own pages, read in November 2026; they do change, so check the current version before you register.",
        },
        {
          type: "table",
          caption: "IBA vs QBA vs BCBA, requirement by requirement",
          head: ["", "IBA (IBAO)", "QBA (QABA)", "BCBA (BACB)"],
          rows: [
            [
              "Issuer",
              "International Behavior Analysis Organization",
              "Qualified Applied Behavior Analysis Credentialing Board",
              "Behavior Analyst Certification Board",
            ],
            ["Open to people living in the UAE", "Yes", "Yes", "No new applicants since 1 January 2023"],
            [
              "Eligibility",
              "Experience route: a bachelor's degree, or the regional equivalent of two years of post-secondary study. Graduate route: a master's degree",
              "A master's degree from an accredited institution in ABA, education, special education, psychology, social work or a related field",
              "A master's degree, under the BACB's rules, and new applicants must live in a BACB-authorised country",
            ],
            [
              "Coursework",
              "Covering IBAO's Required Educational Objectives",
              "270 hours (18 semester credits), including 20 of ethics and 20 of autism core knowledge",
              "Graduate-level behaviour-analytic coursework, as the BACB specifies",
            ],
            [
              "Practice or fieldwork",
              "1,500 practice hours and 75 supervision hours, for candidates registering on or after 1 October 2025",
              "2,000 hours of supervised fieldwork: at least 1,200 indirect, at most 800 direct",
              "Supervised fieldwork, as the BACB specifies",
            ],
            [
              "Exam",
              "IBAO's online exam, plus the skills testing and agreements on its checklist",
              "QABA's QBA exam, proctored by Premier Proctoring",
              "The BACB's BCBA exam",
            ],
            ["Fee to the board", "US$299, exam included", "US$350 for application and exam; US$225 to retake", "Set by the BACB"],
            ["Renewal", "Set by IBAO", "Every 2 years, with 32 CEs", "Set by the BACB"],
          ],
        },
      ],
    },
    {
      id: "bcba-in-the-uae",
      heading: "Why is the BCBA closed to new applicants in the UAE?",
      blocks: [
        {
          type: "p",
          text: "The BACB has a residency rule. Since 1 January 2023 it only accepts new certification applications from people who live in one of its authorised countries, and the UAE isn't on that list. The rule applies across the BACB's credentials, from the technician-level RBT to the BCaBA and the BCBA.",
        },
        {
          type: "p",
          text: "If you already hold the BCBA, the BACB says you keep your certification for now. If you're starting out here, the realistic analyst-level choice is between IBA and QBA. [Can I become an RBT or BCBA in the UAE?](/guides/can-i-become-an-rbt-or-bcba-in-the-uae) goes through the BACB's rules in more detail.",
        },
      ],
    },
    {
      id: "choosing",
      heading: "IBA or QBA: how do you choose?",
      blocks: [
        {
          type: "p",
          text: "Start with your education. With a bachelor's degree but no master's, the IBA's Experience route is open to you and the QBA isn't yet. With a master's, both are, and the choice turns on the hours, the coursework and which board's ladder you're already on.",
        },
        {
          type: "list",
          items: [
            "Hours. The IBA asks for 1,500 practice hours plus 75 hours of supervision. The QBA asks for 2,000 hours of supervised fieldwork, at least 1,200 of them indirect, in oversight or supervision, and no more than 800 direct, working with learners yourself.",
            "Coursework. The QBA asks for 270 hours of approved coursework (18 semester credits), including 20 hours of ethics and 20 of autism core knowledge. The IBA's coursework has to cover IBAO's Required Educational Objectives; [IBA requirements](/guides/iba-requirements) sets out the rest of IBAO's rules.",
            "Cost and upkeep. IBA registration is US$299 with the exam; the QBA's application and exam fee is US$350, or US$225 to retake. The QBA renews every 2 years with 32 CEs, or continuing education credits; IBAO sets the IBA's renewal rules.",
            "The ladder you're on. IBT leads to the IBA; ABAT leads to QASP-S and then the QBA. If you already hold one board's technician credential, its analyst level is the natural next step.",
            "Where you want to work. Employers decide which credentials they accept for a role, so ask the schools and centres you're aiming at before you commit to a board.",
          ],
        },
        {
          type: "note",
          title: "Started toward the QBA before 1 January 2026?",
          text: "QABA still lets candidates who began before that date qualify on 1,500 hours, if they finish within three years of starting. Check your own dates with QABA.",
        },
      ],
    },
    {
      id: "switching",
      heading: "Can you switch boards later?",
      blocks: [
        {
          type: "p",
          text: "You can, but since 1 October 2025 it has been harder to move from QABA's ladder to IBAO's. IBAO no longer accepts QBA, BCaBA or the QASP-S bridge course on its own for the IBA Addition, its US$99 route for people who already hold certain certifications. A QBA who later wants the IBA should plan on IBAO's standard route rather than the Addition, and confirm the details with IBAO.",
        },
        {
          type: "p",
          text: "The practical lesson is to choose your board early. Each board counts hours and coursework under its own rules, so a late change of mind can mean meeting a second set of requirements. Going the other way, QABA sets its own requirements for anyone moving to the QBA, so check those with QABA.",
        },
      ],
    },
    {
      id: "with-us",
      heading: "How can Special Minds Academy help?",
      blocks: [
        {
          type: "p",
          text: "With the IBAO route: IBT coursework you can take now, and an IBA intake you can register interest in. Our next [IBA Training](/courses/iba-training) intake isn't announced, so there's no fee or date to give yet; register and you'll hear first.",
        },
        {
          type: "p",
          text: "At technician level? Our [IBT coursework](/courses/ibt-training) is open now: 40 hours online, live or recorded, for AED 1,499, with every session taught by a practising behaviour analyst (BCBA, IBA or QBA).",
        },
        {
          type: "p",
          text: "Not sure where you fit yet? You can register interest in a [free online information session](/training#info-session) on IBT, ABAT and IBA, with time for your own questions.",
        },
      ],
    },
  ],
  faqs: [
    {
      q: "Is the IBA equivalent to the BCBA?",
      a: "No. Both are analyst-level credentials, but they come from different boards with different requirements. In the UAE the difference that matters most is access: the IBA is open to people living here, and the BCBA hasn't taken new applicants living here since 1 January 2023.",
    },
    {
      q: "Which is more widely accepted in the UAE, IBA or QBA?",
      a: "Both are international credentials open to people living in the UAE, and acceptance is up to each employer. Ask the schools and centres you'd like to work for which one they look for, and where a licence is involved, ask the regulator as well.",
    },
    {
      q: "Can I get the QBA with a bachelor's degree?",
      a: "No. QABA asks for a master's degree from an accredited institution in ABA, education, special education, psychology, social work or another related field. With a bachelor's, the IBA's Experience route is the one of these three open to you.",
    },
    {
      q: "Which takes longer, IBA or QBA?",
      a: "On hours, the QBA: 2,000 hours of supervised fieldwork against the IBA's 1,500 practice hours. At 25 hours a week, that's 80 weeks against 60. The QBA also asks for 270 hours of coursework and a master's degree.",
    },
    {
      q: "Which costs less, IBA or QBA?",
      a: "In board fees, the IBA: US$299 to register with IBAO, exam included, against US$350 for QABA's application and exam, or US$225 to retake. Coursework and supervision are separate from the board fee on either route.",
    },
    {
      q: "I'm already a BCBA in the UAE. Should I add the IBA or QBA?",
      a: "That's your decision. The BACB says people already certified keep their certification for now. If you're thinking about the IBA, ask IBAO whether your certification qualifies for its US$99 IBA Addition; IBAO sets that list.",
    },
    {
      q: "Can I hold the IBA and the QBA at the same time?",
      a: "Yes. They're issued by different boards, so holding one doesn't stop you holding the other. Each board decides which coursework and hours it accepts, so don't assume anything carries across.",
    },
  ],
  sources: ["ibaoIba", "ibaoIbaRequirements", "ibaoOct2025", "qabaQba", "bacbInternational", "ibaoIbt", "qabaAbat", "bacbRbt"],
  relatedCourses: ["iba-training", "ibt-training"],
  relatedGuides: ["iba-requirements", "can-i-become-an-rbt-or-bcba-in-the-uae", "aba-career-path-uae", "ibt-vs-abat-vs-rbt"],
  published: "2026-11-12",
  updated: "2026-11-12",
};
