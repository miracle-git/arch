import { isDirective, isElement, isExpression } from './util'
import Watcher from './watcher'

export default class Compiler {
  constructor(el, vm) {
    this.$el = document.querySelector(el)
    this.$vm = vm
    if (this.$el) {
      this.compile(this.$el)
    }
  }

  compile(el) {
    Array.from(el.childNodes).forEach(node => {
      if (isElement(node)) {
        this.compileElement(node)
      } else if (isExpression(node)) {
        this.compileText(node)
      }
      // 递归子节点
      if (node.childNodes && node.childNodes.length > 0) {
        this.compile(node)
      }
    })
  }

  compileElement(node) {
    Array.from(node.attributes).forEach(attr => {
      const { name, value: exp } = attr
      if (isDirective(name)) {
        const dir = name.substring(2)
        this[dir] && this[dir](node, exp)
      }
    })
  }

  compileText(node) {
    this.update(node, RegExp.$1, 'text')
  }

  text(node, exp) {
    this.update(node, exp, 'text')
  }

  textUpdater(node, val) {
    node.textContent = val
  }

  html(node, exp) {
    this.update(node, exp, 'html')
  }

  htmlUpdater(node, val) {
    node.innerHTML = val
  }

  update(node, exp, dir) {
    // 初始化
    const updater = this[dir + 'Updater']
    updater && updater(node, this.$vm[exp])
    // 更新
    new Watcher(this.$vm, exp, val => updater && updater(node, val))
  }
}
