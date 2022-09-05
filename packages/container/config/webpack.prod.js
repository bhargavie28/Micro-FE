const { merge } = require('webpack-merge');
const ModuleFederationPlugin = require('webpack/lib/container/ModuleFederationPlugin');
const commonConfig = require('./webpack.common');
const packageJson = require('../package.json');

const domain = process.env.PRODUCTION_DOMAIN;

const prodConfig = {
  mode: 'production',
  output: {
    filename: '[name].[contenthash].js',
    publicPath: '/container/latest/',
  },
  plugins: [
    new ModuleFederationPlugin({
      name: 'container',
      remotes: {
        labaratorymanagement: `labaratorymanagement@${domain}/labaratory/latest/remoteEntry.js`,
        useraccountmanagement: `useraccountmanagement@${domain}/useraccountmanagement/latest/remoteEntry.js`,
        sampleregistrationmanagement: `sampleregistrationmanagement@${domain}/sampleregistration/latest/remoteEntry.js`,
        dealermanagement: `dealermanagement@${domain}/dealer/latest/remoteEntry.js`,
        landingpage: `landingpage@${domain}/landing/latest/remoteEntry.js`,
        auth: `auth@${domain}/auth/latest/remoteEntry.js`,
      },
      shared: packageJson.dependencies,
    }),
  ],
};

module.exports = merge(commonConfig, prodConfig);
