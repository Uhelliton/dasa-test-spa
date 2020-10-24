import store from '@/app/domains/users/vuex-module/index'
const isLogged = () => (store.state.token.length > 0)
/*!
 * Verificacao antes de inicializar as rotas
 *
 * @param to
 * @param from
 * @param next
 */
export default (to, from, next) => {
  const requiresAuth = to.matched.some(record => record.meta.requiresAuth)

  if (requiresAuth && !isLogged()) {
    next({ name: 'login.index' })
  } else if (!requiresAuth && isLogged()) next({ name: 'dashboard.index' })
  else next()
}
