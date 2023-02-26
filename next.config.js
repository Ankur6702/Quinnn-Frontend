/** @type {import('next').NextConfig} */
require("dotenv").config({ path: `${process.env.ENVIRONMENT}` });

const nextConfig = {
  reactStrictMode: true,
};

module.exports = nextConfig;
