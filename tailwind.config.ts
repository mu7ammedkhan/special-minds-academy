import type { Config } from "tailwindcss";

/**
 * "Considered Care" — Special Minds design tokens.
 * Evolves the existing purple + lime brand into an accessible, editorial system.
 * Contrast targets: WCAG 2.2 AA for all text; AAA for long-form body where feasible.
 */
const config: Config = {
  content: ["./app/**/*.{ts,tsx}", "./components/**/*.{ts,tsx}", "./lib/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        ink: "#211A33",            // primary text — near-black aubergine
        amethyst: {
          DEFAULT: "#34206B",      // brand anchor (kept from current site)
          deep: "#221545",         // large dark fills / footer
        },
        // The light-surface accent — links, small headings, inline emphasis.
        // Warm bronze rather than the previous green (#3E7A34): champagne now
        // carries every dark surface, and a cool green on light next to a warm
        // champagne on dark meant the brand changed hue as you scrolled.
        //
        // LIGHT surfaces only. 5.35:1 on paper and 5.79:1 on white — both clear
        // AA, and both better than the green it replaces. On amethyst it is
        // 2.32:1, so it must never go on a dark surface; champagne is the token
        // for that.
        bronze: "#7A6236",
        // sprout (#A6DE6F, bright lime) was retired on 2026-08-24. It appeared
        // as text in eleven places on the homepage alone, and a high-chroma
        // lime at that frequency reads energetic and new rather than
        // considered — the wrong register for a clinical service starting at
        // AED 7,000/month. Deliberately removed rather than left defined, so it
        // cannot quietly come back one utility at a time.
        // The accent, DARK surfaces only — 1.6:1 on paper, so never put it on
        // light. Carries eyebrows, section labels, heading accents, icons and
        // the primary button fill.
        //
        // Contrast measured rather than guessed: 9.65:1 on amethyst-deep and
        // 7.78:1 on amethyst as text; 9.65:1 for amethyst-deep text sitting on
        // it as a button fill. All clear AA comfortably.
        //
        // Note it is not locatable by fill alone on a light page (1.6:1 against
        // paper) — but neither was the lime it replaced (1.46:1). Buttons are
        // found here by shadow, size and label, which is why the swap cost
        // nothing in usability.
        champagne: "#D6C3A0",
        apricot: "#E8A87C",        // warm human accent — FILL ONLY, never text on light
        // Status colours. `apricot` is 2.0:1 as text on white, so anything that
        // has to be *read* uses `caution`; `apricot` stays a background wash.
        // Both below clear AA on paper and surface.
        danger: "#B5504E",         // errors, destructive actions (4.6:1 on paper)
        caution: "#8A5227",        // darkened apricot for text (5.9:1 on paper)
        paper: "#F7F5FB",          // lilac-tinted page background
        surface: "#FFFFFF",
        hairline: "#E7E2F1",
        // Form-control edges. Hairline is 1.27:1 on white — fine for a divider,
        // but WCAG 1.4.11 wants 3:1 for the boundary of something you type into,
        // and on a phone in daylight a hairline field is close to invisible.
        // 3.86:1 on surface, 3.57:1 on paper.
        field: "#857E99",
        soft: "#6B6480",           // muted text (AA on paper)
      },
      fontFamily: {
        display: ["var(--font-fraunces)", "Georgia", "serif"],
        sans: ["var(--font-grotesk)", "system-ui", "sans-serif"],
      },
      // 50ch, not 66ch, to actually get ~66 characters a line.
      //
      // `ch` is the width of the digit "0", which in Space Grotesk at 17.2px is
      // 11.03px — while the average glyph in real sentence text measures 8.39px.
      // A 1.32x difference, so "66ch" was setting lines of about 87 characters:
      // past the 45-75 band that reading research treats as comfortable, and on
      // long paragraphs the eye starts losing its place returning to the left.
      // Measured in the browser rather than guessed; 50 x 11.03 / 8.39 = 66.
      maxWidth: { measure: "50ch", shell: "1180px" },
      borderRadius: { xl2: "18px" },
      boxShadow: {
        lift: "0 10px 28px rgba(34,26,51,0.10)",
        champagne: "0 6px 18px rgba(214,195,160,0.35)",
      },
      keyframes: {
        // thread-draw intentionally lives in app/globals.css, next to the rule
        // that applies it — declared here it was never emitted, since Tailwind
        // only outputs keyframes referenced by an animation-* utility.
        rise: { from: { opacity: "0", transform: "translateY(14px)" }, to: { opacity: "1", transform: "translateY(0)" } },
      },
      animation: { rise: "rise .6s ease both" },
    },
  },
  plugins: [],
};
export default config;
