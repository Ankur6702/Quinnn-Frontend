const path = require("path");
const Dotenv = require("dotenv-webpack");

module.exports = {
  webpack: (config) => {
    // Determine which environment variables file to use based on the NODE_ENV environment variable
    const envPath =
      process.env.NODE_ENV === "production"
        ? path.join(__dirname, ".env.production")
        : path.join(__dirname, ".env.development");

    // Add the Dotenv plugin to load environment variables
    config.plugins.push(new Dotenv({ path: envPath }));

    return config;
  },
  env: {
    // Add your environment variables here
    MY_VAR: process.env.MY_VAR,
    ANOTHER_VAR: process.env.ANOTHER_VAR,
  },
};
