import { createRouter as vueCreateRouter } from 'vue-router'

function createRouter({ routes, history }) {
  const router = vueCreateRouter({ routes, history })
  router.beforeEach(to => {
    if (!to.matched.length) return '/404'
  })

  return router
}

export {
  createRouter,
}
