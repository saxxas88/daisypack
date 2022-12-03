const { merge } = require("webpack-merge");
const path = require("path");

const HtmlWebpackPlugin = require("html-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const webpackBaseConfig = require("./webpack.base.config");
const LiveReloadPlugin = require('webpack-livereload-plugin');
const mode = process.env.NODE_ENV;
const PROJECT_ENTRY = process.env.PROJECT_ENTRY;
const APP_FOLDER =
  process.env.NODE_ENV === "development"
    ? process.env.DEV_ENTRY
    : process.env.BUILD_ENTRY;

module.exports = merge(webpackBaseConfig,  {
  mode,
  target: "web",
  entry: {
    about: path.join(__dirname, "..", "src/pages/About/index.js"),
    
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
      template: path.join(__dirname, "..", "src", "pages/About/about.php"),
      filename: "about.php",
      inject: true,
      chunks: ['about']
    }),
   
   
    
    

  ],

 
})
