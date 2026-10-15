import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  trailingSlash: true,
  devIndicators: false,
  images: {
    formats: ["image/avif", "image/webp"],
  },
  async redirects() {
    return [
      { source: "/press/", destination: "/#journal-press", permanent: true },
      { source: "/blogs/", destination: "/#journal-press", permanent: true },
      { source: "/gallery/", destination: "/#journal", permanent: true },
    ];
  },
};

export default nextConfig;
