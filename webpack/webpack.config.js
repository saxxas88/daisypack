const {merge} = require('webpack-merge')
// Server's configuration must be merged to the index page
const devServer = require("./webpack.server.config")
const homepage = require("./webpack.homepage.config");
const navbar = require("./webpack.navbar.config");

module.exports = [  devServer, homepage ];

