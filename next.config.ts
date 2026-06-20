import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "export",
  basePath: "/atlantiya-stomatologiya",
  images: { unoptimized: true },
  trailingSlash: true,
  typescript: { ignoreBuildErrors: true },
  reactStrictMode: false,
  turbopack: { root: __dirname },
};

export default nextConfig;
