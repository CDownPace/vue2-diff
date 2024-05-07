
const { resolve } = require('path'),
HtmlWebpackPlugin = require('html-webpack-plugin')

module.exports = {
mode: "development",
entry: './public/js/index.js', //入口
output: {  //打包后名字
    filename: 'bundle.js',
    path: resolve(__dirname, 'dist')
},
devtool:'source-map',

plugins: [
    new HtmlWebpackPlugin({  // 等待webpack把vue处理成 css js文件后，把数据导入到html
        template: resolve(__dirname, 'public/index.html')
    })
],
devServer:{
    open:true
}
}