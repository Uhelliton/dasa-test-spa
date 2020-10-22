import axios from 'axios'
import { HTTP_RESPONSE } from '@/app/supports/utils/context'

const clientApi = axios.create({
  baseURL: process.env.API_URL
})

clientApi.interceptors.request.use((config) => {
  config.headers['Authorization'] = `Bearer `
  return config
}, (error) => {
  return Promise.reject(error)
})

clientApi.interceptors.response.use((response) => {
  return response
}, (error) => {
  if (error.response.status === HTTP_RESPONSE.UNAUTHORIZED) {
    // $router.push('/')
  }
  return Promise.reject(error)
})

export default clientApi
