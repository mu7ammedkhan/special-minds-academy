import { ACADEMY_URL } from "@/lib/urls";

// AI search and assistant crawlers, named so it's plain that they're welcome:
// being quoted by ChatGPT, Gemini, Claude, Perplexity and Copilot is the point
// of the guides. Each still obeys the same Disallow as everyone else.
const AI_CRAWLERS = [
  "GPTBot",
  "OAI-SearchBot",
  "ChatGPT-User",
  "ClaudeBot",
  "Claude-SearchBot",
  "Claude-User",
  "PerplexityBot",
  "Perplexity-User",
  "Google-Extended",
  "Applebot-Extended",
  "Bingbot",
  "CCBot",
  "meta-externalagent",
];

// Served at specialminds.academy/robots.txt.
export function GET() {
  const body = [
    "User-agent: *",
    ...AI_CRAWLERS.map((a) => `User-agent: ${a}`),
    "Allow: /",
    // Per-certificate pages carry their own noindex; payment returns are noindex too.
    "Disallow: /ibt-training/",
    "",
    `Sitemap: ${ACADEMY_URL}/sitemap.xml`,
    `# A plain-text summary for AI assistants: ${ACADEMY_URL}/llms.txt`,
    "",
  ].join("\n");
  return new Response(body, { headers: { "Content-Type": "text/plain; charset=utf-8" } });
}
