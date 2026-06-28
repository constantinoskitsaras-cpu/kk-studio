import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    // AVIF first (best quality-per-byte), WebP fallback.
    formats: ["image/avif", "image/webp"],
    // Next 16 requires whitelisting any non-default quality. 100 = max-resolution web images.
    qualities: [75, 90, 100],
  },
};

export default nextConfig;
