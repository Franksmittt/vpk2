/** @type {import('next').NextConfig} */
const isProdBuild = process.env.NODE_ENV === "production";

const nextConfig = {
  /**
   * Static export and `dist/` output only for production builds. During
   * `next dev`, keep the default `.next` cache so Turbopack does not fight
   * with export artifacts under `dist/` (missing manifests, 404s, ENOENT).
   * `next build` sets NODE_ENV=production.
   */
  ...(isProdBuild ? { output: "export", distDir: "dist" } : {}),
  images: {
    /**
     * Static export (`output: "export"`) does not run the built-in Image Optimization API,
     * so `next/image` serves files from `public/` as-is (no responsive srcset, no WebP/AVIF).
     * Keep hero and card assets small (rough guide: under ~400KB each) or the site will feel slow.
     */
    unoptimized: true,
    remotePatterns: [
      {
        protocol: "https",
        hostname: "picsum.photos",
        pathname: "/**",
      },
    ],
  },
};

export default nextConfig;
