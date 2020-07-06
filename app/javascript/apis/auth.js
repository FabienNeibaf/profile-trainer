import { createApi } from './index'

const auth = createApi({
  baseURL: 'http://localhost:5000/auth'
})

export default auth
