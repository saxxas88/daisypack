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
   //terzo: path.join(__dirname, "..", "src/components/Terzo/Terzo.js"),
    homecontainer: path.join(__dirname, "..", "src/components/HomeContainer/HomeContainer.js"),
    
  },
  output: {
    filename: "[name].js",
    path: path.join(__dirname, "..", APP_FOLDER)
  },
  plugins: [
    new MiniCssExtractPlugin({
      filename: "[name].css"
    }),
    /*
    new HtmlWebpackPlugin({
      template: path.join(__dirname, "..", "src", "components/Terzo/Terzo.php"),
      filename: "terzo.php",
      inject: true,
      chunks: ['terzo']
    }),
    */
    new HtmlWebpackPlugin({
      template: path.join(__dirname, "..", "src", "components/HomeContainer/HomeContainer.php"),
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
    
    /*new CopyPlugin({
      patterns: [{ from: "public", to: "public" }],
    }),*/
    

  ],

 
})
