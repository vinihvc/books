/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    deviceSizes: [320, 640, 768, 1024, 1600],
    domains: ['books.google.com', 'github.com'],
  },
  compiler: {
    styledComponents: true,
  },
}

export default nextConfig
