import type { Guide } from "./types";

// The BACB's residency rule (from 1 January 2023) and what it means for people
// living in the UAE, at technician and analyst level, with the open
// alternatives. Figures come from CREDENTIALS in lib/academy-facts.ts. The
// BACB's authorised countries are deliberately not listed, because they
// change: link the BACB's own FAQ instead.

export const guide: Guide = {
  slug: "can-i-become-an-rbt-or-bcba-in-the-uae",
  category: "Careers and training",
  title: "Can I become an RBT or BCBA in the UAE?",
  metaTitle: "RBT or BCBA in the UAE? BACB Rules and Alternatives",
  description:
    "Since 1 January 2023 the BACB hasn't taken new RBT, BCaBA or BCBA applicants living in the UAE. What that means for you, and the credentials still open here.",
  keywords: [
    "RBT in UAE",
    "can I become a BCBA in Dubai",
    "BACB UAE residents",
    "RBT certification Dubai",
    "BCBA alternative UAE",
    "BCBA in Abu Dhabi",
    "BACB 2023 international changes",
  ],
  answer:
    "Not as a new applicant. Since 1 January 2023 the Behavior Analyst Certification Board (BACB), which issues the RBT, BCaBA and BCBA, has only accepted new applications from people living in its authorised countries, and the UAE isn't one. Existing certificants keep theirs for now. If you live here, the open routes are IBT or ABAT at technician level, and IBA or QBA at analyst level.",
  keyFacts: [
    { label: "New applicants living in the UAE", value: "Not accepted for the RBT, BCaBA or BCBA since 1 January 2023" },
    { label: "Already BACB-certified", value: "Still valid for now, the BACB says, though it warns this may change" },
    { label: "Lapsed BACB certification", value: "No past-certification route back unless you live in an authorised country" },
    { label: "Open at technician level", value: "IBT (IBAO) · ABAT (QABA)" },
    { label: "Open at analyst level", value: "IBA (IBAO) · QBA (QABA)" },
  ],
  sections: [
    {
      id: "the-2023-rule",
      heading: "What did the BACB change on 1 January 2023?",
      blocks: [
        {
          type: "p",
          text: "Since 1 January 2023, the Behavior Analyst Certification Board (BACB) has accepted new certification applications only from people who live in one of its authorised countries. The UAE isn't among them, so if you're based in Dubai, Abu Dhabi, Sharjah or anywhere else in the UAE, you can't start a BACB credential as a new applicant.",
        },
        {
          type: "p",
          text: "The rule applies at both levels: to the Registered Behavior Technician (RBT) at technician level, and to the Board Certified Assistant Behavior Analyst (BCaBA) and Board Certified Behavior Analyst (BCBA) at analyst level. The list of authorised countries can change, so check [the BACB's own FAQ on its 2023 international changes](https://www.bacb.com/faqs-about-the-2023-international-changes/) for the current position, rather than a list copied elsewhere.",
        },
        {
          type: "table",
          caption: "The BACB's credentials and people living in the UAE, as of November 2026",
          head: ["BACB credential", "Level", "New applicants living in the UAE", "Open here instead"],
          rows: [
            ["RBT", "Technician", "Not accepted since 1 January 2023", "IBT (IBAO) or ABAT (QABA)"],
            ["BCaBA", "Analyst", "Not accepted since 1 January 2023", "IBA (IBAO), or QBA (QABA) with a master's"],
            ["BCBA", "Analyst", "Not accepted since 1 January 2023", "IBA (IBAO) or QBA (QABA)"],
          ],
        },
        {
          type: "p",
          text: "The rule is about new applicants. People who already hold a BACB certification are in a different position, and so are people whose certification has lapsed; both are covered below.",
        },
      ],
    },
    {
      id: "rbt",
      heading: "Can you become an RBT if you live in the UAE?",
      blocks: [
        {
          type: "p",
          text: "No, not as a new applicant. At technician level, the two credentials open to you are the International Behavior Therapist (IBT), from IBAO, the International Behavior Analysis Organization, and the Applied Behavior Analysis Technician (ABAT), from QABA, the Qualified Applied Behavior Analysis Credentialing Board.",
        },
        {
          type: "p",
          text: "Both cover the same kind of work as the RBT: delivering a learner's ABA (applied behaviour analysis) programme under a supervising analyst. Each begins with 40 hours of coursework, and supervised practice is where they part: 300 hours for IBT, with US$120 to register with IBAO, exam included; 15 hours of fieldwork for ABAT, plus QABA's exam and a US$125 certification fee.",
        },
        {
          type: "p",
          text: "If the RBT was your plan, the nearest step is to choose between IBT and ABAT. Three questions settle most of it: how much supervised practice you want behind you before you're credentialed, which analyst-level credential you might aim for later, and what the employers you'd like to work for ask for. [IBT vs ABAT vs RBT](/guides/ibt-vs-abat-vs-rbt) compares all three in detail.",
        },
      ],
    },
    {
      id: "bcba",
      heading: "Can you become a BCBA if you live in the UAE?",
      blocks: [
        {
          type: "p",
          text: "Not as a new applicant, and the same goes for the BCaBA. At analyst level, the credentials open to people living in the UAE are IBAO's International Behavior Analyst (IBA) and QABA's Qualified Behavior Analyst (QBA). Both are for people who assess learners, design programmes and supervise technicians.",
        },
        {
          type: "table",
          caption: "The analyst-level credentials open to people living in the UAE",
          head: ["", "IBA (IBAO)", "QBA (QABA)"],
          rows: [
            [
              "Degree",
              "A bachelor's, or the regional equivalent of two years of post-secondary study, for the Experience route; a master's for the Graduate route",
              "A master's in ABA, education, special education, psychology, social work or a related field",
            ],
            ["Coursework", "Covering IBAO's Required Educational Objectives", "270 hours (18 semester credits), including 20 of ethics and 20 of autism core knowledge"],
            ["Supervised practice", "1,500 practice hours and 75 supervision hours, for candidates registering since 1 October 2025", "2,000 hours of supervised fieldwork"],
            ["Fee to the board", "US$299, exam included", "US$350 application and exam fee"],
          ],
        },
        {
          type: "p",
          text: "Your degree narrows the choice: a bachelor's opens IBAO's Experience route, while the QBA and IBAO's Graduate route both need a master's. [IBA vs BCBA vs QBA](/guides/iba-vs-bcba-vs-qba) compares the three analyst credentials side by side.",
        },
      ],
    },
    {
      id: "already-certified",
      heading: "What if you're already BACB-certified and living in the UAE?",
      blocks: [
        {
          type: "p",
          text: "For now, the BACB says, your certification remains valid. Its caveat is that this may change as countries build their own systems, so treat it as today's position rather than a permanent one.",
        },
        {
          type: "p",
          text: "Keep your certification current. If it lapses while you live here, you can't reapply through the BACB's past-certification route, which is only open to people living in an authorised country, and new applications are closed to you as well.",
        },
        {
          type: "p",
          text: "What this means day to day depends on your level. RBTs practise under the close supervision of an RBT Supervisor or Requirements Coordinator, so if you're an RBT, keep that arrangement in place. If you're a BCBA, IBAO's supervisor requirements list BCBA, along with IBA and QBA, among the credentials accepted for supervising IBT candidates.",
        },
        {
          type: "p",
          text: "If you'd like a credential that doesn't depend on the BACB's residency rule, IBAO offers additions for people who already hold one: the IBT Addition at US$69, for existing behaviour-analysis certificants, and the IBA Addition at US$99. Since 1 October 2025 the IBA Addition no longer accepts BCaBA, QBA or the QASP-S bridge course on its own. Check with IBAO whether your certification qualifies before you plan around either.",
        },
      ],
    },
    {
      id: "which-route",
      heading: "Which route is open to you?",
      blocks: [
        {
          type: "p",
          text: "If you live in the UAE, your routes run through IBAO and QABA: IBT or ABAT if you're starting out, IBA or QBA once you hold the degree the analyst level asks for. Where you start depends on what you already have.",
        },
        {
          type: "table",
          caption: "Open routes for people living in the UAE, by starting point",
          head: ["Your starting point", "Open route"],
          rows: [
            ["New to ABA, or working as a learning support assistant (LSA) or shadow teacher without a credential", "IBT (IBAO) or ABAT (QABA)"],
            ["A bachelor's degree, or the regional equivalent of two years of post-secondary study", "IBA, through IBAO's Experience route"],
            ["A master's degree", "IBA through IBAO's Graduate route, or QBA if your master's is in a field QABA accepts"],
            ["Already BACB-certified", "Keep it current, and ask IBAO whether its additions apply to you"],
          ],
        },
        {
          type: "p",
          text: "Our [IBT Training](/courses/ibt-training) is open for enrolment: 40 hours of coursework, taught by a practising behaviour analyst (BCBA, IBA or QBA), online and live or recorded, for AED 1,499. Our [ABAT Training](/courses/abat-training) isn't open yet, and QABA only counts ABAT coursework from its approved providers. Our next [IBA intake](/courses/iba-training) isn't announced. You can register interest in either.",
        },
      ],
    },
  ],
  faqs: [
    {
      q: "Can I take the RBT exam if I live in Dubai or Abu Dhabi?",
      a: "No, not while you live here. The BACB's rule is about where you live: since 1 January 2023 it has only accepted new certification applications from people living in its authorised countries, and the UAE isn't one. IBT and ABAT are the technician credentials open to you here.",
    },
    {
      q: "Will my RBT or BCBA stay valid if I move to the UAE?",
      a: "For now, yes: the BACB says existing certifications currently remain valid. It adds that this could change as countries develop their own systems, so follow its updates and don't let your certification lapse.",
    },
    {
      q: "My BACB certification has lapsed. Can I reapply from the UAE?",
      a: "Not through the BACB's past-certification route, which is only open to people living in an authorised country. New applications are closed to people living in the UAE too, so an IBAO or QABA credential is the open route while you're here.",
    },
    {
      q: "I've done the 40-hour RBT training. Does it count toward IBT or ABAT?",
      a: "Only if the board accepts it. IBAO and QABA each decide which coursework they count; QABA, for example, only counts ABAT coursework from its approved providers. Ask the board about your course before you rely on it.",
    },
    {
      q: "What can I do instead of the BCBA in the UAE?",
      a: "Look at IBAO's IBA and QABA's QBA, the analyst-level credentials open to people living here. The IBA has a route for bachelor's holders as well as one for master's graduates, while the QBA needs a master's in ABA or a related field.",
    },
    {
      q: "Could the UAE become a BACB authorised country?",
      a: "That's the BACB's decision, and its list of authorised countries can change. Plan around the rules as they stand, and check the BACB's international FAQ before any decision that depends on it.",
    },
    {
      q: "Do UAE employers accept IBT or ABAT instead of the RBT?",
      a: "That depends on the employer, so ask before you commit. Each school, centre or agency decides which credentials it looks for, and any licensing question is for the regulator. Graduates of our IBT coursework can join the Special Minds placement pool, though placement is best-effort and never guaranteed.",
    },
  ],
  sources: ["bacbInternational", "bacbRbt", "ibaoIbt", "ibaoIbtRequirements", "qabaAbat", "ibaoIba", "ibaoIbaRequirements", "ibaoOct2025", "qabaQba"],
  relatedCourses: ["ibt-training", "abat-training", "iba-training"],
  relatedGuides: ["ibt-vs-abat-vs-rbt", "iba-vs-bcba-vs-qba", "aba-career-path-uae", "what-is-abat"],
  published: "2026-11-12",
  updated: "2026-11-12",
};
