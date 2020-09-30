import Dep from './dep'

export default class Watcher {
  constructor(vm, key, updater) {
    this.vm = vm
    this.key = key
    this.updater = updater
    // Dep的静态属性target设置为当前watcher示例
    Dep.target = this
    // 触发getter完成依赖收集
    this.vm[this.key]
    // 收集完成后立即释放target
    Dep.target = null
  }

  update() {
    this.updater.call(this.vm, this.vm[this.key])
  }
}
