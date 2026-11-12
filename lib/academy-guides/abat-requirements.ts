import type { Guide } from "./types";

// The detailed QABA reference for the ABAT. Every figure is CREDENTIALS.abat in
// lib/academy-facts.ts, or arithmetic on it that the text shows. Where QABA's
// rules go further than those facts (who can supervise, the retake fee, the
// discount terms, what counts as a CEU), the guide sends readers to QABA
// rather than guessing. Our ABAT course is not open, and Special Minds is not
// a confirmed QABA approved coursework provider.

export const guide: Guide = {
  slug: "abat-requirements",
  category: "ABAT",
  title: "What are the ABAT requirements? QABA's rules, from eligibility to renewal",
  metaTitle: "ABAT Requirements: QABA Exam, Fieldwork and Renewal",
  description:
    "QABA's ABAT requirements in full: eligibility, 40 hours of approved coursework, 15 fieldwork hours, the 125-question exam and 72% pass mark, fees and renewal.",
  keywords: [
    "ABAT requirements",
    "QABA ABAT exam",
    "ABAT fieldwork hours",
    "ABAT exam pass mark",
    "ABAT renewal CEUs",
    "ABAT eligibility",
    "ABAT exam retake",
    "QABA ABAT requirements UAE",
  ],
  answer:
    "For the ABAT, QABA asks that you're 18 or older with a high school diploma or national equivalent, and for a background check and one professional recommendation. You need 40 hours of coursework from a QABA-approved provider, 15 hours of supervised fieldwork, and 72% on QABA's 125-question, 2-hour exam. The certification fee is US$125. You renew every 2 years with at least 12 continuing education units (CEUs).",
  keyFacts: [
    { label: "Eligibility", value: "18 or older, a high school diploma or national equivalent, a background check, one professional recommendation" },
    { label: "Coursework", value: "40 hours from a QABA-approved provider, including 3 hours of ethics and 5 of autism core knowledge" },
    { label: "Fieldwork", value: "15 hours, with 1 hour of supervision for every 10 hours of independent fieldwork" },
    { label: "Exam", value: "125 multiple-choice questions, 2 hours, 72% to pass" },
    { label: "Fee", value: "US$125 certification fee, retakes extra" },
    { label: "Renewal", value: "Every 2 years, with at least 12 CEUs" },
  ],
  sections: [
    {
      id: "eligibility",
      heading: "Who is eligible for the ABAT?",
      blocks: [
        {
          type: "p",
          text: "You're eligible if you're at least 18 and hold a high school diploma or national equivalent. On top of that, QABA asks for a background check and one professional recommendation. You don't need a degree.",
        },
        {
          type: "p",
          text: "Where you live isn't a barrier either. QABA is an international board, and people living in the UAE can apply. If you finished school here or abroad and your certificate isn't called a high school diploma, ask QABA whether it counts as the national equivalent.",
        },
        {
          type: "p",
          text: "QABA sets the detail, such as who can write your recommendation and how the background check is done, so read its [ABAT requirements page](https://qababoard.com/pages/aba-technician-credential-requirements/) before you apply. New to the credential? [What is ABAT?](/guides/what-is-abat) explains the role and where it leads.",
        },
      ],
    },
    {
      id: "coursework",
      heading: "What coursework counts toward the ABAT?",
      blocks: [
        {
          type: "p",
          text: "QABA counts 40 hours of approved, assessment-based ABA coursework, and only from its approved coursework providers. The 40 hours must include 3 hours of ethics and 5 hours of autism core knowledge, and the course must be developed or delivered by a master's-level professional in ABA and autism.",
        },
        {
          type: "table",
          caption: "How QABA's 40 hours of ABAT coursework break down",
          head: ["Part", "Hours"],
          rows: [
            ["Ethics", "3"],
            ["Autism core knowledge", "5"],
            ["The rest of the ABA coursework", "32 (40 − 3 − 5)"],
            ["Total", "40"],
          ],
        },
        {
          type: "p",
          text: "Assessment-based means the course includes assessments of what you've learned, not just a record that you attended. Before you pay any provider, ask it to confirm in writing that QABA has approved it for ABAT coursework, and who developed or delivers the course. A course you took for another credential only counts if QABA accepts it.",
        },
        {
          type: "note",
          title: "Our ABAT course",
          text: "Our ABAT course isn't open yet, so there's nothing to enrol in or pay for. QABA only counts ABAT coursework from its approved coursework providers. To hear from us if and when that changes, [register interest](/courses/abat-training).",
        },
      ],
    },
    {
      id: "fieldwork",
      heading: "How do ABAT fieldwork and supervision work?",
      blocks: [
        {
          type: "p",
          text: "You need 15 hours of supervised fieldwork, meaning hands-on work with learners under a supervisor's oversight. QABA asks for 1 hour of supervision for every 10 hours of independent fieldwork, and you must be enrolled in your coursework before the hours start.",
        },
        {
          type: "list",
          items: [
            "Enrol first. QABA requires you to be enrolled in your coursework before your fieldwork hours start, so sort out the coursework before you log a single hour.",
            "Keep to the ratio. For every 10 hours of fieldwork you do independently, you need 1 hour of supervision.",
            "Check your supervisor. QABA sets who can supervise ABAT fieldwork, so confirm yours qualifies before your first hour.",
            "Keep records as you go. Note the date, the hours and the supervision for each session; QABA sets what documentation it needs.",
          ],
        },
        {
          type: "p",
          text: "Your fieldwork doesn't have to be finished before the exam. You can sit QABA's exam first; the credential just isn't finalised until the fieldwork is done.",
        },
      ],
    },
    {
      id: "exam",
      heading: "What is the ABAT exam like, and what's the pass mark?",
      blocks: [
        {
          type: "p",
          text: "QABA's ABAT exam has 125 multiple-choice questions, you have 2 hours, and the pass mark is 72%. Only 100 of the questions are scored; the other 25 are unscored pre-test questions. The exam is proctored (invigilated) by Premier Proctoring.",
        },
        {
          type: "table",
          caption: "QABA's ABAT exam, as of November 2026",
          head: ["", "Detail"],
          rows: [
            ["Questions", "125 multiple-choice: 100 scored, 25 unscored pre-test"],
            ["Time", "2 hours"],
            ["Pass mark", "72%"],
            ["Proctoring", "Premier Proctoring"],
            ["When you can sit it", "Before your fieldwork is finished, if you like, though the credential isn't finalised until it is"],
            ["Retakes", "A second attempt straight after a fail, a third 7 days after the second, and no more than 8 attempts in a calendar year"],
          ],
        },
        {
          type: "p",
          text: "Two hours for 125 questions is just under a minute each (120 minutes ÷ 125), so pace yourself and don't let one hard question eat into the rest.",
        },
        {
          type: "p",
          text: "If you don't pass, you can book a second attempt straight away. A third has to wait 7 days after the second, and you can't take more than 8 attempts in a calendar year. Every retake costs extra, so check QABA's current fee, and its rules for any attempt after the third.",
        },
      ],
    },
    {
      id: "fees",
      heading: "What does the ABAT cost?",
      blocks: [
        {
          type: "p",
          text: "QABA's certification fee is US$125, and retakes cost extra. QABA also offers discounts for residents of developing countries; check its current terms to see whether you qualify.",
        },
        {
          type: "p",
          text: "That's QABA's fee, not the whole cost. Coursework, and any supervision you pay for, are priced separately by whoever provides them. Ask each provider for its full price before you start, and set a little aside in case you need a retake.",
        },
      ],
    },
    {
      id: "renewal",
      heading: "How do you renew the ABAT and stay in good standing?",
      blocks: [
        {
          type: "p",
          text: "You renew every 2 years with at least 12 continuing education units (CEUs), the credit you earn for ongoing professional learning. In between, supervision carries on: once you're credentialed, it must add up to 5% of your direct service time in every 30-day period.",
        },
        {
          type: "p",
          text: "Direct service time is the time you spend working with learners. If you deliver 80 hours in a 30-day period, for example, you need 4 hours of supervision in that period (5% of 80). It can be remote, as long as it includes at least one 1-hour contact in person or by live video.",
        },
        {
          type: "p",
          text: "QABA sets which activities count as CEUs and how you report them, so check its current rules well before your renewal is due.",
        },
      ],
    },
    {
      id: "checklist",
      heading: "Have you covered everything? An ABAT checklist",
      blocks: [
        {
          type: "p",
          text: "Run through this list before you pay for anything. Any line you can't tick yet is the next thing to sort out.",
        },
        {
          type: "list",
          items: [
            "I'm 18 or older, with a high school diploma or national equivalent.",
            "I'm ready for a background check, and I have a professional recommendation lined up.",
            "My coursework provider has confirmed its QABA approval, and its 40 hours include 3 of ethics and 5 of autism core knowledge.",
            "I enrolled in the coursework before logging any fieldwork.",
            "I have a supervisor who meets QABA's rules for my 15 hours of fieldwork, at 1 hour of supervision per 10 hours of independent fieldwork.",
            "I know the exam: 125 questions, 2 hours, 72% to pass.",
            "I've budgeted for the US$125 fee, and for a retake in case I need one.",
            "I have a plan for afterwards: supervision at 5% of direct service time every 30 days, and at least 12 CEUs every 2 years.",
          ],
        },
        {
          type: "p",
          text: "Weighing the ABAT against IBT? [IBT requirements](/guides/ibt-requirements) covers IBAO's rules, and [IBT vs ABAT vs RBT](/guides/ibt-vs-abat-vs-rbt) puts the technician credentials side by side.",
        },
      ],
    },
  ],
  faqs: [
    {
      q: "What is the pass mark for the ABAT exam?",
      a: "72%. The exam has 125 multiple-choice questions, of which 100 are scored and 25 are unscored pre-test questions, and you have 2 hours to answer them.",
    },
    {
      q: "How many times can I retake the ABAT exam?",
      a: "QABA allows no more than 8 attempts in a calendar year. You can book a second attempt straight after a fail and a third 7 days after the second. Each retake costs extra.",
    },
    {
      q: "Can I take the ABAT exam before finishing my fieldwork?",
      a: "Yes. QABA lets you sit the exam before your fieldwork is finished, but it won't finalise your credential until the fieldwork is complete.",
    },
    {
      q: "Can I start my fieldwork hours before the coursework?",
      a: "Not before you've enrolled. QABA requires you to be enrolled in your coursework before your fieldwork hours start, so sign up with an approved coursework provider first.",
    },
    {
      q: "Is there a discount on the ABAT fee?",
      a: "QABA offers discounts for residents of developing countries; check its current terms to see whether you qualify. The standard certification fee is US$125, and retakes cost extra.",
    },
    {
      q: "How many CEUs do I need to renew my ABAT?",
      a: "At least 12 every 2 years. QABA decides which activities count and how you report them, so check its current rules before your renewal falls due.",
    },
    {
      q: "Do I still need supervision once I'm an ABAT?",
      a: "Yes. Once you're credentialed, supervision must add up to 5% of your direct service time in every 30-day period. It can be remote, as long as it includes at least one 1-hour contact in person or by live video.",
    },
  ],
  sources: ["qabaAbat", "qabaProviders"],
  relatedCourses: ["abat-training", "ibt-training"],
  relatedGuides: ["what-is-abat", "ibt-requirements", "ibt-vs-abat-vs-rbt"],
  published: "2026-11-12",
  updated: "2026-11-12",
};
