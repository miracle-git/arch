function defineReactive(obj, key, val) {
  // 递归
  observe(val)
  // 对传入的数据进行拦截
  Object.defineProperty(obj, key, {
    get() {
      console.log(`get ${key}`)
      return val
    },
    set(newVal) {
      if (newVal !== val) {
        console.log(`set ${key}: ${newVal}`)
        // 如果传入的数据仍然是对象，继续做响应式处理
        observe(newVal)
        val = newVal
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
