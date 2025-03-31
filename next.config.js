/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'images.unsplash.com',
      },
      {
        protocol: 'https',
        hostname: 'assets.ubuntu.com',
      },
      {
        protocol: 'https',
        hostname: 'manjaro.org',
      },
      {
        protocol: 'https',
        hostname: 'getfedora.org',
      },
      {
        protocol: 'https',
        hostname: 'archlinux.org',
      },
      {
        protocol: 'https',
        hostname: 'www.debian.org',
      },
      {
        protocol: 'https',
        hostname: 'en.opensuse.org',
      },
    ],
  },
};

module.exports = nextConfig; 