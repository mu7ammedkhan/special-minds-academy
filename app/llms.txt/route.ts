import { buildLlmsTxt } from "@/lib/academy-llms";

// Served at specialminds.academy/llms.txt: the
// summary AI assistants read before answering questions about the academy.
// Built once at build time, as in Next 14 (route handlers became dynamic by default in 15).
export const dynamic = "force-static";

export function GET() {
  return new Response(buildLlmsTxt(), { headers: { "Content-Type": "text/plain; charset=utf-8" } });
}
