import Vue from 'vue'
import { Plugin as Fragment } from 'vue-fragment'
import App from './app'
import router from './router'
import store from './store'
import EventBus from './utils/bus'

Vue.config.productionTip = false
Vue.prototype.$bus = new EventBus()
Vue.use(Fragment)

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
