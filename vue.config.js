const path = require('path')
function resolve(dir) {
  return path.join(__dirname, dir)
}
const name = '文鳐' // page title
module.exports = {
  outputDir: 'dist',
  // publicPath: process.env.NODE_ENV === 'production' ? '/vant-demo/' : '/'
  publicPath: './',
  assetsDir: 'static',
  lintOnSave: process.env.NODE_ENV === 'development',
  configureWebpack: {
    // provide the app's title in webpack's name field, so that
    // it can be accessed in index.html to inject the correct title.
    name: name
  },
  devServer: {
    // https: true,
    port: 8088,
    overlay: {
      warnings: false,
      errors: true
    }
    // proxy: {
    //   // change xxx-api/login => mock/login
    //   // detail: https://cli.vuejs.org/config/#devserver-proxy
    //   [process.env.VUE_APP_BASE_API]: {
    //     target: `http://127.0.0.1:${port}/mock`,
    //     changeOrigin: true,
    //     pathRewrite: {
    //       ['^' + process.env.VUE_APP_BASE_API]: ''
    //     }
    //   }
    // },
    // after: require('./mock/mock-server.js')
  },
  chainWebpack(config) {
    // set svg-sprite-loader
    config.module
      .rule('svg')
      .exclude.add(resolve('src/icons'))
      .end()
    config.module
      .rule('icons')
      .test(/\.svg$/)
      .include.add(resolve('src/icons'))
      .end()
      .use('svg-sprite-loader')
      .loader('svg-sprite-loader')
      .options({
        symbolId: 'icon-[name]'
      })
      .end()
  },
  css: {
    loaderOptions: {
      less: {
        modifyVars: {
          hack: `true; @import "${path.join(
            __dirname,
            './src/style/vantStyle.less'
          )}";`
        }
      }
    }
  }
}
