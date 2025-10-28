import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: 'export',
  basePath: '/jornalismoproject',
  images: {
    unoptimized: true,
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'assets.codepen.io',
      },
    ],
  },
  // Permite vídeos externos
  webpack: (config) => {
    config.module.rules.push({
      test: /\.(mp4|webm|ogg|mov)$/,
      type: 'asset/resource',
    });
    return config;
  },
};

export default nextConfig;
