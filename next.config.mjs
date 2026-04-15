/** @type {import('next').NextConfig} */
const isProdBuild = process.env.NODE_ENV === "production";

const nextConfig = {
  /**
   * Static export only for production builds (Vercel / dist/). Omit during
   * `next dev` so App Router dynamic segments like `/species/[slug]` resolve
   * correctly on the local dev server. `next build` sets NODE_ENV=production.
   */
  ...(isProdBuild ? { output: "export" } : {}),
  distDir: "dist",
  images: {
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
