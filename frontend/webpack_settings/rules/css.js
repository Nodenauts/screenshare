module.exports = {
  test: /\.css$/,
  use: [
    {
      loader: 'css-loader'
    },
    {
      loader: 'style-loader'
    }
  ]
};