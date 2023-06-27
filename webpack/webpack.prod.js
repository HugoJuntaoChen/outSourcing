const HtmlWebpackPlugin = require('html-webpack-plugin')
const { resolve, join } = require('path')

module.exports = {
  mode: 'production',
  entry: resolve(__dirname, 'src/index.ts'),
  output: {
    filename: 'index.js',
    clean: true
  },
  devServer: {
    port: 8888,
    static: {
      directory: join(__dirname, 'public')
    }
  },
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          // 使用babel.config.js
          options: {
            presets: [
              [
                '@babel/preset-env' // 将ES6语法转成ES5
              ]
            ]
          }
        }
      },
      {
        test: /\.tsx?$/,
        exclude: /node_modules/,
        use: {
          loader: 'ts-loader',
          options: {
            configFile: resolve(__dirname, './tsconfig.json')
          }
        }
      }
    ]
  },
  resolve: {
    extensions: ['.tsx', '.ts', '.js'],
    alias: {
      '@': resolve(__dirname, './src')
    }
  },
  plugins: [
    new HtmlWebpackPlugin()
  ],
  optimization: {
    splitChunks: {
      // chunks: 'all'
      minSize: 1000 * 1024
    }
  }
}
