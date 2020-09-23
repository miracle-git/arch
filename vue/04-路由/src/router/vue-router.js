import Link from './router-link'
import View from './router-view'

let Vue

class VueRouter {
  constructor(options) {
    this.$options = options
    this.onHashChange = this.onHashChange.bind(this)
    // 创建路由映射表
    this.routeMap = options.routes.reduce((map, route) => ({ ...map, [route.path]: route }), {})
    // 声明一个响应式的属性current，当发生变化时重新执行render
    Vue.util.defineReactive(this, 'current', '/')
    // 监控url变化：监听hashchange或popstate事件
    window.addEventListener('hashchange', this.onHashChange)
    window.addEventListener('load', this.onHashChange)
  }

  onHashChange() {
    this.current = window.location.hash.slice(1)
  }
}

VueRouter.install = (_Vue) => {
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

export default VueRouter
