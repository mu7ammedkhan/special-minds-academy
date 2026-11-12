import { GUIDE_CATEGORIES, type Guide, type GuideCategory } from "./types";
import { plainText } from "./text";
import { guide as whatIsIbt } from "./what-is-ibt";
import { guide as howToBecomeAnIbtInTheUae } from "./how-to-become-an-ibt-in-the-uae";
import { guide as ibtRequirements } from "./ibt-requirements";
import { guide as ibtVsAbatVsRbt } from "./ibt-vs-abat-vs-rbt";
import { guide as whatIsAbat } from "./what-is-abat";
import { guide as abatRequirements } from "./abat-requirements";
import { guide as ibaRequirements } from "./iba-requirements";
import { guide as ibaVsBcbaVsQba } from "./iba-vs-bcba-vs-qba";
import { guide as canIBecomeAnRbtOrBcbaInTheUae } from "./can-i-become-an-rbt-or-bcba-in-the-uae";
import { guide as abaCareerPathUae } from "./aba-career-path-uae";
import { guide as abaTrainingInDubai } from "./aba-training-in-dubai";
import { guide as shadowTeacherTrainingUae } from "./shadow-teacher-training-uae";

export { GUIDE_CATEGORIES };
export type { Guide, GuideCategory };

/** Every published guide, in the order the guides page lists them within a category. */
export const GUIDES: Guide[] = [
  whatIsIbt,
  howToBecomeAnIbtInTheUae,
  ibtRequirements,
  ibtVsAbatVsRbt,
  whatIsAbat,
  abatRequirements,
  ibaRequirements,
  ibaVsBcbaVsQba,
  canIBecomeAnRbtOrBcbaInTheUae,
  abaCareerPathUae,
  abaTrainingInDubai,
  shadowTeacherTrainingUae,
];

export const guideBySlug = (slug: string) => GUIDES.find((g) => g.slug === slug);

export const guidesIn = (category: GuideCategory) => GUIDES.filter((g) => g.category === category);

/** Words of prose a reader actually reads, for the "x min read" line. */
export function readingMinutes(g: Guide) {
  const parts: string[] = [g.answer];
  for (const s of g.sections)
    for (const b of s.blocks) {
      if (b.type === "p") parts.push(b.text);
      else if (b.type === "list") parts.push(...b.items);
      else if (b.type === "steps") parts.push(...b.items.flatMap((i) => [i.title, i.body]));
      else if (b.type === "table") parts.push(...b.rows.flat());
      else parts.push(b.title, b.text);
    }
  for (const f of g.faqs) parts.push(f.q, f.a);
  const words = plainText(parts.join(" ")).split(/\s+/).filter(Boolean).length;
  return Math.max(3, Math.round(words / 220));
}
