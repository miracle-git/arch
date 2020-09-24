import Vue from 'vue'
import Vuex from './vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    count: 0
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
