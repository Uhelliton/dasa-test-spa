const routes = [
  {
    path: '/dashboard',
    component: () => import('./views/DashboardIndex.vue'),
    name: 'dashboard.index',
    meta: {
      requiresAuth: true
    }
  }
]

export default routes
