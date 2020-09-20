import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [
  { path: '/props-emit', component: () => import('../props-emit') },
  { path: '/event-bus', component: () => import('../event-bus') },
  { path: '/vuex', component: () => import('../vuex') },
  { path: '/refs', component: () => import('../refs') },
  { path: '/parent-children', component: () => import('../parent-children') },
  { path: '/attrs-listeners', component: () => import('../attrs-listeners') },
  { path: '/provide-inject', component: () => import('../provide-inject') }
]

export default new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})
