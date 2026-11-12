import Link from "next/link";
import { ArrowRight, BookOpen } from "lucide-react";
import { guideBySlug, type Guide } from "@/lib/academy-guides";

/** Guides that go deeper on a course page's subject. Unknown slugs are skipped. */
export function RelatedGuides({ slugs, title = "Read before you choose" }: { slugs: string[]; title?: string }) {
  const guides = slugs.map(guideBySlug).filter((g): g is Guide => Boolean(g));
  if (!guides.length) return null;
  return (
    <section aria-labelledby="related-guides" className="shell py-16 md:py-24">
      <div className="flex flex-wrap items-end justify-between gap-4">
        <h2 id="related-guides" className="text-2xl text-ink md:text-3xl">{title}</h2>
        <Link href="/guides" className="flex items-center gap-2 font-semibold text-amethyst hover:underline">
          All guides <ArrowRight size={16} aria-hidden="true" />
        </Link>
      </div>
      <ul className="mt-8 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
        {guides.map((g) => (
          <li key={g.slug}>
            <Link href={`/guides/${g.slug}`} className="card group flex h-full items-start gap-4 p-5 transition hover:border-amethyst/40">
              <BookOpen size={20} className="mt-1 shrink-0 text-bronze" aria-hidden="true" />
              <span className="min-w-0">
                <span className="block font-semibold leading-snug text-ink group-hover:text-amethyst">{g.title}</span>
                <span className="mt-1 block text-sm leading-relaxed text-soft">{g.description}</span>
              </span>
            </Link>
          </li>
        ))}
      </ul>
    </section>
  );
}
