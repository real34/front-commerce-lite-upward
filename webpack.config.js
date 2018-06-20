const path = require("path");
const webpack = require("webpack");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const NodeExternals = require("webpack-node-externals");

const sass = {
  globalsImportStatements: '@import "globals.scss";',
  globalsImportPaths: [path.resolve(__dirname, "src/web/theme")]
};

const srcPath = path.resolve(__dirname, "src");

const universalRules = [
  {
    test: /\.js$/,
    include: [srcPath],
    loader: "eslint-loader",
    enforce: "pre"
  },
  {
    test: /\.js$/,
    include: [srcPath],
    use: {
      loader: "babel-loader",
      options: {
        presets: ["react-app"]
      }
    }
  },
  {
    test: /\.(graphql|gql)$/,
    include: [srcPath],
    loader: "graphql-tag/loader"
  },
  {
    test: /\.scss$/,
    include: [srcPath],
    use: [
      {
        loader: "style-loader"
      },
      {
        loader: "css-loader"
      },
      {
        loader: "sass-loader",
        options: {
          data: sass.globalsImportStatements,
          includePaths: sass.globalsImportPaths
        }
      }
    ]
  },
  {
    test: /\.svg$/,
    oneOf: [
      {
        loader: "raw-loader",
        resourceQuery: /inline/
      },
      {
        loader: "file-loader",
        query: {
          name: "static/media/[name].[hash:8].[ext]"
        }
      }
    ]
  },
  {
    test: /\.(ico|jpg|jpeg|png|gif|eot|otf|webp|ttf|woff|woff2)(\?.*)?$/,
    loader: "file-loader",
    query: {
      name: "static/media/[name].[hash:8].[ext]"
    }
  }
];

module.exports = [
  {
    name: "client",
    mode: "development",
    entry: path.resolve(__dirname, "src/web/index.js"),
    output: {
      filename: "bundle.js",
      publicPath: "/",
      path: path.resolve(__dirname, "build")
    },
    plugins: [
      new HtmlWebpackPlugin({
        template: "src/index.html"
      }),
      new webpack.NamedModulesPlugin(),
      new webpack.HotModuleReplacementPlugin()
    ],
    module: {
      rules: [...universalRules]
    },
    devServer: {
      hot: true,
      open: true,
      contentBase: "./build",
      host: "0.0.0.0",
      overlay: true,
      disableHostCheck: true,
      historyApiFallback: true
    },
    resolve: {
      alias: {
        theme: path.resolve(__dirname, "src/web/theme")
      }
    }
  },
  {
    name: "server",
    mode: "development",
    target: "node",
    externals: [NodeExternals()],
    entry: ["babel-polyfill", path.resolve(__dirname, "src/server/index.js")],
    output: {
      filename: "server.js",
      path: path.resolve(__dirname, "build")
    },
    module: {
      rules: [...universalRules]
    }
  }
];
