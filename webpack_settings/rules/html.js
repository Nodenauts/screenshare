module.exports = {
  test: /\.html$/,
  use: [{
    loader: 'pug-loader',
  }, {
    loader: 'html-loader',
  }]
};