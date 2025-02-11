/** @type {import('next').NextConfig} */
const nextConfig = {
  basePath: '/me',
  output: 'export', // Enable static HTML export
  images: {
    unoptimized: true,
  },
};

export default nextConfig;
