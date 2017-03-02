const path = require('path');
const webpack = require('webpack');

const js = require('./webpack_settings/rules/js');
const html = require('./webpack_settings/rules/html');
const css = require('./webpack_settings/rules/css');
const sass = require('./webpack_settings/rules/sass');

module.exports = {
  context: path.resolve(__dirname),
  entry: {
    app: './app.js',
  },
  output: {
    path: path.resolve(__dirname),
    filename: '../public/js/app.screenshare.js',
  },
  module: {
    rules: [
      html,
      css,
      sass,
      js,
    ]
  }
};