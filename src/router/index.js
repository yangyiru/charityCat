import Vue from 'vue'
import Router from 'vue-router'
import slogan from '@/views/slogan'
import signup from '@/views/signup'

Vue.use(Router)

export default new Router({
  routes: [{
    path: '/',
    name: 'slogan',
    component: slogan
  },
  {
    path: '/signup',
    name: 'signup',
    component: signup
  }],
  'mode': 'history'
})
