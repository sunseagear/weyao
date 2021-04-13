import Vue from 'vue'
import Router from 'vue-router'
import store from '@/store'

Vue.use(Router)

// 全局登录设置，为true的时候，所有页面必须登录 , needLogin字段不起作用
// 为false 的时候，needLogin字段为true的页面才需要登录
const loginFirst = false

const routes = [
  {
    path: '/',
    redirect: '/index/home'
  },
  {
    path: '/index',
    component: () => import('@/views/index'),
    meta: {
      title: '首页'
    },
    children: [
      {
        path: 'home',
        component: () => import('@/views/home/home'),
        meta: {
          title: '首页'
        }
      },
      {
        path: 'feature',
        component: () => import('@/views/feature/feature'),
        meta: {
          title: '样例',
          keepAlive: true
        }
      },
      {
        path: 'user',
        component: () => import('@/views/user/user'),
        meta: {
          title: '我的'
        }
      }
    ]
  },
  {
    path: '/login',
    component: () => import('@/views/login/login'),
    meta: {
      title: '登录'
    }
  },
  {
    path: '/user',
    component: () => import('@/views/user/user'),
    meta: {
      title: '会员中心',
      needLogin: true
    }
  },
  {
    path: '/cart',
    component: () => import('@/views/cart'),
    meta: {
      title: '购物车'
    }
  },
  {
    path: '/qrScan',
    component: () => import('@/views/qrcode/qrcode'),
    meta: {
      title: '扫码'
    }
  },
  {
    path: '/goods',
    component: () => import('@/views/goods'),
    meta: {
      title: '商品详情'
    }
  },
  {
    path: '/eventList',
    component: () => import('@/views/event/eventList'),
    meta: {
      title: '事件列表'
    }
  },
  {
    path: '/eventForm',
    component: () => import('@/views/event/eventForm'),
    meta: {
      title: '事件信息'
    }
  },
  {
    path: '/clientList',
    component: () => import('@/views/client/clientList'),
    meta: {
      title: '客户列表'
    }
  },
  {
    path: '/clientForm',
    component: () => import('@/views/client/clientForm'),
    meta: {
      title: '客户信息'
    }
  },
  { path: '*', redirect: '/404' }
]

// add route path
// routes.forEach(route => {
//   route.path = route.path || '/' + (route.name || '')
// })
// console.log(routes)

const router = new Router({ routes })

router.beforeEach((to, from, next) => {
  next()
  // console.log('store.getters.userInfo', store.getters.userInfo)
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
