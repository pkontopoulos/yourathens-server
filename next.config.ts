import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    unoptimized: true,
  },
  async redirects() {
    return [
      {
        source: "/data",
        destination: "/thedata.html",
        permanent: false,
      },
    ];
  },
};

export default nextConfig;
