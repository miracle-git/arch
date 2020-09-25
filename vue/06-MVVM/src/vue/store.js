import { Vue } from './install'

export default class Store {
  constructor(options) {
    this._mutations = options.mutations
    this._actions = options.actions
    this._vm = new Vue({
      data: {
        $$state: options.state
      }
    })
    // 绑定commit, dispatch上下文
    this.commit = this.commit.bind(this)
    this.dispatch = this.dispatch.bind(this)
  }
  // 响应式处理state(只读)
  get state() {
    return this._vm.$data.$$state
  }
  // 执行mutations的commit
  commit(type, payload) {
    const mutate = this._mutations[type]
    mutate && mutate(this.state, payload)
  }
  // 执行actions的dispatch
  dispatch(type, payload) {
    const action = this._actions[type]
    action && action(this, payload)
  }
}
