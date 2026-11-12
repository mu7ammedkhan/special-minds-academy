import { ImageResponse } from "next/og";
import { ACADEMY } from "@/lib/academy";
import { KNOT_PATHS, KNOT_VIEWBOX } from "@/components/academy/Knot";

export const OG_SIZE = { width: 1200, height: 630 };

/** The Special Minds knot as plain SVG, which is all the image renderer reads. */
function KnotArt({ px, color, strokeWidth = 12 }: { px: number; color: string; strokeWidth?: number }) {
  return (
    <svg width={px} height={px} viewBox={KNOT_VIEWBOX} fill="none">
      {KNOT_PATHS.map((d, i) => (
        <path key={i} d={d} stroke={color} strokeWidth={strokeWidth} strokeLinecap="round" strokeLinejoin="round" />
      ))}
    </svg>
  );
}

/**
 * The academy's share card: the knot lockup, a page-specific eyebrow and
 * title, and the knot drawn large off the right-hand edge, ribbon and thread,
 * as behind the site's dark bands. `chips` is for the home card's courses.
 */
export function academyOgImage({ eyebrow, title, chips = [] }: { eyebrow?: string; title: string; chips?: string[] }) {
  const titleSize = title.length > 70 ? 48 : title.length > 48 ? 54 : 60;
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          position: "relative",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          padding: "80px",
          background: "#221545",
          color: "#fff",
        }}
      >
        <div style={{ display: "flex", position: "absolute", right: -260, top: -80 }}>
          <KnotArt px={780} color="rgba(214,195,160,0.08)" />
        </div>
        <div style={{ display: "flex", position: "absolute", right: -260, top: -80 }}>
          <KnotArt px={780} color="rgba(214,195,160,0.55)" strokeWidth={0.45} />
        </div>
        <div style={{ display: "flex", alignItems: "center", gap: 22 }}>
          <KnotArt px={72} color="#FFFFFF" />
          <div style={{ display: "flex", flexDirection: "column", gap: 8 }}>
            <div style={{ display: "flex", fontSize: 30, fontWeight: 700, letterSpacing: 5.4, textTransform: "uppercase", color: "#fff" }}>
              Special Minds
            </div>
            <div style={{ display: "flex", fontSize: 20, fontWeight: 600, letterSpacing: 6.4, textTransform: "uppercase", color: "#D6C3A0" }}>
              Academy
            </div>
          </div>
        </div>
        {eyebrow && (
          <div style={{ display: "flex", marginTop: 48, fontSize: 24, letterSpacing: 3, textTransform: "uppercase", color: "#D6C3A0" }}>
            {eyebrow}
          </div>
        )}
        <div style={{ display: "flex", fontSize: titleSize, fontWeight: 700, marginTop: eyebrow ? 14 : 48, maxWidth: 900, lineHeight: 1.15 }}>
          {title}
        </div>
        {chips.length > 0 && (
          <div style={{ display: "flex", gap: 16, marginTop: 40 }}>
            {chips.map((c) => (
              <div key={c} style={{ display: "flex", padding: "12px 24px", borderRadius: 999, border: "2px solid rgba(214,195,160,0.6)", fontSize: 26, color: "#fff" }}>
                {c}
              </div>
            ))}
          </div>
        )}
        <div style={{ display: "flex", position: "absolute", bottom: 56, left: 80, fontSize: 24, color: "rgba(255,255,255,0.6)" }}>
          {ACADEMY.url.replace("https://", "")}
        </div>
      </div>
    ),
    { ...OG_SIZE },
  );
}
