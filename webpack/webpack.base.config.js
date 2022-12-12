require("dotenv").config();
const path = require("path");
const Dotenv = require("dotenv-webpack");
const LiveReloadPlugin = require("webpack-livereload-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const CssMinimizerPlugin = require("css-minimizer-webpack-plugin");
const mode = process.env.NODE_ENV;
const jsConfig = require('../jsconfig.js');

module.exports = {
  mode,
  module: {
    rules: [
      {
        test: /\.(sa|sc|c)ss$/,
        include: path.resolve(__dirname, "..", "src"),
        exclude: /node_modules/,
        use: [
          "style-loader",
          {
            loader: MiniCssExtractPlugin.loader,
            options: {
              esModule: false,
            },
          },
          { loader: "css-loader", options: { importLoaders: 1 } },
          {
            loader: "postcss-loader",
            options: {
              postcssOptions: {
                plugins: [["autoprefixer"]],
              },
            },
          },
          {
            loader: "sass-loader",
            options: {
              implementation: require("sass"),
              sassOptions: {
                outputStyle: "compressed",
              },
            },
          },
        ],
      },
      {
        test: /\.(js)$/,
        exclude: /node_modules/,
        use: "babel-loader",
      },
      {
        test: /\.(png|jpe?g|gif|ico)$/i,
        use: [
          {
            loader: "file-loader",
            options: {
              name: "[name].[ext]",
              outputPath: "public",
              publicPath: "public",
            },
          },
        ],
      },
    ],
  },
  plugins: [
    new Dotenv({
      path: path.join(__dirname, "..", ".env"),
      allowEmptyValues: true,
      expand: true,
    }),
    new LiveReloadPlugin({
      protocol: "http",
      port: 5000,
      host: "localhost",
      appendScriptTag: true,
      useSourceHash: true,
      delay: 1000,
    }),
  ],
  optimization: {
    runtimeChunk: "single",
    minimize: true,
    minimizer: [
      // For webpack@5 you can use the `...` syntax to extend existing minimizers (i.e. `terser-webpack-plugin`), uncomment the next line
      `...`,
      new CssMinimizerPlugin(),
    ],
  },
  watch: true,
  resolve: {
    alias: jsConfig?.paths
  },
};
