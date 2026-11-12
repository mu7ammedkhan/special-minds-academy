import type { MetadataRoute } from "next";
import { ACADEMY } from "@/lib/academy";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: ACADEMY.name,
    short_name: "SM Academy",
    description: ACADEMY.tagline,
    start_url: "/",
    display: "standalone",
    background_color: "#F7F5FB",
    theme_color: "#34206B",
    icons: [
      { src: "/icon-192.png", sizes: "192x192", type: "image/png" },
      { src: "/icon-512.png", sizes: "512x512", type: "image/png" },
    ],
  };
}
