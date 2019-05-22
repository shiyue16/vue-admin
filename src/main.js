/* eslint-disable*/
import Vue from 'vue'
import App from './App'
import store from './vuex' // vuex
import Bus from './utils/bus'
import router from './router' // 路由
import ElementUi from 'element-ui'
import axios from './utils/axios' // axios请求方法
import i18n from './lang'
import BaseDialog from './components/baseDialog'
// import './utils/rem' 移动端项目请解开注释

Vue.use(ElementUi, {
  i18n: (key, value) => i18n.t(key, value)
})

Vue.component('base-dialog', BaseDialog)

Vue.prototype.$bus = Bus // vue原型挂载bus

Vue.prototype.$axios = axios // vue原型挂载axios

Vue.config.productionTip = false

const main = new Vue({
  el: '#app',
  i18n,
  store,
  router,
  components: { App },
  template: '<App/>'
})

export default main
