import observe from './observe'
import proxy from './proxy'

export default class Vue {
  constructor(options) {
    this.$options = options
    this.$data = options.data
    // 数据响应式
    observe(this.$data)
    // 数据代理
    proxy(this, '$data')
  }
}
