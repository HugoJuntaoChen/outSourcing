const TerserPlugin = require('terser-webpack-plugin')
const { merge } = require('webpack-merge')

const baseWebpackConfig = require('./webpack.base')

const webpackProdConfig = {
  mode: 'production',
  // 输出配置
  output: {
    filename: 'js/[name].[contenthash].js',
    chunkFilename: 'js/[name].[contenthash].js',
    publicPath: 'https://bixi.yjw.ink/',
    clean: true
  },
  optimization: {
    splitChunks: {
      cacheGroups: {
        commons: {
          test: /[\\/]node_modules[\\/]/,
          name: 'vendors',
          chunks: 'all'
        }
      }
    },
    minimizer: [
      new TerserPlugin({
        parallel: true
      })
    ]
  }
}

module.exports = merge(baseWebpackConfig, webpackProdConfig)
