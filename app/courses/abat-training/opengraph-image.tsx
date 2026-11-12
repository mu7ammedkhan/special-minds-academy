import { academyOgImage, OG_SIZE } from "@/lib/academy-og";

export const size = OG_SIZE;
export const contentType = "image/png";
export const alt = "ABAT Training — QABA's Applied Behavior Analysis Technician";

export default function Image() {
  return academyOgImage({ eyebrow: "ABAT Training · Register interest", title: "QABA's Applied Behavior Analysis Technician, explained." });
}
