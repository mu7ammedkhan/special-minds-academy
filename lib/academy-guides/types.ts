import type { FaqItem } from "@/lib/seo";
import type { CourseSlug } from "@/lib/academy";
import type { SourceKey } from "@/lib/academy-facts";

// The shape of an academy guide (specialminds.academy/guides/<slug>).
//
// Written for two readers at once: a person deciding on a course, and the AI
// answer engines (ChatGPT, Gemini, Perplexity, Google's AI Overviews) that
// quote pages like these. Both want the same thing — the answer first, in
// plain words, then the detail, with every figure traceable to its source —
// so the structure enforces it:
//
//   answer     40–70 words that fully answer the title's question on their
//              own. Shown first on the page and used verbatim in llms.txt.
//   keyFacts   the figures a reader came for, as label/value rows.
//   sections   each opens with its own one-paragraph answer, then detail.
//   faqs       the follow-up questions people actually type, answered in
//              2–4 sentences each. Rendered as FAQPage structured data.
//   sources    keys into SOURCES (lib/academy-facts.ts). Every figure in the
//              guide must come from CREDENTIALS or IBT_CONTENT_AREAS there.
//
// Text is plain prose. The one markup allowed is a link, written
// [label](/path) for academy pages or [label](https://...) for outside ones.

export type GuideBlock =
  | { type: "p"; text: string }
  | { type: "list"; items: string[]; ordered?: boolean }
  | { type: "steps"; items: { title: string; body: string }[] }
  | { type: "table"; caption: string; head: string[]; rows: string[][] }
  | { type: "note"; title: string; text: string };

export type GuideSection = {
  /** Lower-case, hyphenated: the #anchor for "On this page". */
  id: string;
  /** Phrased as the question or task it settles. */
  heading: string;
  blocks: GuideBlock[];
};

export const GUIDE_CATEGORIES = ["IBT", "ABAT", "Analyst level", "Careers and training"] as const;
export type GuideCategory = (typeof GUIDE_CATEGORIES)[number];

export type Guide = {
  slug: string;
  category: GuideCategory;
  /** The page's h1. */
  title: string;
  /** <title>, under 60 characters; the layout appends "| Special Minds Academy". */
  metaTitle: string;
  /** Meta description, 140–160 characters. */
  description: string;
  /** The searches this guide is written to answer. */
  keywords: string[];
  answer: string;
  keyFacts: { label: string; value: string }[];
  sections: GuideSection[];
  faqs: FaqItem[];
  sources: SourceKey[];
  relatedCourses: CourseSlug[];
  /** Slugs of other guides. */
  relatedGuides: string[];
  /** ISO dates. */
  published: string;
  updated: string;
};
