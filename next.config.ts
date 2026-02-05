import type { NextConfig } from "next";
import path from "node:path";

const nextConfig: NextConfig = {
  // Ensure Turbopack resolves modules from this project folder
  turbopack: {
    root: path.resolve(__dirname),
  },
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: '**',
      },
      {
        protocol: 'http',
        hostname: '**',
      },
    ],
  },
  typescript: {
    ignoreBuildErrors: true,
  },
};

export default nextConfig;
