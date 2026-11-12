import { Knot, KNOT_ORIGIN } from "@/components/academy/Knot";

/**
 * The academy's lockup, built the way the group's other sites build theirs:
 * the Special Minds knot, the wordmark set exactly as specialminds.ae sets it,
 * and the part of the group underneath, "Academy" where the Kuwait site says
 * "Kuwait". The knot turns a third of a turn on hover, landing back on itself.
 */
export function AcademyLogo({ onDark = false }: { onDark?: boolean }) {
  return (
    <span className="group/logo flex items-center gap-3">
      <Knot
        className={`h-9 w-9 shrink-0 transition-transform duration-700 ease-out motion-safe:group-hover/logo:rotate-[120deg] ${
          onDark ? "text-white" : "text-amethyst"
        }`}
        style={{ transformOrigin: KNOT_ORIGIN }}
      />
      <span className="flex flex-col gap-[0.3rem] leading-none">
        <span className={`font-sans text-[0.95rem] font-bold uppercase tracking-[0.18em] ${onDark ? "text-white" : "text-amethyst"}`}>
          Special Minds
        </span>
        <span className={`font-sans text-[0.7rem] font-semibold uppercase tracking-[0.32em] ${onDark ? "text-champagne" : "text-bronze"}`}>
          Academy
        </span>
      </span>
    </span>
  );
}
