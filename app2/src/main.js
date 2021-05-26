import Vue from 'vue'
import App from './App.vue'

/* Router & Store */
import router from './router'

import auth from '@/auth'
Vue.use(auth)

router.beforeEach((to, from, next) => {
  if (to.name == 'callback') {
    next()
  } else if (router.app.$auth.isAuthenticated()) {
    next()
  } else {
    router.app.$auth.login()
  }
})

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
  router
}).$mount('#app')
