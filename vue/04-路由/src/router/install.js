import Link from './router-link'
import View from './router-view'

export let Vue
export default (_Vue) => {
  Vue = _Vue
  // 利用mixin挂载$router
  Vue.mixin({
    beforeCreate() {
      if (this.$options.router) {
        Vue.prototype.$router = this.$options.router
      }
    }
  })
  // 定义router-link和router-view
  Vue.component('router-link', Link)
  Vue.component('router-view', View)
}
