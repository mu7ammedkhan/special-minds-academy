"use client";
import { useEffect } from "react";
import { usePathname } from "next/navigation";

// The signed-in tools and the WhatsApp intake form: places where someone is
// working, not reading, and content arriving late is a delay rather than a
// pleasure. Same list as SmoothScroll, plus the intake.
const SKIP_PATHS = ["/staff", "/portal", "/partner", "/clinical", "/intake"];

// What counts as one thing to reveal. Headings and their intro copy, every
// item in a grid or list, FAQ entries, quotes, photographs and cards. Only the
// outermost match is used — a card reveals as a card, not as a card plus each
// line inside it arriving separately.
const UNITS = [
  "p.eyebrow",
  "h2",
  "h2 ~ p",
  ".grid > *",
  "ol > li",
  "ul > li",
  "details",
  "dl > div",
  "blockquote",
  "figure",
  ".card",
  "[data-reveal-media]",
].join(",");

/** Milliseconds between items that come into view together. */
const STAGGER = 90;
/** After this many, items that arrive together stop waiting on each other. */
const MAX_STAGGER_STEPS = 5;
/** The longest transition in globals.css runs 1.2s; release a little after. */
const SETTLE = 1300;

type Variant = "up" | "left" | "right" | "media";

/**
 * Scroll-triggered reveals across the public site, on every pass.
 *
 * Each unit on a page — a heading, an intro, a card, a list item, a photograph
 * — arrives as it scrolls into view, from the side of the page it sits on:
 * left-hand content slides in from the left, right-hand content from the
 * right, centred and full-width content rises, and photographs open out of a
 * cropped frame while settling from a zoom. It happens every time, in both
 * directions. A unit that leaves the screen is quietly reset, and comes in
 * again — from above, if the reader is scrolling back up.
 *
 * The safety rules this was built on still hold:
 *
 *   - Nothing is hidden by default. The hidden state is a data attribute set
 *     from here, so a crawler or a failed bundle gets every word.
 *   - A unit is hidden only while it is off screen and within a screen of the
 *     viewport — so never while anyone can see it, and never far enough ahead
 *     that the stylesheet's ten-second failsafe fires before the reader gets
 *     there and it arrives without its motion.
 *   - That failsafe releases anything still hidden ten seconds after it was
 *     hidden, because a half-running script is commoner than a dead one.
 *   - prefers-reduced-motion means none of it runs.
 *
 * A data attribute rather than a class, because React owns className and
 * rewrites it on re-render; it never touches an attribute it did not set. Once
 * a unit has arrived the attribute is removed, which hands transitions back to
 * the element's own styles — the card lifts on hover with its own timing.
 */
