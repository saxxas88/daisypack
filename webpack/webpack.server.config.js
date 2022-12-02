require("dotenv").config();
const path = require("path");
const Dotenv = require("dotenv-webpack");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const mode = process.env.NODE_ENV;
const PROJECT_ENTRY = process.env.PROJECT_ENTRY;
const APP_FOLDER =
  process.env.NODE_ENV === "development"
    ? process.env.DEV_ENTRY
    : process.env.BUILD_ENTRY;
module.exports = {
  name:'server',
 
  target: 'web',
  mode,
  entry: {
    runtimedev: path.join(__dirname, "..", "src", "runtime.js"),
  },
  output: {
    filename: "[name].js",
    path: path.join(__dirname, "..", APP_FOLDER),
  },
  devServer: {
    hot: true,
    watchFiles: ["../src/**/**/*.php", "../public/*"],
    host: "localhost",
    port: Number(process.env.WEBPACK_PORT),
    proxy: {
      "*": {
        target: `http://localhost/${PROJECT_ENTRY}/${APP_FOLDER}`,
        changeOrigin: true,
                secure: false
      },
    },
    devMiddleware: {
      writeToDisk: true,
    },
    static: {
      directory: path.join(__dirname, "..", `${PROJECT_ENTRY}/${APP_FOLDER}`),
      publicPath: path.join(
        __dirname,
        "..",
        `${PROJECT_ENTRY}/${APP_FOLDER}/public`
      )
    },
  },
  stats: {
    colors: true,
    children: false,
    chunks: false,
    modules: false,
  },
  plugins:  [
    new Dotenv({
      path: path.join(__dirname, "..", ".env"),
      allowEmptyValues: true,
      expand: true,
    }),
    new HtmlWebpackPlugin({
      template: path.join(__dirname, "..", "src", "pages/Homepage/index.php"),
      filename: "index.php",
      inject: false,
      chunks: [null]
    }),
  ]
};
