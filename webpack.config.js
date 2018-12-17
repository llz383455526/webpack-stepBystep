/**
 * Created by Administrator on 2018/3/12.
 */
const path = require('path')
const CleanWebpackPlugin = require('clean-webpack-plugin')  //每次编译前删除dist目录
const HtmlWebpackPlugin = require('html-webpack-plugin')

module.exports = {
  mode: 'production',
    entry:{
      index: './src/index.js',
      entry2: './src/entry2.js'
    },
    output: {
        filename: "[name].[hash].js",
        // publicPath: "https://cdn.com/",
        path:path.resolve(__dirname,'dist')
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
      new CleanWebpackPlugin(),
      new HtmlWebpackPlugin(),
      new HtmlWebpackPlugin({
        title: 'entry2',
        filename: 'entry2.html'
      })
    ]
}