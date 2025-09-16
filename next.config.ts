import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  reactStrictMode: true,

  images: {
    // Layout breakpoints you actually render at (add 1536 if your hero is wider)
    deviceSizes: [360, 640, 768, 1024, 1280],
    // Include tiny sizes for icons/logos + common thumbs
    imageSizes: [16, 24, 32, 48, 64, 96, 128, 160, 240, 320, 480, 640, 800],
    formats: ["image/avif", "image/webp"],
    // If you serve images from a CDN/domain, uncomment and adjust:
    // remotePatterns: [{ protocol: "https", hostname: "images.yourcdn.com" }],
    minimumCacheTTL: 60 * 60 * 24 * 7, // 7 days (optional)
    // Only enable if you trust your SVG sources:
    // dangerouslyAllowSVG: true,
  },

  compiler: {
    removeConsole:
      process.env.NODE_ENV === "production" ? { exclude: ["error", "warn"] } : false,
  },

  // output: "standalone", // optional (useful for Docker/self-hosting)
};

export default nextConfig;
