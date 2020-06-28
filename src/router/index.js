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
    redirect: '/task',
    children: [
      {
        path: 'task',
        name: 'Task',
        component: () => import('@/views/task'),
        meta: {
          title: '添加任务'
        }
      },
      {
        path: 'test',
        name: 'Test',
        component: () => import('@/views/test'),
        meta: {
          title: '测试目录'
        }
      }
    ]
  }
]

export default new VueRouter({
  routes: constantRoutes
})

