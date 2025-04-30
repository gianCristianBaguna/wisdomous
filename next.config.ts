import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  reactStrictMode: true,
  devIndicators: {
    buildActivity: false,
    appIsrStatus: false, 
  },
  poweredByHeader: false,
}

module.exports = {
  devIndicators: {
    autoPrerender: false,
  },
  experimental: {
    serverComponentsExternalPackages: ["your-package-name"],
  },
}

export default nextConfig;