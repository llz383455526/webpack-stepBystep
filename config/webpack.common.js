const path = require('path')
const CleanWebpackPlugin = require('clean-webpack-plugin')
const HtmlWebpackPlugin = require('html-webpack-plugin')

console.log(path.resolve('src'))
module.exports = {
  mode: 'development',
  resolve: {
    alias: {
      '@': path.resolve('src')
    }
  },
  entry: {
    app: '@/index.js'
  },
  output: {
    path: path.resolve(__dirname,'../dist'),
    filename: '[name][chunkhash].js'
  },
  module: {
    rules: [
      {
        test: /\.css/,
        use:['style-loader','css-loader']
      }
    ]
  },
  plugins:[
    new CleanWebpackPlugin(['dist']),
    new HtmlWebpackPlugin()
  ]
}