module.exports = {
  test: /\.s[ac]ss$/,
  use: [{
    loader: 'style-loader',
  }, {
    loader: 'css-loader',
  }, {
    loader: 'postcss-loader',
  }, {
    loader: 'sass-loader',
  }
  ]
}