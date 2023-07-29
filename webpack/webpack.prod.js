// const HtmlWebpackPlugin = require('html-webpack-plugin')
const TerserPlugin = require('terser-webpack-plugin')
// const { path } = require('path')
const { merge } = require('webpack-merge')

const baseWebpackConfig = require('./webpack.base')

const webpackProdConfig = {
  mode: 'production',
  // 输出配置
  output: {
    filename: '[name].[contenthash].js',
    chunkFilename: '[name].[contenthash].js',
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
