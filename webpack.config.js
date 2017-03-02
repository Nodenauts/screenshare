const path = require('path');
const webpack = require('webpack');
const js = require('./webpack_settings/rules/js');

const isDev = (process.env.isDev) ? process.env.isDev : true;

module.exports = {
  context: path.resolve(__dirname),
  entry: {
    app: './app.js',
  },
  output: {
    path: path.resolve(__dirname),
    filename: './app.bundle.js',
  },
  module: {
    rules: [
      js
    ]
  },
  devtool: (isDev) ? 'eval-sourcemap' : 'source-map',
};