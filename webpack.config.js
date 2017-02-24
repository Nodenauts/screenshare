const path = require('path');
const webpack = require('webpack');

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
      {
        test: /\.js$/,
        use: [{
          loader: 'babel-loader',
        }]
      }
    ]
  }
};