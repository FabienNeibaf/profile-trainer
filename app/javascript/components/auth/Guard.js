import React from 'react'
import { useAuth } from '../../providers/auth'
import { useLocation, Redirect } from 'react-router-dom'

const Guard = () => {
  const isLogged = useAuth()
  const location = useLocation()
  const path = location.pathname.slice(1)
  const match = /^(login|register)$/.test(path)

  if (isLogged && match) return <Redirect to="/" />
  if (!isLogged && !match) return <Redirect to="/login" />

  return null
}

export default Guard
