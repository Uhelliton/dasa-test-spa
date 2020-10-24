import { routes as auth } from './auth/index'
import { routes as dashboard } from './dashboard/index'

export default [
  ...auth,
  ...dashboard
]
