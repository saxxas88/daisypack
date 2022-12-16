const { merge } = require("webpack-merge");
const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const webpackBaseConfig = require("./webpack.base.config");
const mode = process.env.NODE_ENV;
const APP_FOLDER =
  process.env.NODE_ENV === "development"
    ? process.env.DEV_ENTRY
    : process.env.BUILD_ENTRY;

module.exports = merge(webpackBaseConfig,  {
  mode,
  target: "web",
  entry: {
    homecontainer: path.join(__dirname, "..", "src/includes/HomeContainer/HomeContainer.js"),
     /*
    styles: [
      path.resolve(__dirname, '../src/includes/Navbar/nav1.scss'),
      path.resolve(__dirname, '../src/includes/Navbar/nav2.scss'),
    ]
    */
  },
  output: {
    filename: "[name].js",
    path: path.join(__dirname, "..", APP_FOLDER)
  },
  plugins: [
    new MiniCssExtractPlugin({
      filename: "[name].css"
    }),
    new HtmlWebpackPlugin({
      template: path.join(__dirname, "..", "src", "includes/HomeContainer/HomeContainer.php"),
      filename: "homecontainer.php",
      inject: true,
      chunks: ['homecontainer']
    }),
    new HtmlWebpackPlugin({
      template: path.join(__dirname, "..", "src", "pages/Homepage/index.php"),
      filename: "index.php",
      inject: false,
      chunks: [null]
    }),
    
  ]
})