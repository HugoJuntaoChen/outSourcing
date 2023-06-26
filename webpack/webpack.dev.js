const { merge } = require('webpack-merge')
const { resolve } = require('path')

const baseWebpackConfig = require('./webpack.base')

const webpackDevConfig = {
  mode: 'development',
  devServer: {
    port: 8888,
    static: {
      directory: resolve(__dirname, '../public')
    },
    open: 'https://test.com'
  }
}

module.exports = merge(baseWebpackConfig, webpackDevConfig)
