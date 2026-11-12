import { academyOgImage, OG_SIZE } from "@/lib/academy-og";

export const size = OG_SIZE;
export const contentType = "image/png";
export const alt = "ABA glossary";

export default function Image() {
  return academyOgImage({ eyebrow: "ABA glossary", title: "The words of ABA, in plain English." });
}
