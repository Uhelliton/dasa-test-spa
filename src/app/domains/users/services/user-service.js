import RestServices from '../../../supports/services/rest-services'

class UserService extends RestServices {
  endpoint = '/users'
}

export default new UserService()
