import Vue from 'vue'
import Vuex from './vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    count: 0
  },
  getters: {
    doubleCount(state) {
      return state.count * 2
    }
  },
  mutations: {
    add(state) {
      state.count++
    }
  },
  actions: {
    addAsync({ commit }) {
      setTimeout(() => commit('add'), 1000)
    }
  }
})
