import type { NextConfig } from "next";

const pages = process.env.GITHUB_PAGES === "true";
const basePath = pages ? "/Mankee" : "";

const journalRedirects = [
  { source: "/press/", destination: "/#journal-press", permanent: true },
  { source: "/blogs/", destination: "/#journal-press", permanent: true },
  { source: "/gallery/", destination: "/#journal", permanent: true },
];

const nextConfig: NextConfig = {
  ...(pages ? { output: "export" as const } : {}),
  basePath,
  trailingSlash: true,
  devIndicators: false,
  images: {
    formats: ["image/avif", "image/webp"],
    unoptimized: pages,
  },
  ...(pages
    ? {}
    : {
        async redirects() {
          return journalRedirects;
        },
      }),
};

export default nextConfig;
