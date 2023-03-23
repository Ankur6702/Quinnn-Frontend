/** @type {import('next').NextConfig} */
const path = require("path");
const Dotenv = require("dotenv-webpack");

module.exports = {
  webpack: (config) => {
    // Add the Dotenv plugin to load environment variables
    config.plugins.push(
      new Dotenv({ path: path.join(__dirname, ".env.development") })
    );

    return config;
  },
  env: {
    // Add your environment variables here
    MY_VAR: process.env.MY_VAR,
    ANOTHER_VAR: process.env.ANOTHER_VAR,
  },
};
