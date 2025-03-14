/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: ["images.unsplash.com"], // Allow images from Unsplash
  },
  output: "standalone", // Ensure correct deployment output
  experimental: {
    appDir: true, // If using the new app directory
  },
  reactStrictMode: true,
  trailingSlash: false, // Ensure URLs are correctly handled
};

module.exports = nextConfig;
