import { academyOgImage, OG_SIZE } from "@/lib/academy-og";

export const size = OG_SIZE;
export const contentType = "image/png";
export const alt = "LSA Course — Learning Support Assistant certificate";

export default function Image() {
  return academyOgImage({ eyebrow: "LSA Course · Register interest", title: "Walk into the classroom ready." });
}
