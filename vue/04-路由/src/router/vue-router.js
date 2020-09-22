let Vue

class VueRouter {
  constructor(options) {
    this.$options = options
  }
}

VueRouter.install = (_Vue) => {
  Vue = _Vue
  // 1. 利用mixin挂载$router
  Vue.mixin({
    beforeCreate() {
      if (this.$options.router) {
        Vue.prototype.$router = this.$options.router
      }
    }
  })
  // 2. 定义router-link和router-view
  Vue.component('router-link', {
    props: {
      to: {
        type: String,
        required: true
      }
    },
    render(h) {
      return h('a', { attrs: { href: '#' + this.to } }, this.$slots.default)
    }
  })

  Vue.component('router-view', {})
}

export default VueRouter
