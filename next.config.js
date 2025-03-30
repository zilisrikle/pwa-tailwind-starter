const withPWA = require("next-pwa")({
  dest: "public",
  disable: process.env.NODE_ENV === "development", // ← 本地开发模式禁用 PWA
});

module.exports = withPWA({
  reactStrictMode: true,
});