const isDev = (process.env.isDev) ? process.env.isDev : true;

module.exports = {
  test: /\.s[ac]ss$/,
  use: [{
    loader: 'style-loader',
    options: {
      sourceMap: isDev,
    },
  }, {
    loader: 'css-loader',
    options: {
      sourceMap: isDev,
    },
  }, {
    loader: 'postcss-loader',
    options: {
      sourceMap: isDev,
    },
  }, {
    loader: 'sass-loader',
    options: {
      sourceMap: isDev,
    },
  }
  ]
}