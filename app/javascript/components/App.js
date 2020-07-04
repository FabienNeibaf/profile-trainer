import React from 'react'
import { Router } from '@reach/router'
import { Provider } from 'react-redux'
import { hot } from 'react-hot-loader/root'

import store from '../store';

import Home from './Home'
import Login from './auth/Login'
import Logout from './auth/Logout'
import RegisterPro from './auth/RegisterPro'
import RegisterClient from './auth/RegisterClient'

const App = () => (
  <Provider store={store}>
    <Router>
      <Home path="/*" />
      <Login path="/login" />
      <Logout path="/logout" />
      <RegisterPro path="/register-pro" />
      <RegisterClient path="/register-client" />
    </Router>
  </Provider>
)

export default hot(App)
