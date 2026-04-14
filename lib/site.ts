/** Canonical site origin. Keep in sync with `metadataBase` in `app/layout.tsx`. */
export const SITE_ORIGIN = "https://www.vaalpenskraal.com";

export const siteMetadataBase = new URL(SITE_ORIGIN);

export function siteUrl(path = "/"): string {
  if (!path || path === "/") return SITE_ORIGIN;
  const normalized = path.startsWith("/") ? path : `/${path}`;
  return `${SITE_ORIGIN}${normalized}`;
}
