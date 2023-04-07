// eslint-disable-next-line @typescript-eslint/promise-function-async
import { createRouter, createWebHashHistory, RouteRecordRaw } from 'vue-router'

const staticRoutes: RouteRecordRaw[] = [
  {
    path: '/',
    redirect: '/home'
  },
  {
    path: '/home',
    component: () => import('@/views/HomeIndex.vue')
  }
]

const Router = createRouter({
  history: createWebHashHistory(),
  routes: staticRoutes
})

export default Router
