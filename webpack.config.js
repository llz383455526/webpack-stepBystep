/**
 * Created by Administrator on 2018/3/12.
 */
const path = require('path')

module.exports = {
    entry:'./src/index.js',
    output: {
        filename: "bundle.js",
        path:path.resolve(__dirname,'dist')
    }
}