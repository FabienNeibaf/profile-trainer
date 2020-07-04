import { LOGIN_SUCCESS, LOGIN_FAILURE } from '../types'

const auth = (state = {}, action) => {
  const { type } = action

  switch (type) {
    case LOGIN_SUCCESS:
      return { status: LOGIN_SUCCESS, msg: 'Successfully log in!' }
    case LOGIN_FAILURE:
      return { status: LOGIN_FAILURE, msg: 'Wrong email or password!' }
    default:
      return state
  }
}

export default auth
