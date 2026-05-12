import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  reactStrictMode: false,
  // Enable Turbopack for faster development builds (default in Next.js 16+)
  experimental: {
    // Enable new caching behavior for better performance
    staleTimes: {
      dynamic: 30,
      static: 180,
    },
  },
};

export default nextConfig;
