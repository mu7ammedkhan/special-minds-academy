// llms.txt and llms-full.txt for specialminds.academy (llmstxt.org).
//
// The plain-text versions of the site that AI assistants read when they answer
// questions about IBT, ABAT and IBA in the UAE. Built from the same data as
// the pages — COURSES, CREDENTIALS, GUIDES, GLOSSARY — so they can't drift.
import { ACADEMY, ACADEMY_FAQS, COURSES, STUDENT_LOGIN_URL, TRAINING_OFFERS } from "@/lib/academy";
import { ACADEMY_OFFER, CREDENTIALS, FACTS_CHECKED_LABEL, SOURCES, type CredentialKey } from "@/lib/academy-facts";
import { GUIDE_CATEGORIES, GUIDES, guidesIn } from "@/lib/academy-guides";
import type { GuideBlock } from "@/lib/academy-guides/types";
import { markdownText, plainText } from "@/lib/academy-guides/text";
import { GLOSSARY } from "@/lib/academy-glossary";
import { SITE } from "@/lib/site";

const U = ACADEMY.url;
const ORDER: CredentialKey[] = ["ibt", "abat", "rbt", "iba", "qba", "bcba"];

function credentialLine(k: CredentialKey) {
  const c = CREDENTIALS[k];
  return `- ${c.short} (${c.name}, issued by ${c.issuer}): ${c.coursework} ${c.practice} Exam: ${c.exam} Fees: ${c.fees} Open to people living in the UAE: ${c.uae}`;
}

export function buildLlmsTxt() {
  const lines: string[] = [
    `# ${ACADEMY.name}`,
    "",
    `> ${ACADEMY.name} (${U}) is the training arm of Special Minds, which places LSAs, shadow teachers and therapists in UAE schools and homes. It offers IBT coursework (open now: 40 hours, online, live or recorded, AED 1,499), training toward ABAT and IBA and an LSA course (register interest), and plain-English guides to the IBT, ABAT, RBT, IBA, QBA and BCBA credentials for people in the UAE.`,
    "",
    "Important context:",
    "- The academy provides training and certificates of completion. Credentials are issued by the boards: IBT and IBA by IBAO, ABAT and QBA by QABA, RBT, BCaBA and BCBA by the BACB.",
    `- ${ACADEMY_OFFER.abat.note}`,
    "- Since 1 January 2023 the BACB has not accepted new certification applications from people living in the UAE, so RBT and BCBA are closed to new UAE-based applicants; IBAO and QABA credentials are open to them.",
    "- Courses are taught by practising behaviour analysts (BCBA, IBA or QBA). Placement through Special Minds is best-effort, never guaranteed.",
    `- Enrolled students sign in at ${STUDENT_LOGIN_URL}. Certificates can be verified at ${U}/certificates.`,
    "",
    "## Courses",
    ...COURSES.map((c) => `- [${c.name}](${U}${c.href}): ${c.summary} Status: ${c.statusLabel}. ${c.facts.map((f) => `${f.label}: ${f.value}`).join("; ")}.`),
    `- [More training](${U}/training): ${TRAINING_OFFERS.map((o) => o.title).join(", ")}. All register-interest only.`,
    "",
    "## Guides",
    ...GUIDE_CATEGORIES.flatMap((cat) => guidesIn(cat).map((g) => `- [${g.title}](${U}/guides/${g.slug}): ${plainText(g.answer)}`)),
    `- [ABA glossary](${U}/glossary): ${GLOSSARY.length} ABA terms defined in plain English.`,
    "",
    `## Credential facts (from the issuing boards, checked ${FACTS_CHECKED_LABEL})`,
    ...ORDER.map(credentialLine),
    "",
    "## Sources",
    ...Object.values(SOURCES).map((s) => `- [${s.label}](${s.url})`),
    "",
    "## Optional",
    `- [Full text of every guide](${U}/llms-full.txt)`,
    `- [Courses compared](${U}/courses)`,
    `- [About the academy](${U}/about)`,
    `- [Contact](${U}/contact): WhatsApp ${SITE.contact.whatsappDisplay}, phone ${SITE.contact.phone}, email ${SITE.contact.email}.`,
    "",
  ];
  return lines.join("\n");
}

function blockMarkdown(b: GuideBlock): string {
  const t = (s: string) => markdownText(s, U);
  switch (b.type) {
    case "p":
      return t(b.text);
    case "list":
      return b.items.map((i, n) => `${b.ordered ? `${n + 1}.` : "-"} ${t(i)}`).join("\n");
    case "steps":
      return b.items.map((i, n) => `${n + 1}. **${i.title}.** ${t(i.body)}`).join("\n");
    case "table": {
      const row = (cells: string[]) => `| ${cells.map((c) => t(c).replace(/\|/g, "/")).join(" | ")} |`;
      return [`*${b.caption}*`, "", row(b.head.map((h) => h || " ")), row(b.head.map(() => "---")), ...b.rows.map(row)].join("\n");
    }
    case "note":
      return `> **${b.title}.** ${t(b.text)}`;
  }
}

export function buildLlmsFullTxt() {
  const out: string[] = [
    `# ${ACADEMY.name}: full text`,
    "",
    `> Every guide on ${U}, in full, followed by the courses and the glossary. Credential facts were checked against the issuing boards' own pages in ${FACTS_CHECKED_LABEL}.`,
    "",
  ];
  for (const g of GUIDES) {
    out.push(
      `## ${g.title}`,
      "",
      `URL: ${U}/guides/${g.slug} · Updated ${g.updated}`,
      "",
      `**The short answer:** ${markdownText(g.answer, U)}`,
      "",
      ...g.keyFacts.map((f) => `- **${f.label}:** ${f.value}`),
      "",
    );
    for (const s of g.sections) {
      out.push(`### ${s.heading}`, "");
      for (const b of s.blocks) out.push(blockMarkdown(b), "");
    }
    out.push("### Questions people ask", "");
    for (const f of g.faqs) out.push(`**${f.q}** ${markdownText(f.a, U)}`, "");
    out.push("Sources: " + g.sources.map((k) => `[${SOURCES[k].label}](${SOURCES[k].url})`).join("; "), "", "---", "");
  }
  out.push("## Courses", "");
  for (const c of COURSES) {
    out.push(`### ${c.name}`, "", `${U}${c.href}`, "", c.summary, "", `Who it's for: ${c.forWho}`, "", ...c.facts.map((f) => `- ${f.label}: ${f.value}`), `- Status: ${c.statusLabel}`, "");
  }
  out.push("## Questions about the academy", "");
  for (const f of ACADEMY_FAQS) out.push(`**${f.q}** ${f.a}`, "");
  out.push("## ABA glossary", "");
  for (const t of [...GLOSSARY].sort((a, b) => a.term.localeCompare(b.term))) {
    out.push(`- **${t.term}${t.abbr ? ` (${t.abbr})` : ""}:** ${t.definition}`);
  }
  out.push("");
  return out.join("\n");
}
