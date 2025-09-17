import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  reactStrictMode: true,

  images: {
    // Add wider breakpoints if your hero is full-bleed on desktop
    deviceSizes: [360, 414, 640, 768, 1024, 1280, 1536],
    // Small fixed sizes for icons/logos/thumbnails
    imageSizes: [16, 24, 32, 48, 64, 96, 128, 160, 240, 320, 480, 640, 800],
    formats: ["image/avif", "image/webp"],

    // ✅ Fixes the Next 16 warning and lets you safely use quality={50|60|75|85}
    qualities: [50, 60, 75, 85],

    // If you serve remote images, uncomment and set your host(s):
    // remotePatterns: [{ protocol: "https", hostname: "images.yourcdn.com" }],

    // Cache the optimized image responses longer (OK for versioned/public assets)
    minimumCacheTTL: 60 * 60 * 24 * 30, // 30 days
    // dangerouslyAllowSVG: false, // keep false unless you fully trust sources
  },

  // Helpful for prod debugging + Lighthouse “missing source maps”
  productionBrowserSourceMaps: true,

  compiler: {
    removeConsole:
      process.env.NODE_ENV === "production"
        ? { exclude: ["error", "warn"] }
        : false,
  },

  // output: "standalone", // uncomment if you need Docker/self-hosting
};

export default nextConfig;
