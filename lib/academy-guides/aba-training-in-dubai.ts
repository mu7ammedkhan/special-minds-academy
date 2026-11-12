import type { Guide } from "./types";

// How to choose ABA training in Dubai and the UAE: one checklist that holds
// every provider, us included, to the same questions. Board figures come from
// CREDENTIALS (lib/academy-facts.ts); our own offer from COURSES and
// TRAINING_OFFERS (lib/academy.ts). Nothing here says or implies that a board
// has approved our coursework.

export const guide: Guide = {
  slug: "aba-training-in-dubai",
  category: "Careers and training",
  title: "ABA training in Dubai and the UAE: how to choose a course",
  metaTitle: "ABA Training in Dubai: How to Choose a Course",
  description:
    "How to choose ABA training in Dubai and the UAE: the credential and board it leads to, whether that board accepts the course, who teaches, and the full cost.",
  keywords: [
    "ABA training Dubai",
    "ABA course UAE",
    "ABA certification Dubai online",
    "behaviour therapist course Dubai",
    "ABA courses Abu Dhabi",
    "how to choose an ABA course",
    "ABA course fees Dubai",
  ],
  answer:
    "Choose an ABA course in Dubai or anywhere in the UAE by what it leads to: a named credential, such as IBAO's IBT or QABA's ABAT, and evidence that the board accepts this provider's coursework. Then check who teaches, whether supervised practice is on offer, how certificates are verified and the full cost, board fee included. Treat any job guarantee as a red flag.",
  keyFacts: [
    { label: "Open to UAE residents", value: "Technician: IBT (IBAO), ABAT (QABA) · Analyst: IBA (IBAO), QBA (QABA)" },
    { label: "Closed to new UAE applicants", value: "RBT, BCaBA and BCBA (BACB), since 1 January 2023" },
    { label: "Coursework", value: "40 hours for IBT or ABAT, from a provider the board accepts" },
    { label: "Board fee, on top of the course", value: "IBT: US$120, exam included · ABAT: US$125, retakes extra" },
    { label: "Who issues the credential", value: "The board, never the training provider" },
    { label: "Our IBT coursework", value: "Open now: 40 hours, online, live or recorded, AED 1,499" },
  ],
  sections: [
    {
      id: "which-credential",
      heading: "Which credential should an ABA course lead to?",
      blocks: [
        {
          type: "p",
          text: "One that's open to people living in the UAE, from a board you can name. ABA (applied behaviour analysis) credentials come in two levels: technicians deliver a programme under supervision, and analysts assess learners, design programmes and supervise others. Here the open routes run through IBAO, the International Behavior Analysis Organization, and QABA, the Qualified Applied Behavior Analysis Credentialing Board. The BACB, the Behavior Analyst Certification Board, has accepted new applications only from people living in its authorised countries since 1 January 2023, and the UAE isn't one of them.",
        },
        {
          type: "table",
          caption: "ABA credentials, and whether new applicants living in the UAE can start them",
          head: ["Credential", "Board", "Level", "Open to new applicants living in the UAE"],
          rows: [
            ["IBT, International Behavior Therapist", "IBAO", "Technician", "Yes"],
            ["ABAT, Applied Behavior Analysis Technician", "QABA", "Technician", "Yes"],
            ["RBT, Registered Behavior Technician", "BACB", "Technician", "No, not since 1 January 2023"],
            ["IBA, International Behavior Analyst", "IBAO", "Analyst", "Yes"],
            ["QBA, Qualified Behavior Analyst", "QABA", "Analyst", "Yes"],
            ["BCBA, Board Certified Behavior Analyst", "BACB", "Analyst", "No, not since 1 January 2023"],
          ],
        },
        {
          type: "p",
          text: "A \"behaviour therapist course\" in Dubai is usually training for the technician role; IBAO's credential at that level is even called International Behavior Therapist. For the technician credentials side by side, see [IBT vs ABAT vs RBT](/guides/ibt-vs-abat-vs-rbt).",
        },
        {
          type: "note",
          title: "Ask your employer too",
          text: "If you're training for a particular school, centre or role, ask the employer which credential it looks for before you enrol. If the role needs a licence, the employer or the relevant regulator can tell you what that involves.",
        },
      ],
    },
    {
      id: "board-acceptance",
      heading: "Does the board accept this provider's coursework?",
      blocks: [
        {
          type: "p",
          text: "Ask the provider to show you, because coursework only counts toward a credential if the board accepts it. QABA counts ABAT coursework only from its approved coursework providers. IBAO's [IBT requirements](https://theibao.com/docs/IBT-Requirements-v100.pdf) ask for the 40 hours to come from an IBAO-recognised Approved Content Provider.",
        },
        {
          type: "p",
          text: "Coursework the board won't accept can mean paying for the 40 hours twice. Before you pay:",
        },
        {
          type: "list",
          items: [
            "Ask, in writing, which board has approved or recognised the course, and for which credential.",
            "Ask for evidence you can check with the board itself, not just a logo on the provider's website.",
            "Check that the approval covers the exact course you're buying, not another course from the same provider.",
            "If you're unsure, contact the board. Whether coursework counts is the board's decision, not the provider's.",
          ],
        },
        {
          type: "note",
          title: "A course certificate isn't the credential",
          text: "A provider's certificate shows you finished its course. IBT, ABAT, IBA and QBA are issued by the boards, once you've met all their requirements and passed their exams.",
        },
      ],
    },
    {
      id: "before-you-pay",
      heading: "What else should you check before you pay?",
      blocks: [
        {
          type: "p",
          text: "Check who teaches, how the course is delivered, what support there is after the coursework, how your certificate can be checked and what the whole route costs.",
        },
        {
          type: "steps",
          items: [
            {
              title: "Who teaches, and do they still practise?",
              body: "Ask for the instructor's credential and whether they currently work with learners; someone in practice brings real cases into the teaching. QABA asks for ABAT coursework to be developed or delivered by a master's-level professional in ABA and autism.",
            },
            {
              title: "Live, recorded or both?",
              body: "Live sessions let you ask questions as you go; recordings fit around a job. Ask which you'll get, and how you can reach the instructor if you study from recordings.",
            },
            {
              title: "Is supervision on offer?",
              body: "Coursework is only the start: IBT also needs 300 hours of supervised practice (working with learners under a qualified supervisor), and ABAT 15 hours of supervised fieldwork. Ask whether the provider offers supervision or helps you find a supervisor, and whether anyone checks your skills in practice (a competency check) before the exam. IBAO's supervisor requirements list BCBA, IBA and QBA among the credentials it accepts for supervising IBT candidates.",
            },
            {
              title: "Can an employer verify your certificate?",
              body: "A PDF on its own proves little. Ask whether each certificate carries a serial number an employer can look up online. Every certificate from our IBT course has one, and anyone can check it on our [certificates page](/certificates) without an account.",
            },
            {
              title: "What does the whole route cost?",
              body: "Add the course fee, the board's fee and any supervision fees. The board's fee goes to the board, not the provider: US$120 to IBAO for IBT, exam included, or US$125 to QABA for ABAT, with retakes extra.",
            },
          ],
        },
      ],
    },
    {
      id: "red-flags",
      heading: "What are the red flags in an ABA course?",
      blocks: [
        {
          type: "p",
          text: "Promises no training provider can keep: a guaranteed job, accreditation that names no board, or a credential in a weekend. A course can prepare you, but only an employer can hire you and only a board can issue a credential.",
        },
        {
          type: "list",
          items: [
            "A guaranteed job. No course can guarantee work; hiring depends on the employer, the role and you.",
            "\"Internationally accredited\", with no board named. Ask who accredited it, and for which credential. If you can't check the answer with a named board, treat it as marketing.",
            "A credential in a weekend. IBT and ABAT each start with 40 hours of coursework, then supervised practice and the board's exam. No weekend course covers that.",
            "RBT or BCBA sold to UAE residents as a new route. The BACB isn't taking new applicants who live in the UAE.",
          ],
        },
      ],
    },
    {
      id: "online",
      heading: "Can you train in ABA online from Dubai or Abu Dhabi?",
      blocks: [
        {
          type: "p",
          text: "Yes, for the coursework. You can study online from Dubai, Abu Dhabi, Sharjah or anywhere else in the UAE, and IBAO's IBT exam is online too. What a screen can't replace is supervised practice: real hours with learners, at a school, centre or home, under a qualified supervisor.",
        },
        {
          type: "p",
          text: "On our IBT course you can join sessions live or watch the recordings, and ask the teaching team a question on any lesson.",
        },
      ],
    },
    {
      id: "with-us",
      heading: "What ABA training does Special Minds Academy offer?",
      blocks: [
        {
          type: "p",
          text: "One course is open today: [IBT Training](/courses/ibt-training), the 40 hours of coursework for IBAO's IBT, taught online by a practising behaviour analyst (BCBA, IBA or QBA), for AED 1,499. Our other courses aren't open yet, and none has a fee or date announced.",
        },
        {
          type: "table",
          caption: "Special Minds Academy courses, and where each one stands",
          head: ["Course", "What it is", "Status"],
          rows: [
            ["IBT Training", "The 40 hours of coursework for IBAO's IBT", "Open: AED 1,499, online"],
            ["ABAT Training", "Training toward QABA's ABAT", "Not open yet: register interest"],
            ["IBA Training", "Training toward IBAO's analyst-level IBA", "Next intake not announced: register interest"],
            ["LSA Course", "Classroom support, with a Special Minds certificate", "Not open yet: register interest"],
            ["Supervision, exam preparation, workshops", "Support around the credentials, on [More training](/training)", "Not open yet: register interest"],
          ],
        },
        {
          type: "p",
          text: "QABA only counts ABAT coursework from its approved providers, so we'll say plainly on the course page if and when ours is approved. IBT graduates can join the Special Minds placement pool; placement is best-effort and never guaranteed. Hold us to the same checklist as anyone else: [ask us](/contact) anything on it before you enrol.",
        },
      ],
    },
  ],
  faqs: [
    {
      q: "Is ABA certification recognised in the UAE?",
      a: "That depends on who needs to accept it. IBT and ABAT are international credentials open to people living in the UAE, but each school, centre and regulator decides what it accepts. Ask the employer, and the regulator if your role needs a licence, before you enrol.",
    },
    {
      q: "How much does an ABA course cost in Dubai?",
      a: "Each provider sets its own course fee; our IBT coursework is AED 1,499. The board's fee comes on top: US$120 to IBAO for IBT, exam included, or US$125 to QABA for ABAT. Ask whether supervision costs extra.",
    },
    {
      q: "How long does ABA training take?",
      a: "The coursework for IBT or ABAT is 40 hours, and IBAO says IBT training typically takes 2 to 10 weeks. The credential takes longer: IBT adds 300 hours of supervised practice and ABAT 15 hours of supervised fieldwork, plus each board's exam.",
    },
    {
      q: "Can I do an RBT course in Dubai?",
      a: "Not one that leads to RBT certification while you live here. Since 1 January 2023 the BACB has accepted new applications only from people living in its authorised countries, and the UAE is not one of them. IBT and ABAT are the technician credentials open to UAE residents.",
    },
    {
      q: "Do I need a degree to start ABA training?",
      a: "Not for QABA's ABAT, which asks for applicants aged 18 or over with a high school diploma or national equivalent. IBAO sets IBT eligibility, so check its current rules. The analyst level asks for more: a bachelor's degree, or the regional equivalent of two years of post-secondary study, for IBA's Experience route, and a master's degree for QBA.",
    },
    {
      q: "Are there ABA courses in Abu Dhabi?",
      a: "You don't need to be in Dubai to train. Online coursework, including our IBT course, can be taken from Abu Dhabi or anywhere else in the UAE. Your supervised practice then happens wherever you work with learners.",
    },
    {
      q: "Will an ABA course get me a job?",
      a: "No course can promise that, and one that does is a red flag. A credential from a named board, plus real supervised experience, makes you a stronger candidate. IBT graduates can join the Special Minds placement pool, but placement is best-effort and never guaranteed.",
    },
  ],
  sources: ["ibaoIbt", "ibaoIbtRequirements", "ibaoIbaRequirements", "qabaAbat", "qabaProviders", "qabaQba", "bacbInternational"],
  relatedCourses: ["ibt-training", "abat-training", "iba-training"],
  relatedGuides: ["ibt-vs-abat-vs-rbt", "how-to-become-an-ibt-in-the-uae", "can-i-become-an-rbt-or-bcba-in-the-uae", "aba-career-path-uae"],
  published: "2026-11-12",
  updated: "2026-11-12",
};
