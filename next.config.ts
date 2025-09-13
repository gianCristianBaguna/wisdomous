import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  reactStrictMode: true,
  poweredByHeader: false,

  serverExternalPackages: ["your-package-name"],
};

export default nextConfig;