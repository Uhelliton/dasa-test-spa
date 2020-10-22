const routes = [
  {
    path: '/',
    component: () => import('./views/AuthIndex.vue'),
    name: 'login.index',
    meta: {
      requiresAuth: false
    }
  }
]

export default routes
