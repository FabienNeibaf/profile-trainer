import authApi from '../apis/auth'
import tokenProvider from './token'
import { useState, useEffect } from 'react'

export const useAuth = () => {
  const curToken = tokenProvider.getToken()
  let [isLogged, setLogged] = useState(!!curToken)

  useEffect(() => {
    const listener = (token) => setLogged(!!token)
    tokenProvider.subscribe(listener)
    return () => tokenProvider.unsubscribe(listener)
  }, [])

  return isLogged
}

export const authenticate = (user) => {
  return authApi.post('/sign_in', user)
    .then((res) => res.data )
    .catch(() => null)
}
