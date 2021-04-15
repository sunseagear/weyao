import Vue from 'vue'
import App from './App'
import { router } from './router/router'

import store from '@/store'
import './icons' // icon
import moment from 'moment'
import * as filters from './filters' // global filters
// 引入vant懒加载和样式
import Vant, { Lazyload, Toast, Dialog, Notify } from 'vant'
import 'vant/lib/index.less'

import '@/style/index.less'
import VsTree from 'vs-tree'
import 'vs-tree/lib/style/index.css'
import NavBar from '@/components/navBar/navBar'

import { isNull } from '@/utils'
import formValidate from '@/utils/formValidate'

Vue.use(VsTree)
Vue.use(Lazyload)
Vue.use(Vant)
Vue.component('nav-bar', NavBar)

store.dispatch('dict/getDicts').then(() => {
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

Vue.prototype.formValidate = formValidate

Vue.config.productionTip = false
Vue.prototype.isNull = isNull
Vue.prototype.$toast = Toast
Vue.prototype.$dialog = Dialog
Vue.prototype.$notify = Notify

new Vue({
  router,
  store,
  el: '#app',
  render: h => h(App)
})
