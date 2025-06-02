/** @type {import('next').NextConfig} */
const nextConfig = {
  eslint: {
    ignoreDuringBuilds: true,
  },
  typescript: {
    ignoreBuildErrors: true,
  },
  images: {
    domains: ["book-reviews-git-main-webira-rem-srls-projects.vercel.app"],
  },
};

export default nextConfig;
