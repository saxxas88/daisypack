const { merge } = require("webpack-merge");
const path = require("path");

const HtmlWebpackPlugin = require("html-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const webpackBaseConfig = require("./webpack.base.config");
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
   // main: path.join(__dirname, "..", "src", "pages/Homepage/index.js"),
   navbar: path.join(__dirname, "..", "src/components/Navbar/Navbar.js"),
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
    /*new HtmlWebpackPlugin({
      template: path.join(__dirname, "..", "src", "pages/Homepage/index.php"),
      filename: "index.php",
      inject: true,
      chunks: ['main']
    }),
    */
    new HtmlWebpackPlugin({
      template: path.join(__dirname, "..", "src", "components/Navbar/Navbar.php"),
      filename: "navbar.php",
      inject: true,
      chunks: ['navbar']
    }),
    new HtmlWebpackPlugin({
      template: path.join(__dirname, "..", "src", "components/HomeContainer/HomeContainer.php"),
      filename: "homecontainer.php",
      inject: true,
      chunks: ['homecontainer']
    }),
    
    
    /*new CopyPlugin({
      patterns: [{ from: "public", to: "public" }],
    }),*/
    

  ],
 /* devServer: {

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
      serverSideRender: true,
      index: false
    },
    static: {
      directory: path.join(__dirname, "..", `${PROJECT_ENTRY}/${APP_FOLDER}`),
      publicPath: path.join(
        __dirname,
        "..",
        `${PROJECT_ENTRY}/${APP_FOLDER}/public`      
      ),
      watch: true,
    }
  },*/
 
})
