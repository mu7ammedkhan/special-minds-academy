/** @type {import('next').NextConfig} */

// Paths that belong to specialminds.ae: accounts, the student portal and its
// videos (Cloudflare Stream only plays lessons there, and a session is per
// domain), the staff tools, the partner statement and the clinical app.
// Anyone who lands on one here is sent across, path and query intact.
const MAIN_SITE = "https://specialminds.ae";
const MAIN_SITE_SECTIONS = "login|register|auth|portal|staff|partner|clinical|intake";

// Vercel only ever serves previews of this site (it goes live on Hostinger),
// so every Vercel build carries noindex.
const NOINDEX = process.env.VERCEL === "1" || process.env.NOINDEX === "1";

const nextConfig = {
  // Keep `next build` and `next dev` out of each other's output directory, so
  // a build run while a dev server is up can't swap the chunks under it.
  distDir: process.env.NODE_ENV === "development" ? ".next-dev" : ".next",
  reactStrictMode: true,
  poweredByHeader: false,
  images: {
    // WebP, not AVIF: AVIF is many times slower to encode, and the first
    // request for each size is encoded on Hostinger's shared node.
    formats: ["image/webp"],
    // Source images are renamed when they change, so a month is safe.
    minimumCacheTTL: 60 * 60 * 24 * 30,
  },
  experimental: { optimizePackageImports: ["lucide-react"] },
  async redirects() {
    return [
      // www → the bare domain.
      {
        source: "/:path*",
        has: [{ type: "host", value: "www.specialminds.academy" }],
        destination: "https://specialminds.academy/:path*",
        permanent: true,
      },
      {
        source: `/:section(${MAIN_SITE_SECTIONS})`,
        destination: `${MAIN_SITE}/:section`,
        permanent: false,
      },
      {
        source: `/:section(${MAIN_SITE_SECTIONS})/:path*`,
        destination: `${MAIN_SITE}/:section/:path*`,
        permanent: false,
      },
      // The old IBT landing paths, and where Ziina sends someone who cancels
      // or whose payment fails (the IBT actions build those links from the
      // request's own origin): the course page, with the matching option
      // open. ?cancelled / ?failed ride along so the page can say what
      // happened. Exact paths only: /ibt-training/*/success are real pages.
      { source: "/ibt-training", destination: "/courses/ibt-training?plan=full", permanent: false },
      { source: "/ibt-training/cohort-1", destination: "/courses/ibt-training?plan=full", permanent: false },
      { source: "/ibt-training/pathway", destination: "/courses/ibt-training?plan=deposit", permanent: false },
    ];
  },
  async headers() {
    // The immutable year-long cache suits production, where every file under
    // /_next/static carries a content hash. Skip it in development.
    if (process.env.NODE_ENV !== "production") return [];
    const pageHeaders = [
      // Next serves a prerendered page with s-maxage of a year, assuming the
      // CDN is purged on every deploy. Hostinger's (hcdn) is not: it kept
      // serving old HTML that asked for chunks the deploy had replaced, and
      // pages died with "Application error". So cap how long a shared cache
      // may keep an HTML document, and let stale-while-revalidate keep it fast.
      { key: "Cache-Control", value: "public, max-age=0, s-maxage=60, stale-while-revalidate=86400" },
      { key: "Strict-Transport-Security", value: "max-age=31536000" },
      { key: "X-Content-Type-Options", value: "nosniff" },
      { key: "X-Frame-Options", value: "SAMEORIGIN" },
      { key: "Referrer-Policy", value: "strict-origin-when-cross-origin" },
      { key: "Permissions-Policy", value: "camera=(), microphone=(), geolocation=()" },
    ];
    const rules = [
      {
        source: "/_next/static/:path*",
        headers: [{ key: "Cache-Control", value: "public, max-age=31536000, immutable" }],
      },
      { source: "/((?!_next/).*)", headers: pageHeaders },
    ];
    if (NOINDEX) rules.push({ source: "/:path*", headers: [{ key: "X-Robots-Tag", value: "noindex, nofollow" }] });
    return rules;
  },
};
export default nextConfig;
