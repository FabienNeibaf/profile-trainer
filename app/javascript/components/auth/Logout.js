import authApi from '../../apis/auth'

const Logout = () => {
  authApi.delete('/sign_out')
  return null
}

export default Logout
