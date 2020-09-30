export default function proxy(vm, prop) {
  Object.keys(vm[prop]).forEach(key => {
    Object.defineProperty(vm, key, {
      get() {
        return vm[prop][key]
      },
      set(val) {
        vm[prop][key] = val
      }
    })
  })
}
