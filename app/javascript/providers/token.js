import CryptoJS from 'crypto-js'

const tokenProvider = (() => {
  let callbacks = []

  const getToken = () => {
    let token = localStorage.getItem('auth_token')
    if (token) {
      token = CryptoJS.AES.decrypt(token, process.env.TOKEN_SECRET).toString(CryptoJS.enc.Utf8)
    }
    return token && JSON.parse(token)
  }

  const setToken = (token) => {
    let next = ''
    if (token) {
      next = CryptoJS.AES.encrypt(
        JSON.stringify(token),
        process.env.TOKEN_SECRET
      ).toString()
    }
    localStorage.setItem('auth_token', next)
    callbacks.forEach((callback) => {
      callback(token)
    })
  }

  const subscribe = (listener) => {
    callbacks.push(listener)
  }

  const unsubscribe = (listener) => {
    callbacks = callbacks.filter((callback) => callback !== listener)
  }

  return {
    getToken,
    setToken,
    subscribe,
    unsubscribe
  }
})()

export default tokenProvider
