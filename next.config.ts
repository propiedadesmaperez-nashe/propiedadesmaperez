import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  trailingSlash: false,
  async redirects() {
    return [
      {
        source: "/:path*",
        has: [{ type: "host", value: "www.propiedadesmaperez.cl" }],
        destination: "https://propiedadesmaperez.cl/:path*",
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
