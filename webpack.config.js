/**
 * Created by Administrator on 2018/3/12.
 */
const path = require('path')
const webpack = require('webpack')
const ManifestPlugin = require('webpack-manifest-plugin');  //把manifest抽离成一个单独文件,无实际意义，为了查看manifest内容
const CleanWebpackPlugin = require('clean-webpack-plugin')  //每次编译前删除dist目录
const HtmlWebpackPlugin = require('html-webpack-plugin')

module.exports = {
  mode: 'production',
    entry:{
      index: './src/index.js',
      entry2: './src/entry2.js'
    },
    output: {
        filename: "[name].[chunkhash].js",
        // publicPath: "https://cdn.com/",
        path:path.resolve(__dirname,'dist')
    },
    optimization: {
      runtimeChunk: 'single',
      splitChunks: {
        cacheGroups: {
          vendor: {
            test: /[\\/]node_modules[\\/]/,
            name: 'vendors',
            chunks: 'all'
          }
        }
      }
    },
    module: {
        rules:[
            {
                test:/\.css/,
                use:['style-loader','css-loader']
            },
            {
                test: /\.(png|svg|jpg|gif)$/,
                use: [
                  'file-loader'
                ]
            },
            {
              test: /\.(woff|woff2|eot|ttf|otf)$/,
              use: [
                'file-loader'
              ]
            }

        ]
    },
    plugins: [
      new CleanWebpackPlugin(['dist']),
      new webpack.HashedModuleIdsPlugin(),
      new ManifestPlugin(),
      new HtmlWebpackPlugin(),
      new HtmlWebpackPlugin({
        title: 'entry2',
        filename: 'entry2.html'
      })
    ]
}