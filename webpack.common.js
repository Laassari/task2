const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')

module.exports = {
  entry: './src/index.js',

  output: {
    filename: './static/js/main.[chunkhash].js',
    path: path.resolve(__dirname, 'dist/'),
  },

  module: {
    rules: [
      {
        test: /\.(png|svg|jpg|gif|jpeg?)$/,
        use: [{ loader: 'file-loader?name=static/images/[name].[ext]' }],
      },
      {
        test: /\.html$/,
        use: ['html-loader'],
        // exclude: [helpers.root('src', 'index.html')],
      },
    ],
  },

  plugins: [
    new HtmlWebpackPlugin({
      template: './index.html',
      minify: {
        removeComments: true,
        collapseWhitespace: true,
        removeRedundantAttributes: true,
        useShortDoctype: true,
        removeEmptyAttributes: true,
        removeStyleLinkTypeAttributes: true,
        keepClosingSlash: true,
        minifyJS: true,
        minifyCSS: true,
        minifyURLs: true,
      },
      title: 'test',
    }),
  ],
}
