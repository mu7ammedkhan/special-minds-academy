import { buildLlmsFullTxt } from "@/lib/academy-llms";

// Served at specialminds.academy/llms-full.txt: every guide in full, in Markdown.
export function GET() {
  return new Response(buildLlmsFullTxt(), { headers: { "Content-Type": "text/plain; charset=utf-8" } });
}
