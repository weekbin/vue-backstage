import Vue from 'vue'

import ElementUI from 'element-ui' // element UI and theme
import 'element-ui/lib/theme-chalk/index.css'

import '@/styles/normalize.styl' // custom global css
import '@/styles/common.styl'

import App from './App.vue' // Vue family
import store from './store'
import router from './router'

import '@/icons' // icons

Vue.use(ElementUI)
Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
