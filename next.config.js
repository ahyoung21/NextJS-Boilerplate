/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  // env 내용 추가
  env: {
    BASE_URL: process.env.BASE_URL,
  },
};

module.exports = nextConfig;
