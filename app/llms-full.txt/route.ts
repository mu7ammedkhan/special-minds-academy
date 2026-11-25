import { buildLlmsFullTxt } from "@/lib/academy-llms";

// Served at specialminds.academy/llms-full.txt: every guide in full, in Markdown.
// Built once at build time, as in Next 14 (route handlers became dynamic by default in 15).
export const dynamic = "force-static";

export function GET() {
  return new Response(buildLlmsFullTxt(), { headers: { "Content-Type": "text/plain; charset=utf-8" } });
}
