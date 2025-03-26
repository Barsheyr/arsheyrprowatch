/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "standalone", // Add this line for Vercel deployment
  reactStrictMode: true,
  experimental: {
    serverActions: {
      bodySizeLimit: "2mb",
    },
  },
  images: {
    domains: ["images.unsplash.com", "cdn.sanity.io"],
  },
};

module.exports = nextConfig;
