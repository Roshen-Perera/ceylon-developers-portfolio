import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    domains: ["api.dicebear.com"], // 👈 add this
  },
};

export default nextConfig;
