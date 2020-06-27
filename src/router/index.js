import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const constantRoutes = [
  {
    path: '/login',
    name: 'login',
    component: () => import('@/views/login')
  }
]

export default new VueRouter({
  routes: constantRoutes
})

