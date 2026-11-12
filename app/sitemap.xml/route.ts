import { ACADEMY_URL } from "@/lib/urls";
import { GUIDES } from "@/lib/academy-guides";

// Served at specialminds.academy/sitemap.xml.
// Every indexable academy page; payment returns and per-certificate pages are
// noindex and stay out. Guides carry their own updated date as lastmod.
const PAGES: [path: string, priority: number][] = [
  ["/", 1],
  ["/courses", 0.9],
  ["/courses/ibt-training", 0.9],
  ["/courses/abat-training", 0.8],
  ["/courses/iba-training", 0.8],
  ["/courses/lsa-course", 0.8],
  ["/training", 0.7],
  ["/guides", 0.8],
  ["/glossary", 0.6],
  ["/certificates", 0.6],
  ["/about", 0.5],
  ["/contact", 0.5],
];

export function GET() {
  const today = new Date().toISOString().slice(0, 10);
  const entry = (path: string, lastmod: string, priority: number) =>
    `  <url><loc>${ACADEMY_URL}${path === "/" ? "" : path}</loc><lastmod>${lastmod}</lastmod><priority>${priority}</priority></url>`;
  const urls = [
    ...PAGES.map(([path, priority]) => entry(path, today, priority)),
    ...GUIDES.map((g) => entry(`/guides/${g.slug}`, g.updated, 0.7)),
  ].join("\n");
  const body = `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n${urls}\n</urlset>\n`;
  return new Response(body, { headers: { "Content-Type": "application/xml; charset=utf-8" } });
}
