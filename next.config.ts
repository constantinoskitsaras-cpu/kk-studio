import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Static export for Cloudflare Pages — this site has no API routes or
  // server-only rendering, so a fully static build is the simplest, most
  // reliable deploy target (no Workers/adapter to maintain).
  output: "export",
  images: {
    // No Next.js image server on static hosts — serve originals as-is.
    // Source files are already pre-optimized (converted/resized by hand).
    unoptimized: true,
  },
};

export default nextConfig;
