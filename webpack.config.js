const path = require('path');
const webpack = require('webpack');

const js = require('./webpack_settings/rules/js');
const html = require('./webpack_settings/rules/html');
const css = require('./webpack_settings/rules/css');
const sass = require('./webpack_settings/rules/sass');

const isDev = (process.env.isDev) ? process.env.isDev : true;

module.exports = [{
  context: path.resolve(__dirname),
  entry: {
    screenshare: "./frontend/app.js",
  },
  output: {
    path: path.resolve(__dirname),
    filename: './public/js/app.[name].js',
  },
  module: {
    rules: [
      js,
      css,
      html,
      sass,
    ]
  },
  devtool: (isDev) ? 'eval-sourcemap' : 'source-map',
}, {
  context: path.resolve(__dirname),
  entry: {
    bundle: './app.js',
  },
  output: {
    path: path.resolve(__dirname),
    filename: './app.[name].js',
  },
  module: {
    rules: [
      js,
    ]
  },
  devtool: (isDev) ? 'eval-sourcemap' : 'source-map',
}];