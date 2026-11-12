import type { CSSProperties } from "react";

/**
 * The Special Minds knot: the group's mark (public/logo.png), drawn as the four
 * strokes it is made of instead of shipped as a picture, so it takes its colour
 * from `currentColor` and stays sharp at any size. Same artwork as the
 * Kuwait site's public/brand/knot-*.svg, checked against logo.png by
 * laying one over the other.
 *
 * The strokes are listed in the order the thread runs, each drawn in the
 * direction of travel, so a drawing animation reads as one thread being tied.
 * The breaks are the knot's: three where a strand passes under another, and
 * the gap at the foot.
 */
export const KNOT_PATHS = [
  // A: from beneath C, round the upper-left loop, to beneath B
  "M81.07 110.55l-3.18 -2.18 -3.02 -2.3 -2.83 -2.41 -2.64 -2.51 -2.44 -2.6 -2.23 -2.68 -2.02 -2.75 -1.8 -2.8 -1.57 -2.84 -1.34 -2.87 -1.11 -2.89 -0.88 -2.89 -0.64 -2.88 -0.4 -2.86 -0.17 -2.82 0.08 -2.77 0.07 -0.91 0.23 -1.8 0.54 -2.63 0.49 -1.71 0.58 -1.67 1.06 -2.41 1.28 -2.3 1.49 -2.17 1.69 -2.03 1.89 -1.89 2.08 -1.73 2.25 -1.56 1.59 -0.95 0.83 -0.44 2.57 -1.21 1.8 -0.7 0.93 -0.31 0.93 -0.3 1.92 -0.52 2.98 -0.62 3.1 -0.41 3.19 -0.21 2.17 -0.01 3.32 0.16 3.39 0.37 3.44 0.59 3.47 0.81 3.5 1.03 2.33 0.81 2.34 0.9 3.49 1.54 2.31 1.13 3.45 1.88 3.4 2.08 2.24 1.5 3.29 2.4 2.16 1.71 2.11 1.78 3.09 2.82 2.01 1.98 2.91 3.09 2.78 3.24 1.78 2.24 1.72 2.3 2.45 3.55 2.3 3.66 1.44 2.5 2.03 3.82 1.25 2.59 1.17 2.63 1.6 3.98 1.42 4.03 1 3.29",
  // D: from beneath B down to the gap at the foot
  "M167.06 131.1l-0.29 3.85 -0.3 2.51 -0.39 2.48 -0.73 3.62 -0.59 2.35 -0.67 2.29 -1.15 3.32 -1.31 3.17 -0.97 2.03 -1.03 1.95 -1.68 2.78 -1.81 2.6 -1.29 1.63 -1.34 1.54 -2.1 2.13 -1.46 1.31 -1.5 1.2 -1.55 1.11 -1.58 1.01 -2.44 1.33 -1.66 0.75 -1.68 0.65 -1.71 0.54 -1.23 0.32",
  // C: from the foot up to beneath A
  "M123.27 177.54l-1.71 -0.47 -1.7 -0.58 -2.5 -1.07 -1.64 -0.84 -1.61 -0.94 -2.34 -1.61 -1.51 -1.2 -1.47 -1.29 -1.42 -1.38 -1.37 -1.48 -1.96 -2.39 -1.23 -1.7 -1.17 -1.78 -1.11 -1.87 -1.05 -1.94 -1.43 -3.05 -0.87 -2.12 -0.8 -2.19 -1.05 -3.4 -0.87 -3.53 -0.48 -2.42 -0.4 -2.47 -0.44 -3.78 -0.24 -3.87 -0.06 -2.62 0.03 -2.65 0.22 -4.01 0.41 -4.05 0.62 -4.08 0.81 -4.09 0.65 -2.72 0.74 -2.72 1.27 -4.06 1.46 -4.02 1.65 -3.97 1.2 -2.62 1.28 -2.58 2.06 -3.8 1.47 -2.48 1.54 -2.44 2.44 -3.56 1.71 -2.3 1.77 -2.25 2.77 -3.26 2.62 -2.81",
  // B: from beneath A, round the upper-right loop, to beneath C
  "M141.87 46.35l3.47 -1.67 3.5 -1.46 3.5 -1.25 3.5 -1.03 3.47 -0.81 3.44 -0.59 3.39 -0.37 3.32 -0.16 1.09 -0.01 2.16 0.07 3.16 0.27 3.05 0.48 2.94 0.69 2.82 0.88 1.8 0.7 0.87 0.39 2.53 1.26 2.36 1.45 2.2 1.62 2.01 1.78 1.82 1.94 1.63 2.08 0.97 1.46 0.45 0.76 0.83 1.54 0.37 0.79 0.69 1.62 0.3 0.83 0.77 2.55 0.54 2.63 0.23 1.8 0.07 0.91 0.08 2.77 -0.17 2.82 -0.4 2.86 -0.64 2.88 -0.56 1.93 -0.66 1.92 -1.19 2.89 -0.92 1.91 -1.57 2.84 -1.8 2.8 -1.32 1.84 -2.16 2.7 -1.56 1.77 -2.51 2.57 -2.7 2.48 -1.91 1.59 -3.02 2.3 -2.1 1.47 -3.3 2.09 -3.45 1.95 -3.6 1.81 -2.47 1.12 -3.81 1.54 -2.6 0.94 -3.99 1.27 -2.72 0.75 -4.13 0.97 -4.2 0.79 -2.83 0.42 -4.28 0.48 -2.87 0.21 -2.88 0.13 -4.32 0.03 -4.32 -0.16 -2.87 -0.21 -2.86 -0.3 -4.25 -0.6 -4.2 -0.79 -3.35 -0.78",
];

/** Square and centred on the knot's bounds, so it sits level beside type. */
export const KNOT_VIEWBOX = "48.8 27.085 162.4 162.4";

/**
 * The knot's three-fold centre inside that box. Turned 120° about this point
 * it lands on itself, which is what makes the turn on hover (and the
 * slow spin behind the dark bands) look like the knot is turning in place
 * rather than wobbling round the middle of its box.
 */
export const KNOT_ORIGIN = "50% 43.09%";

/** The logo's own stroke weight, in viewBox units. */
const BRAND_STROKE = 12;

export function Knot({
  className = "",
  style,
  strokeWidth = BRAND_STROKE,
  draw = false,
}: {
  className?: string;
  style?: CSSProperties;
  strokeWidth?: number;
  /** Normalise each stroke's length to 1, so CSS can draw it with stroke-dashoffset. */
  draw?: boolean;
}) {
  return (
    <svg
      viewBox={KNOT_VIEWBOX}
      fill="none"
      stroke="currentColor"
      strokeWidth={strokeWidth}
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
      focusable="false"
      className={className}
      style={style}
    >
      {KNOT_PATHS.map((d) => (
        <path key={d.slice(0, 16)} d={d} pathLength={draw ? 1 : undefined} />
      ))}
    </svg>
  );
}
