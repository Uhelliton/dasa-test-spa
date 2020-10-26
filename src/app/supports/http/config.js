import axios from 'axios'

const clientApi = axios.create({
  baseURL: process.env.API_URL
})

// interceptors request
clientApi.interceptors.request.use((config) => {
  return config
}, (error) => {
  return Promise.reject(error)
})

// interceptors response
clientApi.interceptors.response.use((response) => {
  return response
}, (error) => {
  return Promise.reject(error)
})

export default clientApi
