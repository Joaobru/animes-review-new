const { NextFederationPlugin } = require('@module-federation/nextjs-mf');
/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  webpack(config, options) {
    config.plugins.push(
      new NextFederationPlugin({
        name: 'newMf',
        filename: 'static/chunks/remoteEntry.js',
        exposes: {
          './new': './src/components/New',
        },
      })
    );

    return config;
  },
};
module.exports = nextConfig;
