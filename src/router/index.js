import Vue from 'vue'
import VueRouter from 'vue-router'
import App from '@/App.vue'
import store from '@/store'
import * as Tools from '../util/tool'
import pc from './pc.js'
import mobile from './mobile.js'

Vue.use(VueRouter)

const routes = [
  // {
  //   path: '/index',
  //   component: App
  // },
  {
    path: '/signin',
    name: 'SignIn',
    component: (resolve) => require(['@/views/SignIn.vue'], resolve),
    meta: { requiresAuth: false } // 不需驗證
  },
  {
    path: '/signup',
    name: 'SignUp',
    component: () => import('@/views/SignUp.vue'),
    meta: { requiresAuth: false } // 不需驗證
  },
  {
    path: '/forgetpassword',
    name: 'ForgetPassword',
    component: () => import('@/views/ForgetPassword.vue'),
    meta: { requiresAuth: false } // 不需驗證
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  // mode: 'hash',
  // base: '/mywebsite',
  routes
})

router.beforeEach((to, from, next) => {
  if (to.meta.requiresAuth) {
    // 如果沒有 token
    if (store.state.token === '') {
      // 轉跳到 login page
      next({ path: '/signin' })
    } else {
      next() // 往下繼續執行
    }
  } else {
    next() // 往下繼續執行
  }
})

if (Tools.IsPC()) {
  router.addRoutes(pc)
} else {
  router.addRoutes(mobile)
}

export default router
