/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  images: { unoptimized: true },
  basePath: '/personal-portfolio',
  assetPrefix: '/personal-portfolio/',
};

export default nextConfig;
