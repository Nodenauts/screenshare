const isDev = (process.env.isDev) ? process.env.isDev : true;

module.exports = {
  test: /\.css$/,
  use: [
    {
      loader: 'css-loader',
      options: {
        sourceMap: isDev,
      },
    },
    {
      loader: 'style-loader',
      options: {
        sourceMap: isDev,
      },
    }
  ]
};