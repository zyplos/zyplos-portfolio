import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  reactStrictMode: true,
  sassOptions: {
    silenceDeprecations: ["legacy-js-api", "mixed-decls"],
  },
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "cdn.discordapp.com",
        port: "",
        pathname: "/**",
      },
      {
        protocol: "https",
        hostname: "media.discordapp.net",
        port: "",
        pathname: "/**",
      },
    ],
  },
};

export default nextConfig;
