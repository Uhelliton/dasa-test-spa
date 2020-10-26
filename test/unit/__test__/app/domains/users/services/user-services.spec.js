import mockAxios from 'axios'
import userService from '@/app/domains/users/services/user-service'
import { user } from '../../__mocks__/user-mock'

describe('user-services.js', () => {
  it('fetches data from users', async () => {
    // setup
    mockAxios.get.mockImplementationOnce(() =>
      Promise.resolve(user)
    )
    const service = await userService.search()

    expect(service).toEqual(user)
    expect(mockAxios.get).toHaveBeenCalledTimes(1)
    // garantir que uma função simulada foi chamada com argumentos específico
    // expect(mockAxios.get).toHaveBeenCalledWith('https://api.github.com/users')
  })
})
