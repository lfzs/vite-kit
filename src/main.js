import { createApp as createCSRApp } from 'vue'
import { createPinia } from 'pinia'

function createStore() {
  const store = createPinia()
  return store
}

function createApp(rootComponent, rootProps = {}, rootContainer) {
  const app = createCSRApp(rootComponent, rootProps)
  const store = createStore()
  app.use(store)

  app.mount(rootContainer)
  return app
}

export {
  createStore,
  createApp,
}

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

createApp(App, {}, 'body')
