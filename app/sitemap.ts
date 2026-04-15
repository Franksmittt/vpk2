import type { MetadataRoute } from "next";
import { QUARRY_SPECIES } from "@/data/species";
import { siteMetadataBase } from "@/lib/site";

export const dynamic = "force-static";

const STATIC_PATHS = [
  "/",
  "/species",
  "/the-hunt",
  "/activities",
  "/gallery",
  "/reserve",
  "/lodge",
  "/experience",
  "/contact",
  "/booking",
  "/privacy",
  "/terms",
  "/cookies",
] as const;

export default function sitemap(): MetadataRoute.Sitemap {
  const base = siteMetadataBase.origin;
  const lastModified = new Date();

  const staticEntries: MetadataRoute.Sitemap = STATIC_PATHS.map((path) => ({
    url: `${base}${path === "/" ? "" : path}`,
    lastModified,
    changeFrequency: path === "/" || path === "/reserve" || path === "/the-hunt" ? "weekly" : "monthly",
    priority:
      path === "/"
        ? 1
        : path === "/reserve" || path === "/species" || path === "/the-hunt"
          ? 0.9
          : 0.7,
  }));

  const speciesEntries: MetadataRoute.Sitemap = QUARRY_SPECIES.map((s) => ({
    url: `${base}/species/${s.id}`,
    lastModified,
    changeFrequency: "monthly" as const,
    priority: 0.75,
  }));

  return [...staticEntries, ...speciesEntries];
}
