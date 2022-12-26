import { h } from 'vue'
import { user } from './user'

const routes = [
  ...user,
  {
    path: '/',
    name: 'home',
    alias: ['/index'],
    component: () => import('@/views/home/Index.vue'),
    meta: {},
  },
  {
    path: '/404',
    component: () => h('h3', '404 page'),
  },
]

export {
  routes,
}
