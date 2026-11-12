import { academyOgImage, OG_SIZE } from "@/lib/academy-og";

export const size = OG_SIZE;
export const contentType = "image/png";
export const alt = "Guides to IBT, ABAT and IBA";

export default function Image() {
  return academyOgImage({ eyebrow: "Guides", title: "IBT, ABAT and IBA, explained plainly." });
}
