import { Vue } from './install'

export default class Store {
  constructor(options) {
    // 响应式处理state
    this.state = new Vue({
      data: options.state
    })
  }
  // 执行mutations的commit
  commit(type, payload) {

  }
  // 执行actions的dispatch
  dispatch(context) {}
}
