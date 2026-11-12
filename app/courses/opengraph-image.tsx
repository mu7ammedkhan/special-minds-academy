import { academyOgImage, OG_SIZE } from "@/lib/academy-og";

export const size = OG_SIZE;
export const contentType = "image/png";
export const alt = "Special Minds Academy courses";

export default function Image() {
  return academyOgImage({ eyebrow: "Courses", title: "Find the course that fits where you are.", chips: ["IBT", "ABAT", "IBA", "LSA"] });
}
