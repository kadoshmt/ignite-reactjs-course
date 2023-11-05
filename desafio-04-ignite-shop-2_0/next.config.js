/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,

  images: {
    // domains: [
    //   'files.stripe.com',
    // ],
    remotePatterns: [
      {
        hostname: 'files.stripe.com'
      },
    ],
  }
}

module.exports = nextConfig
