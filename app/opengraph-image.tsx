import { academyOgImage, OG_SIZE } from "@/lib/academy-og";

export const size = OG_SIZE;
export const contentType = "image/png";
export const alt = "Special Minds Academy — IBT, ABAT, IBA and LSA training in the UAE";

export default function Image() {
  return academyOgImage({ title: "Train in ABA with the people who do the work.", chips: ["IBT Training", "ABAT Training", "IBA Training", "LSA Course"] });
}
