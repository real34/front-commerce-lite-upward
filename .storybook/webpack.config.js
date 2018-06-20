const path = require("path");
const srcPath = path.resolve(__dirname, "../src");
const sass = {
  globalsImportStatements: '@import "globals.scss";',
  globalsImportPaths: [path.resolve(__dirname, "../src/web/theme")]
};

module.exports = {
  module: {
    rules: [
      {
        test: /\.js$/,
        include: [srcPath],
        use: {
          loader: "babel-loader",
          options: {
            presets: [
              "@babel/preset-env",
              "@babel/react",
              [
                "@babel/preset-stage-0",
                {
                  decoratorsLegacy: true
                }
              ]
            ]
          }
        }
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
      }
    ]
  }
};
