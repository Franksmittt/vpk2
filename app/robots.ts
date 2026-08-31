import type { MetadataRoute } from "next";
import { SITE_AVAILABLE, siteMetadataBase } from "@/lib/site";

export const dynamic = "force-static";

export default function robots(): MetadataRoute.Robots {
  const origin = siteMetadataBase.origin;

  if (!SITE_AVAILABLE) {
    return {
      rules: {
        userAgent: "*",
        disallow: "/",
      },
      host: origin,
    };
  }

  return {
    rules: {
      userAgent: "*",
      allow: "/",
    },
    sitemap: `${origin}/sitemap.xml`,
    host: origin,
  };
}
