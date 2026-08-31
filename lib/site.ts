/** Canonical site origin. Keep in sync with `metadataBase` in `app/layout.tsx`. */
export const SITE_ORIGIN = "https://www.vaalpenskraal.com";

/**
 * Public marketing site switch. When false, every route shows a short
 * unavailable notice and chrome (header, footer, inner pages) is withheld.
 */
export const SITE_AVAILABLE = false;

export const siteMetadataBase = new URL(SITE_ORIGIN);

export function siteUrl(path = "/"): string {
  if (!path || path === "/") return SITE_ORIGIN;
  const normalized = path.startsWith("/") ? path : `/${path}`;
  return `${SITE_ORIGIN}${normalized}`;
}
