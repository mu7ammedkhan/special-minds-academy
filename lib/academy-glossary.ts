// The academy's ABA glossary (specialminds.academy/glossary).
//
// Short, plain definitions of the terms people meet in ABA training and in
// the IBT, ABAT and IBA requirements — the kind of page answer engines quote
// when someone asks "what does DTT mean?". Rendered with DefinedTermSet
// structured data, one #anchor per term.
//
// Rules: UK spelling in prose; credential and board names as their issuers
// write them; one to three sentences per definition; no figure that isn't in
// lib/academy-facts.ts; no clinical advice.

export type GlossaryTerm = {
  /** As it's usually written, e.g. "Discrete trial training". */
  term: string;
  /** The #anchor: lower-case, hyphenated, unique. */
  slug: string;
  /** The abbreviation people search for, if there is one, e.g. "DTT". */
  abbr?: string;
  definition: string;
  /** Slugs of related terms on this page. */
  related?: string[];
  /** An academy page that goes further, e.g. "/guides/what-is-ibt". */
  more?: string;
};

export const GLOSSARY: GlossaryTerm[] = [
  {
    term: "ABC data",
    slug: "abc-data",
    definition:
      "A simple record of a behaviour as it happens: what came just before it (the antecedent), what the person did (the behaviour) and what followed (the consequence). Patterns across many ABC records help an analyst work out why a behaviour keeps happening.",
    related: ["antecedent", "consequence", "functional-behaviour-assessment"],
  },
  {
    term: "Antecedent",
    slug: "antecedent",
    definition:
      "Whatever happens just before a behaviour: an instruction, a change of activity, a noise, someone walking in. Changing antecedents is one of the main ways ABA prevents difficult behaviour before it starts.",
    related: ["abc-data", "consequence", "motivating-operation"],
  },
  {
    term: "Applied Behavior Analysis Technician",
    slug: "abat",
    abbr: "ABAT",
    definition:
      "QABA's entry-level ABA credential, for people who deliver ABA programmes under a supervisor. It needs 40 hours of coursework from a QABA-approved provider, 15 hours of supervised fieldwork and a pass in QABA's exam, and it is open to people living in the UAE.",
    related: ["qaba", "ibt", "rbt"],
    more: "/guides/what-is-abat",
  },
  {
    term: "Applied behaviour analysis",
    slug: "applied-behaviour-analysis",
    abbr: "ABA",
    definition:
      "The science of how behaviour is learned and changed, used to build skills that matter in daily life, such as communication, self-care and learning, and to reduce behaviour that causes harm or gets in the way. It works by looking at what comes before and after a behaviour, teaching in small steps and measuring progress with data.",
    related: ["behaviour", "reinforcement", "abc-data"],
    more: "/guides/aba-training-in-dubai",
  },
  {
    term: "Assessment of Basic Language and Learning Skills – Revised",
    slug: "ablls-r",
    abbr: "ABLLS-R",
    definition:
      "An assessment and skills-tracking tool used in many ABA programmes to review a child's language, learning and self-help skills and decide what to teach next. Like the VB-MAPP, it guides teaching goals; it isn't a diagnosis.",
    related: ["vb-mapp", "baseline"],
  },
  {
    term: "Baseline",
    slug: "baseline",
    definition:
      "Measurements of a behaviour or skill taken before teaching or a new plan starts. Comparing later data with the baseline shows whether the programme is making a difference.",
    related: ["frequency", "functional-behaviour-assessment", "behaviour-intervention-plan"],
  },
  {
    term: "Behavior Analyst Certification Board",
    slug: "bacb",
    abbr: "BACB",
    definition:
      "The board that issues the RBT, BCaBA and BCBA certifications. Since 1 January 2023 it has accepted new certification applications only from people living in its authorised countries, and the UAE is not one of them.",
    related: ["rbt", "bcba", "bcaba"],
    more: "/guides/can-i-become-an-rbt-or-bcba-in-the-uae",
  },
  {
    term: "Behaviour",
    slug: "behaviour",
    definition:
      "In ABA, anything a person does that can be seen and measured: speaking, writing, hitting, sitting down, looking away. Defining a behaviour precisely, so anyone watching would agree whether it happened, is the first step in changing it.",
    related: ["antecedent", "consequence", "interobserver-agreement"],
  },
  {
    term: "Behaviour intervention plan",
    slug: "behaviour-intervention-plan",
    abbr: "BIP",
    definition:
      "A written plan, based on a functional behaviour assessment, that sets out how to prevent a behaviour, what to teach in its place and how to respond when it happens. A qualified professional, usually a behaviour analyst, writes and reviews it; LSAs, therapists and families follow it.",
    related: ["functional-behaviour-assessment", "function-of-behaviour", "differential-reinforcement"],
  },
  {
    term: "Board Certified Assistant Behavior Analyst",
    slug: "bcaba",
    abbr: "BCaBA",
    definition:
      "The BACB's assistant-level behaviour analyst certification, between the RBT and the BCBA; BCaBAs practise under a BCBA's supervision. Like every BACB certification, it has been closed to new applicants living in the UAE since 1 January 2023.",
    related: ["bcba", "bacb", "rbt"],
    more: "/guides/can-i-become-an-rbt-or-bcba-in-the-uae",
  },
  {
    term: "Board Certified Behavior Analyst",
    slug: "bcba",
    abbr: "BCBA",
    definition:
      "The BACB's analyst-level certification, for people who assess learners, design ABA programmes and supervise others; it needs a master's degree, graduate-level behaviour-analytic coursework and supervised fieldwork. Since 1 January 2023 the BACB has accepted new applications only from people living in its authorised countries, and the UAE is not one of them. People already certified keep their certification for now, the BACB says.",
    related: ["bacb", "bcaba", "iba"],
    more: "/guides/can-i-become-an-rbt-or-bcba-in-the-uae",
  },
  {
    term: "Chaining",
    slug: "chaining",
    definition:
      "Teaching a multi-step skill, such as handwashing, by linking its steps in order. Forward chaining teaches the first step first; backward chaining starts with the last step, helping the learner through everything before it, so each practice ends with the task finished; total task chaining has the learner try every step each time, with help where needed.",
    related: ["task-analysis", "shaping", "prompt"],
  },
  {
    term: "Competency assessment",
    slug: "competency-assessment",
    definition:
      "A check in which a qualified supervisor watches a trainee carry out the skills of the role, such as running a teaching trial, recording data or following a behaviour plan, rather than only answering questions about them. The BACB's RBT requirements, for example, include an initial competency assessment.",
    related: ["supervised-practice", "rbt"],
    more: "/training#supervision",
  },
  {
    term: "Consequence",
    slug: "consequence",
    definition:
      "Whatever happens straight after a behaviour, such as praise, a reprimand, getting a toy or being let off a task. In ABA the word is neutral: consequences that strengthen a behaviour are reinforcement, and those that weaken it are punishment.",
    related: ["antecedent", "reinforcement", "punishment"],
  },
  {
    term: "Continuing education unit",
    slug: "ceu",
    abbr: "CEU",
    definition:
      "A measured unit of approved professional learning that credential holders complete to keep their credential. QABA, for example, asks ABAT holders for at least 12 CEUs every 2 years.",
    related: ["abat", "qaba"],
  },
  {
    term: "Differential reinforcement",
    slug: "differential-reinforcement",
    definition:
      "Reinforcing one behaviour while withholding reinforcement from another, so the wanted behaviour grows and the unwanted one fades. Its common forms are DRA, DRO and DRI.",
    related: [
      "differential-reinforcement-of-alternative-behaviour",
      "differential-reinforcement-of-other-behaviour",
      "differential-reinforcement-of-incompatible-behaviour",
    ],
  },
  {
    term: "Differential reinforcement of alternative behaviour",
    slug: "differential-reinforcement-of-alternative-behaviour",
    abbr: "DRA",
    definition:
      "Reinforcing a better way of getting the same result, while the problem behaviour stops paying off. A child who screams to get a break, for example, gets breaks for asking or handing over a break card instead.",
    related: ["differential-reinforcement", "function-of-behaviour", "mand"],
  },
  {
    term: "Differential reinforcement of incompatible behaviour",
    slug: "differential-reinforcement-of-incompatible-behaviour",
    abbr: "DRI",
    definition:
      "Reinforcing a behaviour that can't happen at the same time as the problem one, such as walking beside an adult instead of running off. It is a narrower form of DRA: doing the replacement rules the problem behaviour out.",
    related: ["differential-reinforcement", "differential-reinforcement-of-alternative-behaviour"],
  },
  {
    term: "Differential reinforcement of other behaviour",
    slug: "differential-reinforcement-of-other-behaviour",
    abbr: "DRO",
    definition:
      "Delivering reinforcement when the problem behaviour hasn't happened for a set period, whatever else the person was doing. The period usually starts short and grows as the behaviour reduces.",
    related: ["differential-reinforcement", "extinction"],
  },
  {
    term: "Discrete trial training",
    slug: "discrete-trial-training",
    abbr: "DTT",
    definition:
      "A structured way of teaching in which a skill is broken into small parts and practised in short, repeated trials: an instruction, the learner's response, then a consequence, with a brief pause before the next trial. It is often used at a table for early skills such as matching, copying actions or following instructions.",
    related: ["natural-environment-teaching", "prompt", "stimulus-control"],
  },
  {
    term: "Duration",
    slug: "duration",
    definition:
      "How long a behaviour lasts from start to finish, such as how long a child stays seated at circle time or how long crying continues.",
    related: ["frequency", "latency", "whole-interval-recording"],
  },
  {
    term: "Echoic",
    slug: "echoic",
    definition:
      "In verbal behaviour, repeating what someone else has just said: the adult says \"ball\" and the child says \"ball\". Echoics are often taught early because they help a learner pick up new words.",
    related: ["verbal-behaviour", "mand", "tact"],
  },
  {
    term: "Errorless learning",
    slug: "errorless-learning",
    definition:
      "Teaching with enough help from the very first attempt that the learner gets it right, then reducing the help gradually. It keeps frustration low and stops the learner practising mistakes.",
    related: ["prompt", "prompt-fading", "prompt-hierarchy"],
  },
  {
    term: "Extinction",
    slug: "extinction",
    definition:
      "No longer reinforcing a behaviour that used to be reinforced, so that over time it happens less. Behaviour often gets worse for a while first, an extinction burst, which is one reason extinction belongs in a plan written and supervised by a qualified analyst.",
    related: ["reinforcement", "differential-reinforcement", "behaviour-intervention-plan"],
  },
  {
    term: "Frequency",
    slug: "frequency",
    definition:
      "The number of times a behaviour happens during an observation, such as how often a child asks for help in a lesson. Because observations differ in length, counts are often turned into a rate.",
    related: ["rate", "duration", "abc-data"],
  },
  {
    term: "Function of behaviour",
    slug: "function-of-behaviour",
    definition:
      "The reason a behaviour keeps happening: what the person gets, or gets away from, by doing it. ABA usually sorts functions into escape (getting out of a demand or situation), attention, tangible (getting an item or activity) and automatic (the behaviour is reinforcing in itself, for example through the sensation it gives).",
    related: ["functional-behaviour-assessment", "behaviour-intervention-plan", "differential-reinforcement-of-alternative-behaviour"],
  },
  {
    term: "Functional behaviour assessment",
    slug: "functional-behaviour-assessment",
    abbr: "FBA",
    definition:
      "A process for finding out why a behaviour happens, using interviews, direct observation and data such as ABC records. Its result, a working explanation of the behaviour's function, is what a behaviour intervention plan is built on. A qualified analyst leads it; technicians and LSAs often help by collecting data.",
    related: ["function-of-behaviour", "abc-data", "behaviour-intervention-plan"],
  },
  {
    term: "Generalisation",
    slug: "generalisation",
    definition:
      "Using a skill beyond the situation where it was taught: with different people, materials and places. A child who asks for juice only from their therapist, at the therapy table, hasn't yet generalised the skill.",
    related: ["maintenance", "natural-environment-teaching"],
  },
  {
    term: "Incidental teaching",
    slug: "incidental-teaching",
    definition:
      "A naturalistic way of teaching in which the learner starts the interaction, by reaching for, pointing at or asking about something they want, and the adult uses that moment to prompt a slightly more advanced response before giving it.",
    related: ["natural-environment-teaching", "mand", "motivating-operation"],
  },
  {
    term: "Individual education plan",
    slug: "iep",
    abbr: "IEP",
    definition:
      "A school's written plan for a pupil with special educational needs: where they are now, specific goals, the support and adjustments the school will provide, and how progress will be reviewed. An LSA or shadow teacher usually works toward its goals alongside the class teacher.",
    related: ["senco", "lsa", "behaviour-intervention-plan"],
  },
  {
    term: "International Behavior Analysis Organization",
    slug: "ibao",
    abbr: "IBAO",
    definition:
      "The international board that issues the IBT and IBA credentials, which are open to people living in the UAE. IBAO sets the requirements and holds the exams; a training provider can prepare you, but only IBAO issues its credentials.",
    related: ["ibt", "iba"],
    more: "/guides/what-is-ibt",
  },
  {
    term: "International Behavior Analyst",
    slug: "iba",
    abbr: "IBA",
    definition:
      "IBAO's analyst-level credential, for people who assess learners, design ABA programmes and supervise IBTs. It needs a bachelor's degree or regional equivalent, coursework covering IBAO's Required Educational Objectives, 1,500 practice hours and 75 supervision hours (for candidates registering on or after 1 October 2025) and IBAO's online exam.",
    related: ["ibao", "ibt", "bcba"],
    more: "/guides/iba-requirements",
  },
  {
    term: "International Behavior Therapist",
    slug: "ibt",
    abbr: "IBT",
    definition:
      "IBAO's entry-level ABA credential, for people who deliver ABA programmes under a supervising analyst. It needs 40 hours of coursework from an IBAO-recognised Approved Content Provider, 300 hours of supervised practice and IBAO's online exam, and it is open to people living in the UAE.",
    related: ["ibao", "iba", "abat"],
    more: "/guides/what-is-ibt",
  },
  {
    term: "Interobserver agreement",
    slug: "interobserver-agreement",
    abbr: "IOA",
    definition:
      "A check on data quality in which two observers record the same behaviour at the same time, independently, and their records are compared. High agreement, usually reported as a percentage, suggests the behaviour is clearly defined and the data can be trusted.",
    related: ["behaviour", "frequency"],
  },
  {
    term: "Intraverbal",
    slug: "intraverbal",
    definition:
      "In verbal behaviour, answering someone else's words with different words: replying to \"What's your name?\", finishing a familiar phrase, or saying \"cat\" when asked to name an animal. Much of conversation is intraverbal.",
    related: ["verbal-behaviour", "tact", "echoic"],
  },
  {
    term: "Latency",
    slug: "latency",
    definition:
      "The time between a cue, such as an instruction, and the start of the behaviour: for example, how long a child takes to begin a task after being asked.",
    related: ["duration", "frequency"],
  },
  {
    term: "Learning support assistant",
    slug: "lsa",
    abbr: "LSA",
    definition:
      "A member of staff who supports a pupil with additional needs in class, helping them follow lessons, stay regulated and join in, working with the class teacher and the school's inclusion team. In many UAE schools the role is the same as a shadow teacher's.",
    related: ["shadow-teacher", "senco", "iep"],
    more: "/courses/lsa-course",
  },
  {
    term: "Maintenance",
    slug: "maintenance",
    definition:
      "A learner keeping a skill once teaching has stopped or been reduced, still using it weeks or months later. Teams check maintenance by testing skills that were mastered earlier.",
    related: ["generalisation", "schedule-of-reinforcement"],
  },
  {
    term: "Mand",
    slug: "mand",
    definition:
      "In verbal behaviour, a request: asking for something you want, or for something to stop, in words, signs, pictures or on a device. Mands are often among the first skills taught, because the learner gets what they asked for straight away.",
    related: ["verbal-behaviour", "motivating-operation", "tact"],
  },
  {
    term: "Modelling",
    slug: "modelling",
    definition:
      "Showing the learner exactly what to do so they can copy it, such as clapping your hands and waiting for them to clap. A model is one of the prompts in a prompt hierarchy.",
    related: ["prompt", "prompt-hierarchy", "echoic"],
  },
  {
    term: "Momentary time sampling",
    slug: "momentary-time-sampling",
    abbr: "MTS",
    definition:
      "Dividing an observation into equal intervals and noting only whether the behaviour is happening at the moment each interval ends. It is easier for a busy LSA or teacher than recording continuously, but it gives an estimate rather than a count.",
    related: ["partial-interval-recording", "whole-interval-recording"],
  },
  {
    term: "Motivating operation",
    slug: "motivating-operation",
    abbr: "MO",
    definition:
      "Anything that changes, for a while, how much a person wants something, and so how likely they are to do what has got it for them before. Hunger makes food more valuable; having just eaten makes it less so.",
    related: ["reinforcer", "mand", "antecedent"],
  },
  {
    term: "Natural environment teaching",
    slug: "natural-environment-teaching",
    abbr: "NET",
    definition:
      "Teaching skills during everyday activities and play, using what the learner is interested in at the time, rather than at a table. It helps skills carry over into daily life and is often combined with discrete trial training.",
    related: ["discrete-trial-training", "incidental-teaching", "generalisation"],
  },
  {
    term: "Negative punishment",
    slug: "negative-punishment",
    definition:
      "Taking away something the person values straight after a behaviour, so the behaviour becomes less likely, such as losing a token or a turn on the computer. Response cost is one form.",
    related: ["punishment", "response-cost", "positive-punishment"],
  },
  {
    term: "Negative reinforcement",
    slug: "negative-reinforcement",
    definition:
      "Removing or avoiding something unpleasant straight after a behaviour, so the behaviour becomes more likely. It isn't punishment: a child who learns that crying ends a hard task has had crying negatively reinforced.",
    related: ["reinforcement", "positive-reinforcement", "function-of-behaviour"],
  },
  {
    term: "Pairing",
    slug: "pairing",
    definition:
      "Building a positive relationship before placing demands, by linking yourself with things the learner enjoys, such as joining their play or offering favourite items. Pairing usually comes first when a new therapist or LSA starts with a child.",
    related: ["reinforcer", "motivating-operation"],
  },
  {
    term: "Partial interval recording",
    slug: "partial-interval-recording",
    definition:
      "Dividing an observation into short, equal intervals and marking each one in which the behaviour happened at all, even briefly. It tends to overestimate how much the behaviour happens, so it suits behaviour you want to reduce.",
    related: ["whole-interval-recording", "momentary-time-sampling"],
  },
  {
    term: "Positive punishment",
    slug: "positive-punishment",
    definition:
      "Adding something straight after a behaviour that makes the behaviour less likely, such as a reprimand. In ABA, \"positive\" means something is added, not that it is pleasant.",
    related: ["punishment", "negative-punishment", "positive-reinforcement"],
  },
  {
    term: "Positive reinforcement",
    slug: "positive-reinforcement",
    definition:
      "Adding something straight after a behaviour that makes the behaviour more likely to happen again, such as praise, a sticker or a turn with a favourite toy. It is at the heart of most ABA teaching.",
    related: ["reinforcement", "reinforcer", "negative-reinforcement"],
  },
  {
    term: "Prompt",
    slug: "prompt",
    definition:
      "Extra help that makes the right response more likely, such as a gesture, a spoken hint, a demonstration or gently guiding the learner's hands. Prompts are meant to be faded, so the learner ends up responding without them.",
    related: ["prompt-hierarchy", "prompt-fading", "errorless-learning"],
  },
  {
    term: "Prompt fading",
    slug: "prompt-fading",
    definition:
      "Reducing help step by step until the learner responds to the natural cue, such as the instruction or the situation, rather than to the adult's help. Fading too slowly can leave a learner waiting for help they no longer need, known as prompt dependence.",
    related: ["prompt", "prompt-hierarchy", "stimulus-control"],
  },
  {
    term: "Prompt hierarchy",
    slug: "prompt-hierarchy",
    definition:
      "Prompts ranked by how much help they give, for example from full physical guidance down to a gesture or a spoken hint. Teams work from most to least help or from least to most, so the learner gets just enough help and it fades in a planned way.",
    related: ["prompt", "prompt-fading", "modelling"],
  },
  {
    term: "Punishment",
    slug: "punishment",
    definition:
      "In ABA, any consequence that makes a behaviour less likely to happen again; it is defined by its effect, not by whether it feels harsh. Good practice puts reinforcement first, and any punishment procedure belongs in a plan written by a qualified analyst.",
    related: ["positive-punishment", "negative-punishment", "reinforcement"],
  },
  {
    term: "Qualified Applied Behavior Analysis Credentialing Board",
    slug: "qaba",
    abbr: "QABA",
    definition:
      "The international board that issues the ABAT, QASP-S and QBA credentials, which are open to people living in the UAE. It counts ABAT coursework only from its approved coursework providers.",
    related: ["abat", "qasp-s", "qba"],
    more: "/guides/what-is-abat",
  },
  {
    term: "Qualified Autism Services Practitioner-Supervisor",
    slug: "qasp-s",
    abbr: "QASP-S",
    definition:
      "QABA's credential between the ABAT and the QBA on its ladder. Since 1 October 2025 the QASP-S bridge course on its own no longer qualifies for IBAO's IBA Addition, the shorter route to IBA for people who already hold certain credentials.",
    related: ["qaba", "abat", "qba"],
  },
  {
    term: "Qualified Behavior Analyst",
    slug: "qba",
    abbr: "QBA",
    definition:
      "QABA's analyst-level credential. It needs a master's degree in ABA or a related field, 270 hours of approved coursework, 2,000 hours of supervised fieldwork and QABA's exam, and it is open to people living in the UAE.",
    related: ["qaba", "qasp-s", "iba"],
    more: "/guides/iba-vs-bcba-vs-qba",
  },
  {
    term: "Rate",
    slug: "rate",
    definition:
      "How often a behaviour happens per unit of time: the count divided by the length of the observation, such as requests per hour. Rate lets you compare observations of different lengths fairly.",
    related: ["frequency", "duration"],
  },
  {
    term: "Registered Behavior Technician",
    slug: "rbt",
    abbr: "RBT",
    definition:
      "The BACB's entry-level certification for people who deliver ABA under close supervision. Since 1 January 2023 the BACB has not accepted new applicants living in the UAE, so the technician credentials open to people living here are IBAO's IBT and QABA's ABAT.",
    related: ["bacb", "ibt", "abat"],
    more: "/guides/can-i-become-an-rbt-or-bcba-in-the-uae",
  },
  {
    term: "Reinforcement",
    slug: "reinforcement",
    definition:
      "Any consequence that makes a behaviour more likely to happen again. It is positive when something is added and negative when something is taken away; both strengthen behaviour.",
    related: ["positive-reinforcement", "negative-reinforcement", "reinforcer"],
  },
  {
    term: "Reinforcer",
    slug: "reinforcer",
    definition:
      "Whatever follows a behaviour and makes it more likely to happen again: praise, a snack, a break, a favourite toy. What works differs from person to person and from day to day, so teams check preferences often.",
    related: ["reinforcement", "motivating-operation", "pairing"],
  },
  {
    term: "Response cost",
    slug: "response-cost",
    definition:
      "Losing a reinforcer you already have, such as a token, because of a behaviour, which makes that behaviour less likely. It is a form of negative punishment, often used within a token economy.",
    related: ["negative-punishment", "token-economy"],
  },
  {
    term: "Schedule of reinforcement",
    slug: "schedule-of-reinforcement",
    definition:
      "The rule for when a behaviour is reinforced. On a continuous schedule every correct response is reinforced, which suits new skills; on an intermittent schedule only some are, after a number of responses or a length of time, which helps skills last.",
    related: ["reinforcement", "maintenance", "token-economy"],
  },
  {
    term: "Shadow teacher",
    slug: "shadow-teacher",
    definition:
      "The everyday UAE term for an assistant who works one-to-one with a child with additional needs, helping them access lessons and join in, alongside the class teacher and the school's inclusion team. In many UAE schools it is the same role as an LSA.",
    related: ["lsa", "senco", "iep"],
    more: "/guides/shadow-teacher-training-uae",
  },
  {
    term: "Shaping",
    slug: "shaping",
    definition:
      "Teaching a new behaviour by reinforcing closer and closer versions of it, one step at a time: any sound, then a \"b\" sound, then \"ba\", then \"ball\". Each step is reinforced until it is steady, then the bar is raised.",
    related: ["chaining", "reinforcement", "prompt"],
  },
  {
    term: "Special educational needs coordinator",
    slug: "senco",
    abbr: "SENCO",
    definition:
      "The member of school staff who organises support for pupils with special educational needs, usually the link between teachers, LSAs, families and outside specialists. Some UAE schools call the role head of inclusion.",
    related: ["lsa", "shadow-teacher", "iep"],
  },
  {
    term: "Stimulus control",
    slug: "stimulus-control",
    definition:
      "When a particular cue reliably sets off a behaviour, and the behaviour doesn't happen without it: a child says \"dog\" for a picture of a dog, not for a cat. Prompt fading moves control from the adult's help to the right cue.",
    related: ["prompt-fading", "discrete-trial-training", "tact"],
  },
  {
    term: "Supervised practice",
    slug: "supervised-practice",
    definition:
      "Hours spent delivering ABA with learners under a qualified supervisor, counted toward a credential. IBAO asks IBT candidates for 300 hours of supervised practice; QABA calls it supervised fieldwork and asks ABAT candidates for 15 hours, with 1 hour of supervision for every 10 hours of independent fieldwork.",
    related: ["competency-assessment", "ibt", "abat"],
    more: "/training#supervision",
  },
  {
    term: "Tact",
    slug: "tact",
    definition:
      "In verbal behaviour, naming or describing something you can see, hear or otherwise sense, such as saying \"plane\" when one flies over. The payoff for a tact is usually social, such as attention or praise, rather than getting the thing named.",
    related: ["verbal-behaviour", "mand", "intraverbal"],
  },
  {
    term: "Task analysis",
    slug: "task-analysis",
    definition:
      "Breaking a skill into small, ordered steps, so each can be taught and tracked: for handwashing, turn on the tap, wet hands, add soap and so on. It is the starting point for chaining.",
    related: ["chaining", "prompt"],
  },
  {
    term: "Token economy",
    slug: "token-economy",
    definition:
      "A system in which a learner earns tokens, such as stars or stickers, for target behaviours and later swaps them for something they want. It helps learners wait for reinforcement and can be faded over time.",
    related: ["reinforcer", "response-cost", "schedule-of-reinforcement"],
  },
  {
    term: "Verbal Behavior Milestones Assessment and Placement Program",
    slug: "vb-mapp",
    abbr: "VB-MAPP",
    definition:
      "An assessment tool, built on the verbal behaviour approach, used in many ABA programmes to map a child's language, learning and social skills against developmental milestones and choose teaching goals. Like the ABLLS-R, it guides teaching; it isn't a diagnosis.",
    related: ["ablls-r", "verbal-behaviour", "mand"],
  },
  {
    term: "Verbal behaviour",
    slug: "verbal-behaviour",
    definition:
      "B. F. Skinner's way of looking at language as behaviour, sorted by what it does for the speaker rather than by the words used. ABA programmes built on it teach each function on its own: mands, tacts, echoics and intraverbals.",
    related: ["mand", "tact", "intraverbal"],
  },
  {
    term: "Whole interval recording",
    slug: "whole-interval-recording",
    definition:
      "Dividing an observation into short, equal intervals and marking an interval only if the behaviour lasted through all of it. It tends to underestimate behaviour, so it suits behaviour you want to increase, such as staying on task.",
    related: ["partial-interval-recording", "momentary-time-sampling", "duration"],
  },
];
