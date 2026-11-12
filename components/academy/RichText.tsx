import Link from "next/link";
import { Fragment } from "react";
import { LINK } from "@/lib/academy-guides/text";

/**
 * Guide prose with its one piece of markup: [label](href). Academy paths
 * become client-side links; anything absolute opens in a new tab, with the
 * referrer kept so issuers can see where readers come from.
 */
export function RichText({ text }: { text: string }) {
  const out: React.ReactNode[] = [];
  let last = 0;
  for (const m of text.matchAll(LINK)) {
    const [whole, label, href] = m;
    const at = m.index ?? 0;
    if (at > last) out.push(text.slice(last, at));
    out.push(
      href.startsWith("/") || href.startsWith("#") ? (
        <Link key={at} href={href} className="font-medium text-amethyst underline decoration-amethyst/30 underline-offset-2 hover:decoration-amethyst">
          {label}
        </Link>
      ) : (
        <a key={at} href={href} target="_blank" rel="noopener" className="font-medium text-amethyst underline decoration-amethyst/30 underline-offset-2 hover:decoration-amethyst">
          {label}
        </a>
      ),
    );
    last = at + whole.length;
  }
  if (last < text.length) out.push(text.slice(last));
  return <>{out.map((n, i) => <Fragment key={i}>{n}</Fragment>)}</>;
}
