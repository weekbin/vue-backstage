import Vue from 'vue'
import VueRouter from 'vue-router'

import Layout from '@/layout'

Vue.use(VueRouter)

const constantRoutes = [
  {
    path: '/',
    name: 'login',
    component: () => import('@/views/login')
  },
  {
    path: '/',
    component: Layout,
    name: 'Layout',
    redirect: '/dashboard',
    children: [{
      path: 'dashboard',
      name: 'Dashboard',
      component: () => import('@/views/dashboard')
    }]
  }
]

export default new VueRouter({
  routes: constantRoutes
})

