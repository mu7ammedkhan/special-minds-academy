import type { Guide } from "./types";

// The flagship comparison, and the model for every other guide: answer first,
// one figure per claim, every figure from CREDENTIALS (lib/academy-facts.ts).

export const guide: Guide = {
  slug: "ibt-vs-abat-vs-rbt",
  category: "IBT",
  title: "IBT vs ABAT vs RBT: which ABA technician credential in the UAE?",
  metaTitle: "IBT vs ABAT vs RBT in the UAE: Which to Choose",
  description:
    "IBT, ABAT and RBT compared for the UAE: who issues each, coursework, supervised hours, exam and fees — and why RBT is closed to new UAE applicants.",
  keywords: [
    "IBT vs ABAT",
    "IBT vs RBT",
    "ABAT vs RBT",
    "ABA technician certification UAE",
    "behaviour technician credential Dubai",
    "IBT or ABAT which is better",
    "RBT in UAE",
  ],
  answer:
    "IBT (from IBAO) and ABAT (from QABA) are the two ABA technician credentials open to people living in the UAE. Both start with 40 hours of coursework; IBT then asks for 300 hours of supervised practice, ABAT for 15 hours of supervised fieldwork. The BACB's RBT has not taken new applicants living in the UAE since 1 January 2023.",
  keyFacts: [
    { label: "Open to UAE residents", value: "IBT: yes · ABAT: yes · RBT: no new applicants since 1 January 2023" },
    { label: "Coursework", value: "40 hours for each" },
    { label: "Supervised practice", value: "IBT: 300 hours · ABAT: 15 hours of fieldwork" },
    { label: "Fee to the board", value: "IBT: US$120, exam included · ABAT: US$125" },
    { label: "Next step up", value: "IBT → IBA · ABAT → QASP-S → QBA" },
  ],
  sections: [
    {
      id: "what-they-are",
      heading: "What are IBT, ABAT and RBT?",
      blocks: [
        {
          type: "p",
          text: "All three are entry-level credentials for the person who delivers an ABA programme day to day: teaching skills, following the behaviour plan and recording data, under the direction of a supervising analyst. What differs is who issues them, how much supervised practice they ask for, and who can apply.",
        },
        {
          type: "table",
          caption: "The three technician credentials and who issues them",
          head: ["Credential", "Full name", "Issued by"],
          rows: [
            ["IBT", "International Behavior Therapist", "IBAO, the International Behavior Analysis Organization"],
            ["ABAT", "Applied Behavior Analysis Technician", "QABA, the Qualified Applied Behavior Analysis Credentialing Board"],
            ["RBT", "Registered Behavior Technician", "BACB, the Behavior Analyst Certification Board"],
          ],
        },
      ],
    },
    {
      id: "side-by-side",
      heading: "IBT, ABAT and RBT side by side",
      blocks: [
        {
          type: "p",
          text: "The requirements below are each board's own, as published in November 2026. Boards change their rules, so check the source before you register.",
        },
        {
          type: "table",
          caption: "IBT vs ABAT vs RBT, requirement by requirement",
          head: ["", "IBT (IBAO)", "ABAT (QABA)", "RBT (BACB)"],
          rows: [
            ["Open to people living in the UAE", "Yes", "Yes", "No new applicants since 1 January 2023"],
            ["Eligibility", "Set by IBAO", "18 or older, high school diploma or equivalent", "Set by the BACB"],
            ["Coursework", "40-hour training across IBAO's seven content areas", "40 hours, including 3 of ethics and 5 of autism core knowledge", "40-hour training"],
            ["Supervised practice", "300 hours", "15 hours of fieldwork, 1 hour of supervision per 10", "Ongoing close supervision"],
            ["Exam", "IBAO's online exam", "125 questions, 2 hours, 72% to pass", "BACB exam through Pearson VUE"],
            ["Fee to the board", "US$120, exam included", "US$125", "Set by the BACB"],
            ["Renewal", "Set by IBAO", "Every 2 years, 12 CEUs", "Set by the BACB"],
            ["Next step up", "IBA", "QASP-S, then QBA", "BCaBA or BCBA"],
          ],
        },
      ],
    },
    {
      id: "rbt-in-the-uae",
      heading: "Why isn't the RBT an option in the UAE?",
      blocks: [
        {
          type: "p",
          text: "Since 1 January 2023 the BACB only accepts new certification applications from people living in its authorised countries, and the UAE is not one of them. That closes the RBT — and the BCaBA and BCBA above it — to new applicants based here.",
        },
        {
          type: "p",
          text: "People who already hold a BACB certification keep it for now, the BACB says, but it warns that this may change as countries build their own systems. That is why IBAO's and QABA's credentials, which are open internationally, are the ones most people training in the UAE now work toward. There's more in [Can I become an RBT or BCBA in the UAE?](/guides/can-i-become-an-rbt-or-bcba-in-the-uae).",
        },
      ],
    },
    {
      id: "choosing",
      heading: "IBT or ABAT: how do you choose?",
      blocks: [
        {
          type: "p",
          text: "Both are legitimate international credentials, and neither is a shortcut. The real differences are how much supervised practice you complete before you're credentialed, and which analyst-level credential you're heading toward.",
        },
        {
          type: "list",
          items: [
            "Supervised practice. IBT asks for 300 hours, ABAT for 15 hours of fieldwork. IBT takes longer, and you arrive with far more supervised experience behind you.",
            "Where it leads. IBT leads to IBA, IBAO's analyst level. ABAT leads to QASP-S and then QBA, QABA's analyst level.",
            "Switching boards later. Since 1 October 2025, IBAO no longer accepts QBA, BCaBA or the QASP-S bridge course on its own for its shorter IBA Addition route — so if IBA is your goal, it makes sense to start on IBAO's ladder.",
            "Your employer. Ask the schools, centres or agencies you want to work for which credential they look for. Special Minds' own placements are built around IBT.",
          ],
        },
        {
          type: "note",
          title: "Can you hold both?",
          text: "Yes. They're issued by different boards, and nothing stops you holding IBT and ABAT together. Each board decides for itself which coursework it accepts, so a single 40-hour course only counts for both if both boards accept it.",
        },
      ],
    },
    {
      id: "coursework",
      heading: "What does the 40 hours of coursework cover?",
      blocks: [
        {
          type: "p",
          text: "IBAO's IBT training covers seven content areas: disabilities, behavioural basics, data collection, assistance in assessment procedures, teaching skills, challenging behaviours, and professionalism. IBAO says it typically takes 2 to 10 weeks.",
        },
        {
          type: "p",
          text: "QABA's ABAT coursework is 40 hours of approved, assessment-based training, including 3 hours of ethics and 5 hours of autism core knowledge, developed or delivered by a master's-level professional in ABA and autism. QABA accepts it from its approved coursework providers.",
        },
      ],
    },
    {
      id: "with-us",
      heading: "Training for IBT or ABAT with Special Minds Academy",
      blocks: [
        {
          type: "p",
          text: "Our [IBT Training](/courses/ibt-training) is open now: the 40 hours of coursework, online, live or recorded, taught by a practising behaviour analyst (BCBA, IBA or QBA), for AED 1,499. Our [ABAT Training](/courses/abat-training) isn't open yet — register your interest and you'll hear first.",
        },
      ],
    },
  ],
  faqs: [
    {
      q: "Is IBT or ABAT better?",
      a: "Neither is better in general. IBT asks for 300 hours of supervised practice and leads to IBAO's IBA; ABAT asks for 15 hours of fieldwork and leads to QABA's QBA. Choose by the analyst level you're aiming for and what your employer asks for.",
    },
    {
      q: "Can I become an RBT if I live in the UAE?",
      a: "Not as a new applicant. Since 1 January 2023 the BACB only accepts new applications from people living in its authorised countries, and the UAE is not one of them. People already certified keep their certification for now.",
    },
    {
      q: "Which is quicker to get, IBT or ABAT?",
      a: "ABAT, usually, because it asks for 15 hours of supervised fieldwork against IBT's 300 hours of supervised practice. Both start with 40 hours of coursework.",
    },
    {
      q: "Does one 40-hour course count for both IBT and ABAT?",
      a: "Only if both boards accept it. QABA counts ABAT coursework from its approved providers, and IBAO's IBT requirements ask for an Approved Content Provider. Ask any provider which board has approved its course.",
    },
    {
      q: "How much do IBT and ABAT cost?",
      a: "The board fees are US$120 for IBT, exam included, and US$125 for ABAT. The coursework provider charges separately; our IBT coursework is AED 1,499.",
    },
    {
      q: "Is ABAT the same as RBT?",
      a: "No. Both are technician-level credentials, but ABAT is issued by QABA and is open to people living in the UAE, while RBT is issued by the BACB, which hasn't taken new applicants living in the UAE since 1 January 2023.",
    },
  ],
  sources: ["ibaoIbt", "ibaoIbtRequirements", "qabaAbat", "qabaProviders", "bacbRbt", "bacbInternational", "ibaoOct2025"],
  relatedCourses: ["ibt-training", "abat-training"],
  relatedGuides: ["what-is-ibt", "what-is-abat", "can-i-become-an-rbt-or-bcba-in-the-uae", "how-to-become-an-ibt-in-the-uae"],
  published: "2026-11-12",
  updated: "2026-11-12",
};
