/** @type {import('next').NextConfig} */
const nextConfig = {
  // REMOVED: output: 'standalone' - This is incompatible with Vercel deployment
  // Standalone mode is for Docker/self-hosting, not Vercel
  eslint: {
    ignoreDuringBuilds: true,
  },
  typescript: {
    ignoreBuildErrors: false,
  },
  images: { unoptimized: true },
};

module.exports = nextConfig;
