import observe from './observe'
import proxy from './proxy'
import Compiler from './compile'

export default class MVVM {
  constructor(options) {
    this.$options = options
    this.$data = options.data
    // 数据响应式
    observe(this.$data)
    // 数据代理
    proxy(this, '$data')
    // 模板编译
    new Compiler(options.el, this)
  }
}
