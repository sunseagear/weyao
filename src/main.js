import Vue from 'vue'
import App from './App'
import { router } from './router/router'

import store from '@/store'

import moment from 'moment'
import * as filters from './filters' // global filters

import Vant from 'vant'
import 'vant/lib/index.css'

import '@/style/index.scss'

import TopTitle from '@/components/topTitle'

Vue.use(Vant)
Vue.component('top-title', TopTitle)

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
  ak: ''
})

Vue.config.productionTip = false

new Vue({
  router,
  el: '#app',
  render: h => h(App)
})
