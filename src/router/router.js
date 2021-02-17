import Vue from 'vue'
import Router from 'vue-router'
import store from '@/store'

Vue.use(Router)

// 全局登录设置，为true的时候，所有页面必须登录 , needLogin字段不起作用
// 为false 的时候，needLogin字段为true的页面才需要登录
const loginFirst = false

const routes = [
  {
    name: '/',
    component: () => import('@/views/index'),
    meta: {
      title: '首页'
    }
  },
  {
    name: 'login',
    component: () => import('@/views/login/login'),
    meta: {
      title: '登录'
    }
  },
  {
    name: 'user',
    component: () => import('@/views/user/user'),
    meta: {
      title: '会员中心',
      needLogin: true
    }
  },
  {
    name: 'cart',
    component: () => import('@/views/cart'),
    meta: {
      title: '购物车'
    }
  },
  {
    name: 'qrScan',
    component: () => import('@/views/qrcode/qrcode'),
    meta: {
      title: '扫码'
    }
  },
  {
    name: 'goods',
    component: () => import('@/views/goods'),
    meta: {
      title: '商品详情'
    }
  },
  {
    name: 'event',
    component: () => import('@/views/biz/event/eventForm'),
    meta: {
      title: '商品详情'
    }
  }
]

// add route path
routes.forEach(route => {
  route.path = route.path || '/' + (route.name || '')
})

const router = new Router({ routes })

router.beforeEach((to, from, next) => {
  next()
  console.log('store.getters.userInfo', store.getters.userInfo)
  if (!store.getters.userInfo) {
    // 不是默认页或者登录页，并且需要登录则进行登录
    if (to.path !== '/' && to.path !== '/login' && (loginFirst || to.meta.needLogin)) {
      store.dispatch('user/getInfo').then(() => {
        // console.log('store.getters.userInfo', store.getters.userInfo)
        if (!store.getters.userInfo) {
          next('/login')
          return
        }
        const title = to.meta && to.meta.title
        if (title) {
          document.title = title
        }
        next()
      }).catch(() => {
        next('/login')
      })
    }
  } else {
    const title = to.meta && to.meta.title
    if (title) {
      document.title = title
    }
    next()
  }
})
router.afterEach(route => {
  window.scroll(0, 0)
})

export {
  router
}
