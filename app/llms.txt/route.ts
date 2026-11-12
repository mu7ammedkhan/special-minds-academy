import { buildLlmsTxt } from "@/lib/academy-llms";

// Served at specialminds.academy/llms.txt: the
// summary AI assistants read before answering questions about the academy.
export function GET() {
  return new Response(buildLlmsTxt(), { headers: { "Content-Type": "text/plain; charset=utf-8" } });
}
