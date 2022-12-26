import { createApp as createCSRApp } from 'vue'
import { createPinia } from 'pinia'
import { createWebHistory } from 'vue-router'
import { routes } from '@/router/routes'
import { createRouter } from '@/router'
import '@/static/style/class/index.less'
import '@/static/style/reset.less'
import App from '@/App.vue'
import { log, formatTime, formatUrl } from '@/utils/common'

// 将一些常用方法挂载到 window.$utils 上
window.$utils = {
  formatUrl,
  formatTime,
  log,
}

const app = createCSRApp(App)
const store = createPinia()
const router = createRouter({ routes, history: createWebHistory() })
app.use(store).use(router)
app.mount('body')
