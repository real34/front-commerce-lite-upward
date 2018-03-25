const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const NodeExternals = require("webpack-node-externals");

const universalRules = [
  {
    test: /\.js$/,
    exclude: /node_modules/,
    use: {
      loader: "babel-loader",
      options: {
        presets: ["@babel/preset-env", "@babel/react"]
      }
    }
  },
  {
    test: /\.(graphql|gql)$/,
    exclude: /node_modules/,
    loader: "graphql-tag/loader"
  }
];

module.exports = [
  {
    name: "client",
    mode: "development",
    entry: path.resolve(__dirname, "src", "web", "index.js"),
    output: {
      filename: "bundle.js",
      publicPath: "/",
      path: path.resolve(__dirname, "build")
    },
    plugins: [
      new HtmlWebpackPlugin({
        template: "src/index.html"
      })
    ],
    module: {
      rules: [...universalRules]
    },
    devServer: {
      contentBase: "./build",
      host: "0.0.0.0",
      overlay: true,
      disableHostCheck: true,
      historyApiFallback: true
    }
  },
  {
    name: "server",
    mode: "development",
    target: "node",
    externals: [NodeExternals()],
    entry: path.resolve(__dirname, "src", "server", "index.js"),
    output: {
      filename: "server.js",
      path: path.resolve(__dirname, "build")
    },
    module: {
      rules: [...universalRules]
    }
  }
];
