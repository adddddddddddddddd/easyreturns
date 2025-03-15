import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
};

module.exports = {
  images: {
    domains: ['placehold.co', "shadcnblocks.com", "www.shadcnblocks.com"],
    dangerouslyAllowSVG: true,

  },
};

export default nextConfig;
