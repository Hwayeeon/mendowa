import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  experimental: {
    webpackMemoryOptimizations: true,
    optimizeServerReact: true,
    optimizePackageImports: ["@radix-ui/react", "lodash-es", "date-fns"],
    webpackBuildWorker: true,
  },
  compiler: {
    styledComponents: true,
    reactRemoveProperties: process.env.NODE_ENV === "production",
  },
};

export default nextConfig;
