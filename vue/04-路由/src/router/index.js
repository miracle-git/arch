import Vue from 'vue'
import VueRouter from './vue-router'

Vue.use(VueRouter)

const routes = [
  { path: '/', component: () => import('../views/home') },
  { path: '/about', component: () => import('../views/about') }
]

export default new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})
