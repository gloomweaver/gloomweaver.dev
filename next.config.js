const { withAxiom } = require("next-axiom");
const { pipe } = require("remeda");

/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    appDir: true,
  },
};

const setupPlugins = (nextConfig) => pipe(nextConfig, withAxiom);

module.exports = setupPlugins(nextConfig);
