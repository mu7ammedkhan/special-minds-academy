import { academyOgImage, OG_SIZE } from "@/lib/academy-og";
import { GUIDES, guideBySlug } from "@/lib/academy-guides";

export const size = OG_SIZE;
export const contentType = "image/png";
export const alt = "A Special Minds Academy guide";

export function generateStaticParams() {
  return GUIDES.map((g) => ({ slug: g.slug }));
}

export default async function Image({ params }: { params: Promise<{ slug: string }> }) {
  const g = guideBySlug((await params).slug);
  return academyOgImage({ eyebrow: g ? `${g.category} guide` : "Guide", title: g?.title ?? "Guides to IBT, ABAT and IBA" });
}
