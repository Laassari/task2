const merge = require('webpack-merge')
const common = require('./webpack.common.js')

module.exports = merge(common, {
  mode: 'development',

  devtool: 'cheap-module-source-map',

  module: {
    rules: [
      {
        test: /\.css$/,
        use: [{ loader: 'style-loader' }, { loader: 'css-loader' }],
      },
    ],
  },

  devServer: {
    contentBase: './dist',
    overlay: true,
    compress: true,
    stats: 'errors-only',
    open: true,
  },
})
