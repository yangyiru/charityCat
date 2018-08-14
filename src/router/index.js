import Vue from 'vue'
import Router from 'vue-router'
import slogan from '@/views/slogan'
import signup from '@/views/signup'
import loginin from '@/views/loginin'
import forget from '@/views/forget'

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
  },
  {
    path: '/loginin',
    name: 'loginin',
    component: loginin
  },
  {
    path: '/forget',
    name: 'forget',
    component: forget
  }],
  'mode': 'history'
})
