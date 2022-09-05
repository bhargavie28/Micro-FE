const { merge } = require("webpack-merge");
const ModuleFederationPlugin = require("webpack/lib/container/ModuleFederationPlugin");
const commonConfig = require("./webpack.common");
const packageJson = require("../package.json");

const devConfig = {
  mode: "development",
  output: {
    publicPath: "http://localhost:8080/",
  },
  devServer: {
    port: 8080,
    historyApiFallback: {
      index: "index.html",
    },
  },
  plugins: [
    new ModuleFederationPlugin({
      name: "container",
      remotes: {
        role:
        "role@http://localhost:3021/remoteEntry.js",
        rolemanagement:
        "rolemanagement@http://localhost:3020/remoteEntry.js",
        useraccountmanagement:
          "useraccountmanagement@http://localhost:3012/remoteEntry.js",
        dealermanagement:
          "dealermanagement@http://localhost:3013/remoteEntry.js",
        labaratorymanagement:
          "labaratorymanagement@http://localhost:3014/remoteEntry.js",
        sampleregistrationmanagement:
          "sampleregistrationmanagement@http://localhost:3015/remoteEntry.js",
        landingpage: 
        "landingpage@http://localhost:3016/remoteEntry.js",
        auth: 
        "auth@http://localhost:8082/remoteEntry.js",
      },
      shared: packageJson.dependencies,
    }),
  ],
};

module.exports = merge(commonConfig, devConfig);
