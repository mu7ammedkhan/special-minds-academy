import type { Guide } from "./types";

// What the ABAT is, who issues it, the route in brief and where it leads.
// Every figure comes from CREDENTIALS in lib/academy-facts.ts (abat, plus ibt,
// qba and iba where they're compared). Our ABAT course is not open and Special
// Minds is not a confirmed QABA approved coursework provider: the guide says
// so, and promises no approval, date or fee.

export const guide: Guide = {
  slug: "what-is-abat",
  category: "ABAT",
  title: "What is ABAT? QABA's ABA technician credential, explained for the UAE",
  metaTitle: "What Is ABAT? QABA's ABA Technician Credential in the UAE",
  description:
    "ABAT is QABA's entry-level ABA technician credential, open to people living in the UAE. What an ABAT does, who can apply, the route to it and what comes next.",
  keywords: [
    "what is ABAT",
    "ABAT certification UAE",
    "QABA ABAT Dubai",
    "ABA technician certification",
    "Applied Behavior Analysis Technician",
    "ABAT certification Abu Dhabi",
    "ABAT full form",
  ],
  answer:
    "ABAT, the Applied Behavior Analysis Technician, is the entry-level credential of QABA, the Qualified Applied Behavior Analysis Credentialing Board. An ABAT delivers a learner's ABA programme under a supervising analyst. You must be 18 or older with a high school diploma or national equivalent, complete 40 hours of approved coursework and 15 hours of supervised fieldwork, and pass QABA's exam. It's open to people living in the UAE.",
  keyFacts: [
    { label: "Issued by", value: "QABA, the Qualified Applied Behavior Analysis Credentialing Board" },
    { label: "Open to UAE residents", value: "Yes. QABA's credentials are international" },
    { label: "Eligibility", value: "18 or older, a high school diploma or national equivalent, a background check and one professional recommendation" },
    { label: "Route", value: "40 hours of approved coursework · 15 hours of supervised fieldwork · QABA's exam" },
    { label: "Fee to QABA", value: "US$125 certification fee, retakes extra" },
    { label: "Next step up", value: "QASP-S, then QBA" },
  ],
  sections: [
    {
      id: "what-an-abat-does",
      heading: "What does an ABAT do?",
      blocks: [
        {
          type: "p",
          text: "An ABAT carries out a learner's ABA programme, session by session. The supervising analyst, the qualified behaviour analyst in charge, assesses the learner and writes the programme. The ABAT delivers it and records what happens, so the analyst can see what's working and change what isn't.",
        },
        {
          type: "p",
          text: "ABA, or applied behaviour analysis, is a structured way of teaching skills and supporting behaviour, built on close observation and data. In the UAE the work happens in classrooms, at home and in therapy centres, and the person doing it may be employed as a shadow teacher, a learning support assistant (LSA) or a home therapist. Day to day, an ABAT is:",
        },
        {
          type: "list",
          items: [
            "Teaching new skills in the small, planned steps the programme sets out",
            "Following the behaviour plan when behaviour gets in the way of learning",
            "Recording data in every session, accurately and honestly",
            "Telling the supervisor what they're seeing, and asking when something isn't clear",
          ],
        },
        {
          type: "p",
          text: "Designing or changing the programme stays with the analyst. And supervision doesn't end at the exam: once you're credentialed, QABA requires supervision equal to 5% of your direct service time, the hours you spend working with learners, in every 30-day period.",
        },
      ],
    },
    {
      id: "who-issues-it",
      heading: "Who issues the ABAT, and can you get it in the UAE?",
      blocks: [
        {
          type: "p",
          text: "QABA, the Qualified Applied Behavior Analysis Credentialing Board, issues the ABAT. It's an international board whose credentials are open to people living in the UAE, so you can work toward the ABAT from Dubai, Abu Dhabi or anywhere else in the country.",
        },
        {
          type: "p",
          text: "A training provider can teach you, but only QABA awards the credential. QABA decides whether you meet its requirements, sets the exam and issues the ABAT. It's strict about coursework too: it only counts ABAT coursework from its approved coursework providers.",
        },
        {
          type: "p",
          text: "Living in the UAE narrows your options at technician level. The Registered Behavior Technician (RBT), from the Behavior Analyst Certification Board (BACB), hasn't taken new applicants living here since 1 January 2023. That leaves ABAT and the International Behavior Therapist (IBT), from IBAO, the International Behavior Analysis Organization, as the two technician credentials open to you. [Can I become an RBT or BCBA in the UAE?](/guides/can-i-become-an-rbt-or-bcba-in-the-uae) explains the BACB's rule.",
        },
        {
          type: "note",
          title: "Will a UAE employer accept it?",
          text: "That's for each employer to decide. Before you choose, find out which credential the schools, centres or agencies on your list ask for, and take any licensing question to the regulator.",
        },
      ],
    },
    {
      id: "how-to-become-an-abat",
      heading: "How do you become an ABAT?",
      blocks: [
        {
          type: "p",
          text: "You meet QABA's eligibility rules, complete 40 hours of approved coursework and 15 hours of supervised fieldwork, and pass QABA's exam. Mind one rule on order: enrol in your coursework before you log any fieldwork.",
        },
        {
          type: "steps",
          items: [
            {
              title: "Check you're eligible",
              body: "You must be at least 18, with a high school diploma or national equivalent. QABA also asks for a background check and one professional recommendation.",
            },
            {
              title: "Enrol in approved coursework",
              body: "40 hours of ABA coursework from one of QABA's approved coursework providers, including 3 hours of ethics and 5 hours of autism core knowledge.",
            },
            {
              title: "Complete your supervised fieldwork",
              body: "15 hours of hands-on work with learners, with 1 hour of supervision for every 10 hours of independent fieldwork, all logged after you've enrolled in the coursework.",
            },
            {
              title: "Pass QABA's exam",
              body: "125 multiple-choice questions in 2 hours, with 72% needed to pass. You can sit it before your fieldwork is finished.",
            },
            {
              title: "Receive the credential",
              body: "QABA won't finalise your ABAT until the fieldwork is complete, even if you've already passed the exam. After that, the credential needs renewing every 2 years, with at least 12 continuing education units (CEUs).",
            },
          ],
        },
        {
          type: "p",
          text: "QABA's certification fee is US$125, with retakes charged on top. [ABAT requirements](/guides/abat-requirements) goes through each step in detail, including the exam's retake rules and what renewal involves.",
        },
      ],
    },
    {
      id: "abat-vs-ibt",
      heading: "How is ABAT different from IBT?",
      blocks: [
        {
          type: "p",
          text: "Both are international technician credentials open to people living in the UAE, and both begin with 40 hours of coursework. The big difference is supervised practice: ABAT asks for 15 hours of supervised fieldwork, IBT for 300 hours of supervised practice. They also sit on different ladders, leading to different analyst-level credentials.",
        },
        {
          type: "table",
          caption: "ABAT and IBT at a glance",
          head: ["", "ABAT", "IBT"],
          rows: [
            ["Issued by", "QABA", "IBAO"],
            ["Coursework", "40 hours, from a QABA-approved provider", "40 hours, across IBAO's seven content areas"],
            ["Supervised practice", "15 hours of fieldwork", "300 hours"],
            ["Fee to the board", "US$125, retakes extra", "US$120, exam included"],
            ["Leads to", "QASP-S, then QBA", "IBA"],
          ],
        },
        {
          type: "p",
          text: "Because different boards issue them, you can hold both. If you're picking one to start with, think about which analyst-level credential you might want later, and which one the employers you have in mind prefer. [IBT vs ABAT vs RBT](/guides/ibt-vs-abat-vs-rbt) has the full, requirement-by-requirement comparison.",
        },
      ],
    },
    {
      id: "where-abat-leads",
      heading: "What comes after the ABAT?",
      blocks: [
        {
          type: "p",
          text: "On QABA's ladder, the ABAT leads to the QASP-S (Qualified Autism Services Practitioner-Supervisor) and then the QBA (Qualified Behavior Analyst), QABA's analyst-level credential. At analyst level, the work moves from delivering programmes to designing them and supervising others.",
        },
        {
          type: "p",
          text: "QABA sets the QASP-S requirements, so check its current rules for that step. For the QBA, QABA asks for:",
        },
        {
          type: "list",
          items: [
            "A master's degree from an accredited institution in ABA, education, special education, psychology, social work or a related field",
            "270 hours of approved coursework (18 semester credits), including 20 hours of ethics and 20 of autism core knowledge",
            "2,000 hours of supervised fieldwork",
            "A US$350 application and exam fee",
          ],
        },
        {
          type: "p",
          text: "If you might want IBAO's International Behavior Analyst (IBA) later instead, know about one change before you start. Since 1 October 2025, IBAO's IBA Addition, a shorter route for some existing certificants at US$99, no longer accepts QBA or the QASP-S bridge course on its own. QABA's ladder won't get you onto that route by itself, so check your own case with IBAO.",
        },
      ],
    },
    {
      id: "abat-with-us",
      heading: "Can you train for the ABAT with Special Minds Academy?",
      blocks: [
        {
          type: "p",
          text: "Not yet. Our ABAT course isn't open, and we're not taking enrolments or payments for it. QABA only counts ABAT coursework from its approved coursework providers, so whoever you train with, check that approval before you pay. You can [register interest in ABAT Training](/courses/abat-training), and we'll tell you if and when the course opens.",
        },
        {
          type: "p",
          text: "If you'd like to start now, our [IBT Training](/courses/ibt-training) is open: the 40 hours of IBT coursework, online, live or recorded, taught by a practising behaviour analyst (BCBA, IBA or QBA), for AED 1,499. IBT comes from IBAO rather than QABA, and holding it doesn't stop you adding the ABAT later.",
        },
      ],
    },
  ],
  faqs: [
    {
      q: "What does ABAT stand for?",
      a: "Applied Behavior Analysis Technician. It's the entry-level credential of QABA, the Qualified Applied Behavior Analysis Credentialing Board, for people who deliver ABA programmes under a supervising analyst.",
    },
    {
      q: "Do I need a degree to become an ABAT?",
      a: "No. QABA asks for a high school diploma or national equivalent, and for you to be at least 18, with a background check and one professional recommendation. You'd need a degree later to move up: QABA's QBA needs a master's.",
    },
    {
      q: "How long does it take to become an ABAT?",
      a: "It depends on how quickly you finish the 40 hours of coursework and 15 hours of supervised fieldwork, and when you sit the exam. QABA lets you take the exam before your fieldwork is done, but your credential isn't finalised until the fieldwork is complete.",
    },
    {
      q: "How much does ABAT certification cost?",
      a: "US$125 is QABA's certification fee, with each retake charged on top. QABA offers discounts for residents of developing countries. Coursework is priced separately by whichever approved provider you train with.",
    },
    {
      q: "Is the ABAT recognised in the UAE?",
      a: "QABA's credentials are international and open to people living in the UAE. Whether a particular school, centre or agency asks for the ABAT is up to the employer, and licensing questions are for the regulator, so check with both before you commit.",
    },
    {
      q: "Does Special Minds Academy offer ABAT training?",
      a: "Not yet. Our ABAT course isn't open, and QABA only counts ABAT coursework from its approved coursework providers. You can register interest on our ABAT Training page; our IBT coursework is open now.",
    },
  ],
  sources: ["qabaAbat", "qabaProviders", "qabaQba", "ibaoIbt", "ibaoIbtRequirements", "ibaoIba", "ibaoOct2025", "bacbInternational"],
  relatedCourses: ["abat-training", "ibt-training"],
  relatedGuides: ["abat-requirements", "ibt-vs-abat-vs-rbt", "what-is-ibt", "can-i-become-an-rbt-or-bcba-in-the-uae"],
  published: "2026-11-12",
  updated: "2026-11-12",
};
