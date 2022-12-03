const {merge} = require('webpack-merge')
// Server's configuration must be merged to the index page
const about = require("./webpack.about.config")
const homepage = require("./webpack.homepage.config");
const navbar = require("./webpack.navbar.config");

module.exports = [ homepage, about,navbar ];

