import { academyOgImage, OG_SIZE } from "@/lib/academy-og";
import { GUIDES, guideBySlug } from "@/lib/academy-guides";

export const size = OG_SIZE;
export const contentType = "image/png";
export const alt = "A Special Minds Academy guide";

export function generateStaticParams() {
  return GUIDES.map((g) => ({ slug: g.slug }));
}

export default function Image({ params }: { params: { slug: string } }) {
  const g = guideBySlug(params.slug);
  return academyOgImage({ eyebrow: g ? `${g.category} guide` : "Guide", title: g?.title ?? "Guides to IBT, ABAT and IBA" });
}
