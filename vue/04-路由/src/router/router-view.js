export default {
  render(h) {
    const { routeMap, current } = this.$router
    const route = routeMap[current]
    if (route && route.component) {
      return h(route.component)
    }
    return h('')
  }
}
