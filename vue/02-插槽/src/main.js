import Vue from 'vue'
import { Plugin as Fragment } from 'vue-fragment'
import App from './app'

Vue.config.productionTip = false
Vue.use(Fragment)

new Vue({
  render: h => h(App)
}).$mount('#app')
