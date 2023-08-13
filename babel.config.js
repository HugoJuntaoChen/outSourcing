
module.exports = {
  plugins: [],
  presets: [
    [
      '@babel/preset-env',
      {
        useBuiltIns: 'usage',
        // 设置 corejs 版本
        corejs: 3
      }
    ]
  ]
}
