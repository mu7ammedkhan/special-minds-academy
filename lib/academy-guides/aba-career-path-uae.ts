import type { Guide } from "./types";

// The ladder: LSA or shadow teacher, then technician (IBT or ABAT), then
// analyst (IBA or QBA). Board figures from CREDENTIALS (lib/academy-facts.ts);
// the week counts are arithmetic on them, shown in the table. No salaries, and
// placement is best-effort, never guaranteed.

export const guide: Guide = {
  slug: "aba-career-path-uae",
  category: "Careers and training",
  title: "ABA career path in the UAE: from LSA to behaviour analyst",
  metaTitle: "ABA Career Path in the UAE: From LSA to Analyst",
  description:
    "The ABA career ladder in the UAE, from LSA or shadow teacher to IBT or ABAT technician and IBA or QBA analyst: what each role does and how long each takes.",
  keywords: [
    "ABA career UAE",
    "ABA career path",
    "how to become a behaviour therapist in Dubai",
    "ABA jobs Dubai",
    "ABA therapist jobs Abu Dhabi",
    "shadow teacher to ABA therapist",
    "how to become a behaviour analyst in the UAE",
  ],
  answer:
    "An ABA (applied behaviour analysis) career in the UAE is a ladder. You can start as an LSA (learning support assistant) or shadow teacher, supporting a child in class. The next rung is a technician credential, IBT from IBAO or ABAT from QABA, for delivering ABA programmes under supervision. Above that, an IBA or QBA analyst assesses learners, designs programmes and supervises the team.",
  keyFacts: [
    { label: "The ladder", value: "LSA or shadow teacher → technician (IBT or ABAT) → analyst (IBA or QBA)" },
    {
      label: "Technician step",
      value: "IBT: 40 hours of coursework + 300 supervised practice hours · ABAT: 40 hours + 15 hours of supervised fieldwork",
    },
    {
      label: "Analyst step",
      value: "IBA: 1,500 practice + 75 supervision hours, if registering on or after 1 October 2025 · QBA: 2,000 hours of supervised fieldwork",
    },
    { label: "Where the work is", value: "Schools, nurseries, family homes and therapy centres" },
    { label: "Closed to new UAE applicants", value: "The BACB's RBT and BCBA, since 1 January 2023" },
  ],
  sections: [
    {
      id: "the-ladder",
      heading: "What are the steps in an ABA career in the UAE?",
      blocks: [
        {
          type: "p",
          text: "Classroom support, then a technician credential, then an analyst credential, with more responsibility at each step. You don't have to climb every rung, and not everyone starts at the bottom, but each one builds experience the next one uses.",
        },
        {
          type: "steps",
          items: [
            {
              title: "LSA or shadow teacher",
              body: "Supporting a child with additional needs at school or nursery, following a plan someone qualified has written. Requirements vary, so check with the school or employer, and with the regulator where one is involved.",
            },
            {
              title: "Technician: IBT or ABAT",
              body: "Delivering a learner's ABA programme under a supervising analyst. IBT is issued by IBAO, the International Behavior Analysis Organization, and ABAT by QABA, the Qualified Applied Behavior Analysis Credentialing Board. Both start with 40 hours of coursework.",
            },
            {
              title: "Analyst: IBA or QBA",
              body: "Assessing learners, designing their programmes and supervising the people who deliver them. The IBA asks for a bachelor's degree or the regional equivalent of two years of post-secondary study (a master's on its Graduate route); the QBA asks for a master's.",
            },
          ],
        },
        {
          type: "p",
          text: "Choosing between the technician credentials is covered in [IBT vs ABAT vs RBT](/guides/ibt-vs-abat-vs-rbt), and between the analyst credentials in [IBA vs BCBA vs QBA](/guides/iba-vs-bcba-vs-qba).",
        },
        {
          type: "note",
          title: "Where are RBT and BCBA?",
          text: "Not on this ladder for newcomers. The BACB has only taken new applications from people living in its authorised countries since 1 January 2023, and the UAE isn't among them. [Can I become an RBT or BCBA in the UAE?](/guides/can-i-become-an-rbt-or-bcba-in-the-uae) explains more.",
        },
      ],
    },
    {
      id: "day-to-day",
      heading: "What does each role involve day to day?",
      blocks: [
        {
          type: "p",
          text: "An LSA or shadow teacher supports a child through the school day; a technician delivers an ABA programme session by session; an analyst designs the programme and supervises the people running it. The higher you go, the more of your day goes on deciding what the sessions should be.",
        },
        {
          type: "list",
          items: [
            "LSA or shadow teacher. Working beside the class teacher and the school's inclusion team, helping the child take part in lessons and routines, following the behaviour plan, and writing clear notes on what happened.",
            "Technician (IBT or ABAT). Running the learner's programme as the analyst wrote it: teaching new skills, following the behaviour plan and recording data accurately, at school, at home or in a centre.",
            "Analyst (IBA or QBA). Assessing a learner and writing the programme; reading the data and deciding what changes; supervising technicians and LSAs; and explaining decisions to families and schools.",
          ],
        },
        {
          type: "p",
          text: "Supervision ties the rungs together. IBAO lists BCBA, IBA and QBA among the credentials it accepts for supervising IBT candidates, so today's technicians are supervised by the kind of analyst they may become.",
        },
      ],
    },
    {
      id: "where-people-work",
      heading: "Where do people in ABA work in the UAE?",
      blocks: [
        {
          type: "p",
          text: "Mostly in schools, nurseries, family homes and therapy centres, in Dubai, Abu Dhabi and across the other emirates. One credential can take you into more than one of these settings over a career.",
        },
        {
          type: "list",
          items: [
            "Schools. LSAs and shadow teachers support children in class, and technicians may carry parts of a programme into the school day.",
            "Nurseries. Early-years settings, supporting younger children with additional needs.",
            "Homes. Home programmes, where a technician works with the child and family under an analyst's supervision.",
            "Therapy centres. Centre-based programmes, where technicians and analysts work as a team.",
          ],
        },
        {
          type: "p",
          text: "Each employer sets its own requirements, and some roles may need a licence. Before you plan around a particular job, ask the employer what it looks for and, where a licence applies, check the regulator's current rules.",
        },
      ],
    },
    {
      id: "how-long",
      heading: "How long does each step take?",
      blocks: [
        {
          type: "p",
          text: "Mostly as long as the supervised hours take: each board sets the hours, and your weekly pace sets the calendar. At 25 qualifying hours a week, the IBT's 300 supervised practice hours take 12 weeks, and the analyst level's 1,500 or 2,000 hours take 60 or 80 weeks.",
        },
        {
          type: "table",
          caption: "What each step asks for, and its supervised hours at 25 a week",
          head: ["Step", "What it asks for", "Supervised hours at 25 a week"],
          rows: [
            ["LSA or shadow teacher", "Ask the school or employer, and any regulator involved", "No board hours"],
            [
              "IBT (IBAO)",
              "Eligibility set by IBAO; 40 hours of coursework; 300 supervised practice hours; IBAO's online exam",
              "300 ÷ 25 = 12 weeks",
            ],
            [
              "ABAT (QABA)",
              "18 or older, a high school diploma or national equivalent, a background check and one professional recommendation; 40 hours of coursework; 15 hours of supervised fieldwork; QABA's exam",
              "15 ÷ 25 = under a week",
            ],
            [
              "IBA (IBAO)",
              "A bachelor's, the regional equivalent of two years of post-secondary study, or a master's; coursework covering IBAO's Required Educational Objectives; 1,500 practice and 75 supervision hours; IBAO's online exam",
              "1,500 ÷ 25 = 60 weeks",
            ],
            [
              "QBA (QABA)",
              "A master's degree; 270 hours of coursework; 2,000 hours of supervised fieldwork; QABA's exam",
              "2,000 ÷ 25 = 80 weeks",
            ],
          ],
        },
        {
          type: "p",
          text: "The sums leave out coursework, exams and study time. IBAO says the 40-hour IBT training typically takes 2 to 10 weeks. The analyst level also needs the education in the table, and if you don't have it yet, that comes first.",
        },
        {
          type: "p",
          text: "Only hours that meet each board's rules count. The IBA figures are for candidates registering on or after 1 October 2025, and QABA's 15 ABAT fieldwork hours can only start once you're enrolled in the coursework.",
        },
      ],
    },
    {
      id: "with-special-minds",
      heading: "How does Special Minds fit in?",
      blocks: [
        {
          type: "p",
          text: "Special Minds Academy's [courses](/courses) follow the same ladder, and Special Minds itself places LSAs, shadow teachers and therapists in UAE schools and homes. Our IBT coursework is open now; the other courses take registrations of interest for the time being.",
        },
        {
          type: "table",
          caption: "Special Minds Academy courses, by rung",
          head: ["Course", "Rung", "Status"],
          rows: [
            ["LSA Course", "LSA or shadow teacher", "Not open yet: register interest"],
            ["IBT Training", "Technician", "Open now: 40 hours, online, live or recorded, AED 1,499"],
            ["ABAT Training", "Technician", "Not open yet: register interest"],
            ["IBA Training", "Analyst", "Next intake not announced: register interest"],
          ],
        },
        {
          type: "p",
          text: "Our [IBT coursework](/courses/ibt-training) is taught by a practising behaviour analyst (BCBA, IBA or QBA), and its graduates can join the Special Minds placement pool, the network our own specialists are placed through. We actively look for openings that fit, but placement is best-effort and never guaranteed: it depends on the role, your fit and what's available.",
        },
      ],
    },
  ],
  faqs: [
    {
      q: "How do I become a behaviour therapist in Dubai?",
      a: "Train for a technician credential: for people living in the UAE, that means IBT from IBAO or ABAT from QABA. Each starts with 40 hours of coursework; IBT then asks for 300 hours of supervised practice and ABAT for 15 hours of supervised fieldwork, before the board's exam. Dubai employers set their own requirements, so check what each one asks for.",
    },
    {
      q: "Do I need a degree to work in ABA in the UAE?",
      a: "Not at every level. QABA's ABAT asks that you're 18 or older, with a high school diploma or national equivalent, and IBAO sets its own eligibility for the IBT. The analyst level needs more: a bachelor's or the regional equivalent of two years of post-secondary study for the IBA's Experience route, and a master's for the QBA. Employers may ask for more again.",
    },
    {
      q: "How long does it take to become a behaviour analyst?",
      a: "It depends on your education and your weekly hours. On supervised hours alone, at 20 a week the IBA's 1,500 practice hours take 75 weeks and the QBA's 2,000 fieldwork hours take 100. Add coursework, the exam and any technician step you take first.",
    },
    {
      q: "What's the difference between an LSA and a shadow teacher?",
      a: "The roles overlap, and schools use the titles in different ways. A shadow teacher usually supports one child, one to one, through the school day; an LSA may support one child or a small group. Both follow plans written by someone qualified.",
    },
    {
      q: "Can I train for ABA online in the UAE?",
      a: "Much of it. Our 40-hour IBT coursework is online, live or recorded, and IBAO's IBT exam is online. Supervised practice is real work with learners, at a school, home or centre, under a supervisor who meets the board's rules.",
    },
    {
      q: "Will Special Minds find me a job after I train?",
      a: "We'll try, but we can't promise one. Graduates of our IBT coursework can join the Special Minds placement pool, and we actively look for openings that fit. Placement is best-effort, depends on the role and is never guaranteed.",
    },
  ],
  sources: [
    "ibaoIbt",
    "ibaoIbtRequirements",
    "qabaAbat",
    "ibaoIba",
    "ibaoIbaRequirements",
    "ibaoOct2025",
    "qabaQba",
    "bacbInternational",
  ],
  relatedCourses: ["lsa-course", "ibt-training", "abat-training", "iba-training"],
  relatedGuides: ["ibt-vs-abat-vs-rbt", "iba-vs-bcba-vs-qba", "shadow-teacher-training-uae", "how-to-become-an-ibt-in-the-uae"],
  published: "2026-11-12",
  updated: "2026-11-12",
};
