import axios from 'axios'
import tokenProvider from '../providers/token'

export const createApi = (options) => {
  const api = axios.create(options)

  api.interceptors.request.use((config) => {
    const token = tokenProvider.getToken() || {}
    Object.keys(token).forEach((key) => {
      config.headers[key] = token[key]
    })
    return config
  })

  api.interceptors.response.use((response) => {
    const tokenType = response.headers['token-type']
    const accessToken = response.headers['access-token']
    const {uid, client, expiry } = response.headers
    tokenProvider.setToken({
      uid, client, 'access-token': accessToken, 'token-type': tokenType, expiry
    })
    return response
  }, (error) => {
    tokenProvider.setToken(null)
  })

  return api
}
