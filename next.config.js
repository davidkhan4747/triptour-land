/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  reactStrictMode: true,
  images: {
    unoptimized: true,
    domains: ['res.cloudinary.com', 'api.triptour.uz'],
  },
  env: {
    API_URL: 'https://api.triptour.uz',
    API_TOKEN: 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjliYjczNDgxLWUwMGItNGM2Mi1iMWFjLTQ0YjQ5OGJhZGUxYiIsInVzZXJuYW1lIjoiY2VvNzc4OCIsInR5cGUiOiJVU0VSIiwicm9sZXMiOlsiU1VQRVJBRE1JTiJdLCJpYXQiOjE3Mzk4MDgyNDksImV4cCI6MTc0MjQwMDI0OX0.5qMlu8PkI3Pk9zQw2kVuZh9w0-rlfRPFX8EoVGWnhsA'
  },
  experimental: {
    // Отключаем некоторые экспериментальные функции, которые могут вызывать проблемы
    serverActions: false,
    serverComponents: false
  },
  // Оптимизация для production
  compiler: {
    removeConsole: process.env.NODE_ENV === 'production',
  },
  // Настройки для улучшения производительности
  poweredByHeader: false,
  compress: true,
  generateEtags: true,
  trailingSlash: true,
}

module.exports = nextConfig
