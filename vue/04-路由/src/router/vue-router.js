import install, { Vue } from './install'
import { getHashPath, getRouteMap } from './utils'

class VueRouter {
  constructor(options) {
    this.$options = options
    // 创建路由映射表
    this.routeMap = getRouteMap(options.routes)
    // 声明一个响应式的属性current，当发生变化时重新执行render
    Vue.util.defineReactive(this, 'current', '/')
    // 监控url变化：监听hashchange或popstate事件
    this.hashchange = () => this.current = getHashPath()
    window.addEventListener('hashchange', this.hashchange)
    window.addEventListener('load', this.hashchange)
  }
}

VueRouter.install = install
export default VueRouter
