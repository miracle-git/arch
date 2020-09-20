import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [
  { path: '/props-emit', component: () => import('../props-emit') },
  { path: '/event-bus', component: () => import('../event-bus') },
  { path: '/vuex', component: () => import('../vuex') }
]

export default new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})
