import Dep from './dep'

function defineReactive(obj, key, val) {
  // 递归
  observe(val)
  // 创建当前key对应dep(一对一)
  const dep = new Dep()
  // 对传入的数据进行拦截
  Object.defineProperty(obj, key, {
    get() {
      Dep.target && dep.addDep(Dep.target)
      return val
    },
    set(newVal) {
      if (newVal !== val) {
        // 如果传入的数据仍然是对象，继续做响应式处理
        observe(newVal)
        val = newVal
        // 通知对应的watcher更新
        dep.notify()
      }
    }
  })
}

class Observer {
  constructor(val) {
    this.val = val
    if (typeof this.val === 'object') {
      this.walk(this.val)
    }
  }
  // 对象数据响应式
  walk(obj) {
    Object.keys(obj).forEach(key => defineReactive(obj, key, obj[key]))
  }
}

export default function observe(obj) {
  if (typeof obj !== 'object' || obj == null) return
  // 创建Observer实例
  new Observer(obj)
}
