import React from 'react'
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import { Provider } from 'react-redux'
import { hot } from 'react-hot-loader/root'

import store from '../store'

import Home from './Home'
import Login from './auth/Login'
import Logout from './auth/Logout'
import AuthGuard from './auth/Guard'
import Register from './auth/Register'

const App = () => (
  <Provider store={store}>
    <Router>
      <AuthGuard />
      <Switch>
        <Route path="/login"><Login /></Route>
        <Route path="/logout"><Logout /></Route>
        <Route path="/register"><Register /></Route>
        <Route path="/"><Home /></Route>
      </Switch>
    </Router>
  </Provider>
)

export default hot(App)
