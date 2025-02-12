import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
  async headers() {
    return [
      {
        source: "/",
        headers: [
          {
            key: "cache-control",
            value: "max-age=0, s-maxage=3600, stale-while-revalidate",
          },
        ],
      },
    ];
  },
};

export default nextConfig;
