import type { NextConfig } from "next";
const isGithubPages = process.env.GITHUB_PAGES === 'true';
const nextConfig: NextConfig = {
   output: 'export',
  basePath: isGithubPages ? '/3d-scroll-animation' : '', 
  assetPrefix: isGithubPages ? '/3d-scroll-animation/' : '', 
  images: {
    unoptimized: true
  }
};

export default nextConfig;
