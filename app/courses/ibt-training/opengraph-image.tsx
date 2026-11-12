import { academyOgImage, OG_SIZE } from "@/lib/academy-og";

export const size = OG_SIZE;
export const contentType = "image/png";
export const alt = "IBT Training — 40-hour IBT coursework, online";

export default function Image() {
  return academyOgImage({ eyebrow: "IBT Training · Enrolling now", title: "Your first ABA credential starts here: the 40-hour IBT coursework, online." });
}
