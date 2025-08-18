/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "**", // allow all https hosts
      },
      {
        protocol: "http",
        hostname: "**", // allow all http hosts
      },
    ],
  },
  devIndicators: false,
};

export default nextConfig;
