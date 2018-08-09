// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import 'babel-polyfill'
import axios from 'axios'
import router from './router'

// 引入element-ui样式文件
import 'element-ui/lib/theme-default/index.css'

// 引入element-ui
import ElementUI from 'element-ui'
Vue.use(ElementUI)
Vue.prototype.$axios = axios

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
