import type { NextConfig } from 'next';
const nextConfig: NextConfig = {
  basePath: process.env.BASE_PATH || '',
  assetPrefix: process.env.BASE_PATH || '',
  publicRuntimeConfig: {
    basePath: process.env.BASE_PATH || '',
  },
};

export default nextConfig;
