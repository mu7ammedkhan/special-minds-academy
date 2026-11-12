import { academyOgImage, OG_SIZE } from "@/lib/academy-og";

export const size = OG_SIZE;
export const contentType = "image/png";
export const alt = "IBA Training — International Behavior Analyst";

export default function Image() {
  return academyOgImage({ eyebrow: "IBA Training · Register interest", title: "From running programmes to designing them." });
}
