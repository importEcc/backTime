/*
 * @Author: 王精华
 * @Date: 2020-05-30 14:58:03
 * @LastEditTime: 2020-09-03 17:02:44
 * @LastEditors: 王精华
 * @Description: 
 */
// const CompressionPlugin = require('compression-webpack-plugin')
module.exports = {
  publicPath: './',
  assetsDir: 'assets',
  runtimeCompiler: true,
  devServer: {
    // 开发调试服务器配置项

    open: true, // npm run serve后自动打开页面

    port: 9371, // 开发服务器运行端口号

    compress: true, // 启用静态资源压缩算法

    // proxy: {
    //   '/api': {
    //       target: '', //API服务器的地址

    //       ws: true,  //代理websockets

    //       changeOrigin: true, // 虚拟的站点需要更管origin

    //       pathRewrite: {   //重写路径 比如'/api/aaa/ccc'重写为'/aaa/ccc'
    //           '^/api': ''
    //       }
    //   }
    // },
  },
  css: {
    loaderOptions: {
      css: {},
      postcss: {
        plugins: [
          require('postcss-px2rem')({
            remUnit: 75,
          }),
        ],
      },
    },
  },
  // configureWebpack: {
  //   plugins: [
  //     new CompressionPlugin({
  //       filename: '[path].gz',
  //       algorithm: 'gzip',
  //       test: /\.js$|\.css$|\.html$/,
  //       threshold: 10240,
  //       minRatio: 0.8,
  //     }),
  //     new CompressionPlugin({
  //       filename: '[path].br',
  //       algorithm: 'brotliCompress',
  //       test: /\.(js|css|html|svg)$/,
  //       compressionOptions: {
  //         level: 11,
  //       },
  //       threshold: 10240,
  //       minRatio: 0.8,
  //     }),
  //   ],
  // }

}
