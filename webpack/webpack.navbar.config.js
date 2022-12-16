const { merge } = require("webpack-merge");
const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const webpackBaseConfig = require("./webpack.base.config");
const mode = process.env.NODE_ENV;
const APP_FOLDER = (mode === 'development') ?  process.env.DEV_ENTRY : process.env.BUILD_ENTRY;

module.exports = merge(webpackBaseConfig,{
  name: 'navbar',
  target: "web",
  entry: {
    navbar: path.join(__dirname, "..", "src/includes/Navbar/Navbar.js")
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
      template: path.join(__dirname, "..", "src", "includes/Navbar/Navbar.php"),
      filename: "navbar.php",
      inject: true,
      chunks: ['navbar']
    }),
    
  ]
});
