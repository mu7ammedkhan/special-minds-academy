import nextVitals from "eslint-config-next/core-web-vitals";

const config = [
  ...nextVitals,
  {
    ignores: [".next/**", ".next-dev/**", "out/**", "public/**", "reference/**", "next-env.d.ts"],
  },
  {
    rules: {
      // Off on purpose: it flags every apostrophe in ordinary prose. React
      // renders them correctly, and turning "child's" into "child&apos;s" makes
      // copy that non-engineers edit much harder to read. If this is revisited,
      // the answer is curly apostrophes (’) in the copy, not HTML entities.
      "react/no-unescaped-entities": "off",
    },
  },
];

export default config;
