module.exports = {
  outputDir: 'dist',
  // publicPath: process.env.NODE_ENV === 'production' ? '/vant-demo/' : '/'
  publicPath: './',
  assetsDir: 'static',
  lintOnSave: process.env.NODE_ENV === 'development',
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
  css: {
    loaderOptions: {
      less: {
        modifyVars: {
          'nav-bar-background-color': '#e5433e',
          'nav-bar-text-color': '#fff',
          'nav-bar-title-text-color': '#fff',
          'nav-bar-icon-color': '#fff',
          'divider-margin': '0px',
          'button-border-radius': '5px',
          'button-default-color': '#fff',
          'button-default-background-color': '#e5433e',
          'button-default-border-color': '#e5433e',
          'checkbox-checked-icon-color': '#e5433e'
          // 'font-size-sm': '13px',
          // 'font-size-md': '15px',
          // 'font-size-lg': '17px',
        }
      },
      postcss: {
        plugins: [
          require('postcss-px2rem')({
            remUnit: 37.5 // 根据设计图
            // 375的图就给37.5，也就是1rem=37.5px
          })
        ]
      }
    }
  }
}
