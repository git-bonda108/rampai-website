/** @type {import('next').NextConfig} */
const nextConfig = {
  eslint: {
    ignoreDuringBuilds: true,
  },
  typescript: {
    ignoreBuildErrors: false,
  },
  images: { unoptimized: true },
  // Ensure proper output for Vercel deployment
  output: 'standalone',
  // Explicitly set distDir to ensure Vercel finds build artifacts
  distDir: '.next',
  // Add experimental features for better Vercel compatibility
  experimental: {
    // Ensure proper serverless function generation
    serverComponentsExternalPackages: [],
  },
  // Add rewrites to handle routing properly
  async rewrites() {
    return [];
  },
};

module.exports = nextConfig;
