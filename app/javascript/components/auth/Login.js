import PropTypes from 'prop-types'
import styled from 'styled-components'
import { Link } from 'react-router-dom'
import React, { useState } from 'react'

import { authenticate } from '../../providers/auth'

import Header from './Header'
import { validateEmail } from '../../utils'

const Login = ({ className }) => {
  const [state, setState] = useState({email: '', password: '', error: {}})

  const handleChange = (e) => {
    const { name, value } = e.target
    const error = { ...state.error }

    if (name === 'email') {
      error.email = value && !validateEmail(value) ? 'Invalid Email' : ''
    } else if (name === 'password' && error.password) {
      error.password = ''
    }

    error.auth = ''
    setState((prev) => ({ ...prev, [name]: value, error }))
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    const { email, password, error } = state

    if (!email) error.email = 'Email is required'
    if (!password) error.password = 'Password is required'

    if (!error.email && !error.password) {
      const user = await authenticate({ email, password })
      if (!user) {
        error.auth = 'Wrong email or password'
        setState({ email: '', password: '', error })
      }
    } else setState((prev) => ({ ...prev, error }))
  }

  return (
    <section className={className}>
      <Header />
      <form onSubmit={handleSubmit}>
        {state.error.auth ? <div className="status">{state.error.auth}</div> : ''}
        <h3>Authentication</h3>
        <label>
          <span>Email</span>
          <input type="email" name="email" value={state.email} onChange={handleChange} />
          <div className="error">{state.error.email}</div>
        </label>
        <label>
          <span>Password</span>
          <input type="password" name="password" value={state.password} onChange={handleChange} />
          <div className="error">{state.error.password}</div>
        </label>
        <button type="submit">Sign in</button>
        <div className="register">
          Don't have an account? <Link to="/register">register</Link>
        </div>
      </form>
    </section>
  )
}

Login.propTypes = {
  className: PropTypes.string.isRequired
}

export default styled(Login)`
  min-height: 100vh;
  background: #f4f4f7;

  form {
    max-width: 325px;
    background: #fff;
    position: relative;
    border-radius: 5px;
    margin: 60px auto 20px;

    .status {
      width: 100%;
      bottom: 100%;
      padding: 5px;
      position: absolute;
      text-align: center;
      background: #fff2ea;
      border-radius: 5px 5px 0 0;
    }

    h3 {
      color: #0b1857;
      font-size: 2em;
      font-weight: 300;
      text-align: center;
      padding: 20px 20px 10px;
      margin-bottom: 10px;
      background: red;

      @media (max-width: 500px) {
        font-size: 1.5em;
      }
    }

    label, span, input, button[type=submit] {
      display: block;
    }

    label {
      padding: 0 20px;
      position: relative;

      span {
        font-weight: 400;
        margin-bottom: 5px;
      }

      input {
        width: 100%;
        border: none;
        padding: 5px;
        font-weight: 300;
        border-radius: 3px;
        background: #f3f3f4;
      }

      &:not(:last-of-type) {
        margin-bottom: 20px;
      }

      .error {
        top: 100%;
        color: #f00;
        font-size: .85em;
        position: absolute;
      }
    }

    button[type=submit] {
      color: #fff;
      margin: 30px auto;
      min-width: 150px;
      font-weight: 500;
      padding: 5px 20px;
      border-radius: 2px;
      background: #978600;

      &:hover {
        background: #6c620d;
      }

      &:active {
        background: #978600;
      }
    }

    @media (max-width: 310px) {
      max-width: 95%;
    }
  }

  .register {
    line-height: 1.7;
    padding: 10px 20px;
    text-align: center;
    background: #fafafb;
    border-radius: 0 0 5px 5px;

    a {
      color: #1330c0;
    }
  }
`;
