import type { Guide } from "./types";

// The classroom side of the ladder: what shadow teachers and LSAs do, the
// training that helps and how to start. The LSA course is register-interest
// only (no fee, date, hours or approval); IBT figures come from CREDENTIALS
// (lib/academy-facts.ts). Employers' and regulators' requirements are theirs
// to state, so the guide sends readers to ask them.

export const guide: Guide = {
  slug: "shadow-teacher-training-uae",
  category: "Careers and training",
  title: "Shadow teacher and LSA training in the UAE: the role and how to start",
  metaTitle: "Shadow Teacher and LSA Training in the UAE",
  description:
    "What shadow teachers and LSAs do in UAE schools and nurseries, the skills and training that help, and how to get started, from a team that places them.",
  keywords: [
    "shadow teacher course Dubai",
    "LSA course UAE",
    "learning support assistant training Dubai",
    "how to become a shadow teacher in UAE",
    "shadow teacher training Abu Dhabi",
    "shadow teacher qualifications UAE",
    "LSA vs shadow teacher",
  ],
  answer:
    "A shadow teacher or LSA (learning support assistant) works beside a child with additional needs in a UAE school or nursery, helping them follow lessons, join in and grow more independent. Training in the role, behaviour plans and note-taking prepares you; IBT is an entry-level ABA credential if you want one. Ask the school or agency what it requires before you pay for a course.",
  keyFacts: [
    { label: "The role", value: "Supporting a child with additional needs through the school or nursery day, alongside the class teacher" },
    { label: "LSA or shadow teacher?", value: "In most UAE schools, the same one-to-one role under a different name" },
    { label: "Before you train", value: "Ask the schools or agencies you want to work for what they require" },
    { label: "Our LSA Course", value: "Not open yet: register interest · ends with a Special Minds certificate" },
    { label: "Our IBT coursework", value: "Open now: 40 hours, online, live or recorded, AED 1,499" },
    { label: "Finding work", value: "Special Minds places LSAs and shadow teachers in UAE schools and homes; placement is never guaranteed" },
  ],
  sections: [
    {
      id: "what-they-do",
      heading: "What does a shadow teacher or LSA do in a UAE school?",
      blocks: [
        {
          type: "p",
          text: "They help a child with additional needs take part in the school day: following lessons, coping with change, getting along with classmates and getting through the hard moments. The aim is independence, so a good shadow teacher steps back as the child needs less help.",
        },
        {
          type: "p",
          text: "The children they support might have autism, ADHD, learning difficulties or speech and language needs, among others. Day to day, the work includes:",
        },
        {
          type: "list",
          items: [
            "Helping the child understand instructions and stay with a task, breaking work into the smaller steps the teacher has agreed",
            "Supporting the hardest parts of the day: arriving, moving between lessons, break times and group work",
            "Following the child's behaviour plan and the targets in their IEP (individual education plan), as the teacher, the SENCO (special educational needs coordinator) or a supervising therapist has set them",
            "Encouraging play, turn-taking and friendships with classmates",
            "Keeping short, factual notes, so the people who write the plan can judge it on what actually happened",
            "Telling the teacher what worked and what didn't, and passing on to the family what has been agreed",
          ],
        },
        {
          type: "p",
          text: "In a nursery the work leans toward play, routines, early communication and self-care, and toward getting a young child ready for school.",
        },
      ],
    },
    {
      id: "lsa-or-shadow-teacher",
      heading: "Is a shadow teacher the same as an LSA?",
      blocks: [
        {
          type: "p",
          text: "In most UAE schools, yes: both titles describe one-to-one support for a child in class. \"Learning support assistant\" is more common in British-curriculum schools and formal paperwork; \"shadow teacher\" is the everyday term across Dubai and Abu Dhabi.",
        },
        {
          type: "p",
          text: "Some schools also use \"LSA\" for an assistant who supports a small group or a whole class. Either way, the title matters less than how well the person is trained, briefed on the child's plan and supervised. The main Special Minds site looks at the two terms in [LSA vs shadow teacher in the UAE](https://specialminds.ae/blog/lsa-vs-shadow-teacher-uae).",
        },
      ],
    },
    {
      id: "skills",
      heading: "Which skills matter most day to day?",
      blocks: [
        {
          type: "p",
          text: "Practical ones: reading the child, giving just enough help, following the plan the same way every time and writing down what happened. Calm, clear communication with the teacher and the family matters as much as any technique.",
        },
        {
          type: "table",
          caption: "The day-to-day skills of a shadow teacher or LSA",
          head: ["Skill", "What it looks like in class"],
          rows: [
            ["Reading the child", "Spotting tiredness, overload or confusion early, before it turns into a crisis"],
            ["Prompting, then stepping back", "Giving the least help that works, such as a gesture or a quiet reminder, then less over time"],
            ["Following the plan", "Using the strategies in the child's behaviour plan consistently, even on hard days"],
            ["Reinforcement", "Noticing the behaviour you want to see more of, and making it worth the child's while"],
            ["Notes and data", "Recording what happened just before, what the child did and what followed, as plain facts"],
            ["Working with adults", "Keeping the teacher and SENCO informed, and knowing what to pass on to whom"],
            ["Professional practice", "Confidentiality, safeguarding and the child's dignity, every day"],
          ],
        },
        {
          type: "p",
          text: "Prompting, reinforcement and careful data are all core skills in ABA (applied behaviour analysis), the approach many behaviour plans are built on. That's why ABA training helps, even if you never work as a therapist. Our [ABA glossary](/glossary) explains the terms you'll hear.",
        },
      ],
    },
    {
      id: "training",
      heading: "What training helps you become a shadow teacher or LSA?",
      blocks: [
        {
          type: "p",
          text: "Two kinds: a course in the classroom role itself, which prepares you for the job, and ABA training, which leads toward an international credential if you want one.",
        },
        {
          type: "p",
          text: "Our [LSA Course](/courses/lsa-course) is built for the classroom side: the role, the child, the plan and the notes. It ends with a Special Minds certificate of completion, not a credential from an outside board. It isn't open yet; register your interest and you'll hear when the next intake is announced.",
        },
        {
          type: "p",
          text: "[IBT Training](/courses/ibt-training) is open for enrolment: 40 hours of coursework toward the International Behavior Therapist (IBT) credential from IBAO, the International Behavior Analysis Organization. It's delivered online, live or recorded, by a practising behaviour analyst (BCBA, IBA or QBA), and costs AED 1,499. IBAO's content areas for the coursework include data collection, teaching skills and challenging behaviours, all daily work for a shadow teacher. The credential itself also needs 300 hours of supervised practice and IBAO's exam, and IBAO issues it, not us.",
        },
        {
          type: "p",
          text: "Schools that want their LSAs trained together can register interest in [training for schools](/training#school-training).",
        },
      ],
    },
    {
      id: "getting-started",
      heading: "How do you get started as a shadow teacher in the UAE?",
      blocks: [
        {
          type: "p",
          text: "Learn what the role involves, find out what employers want, build experience with children, then train and apply. Training doesn't have to stop once you're working: the role and the credentials can grow together.",
        },
        {
          type: "steps",
          items: [
            {
              title: "Learn what the job involves",
              body: "Read about the role and, if you can, talk to someone doing it. It takes patience, consistency and a willingness to follow someone else's plan.",
            },
            {
              title: "Find out what employers want",
              body: "Ask the schools, nurseries or agencies you'd like to join which qualifications, checks and documents they ask for. If a role needs a regulator's approval, the employer can tell you what that involves.",
            },
            {
              title: "Build experience with children",
              body: "Nursery work, holiday clubs, tutoring and volunteering with children who have additional needs all help, and give you real examples to talk about at interview.",
            },
            {
              title: "Train for the role",
              body: "Register interest in our LSA course for the classroom side, and start the IBT coursework if you want an ABA credential.",
            },
            {
              title: "Apply, and keep learning",
              body: "Apply to schools directly, or to an agency that places and supervises LSAs, such as Special Minds. Ask every employer how your work will be supervised and reviewed.",
            },
          ],
        },
      ],
    },
    {
      id: "where-it-leads",
      heading: "Where can the role lead?",
      blocks: [
        {
          type: "p",
          text: "It can be a first step into ABA. IBT is the technician level: delivering ABA programmes under a supervising analyst. IBA, IBAO's analyst level, needs a degree, much more practice and its own exam, and it's where you assess learners, design programmes and supervise others. The [ABA career path in the UAE](/guides/aba-career-path-uae) sets out each step.",
        },
      ],
    },
  ],
  faqs: [
    {
      q: "Do I need a degree to become a shadow teacher in the UAE?",
      a: "Ask the school or agency you want to work for what it requires before you apply. Our LSA course is designed for people starting out as well as those already in the role, and IBAO sets the eligibility rules for IBT, so check them before you register.",
    },
    {
      q: "How long does shadow teacher training take?",
      a: "It depends on the course. IBT coursework is 40 hours, which IBAO says typically takes 2 to 10 weeks. Our LSA course's format and length will be announced with its next intake.",
    },
    {
      q: "Is the LSA course accredited?",
      a: "It ends with a Special Minds certificate of completion, which shows you finished our course; it isn't a credential from an outside board. If you want an international ABA credential, look at IBT, which IBAO issues once you meet its requirements.",
    },
    {
      q: "Can I do shadow teacher training from Abu Dhabi?",
      a: "Yes, online. Our IBT coursework is taught entirely online, so you can take it from Abu Dhabi, Sharjah or anywhere else in the UAE. The LSA course's format will be announced with its next intake.",
    },
    {
      q: "Do shadow teachers need ABA training?",
      a: "It depends on the role, but it helps: many behaviour plans use ABA methods such as prompting, reinforcement and data collection. IBT is an entry-level ABA credential open to people living in the UAE, and our IBT coursework is open now.",
    },
    {
      q: "Will a shadow teacher course get me a job?",
      a: "No course can guarantee one. Special Minds places LSAs and shadow teachers in UAE schools and homes and looks at course graduates first, but placement depends on the role and is never guaranteed.",
    },
  ],
  sources: ["ibaoIbt", "ibaoIbtRequirements", "ibaoIbaRequirements"],
  relatedCourses: ["lsa-course", "ibt-training"],
  relatedGuides: ["what-is-ibt", "how-to-become-an-ibt-in-the-uae", "aba-career-path-uae", "aba-training-in-dubai"],
  published: "2026-11-12",
  updated: "2026-11-12",
};
