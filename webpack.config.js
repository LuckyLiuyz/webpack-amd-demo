

const HtmlWebpackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
module.exports = {
  mode: 'development',
  entry: './src/main.js',
  output: {
    filename: 'bundle.js'
  },
  devServer: {
    host: '127.0.0.1', //指定使用一个 host。默认是 localhost。如果你希望服务器外部可访问，可指定为当前主机ip
    port: 9000, // 端口号
    contentBase: './dist', // 告诉服务器从哪里提供内容。只有在你想要提供静态文件时才需要。devServer.publicPath 将用于确定应该从哪里提供 bundle，并且此选项优先。
    hot: true,
    open: true, //启用打开后，开发服务器启动后将自动打开浏览器
  },
  plugins: [
    new CleanWebpackPlugin(),
    new HtmlWebpackPlugin({
      title: 'webpack-amd-demo',
      meta: {
        viewport: 'width=device-width'
      },
      template: 'index.html'
    }),
  ]
};