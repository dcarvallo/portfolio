/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: ['images.unsplash.com'],
  },
  i18n:{
    locales: ['en','es'],
    defaultLocale: 'en'
  }
}

module.exports = nextConfig
