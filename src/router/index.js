import Vue from 'vue'
import Router from 'vue-router'
import slogn from '@/views/slogn'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'slogn',
      component: slogn
    }
  ]
})