export function ScrollReveal() {
  const pathname = usePathname();

  useEffect(() => {
    if (SKIP_PATHS.some((p) => pathname === p || pathname.startsWith(`${p}/`))) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    if (!("IntersectionObserver" in window)) return;

    const units = new Set<HTMLElement>();
    const near = new Set<HTMLElement>();
    const settleTimers = new Map<HTMLElement, number>();

    const clearTimer = (el: HTMLElement) => {
      const t = settleTimers.get(el);
      if (t !== undefined) {
        clearTimeout(t);
        settleTimers.delete(el);
      }
    };

    // Back to exactly as rendered.
    const reset = (el: HTMLElement) => {
      clearTimer(el);
      el.removeAttribute("data-reveal");
      el.removeAttribute("data-reveal-from");
      el.style.removeProperty("--reveal-delay");
    };

    // Hidden, ready to come in. Only ever called while the unit is off screen.
    const arm = (el: HTMLElement, from: "above" | "below") => {
      clearTimer(el);
      el.style.removeProperty("--reveal-delay");
      el.setAttribute("data-reveal-from", from);
      el.setAttribute("data-reveal", "armed");
    };

    // Units arriving together are one arrival, staggered from the edge they
    // come in at: top-down when scrolling down, bottom-up when scrolling back.
    const show = (els: HTMLElement[]) => {
      els
        .filter((el) => el.getAttribute("data-reveal") === "armed")
        .map((el) => ({ el, rect: el.getBoundingClientRect(), up: el.getAttribute("data-reveal-from") === "above" }))
        .sort((a, b) =>
          a.up === b.up
            ? a.up
              ? b.rect.bottom - a.rect.bottom || b.rect.left - a.rect.left
              : a.rect.top - b.rect.top || a.rect.left - b.rect.left
            : a.up
              ? 1
              : -1
        )
        .forEach(({ el }, i) => {
          const delay = Math.min(i, MAX_STAGGER_STEPS) * STAGGER;
          el.style.setProperty("--reveal-delay", `${delay}ms`);
          el.setAttribute("data-reveal", "in");
          clearTimer(el);
          settleTimers.set(
            el,
            window.setTimeout(() => {
              settleTimers.delete(el);
              if (el.getAttribute("data-reveal") === "in") {
                el.removeAttribute("data-reveal");
                el.style.removeProperty("--reveal-delay");
              }
            }, delay + SETTLE)
          );
        });
    };

    const offscreen = (rect: DOMRect) => rect.bottom <= 0 || rect.top >= window.innerHeight;
    const sideOf = (rect: DOMRect): "above" | "below" => (rect.top < 0 ? "above" : "below");

    // Within a screen of the viewport, above or below. Leaving that band
    // resets a unit; entering it hides one that is still off screen, so it is
    // ready to come in.
    const nearIo = new IntersectionObserver(
      (entries) => {
        for (const e of entries) {
          const el = e.target as HTMLElement;
          if (!e.isIntersecting) {
            near.delete(el);
            reset(el);
            continue;
          }
          near.add(el);
          if (offscreen(e.boundingClientRect) && el.getAttribute("data-reveal") !== "armed") {
            arm(el, sideOf(e.boundingClientRect));
          }
        }
      },
      { rootMargin: "100% 0px 100% 0px", threshold: 0 }
    );

    // The viewport itself. A unit that has gone wholly off screen is hidden
    // again, so it comes back in on the next pass.
    const exitIo = new IntersectionObserver(
      (entries) => {
        for (const e of entries) {
          const el = e.target as HTMLElement;
          if (!e.isIntersecting && near.has(el) && offscreen(e.boundingClientRect)) {
            arm(el, sideOf(e.boundingClientRect));
          }
        }
      },
      { threshold: 0 }
    );

    // A little inside the viewport at both edges, so the motion is finishing
    // as the unit is properly in view rather than starting at the very edge.
    const enterIo = new IntersectionObserver(
      (entries) => show(entries.filter((e) => e.isIntersecting).map((e) => e.target as HTMLElement)),
      { rootMargin: "-8% 0px -8% 0px", threshold: 0 }
    );

    // The one case the observers can miss: a unit scrolled clean past in a
    // single frame. Anything hidden that is now inside the same band the
    // entry observer watches is shown.
    const inBand = (rect: DOMRect) => rect.top < window.innerHeight * 0.92 && rect.bottom > window.innerHeight * 0.08;
    let ticking = false;
    const onScroll = () => {
      if (ticking) return;
      ticking = true;
      const check = () => {
        ticking = false;
        const stranded: HTMLElement[] = [];
        units.forEach((el) => {
          if (el.getAttribute("data-reveal") !== "armed") return;
          if (inBand(el.getBoundingClientRect())) stranded.push(el);
        });
        if (stranded.length) show(stranded);
      };
      // A background tab runs no animation frames; a timer still fires there.
      if (document.visibilityState === "visible") requestAnimationFrame(check);
      else window.setTimeout(check, 16);
    };
    window.addEventListener("scroll", onScroll, { passive: true });

    // Which way a unit comes in, from where it sits. On a phone everything is
    // full width, so cards alternate sides down the page and text rises.
    const variantOf = (el: HTMLElement): Variant => {
      // A photograph, not a <figure>: the testimonials are figures too, and a
      // quote opening out of a cropped frame reads as a picture loading.
      if (el.hasAttribute("data-reveal-media") || (el.querySelector("img") !== null && el.innerText.trim() === "")) {
        return "media";
      }
      const vw = window.innerWidth;
      const rect = el.getBoundingClientRect();
      const isText = /^(H2|P)$/.test(el.tagName);
      if (vw < 768) {
        if (isText) return "up";
        const index = el.parentElement ? Array.prototype.indexOf.call(el.parentElement.children, el) : 0;
        return index % 2 === 0 ? "left" : "right";
      }
      if (rect.width > vw * 0.62) return "up";
      const centre = rect.left + rect.width / 2;
      if (centre < vw * 0.44) return "left";
      if (centre > vw * 0.56) return "right";
      return "up";
    };

    const scan = () => {
      const main = document.querySelector("main");
      if (!main) return;
      // The first section is the hero on every page that has one. It carries
      // the page's one promise; it never waits and never moves.
      const sections = Array.from(main.querySelectorAll<HTMLElement>("section")).slice(1);
      const chosen = new Set<HTMLElement>();

      for (const section of sections) {
        if (section.closest("[data-no-reveal]")) continue;
        for (const el of Array.from(section.querySelectorAll<HTMLElement>(UNITS))) {
          // Outermost only: skip anything inside a unit already chosen.
          let parent = el.parentElement;
          let nested = false;
          while (parent && parent !== section) {
            if (chosen.has(parent)) {
              nested = true;
              break;
            }
            parent = parent.parentElement;
          }
          if (nested) continue;
          // Forms stay put — a field sliding under a cursor reads as a fault.
          if (el.closest("form, nav, [data-no-reveal]")) continue;

          const style = getComputedStyle(el);
          // Positioned and already-transformed elements are laid out by their
          // transform; moving one would break it, not reveal it.
          if (style.position === "absolute" || style.position === "fixed" || style.position === "sticky") continue;
          if (style.transform !== "none" || style.display === "contents") continue;

          const rect = el.getBoundingClientRect();
          if (rect.height === 0) continue;
          // Taller than most of a screen and holding units of its own: a page
          // column, not an item. Treated as one, a column that starts on screen
          // took every question or card inside it out of the animation.
          if (rect.height > window.innerHeight * 0.8 && el.querySelector(UNITS)) continue;
          chosen.add(el);

          el.setAttribute("data-reveal-variant", variantOf(el));
          units.add(el);
          nearIo.observe(el);
          exitIo.observe(el);
          enterIo.observe(el);
        }
      }
    };

    // The side a unit comes in from depends on the layout, which changes when
    // the window crosses a breakpoint.
    let lastWidth = window.innerWidth;
    let resizeTimer = 0;
    const onResize = () => {
      clearTimeout(resizeTimer);
      resizeTimer = window.setTimeout(() => {
        if (window.innerWidth === lastWidth) return;
        lastWidth = window.innerWidth;
        units.forEach((el) => {
          const was = el.getAttribute("data-reveal");
          el.removeAttribute("data-reveal");
          el.setAttribute("data-reveal-variant", variantOf(el));
          if (was) el.setAttribute("data-reveal", was);
        });
      }, 200);
    };
    window.addEventListener("resize", onResize);

    // After layout, before paint. A tab opened in the background runs no
    // animation frames until it is shown, so it falls back to a timer there.
    const hidden = document.visibilityState !== "visible";
    const frame = hidden ? window.setTimeout(scan, 0) : requestAnimationFrame(scan);

    return () => {
      if (hidden) clearTimeout(frame);
      else cancelAnimationFrame(frame);
      nearIo.disconnect();
      exitIo.disconnect();
      enterIo.disconnect();
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onResize);
      clearTimeout(resizeTimer);
      // Leaving the page must not strand anything hidden if the same element
      // survives into the next render.
      units.forEach((el) => {
        reset(el);
        el.removeAttribute("data-reveal-variant");
      });
    };
  }, [pathname]);

  return null;
}
