/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    appDir: false,
  },
  output: 'export',
  // reactStrictMode: true, 
  eslint: { 
    ignoreDuringBuilds: true, 
  }, 
};

module.exports = nextConfig;
