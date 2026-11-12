"use client";
import { useEffect } from "react";

// Cards that carry the pointer light and the photograph shift.
const GLOW = ".card, [data-glow]";
// Buttons that lean toward the pointer.
const MAGNET = ".btn, [data-magnetic]";
/** How far a button may lean, in pixels, across and down. */
const PULL_X = 7;
const PULL_Y = 5;

/**
 * Pointer-driven hover effects, from one listener on the document.
 *
 *   - Cards: sets --gx/--gy (where the pointer is, for the light in
 *     globals.css) and --px/--py (-0.5 to 0.5 across the card, for the
 *     photograph's shift).
 *   - Buttons: a short lean toward the pointer on the translate property,
 *     which composes with the lift .btn already does on transform.
 *
 * Mouse and trackpad only — touch has no hover, and a leaning button under a
 * finger is a moving target. The lean and the shift are motion, so they stay
 * off for prefers-reduced-motion; the light is not, and still follows.
 * Work is batched to one animation frame however fast the pointer moves.
 */
export function PointerFx() {
  useEffect(() => {
    if (!window.matchMedia("(hover: hover) and (pointer: fine)").matches) return;
    const still = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    let frame = 0;
    let last: PointerEvent | null = null;
    let card: HTMLElement | null = null;
    let magnet: HTMLElement | null = null;

    const releaseCard = () => {
      if (!card) return;
      for (const prop of ["--gx", "--gy", "--px", "--py"]) card.style.removeProperty(prop);
      card = null;
    };
    const releaseMagnet = () => {
      if (!magnet) return;
      magnet.style.removeProperty("translate");
      magnet = null;
    };

    const tick = () => {
      frame = 0;
      const e = last;
      if (!e) return;
      const target = e.target instanceof Element ? e.target : null;

      const nextCard = target?.closest<HTMLElement>(GLOW) ?? null;
      if (nextCard !== card) {
        releaseCard();
        card = nextCard;
      }
      if (card) {
        const r = card.getBoundingClientRect();
        const x = e.clientX - r.left;
        const y = e.clientY - r.top;
        card.style.setProperty("--gx", `${x.toFixed(0)}px`);
        card.style.setProperty("--gy", `${y.toFixed(0)}px`);
        if (!still) {
          card.style.setProperty("--px", (x / r.width - 0.5).toFixed(3));
          card.style.setProperty("--py", (y / r.height - 0.5).toFixed(3));
        }
      }

      if (still) return;
      const nextMagnet = target?.closest<HTMLElement>(MAGNET) ?? null;
      if (nextMagnet !== magnet) {
        releaseMagnet();
        magnet = nextMagnet;
      }
      if (magnet) {
        const r = magnet.getBoundingClientRect();
        const dx = (e.clientX - (r.left + r.width / 2)) / (r.width / 2);
        const dy = (e.clientY - (r.top + r.height / 2)) / (r.height / 2);
        const clamp = (n: number) => Math.max(-1, Math.min(1, n));
        magnet.style.translate = `${(clamp(dx) * PULL_X).toFixed(1)}px ${(clamp(dy) * PULL_Y).toFixed(1)}px`;
      }
    };

    const onMove = (e: PointerEvent) => {
      if (e.pointerType !== "mouse") return;
      last = e;
      if (!frame) frame = requestAnimationFrame(tick);
    };
    const onLeave = () => {
      last = null;
      releaseCard();
      releaseMagnet();
    };

    document.addEventListener("pointermove", onMove, { passive: true });
    document.documentElement.addEventListener("pointerleave", onLeave);
    window.addEventListener("blur", onLeave);
    return () => {
      cancelAnimationFrame(frame);
      document.removeEventListener("pointermove", onMove);
      document.documentElement.removeEventListener("pointerleave", onLeave);
      window.removeEventListener("blur", onLeave);
      onLeave();
    };
  }, []);

  return null;
}
