import Vue from 'vue'
import Router from 'vue-router'
import slogan from '@/views/slogan'

Vue.use(Router)

export default new Router({
  routes: [{
    path: '/',
    name: 'slogan',
    component: slogan
  }],
  'mode': 'history'
})
