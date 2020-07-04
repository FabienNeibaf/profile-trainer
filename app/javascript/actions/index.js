import axios from 'axios'

import { LOGIN_SUCCESS, LOGIN_FAILURE } from '../types'

export const authenticate = (user) => {
  return async (dispatch) => {
    try {
      const { data } = await axios.post('http://localhost:5000/auth/sign_in', user)
      dispatch({ type: LOGIN_SUCCESS })
    } catch(err) {
      dispatch({ type: LOGIN_FAILURE })
    }
  }
}

export const submitRegistration = (user) => {
  return async (dispatch) => {
    try {
      const { data } = await axios.post('http://localhost:5000/auth/sign_in', user)
      dispatch({ type: REGISTRATION_SUCCESS })
    } catch(err) {
      dispatch({ type: REGISTRATION_FAILURE })
      return false
    }
    return true
  }
}
