const HtmlWebpackPlugin = require('html-webpack-plugin')
const { resolve } = require('path')

const cssLoaderAry = [
  'style-loader',
  'css-loader'
]

module.exports = {
  entry: resolve(__dirname, '../src/index.ts'),
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
            configFile: resolve(__dirname, '../tsconfig.json')
          }
        }
      },
      {
        test: /\.css$/,
        use: cssLoaderAry
      },
      {
        test: /\.less$/,
        use: [
          ...cssLoaderAry,
          {
            loader: 'less-loader',
            options: {
              lessOptions: {
                modifyVars: {
                  'primary-color': '#FF6624'
                },
                javascriptEnabled: true
              }
            }
          }
        ]
      }
    ]
  },
  resolve: {
    extensions: ['.tsx', '.ts', '.js', '.css', '.less'],
    alias: {
      '@': resolve(__dirname, '../src')
    }
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: './public/index.html'
    })
  ]
}
