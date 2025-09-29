import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  images: {
    domains: ["api.dicebear.com"], // 👈 add this
  },
};

export default nextConfig;
