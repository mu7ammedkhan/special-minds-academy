"use client";
import { useEffect } from "react";
import { usePathname } from "next/navigation";
import Lenis from "lenis";

declare global {
  interface Window {
    /** The running smooth-scroll instance, when there is one. Read by
     *  ScrollProgress so "back to top" rides the same easing as the wheel. */
    __lenis?: Lenis;
  }
}

// The signed-in areas are tools, not pages: tables, forms and panels with
// their own scrolling, where an eased wheel is a delay rather than a pleasure.
const APP_PATHS = ["/staff", "/portal", "/partner", "/clinical"];

/**
 * Eased wheel scrolling on the public site.
 *
 * The stylesheet's `scroll-behavior: smooth` only ever eased jumps — an anchor
 * link, the back-to-top ring. The wheel itself moved in the browser's own
 * steps. This eases the wheel too, which is most of what makes a long,
 * photograph-led page feel composed rather than stacked.
 *
 * Three groups never get it, and each for a reason rather than by accident:
 *
 *   - Anyone who has asked their system for reduced motion.
 *   - Touch devices. A finger already scrolls with the platform's own
 *     momentum, and replacing that is how a site ends up feeling "off" on a
 *     phone without anyone being able to say why.
 *   - The signed-in areas (APP_PATHS).
 *
 * It scrolls the real document rather than a wrapper, so position: sticky, the
 * header's surface sampling and the progress ring all keep reading the scroll
 * position they always did.
 */
export function SmoothScroll() {
  const pathname = usePathname();
  const isApp = APP_PATHS.some((p) => pathname === p || pathname.startsWith(`${p}/`));

  useEffect(() => {
    if (isApp) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    if (!window.matchMedia("(hover: hover) and (pointer: fine)").matches) return;

    const lenis = new Lenis({
      // Short. Long easings look luxurious in a demo and feel like lag by the
      // third page; this is enough to take the steps out of the wheel.
      duration: 1.05,
      smoothWheel: true,
      // In-page anchors, landing clear of the sticky header — the same 5.5rem
      // the stylesheet's scroll-padding-top uses.
      anchors: { offset: -88 },
    });
    window.__lenis = lenis;

    let frame = 0;
    const tick = (time: number) => {
      lenis.raf(time);
      frame = requestAnimationFrame(tick);
    };
    frame = requestAnimationFrame(tick);

    return () => {
      cancelAnimationFrame(frame);
      lenis.destroy();
      delete window.__lenis;
    };
  }, [isApp]);

  return null;
}
