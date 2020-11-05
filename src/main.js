import Vue from 'vue'
import App from './App'
import { router } from './router/router'

import store from '@/store'

import moment from 'moment'
import * as filters from './filters' // global filters

import Vant from 'vant'
import 'vant/lib/index.css'

import '@/style/index.scss'

Vue.use(Vant)

import MintUI from 'mint-ui'
import 'mint-ui/lib/style.css'

Vue.use(MintUI)

store.dispatch('dict/GetDicts').then(() => {
  console.log('数据字典加载成功...')
})

// 时间转化
Vue.filter('dateformat', function(dataStr, pattern = 'YYYY-MM-DD HH:mm:ss') {
  return moment(dataStr).format(pattern)
})

// register global utility filters
Object.keys(filters).forEach(key => {
  Vue.filter(key, filters[key])
})
// 定义字典全局方法
Vue.prototype.dictList = function(code) {
  return store.getters.dicts[code]
}

// 百度地图
import BaiduMap from 'vue-baidu-map'
Vue.use(BaiduMap, {
  // ak 是在百度地图开发者平台申请的密钥 详见 http://lbsyun.baidu.com/apiconsole/key */
  ak: 'Cvg6bkUEqiCbfYxOX9UPxTdMrmdGLNBp'
})

Vue.config.productionTip = false

// 用户登录
router.beforeEach((to, from, next) => {
  // 获取用户登录成功后储存的登录标志
  const getFlag = localStorage.getItem('loginFlag');
  // 如果登录标志存在且为isLogin，即用户已登录
  if (getFlag === 'isLogin') {
    // 设置vuex登录状态为已登录
    store.state.isLogin = true
    next()

    // 如果已登录，还想想进入登录注册界面，则定向回首页
    // if (!to.meta.isLogin) {
    //    //iViewUi友好提示
    //   iView.Message.error('请先退出登录')
    //   next({
    //     path: '/home'
    //   })
    // }

    // 如果登录标志不存在，即未登录
  } else {
    // 用户想进入需要登录的页面，则定向回登录界面
    if (to.meta.isLogin) {
      next({
        path: '/login'
      })
      // iViewUi友好提示
      // iView.Message.info('请先登录')
      // 用户进入无需登录的界面，则跳转继续
    } else {
      next()
    }
  }
});

router.afterEach(route => {
  window.scroll(0, 0);
});

new Vue({
  router,
  el: '#app',
  render: h => h(App)
})
