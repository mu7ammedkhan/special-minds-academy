import { academyOgImage, OG_SIZE } from "@/lib/academy-og";

export const size = OG_SIZE;
export const contentType = "image/png";
export const alt = "Supervision, exam prep and workshops";

export default function Image() {
  return academyOgImage({ eyebrow: "More training", title: "Supervision, exam prep, workshops and school training." });
}
