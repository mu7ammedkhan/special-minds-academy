/** The one markup guide prose allows: [label](href). */
export const LINK = /\[([^\]]+)\]\(([^)\s]+)\)/g;

/** Links reduced to their labels, for meta tags, JSON-LD and plain-text readers. */
export function plainText(text: string) {
  return text.replace(LINK, "$1");
}

/** Links kept as Markdown, with academy paths made absolute, for llms-full.txt. */
export function markdownText(text: string, origin: string) {
  return text.replace(LINK, (_, label: string, href: string) => `[${label}](${href.startsWith("/") ? origin + href : href})`);
}
