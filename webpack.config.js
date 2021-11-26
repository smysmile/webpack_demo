const path = require('path');
const htmlWebpackPlugin = require('html-webpack-plugin')
const htmlPlugin = new htmlWebpackPlugin({
  template: './src/index.html',
  filename: 'index.html'
})
const vueLoaderPlugin = require('vue-loader/lib/plugin');
module.exports = {
  mode: 'development', // 也可以是production 生产模式会把代码压缩加混淆 打包时间较长 所以先用开发模式
  entry: path.join(__dirname, './src/index.js'),
  output: {
    path: path.join(__dirname, './dist'),
    filename: 'bundle.js'
  },
  devServer: {
    // open: true,
    proxy: {
      '/api': {
        target: 'http://192.168.210.10:3000',
        changeOrigin: true, // 设置同源  默认false，是否需要改变原始主机头为目标URL,
        ws: true, // 是否代理websockets
        pathRewrite: {
          '^/api': ''
        }
      },
    },
  },
  // devServer: {
  //   proxy: { //代理
  //     '/api': {
  //       target: 'http://192.168.210.10:3000',
  //       pathRewrite: { '/api': '' }
  //     }
  //   }
  // },
  plugins: [htmlPlugin, new vueLoaderPlugin()],
  module: {
    rules: [
      {
          //test设置需要匹配的文件类型，支持正则
          test:/\.css$/,
          //use表示该文件类型需要调用的loader
          use:['style-loader','css-loader', 'postcss-loader']
      },
      {test: /\.less$/, use: ['style-loader','css-loader','less-loader']},
      {
        test: /\.scss$/, use: ['style-loader','css-loader','sass-loader']
      },
      {
        test:/\.jpg|png|gif|bmp|ttf|eot|svg|woff|woff2$/,
        //limit用来设置字节数，只有小于limit值的图片，才会转换
        //为base64图片
        use:"url-loader?limit=1640"
      },
      {
        test:/\.vue$/,
        use:"vue-loader"
      }
    ]
  }
}