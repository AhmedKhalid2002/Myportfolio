/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'avatars.githubusercontent.com',
      },
      {
        protocol: 'https',
        hostname: 'cdn.jsdelivr.net', // أضفنا هذا أيضاً لأنك تستخدم صور DevIcon من هذا المصدر
      },
    ],
  },
};

module.exports = nextConfig;