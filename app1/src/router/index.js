import Vue from 'vue'
import VueRouter from 'vue-router'
// import crypto from 'crypto'
// import AuthService from '@/services/auth.service'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'home',
    component: () => import('../views/Home')
    // beforeEnter() {
    //   let client_id = '9385d2a0-3454-416b-88d8-a17c9edc3495'
    //   let redirect_uri = 'http://localhost:8080/callback'
    //   let response_type = 'token'
    //   let state = crypto.randomBytes(20).toString('hex')
    //   window.location.href = `${process.env.VUE_APP_API}/oauth/authorize?client_id=${client_id}&redirect_uri=${redirect_uri}&response_type=${response_type}&state=${state}`
    //   // AuthService.login().then(() => {
    //   //   console.log('ashduasdhs')
    //   // })
    // }
  },
  {
    path: '/callback',
    name: 'callback',
    component: () => import('../views/About')
  }
]

const router = new VueRouter({
//   base: process.env.BASE_URL,
  mode: 'history',
  routes
})

export default router
