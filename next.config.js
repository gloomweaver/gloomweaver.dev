const { pipe } = require('remeda');

/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    appDir: true,
  },
};

const setupPlugins = (nextConfig) => pipe(nextConfig);

module.exports = setupPlugins(nextConfig);
