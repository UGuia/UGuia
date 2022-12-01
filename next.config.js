/** @type {import('next').NextConfig} */
const withPWA = require("next-pwa")({
  dest: "public",
  register: true,
  skipWaiting: true,
});

// const nextConfig = withPWA({
//   reactStrictMode: true,
//   experimental: { appDir: true },
// });

module.exports = withPWA({
  reactStrictMode: true,
  experimental: { appDir: true },
});
// module.exports = withPWA({
//   reactStrictMode: true,
//   experimental: { appDir: true },
//   pwa: {
//     dest: "public",
//     register: true,
//     skipWaiting: true,
//     fallbacks: {},
//   },
// });
