/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "http",
        hostname: "simolex.com",
      },
    ],
  },
};

export default nextConfig;
