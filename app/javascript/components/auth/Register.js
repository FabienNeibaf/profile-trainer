import PropTypes from 'prop-types';
import styled from 'styled-components';
import React, { useState } from 'react';

import Header from './Header';
import { validateEmail, validatePassword, matchPassword } from '../../utils';

const Register = ({ className }) => {
  const [state, setState] = useState({
    firstName: '',
    lastName: '',
    job: '',
    email: '',
    password: '',
    passwordConfirmation: '',
    error: {}
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    const error = { ...state.error };

    if (name === 'email') {
      error.email = value && !validateEmail(value) ? 'Invalid Email' : '';
    } else if (name === 'password') {
      const { error: msg } = validatePassword(value);
      error.password = value && msg ? msg : '';
    } else if (name === 'passwordConfirmation') {
      const isMatch = matchPassword(state.password, value);
      error.passwordConfirmation = value && !isMatch ? "Password doesn't match" : '';
    } else if (/firstName|lastName/.test(name)) {
      error[name] = '';
    }

    setState((prev) => ({ ...prev, [name]: value, error }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const error = { ...state.error };
    if (!state.email) error.email = 'Email is required';
    if (!state.password) error.password = 'Password is required';
    if (!state.lastName) error.lastName = 'Last name is required';
    if (!state.firstName) error.firstName = 'First name is required';

    if (!error.email && !error.password && !error.lastName &&
      !error.firstName && !error.passwordConfirmation) {
      console.log('OK');
    } else {
      setState((prev) => ({ ...prev, error }));
    }
  };

  return (
    <section className={className}>
      <Header />
      <form onSubmit={handleSubmit}>
        <h3>Create an account</h3>
        <label className="fullName">
          <span>Full Name</span>
          <input type="text" name="firstName" value={state.firstName} onChange={handleChange} placeholder="First Name" />
          <input type="text" name="lastName" value={state.lastName} onChange={handleChange} placeholder="Last Name" />
          <div className="error">{state.error.firstName || state.error.lastName}</div>
        </label>
        <label>
          <span>Job Title</span>
          <input type="text" name="job" value={state.job} onChange={handleChange} />
        </label>
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
        <label>
          <span>Password Confirmation</span>
          <input type="password" name="passwordConfirmation" value={state.passwordConfirmation} onChange={handleChange} />
          <div className="error">{state.error.passwordConfirmation}</div>
        </label>
        <button type="submit">Submit</button>
        <div className="login">
          Have an account? <a href="/login">Sign in</a>
        </div>
      </form>
    </section>
  );
};

Register.propTypes = {
  className: PropTypes.string.isRequired,
}

export default styled(Register)`
  min-height: 100vh;
  background: #f4f4f7;
  border-bottom: 1px solid transparent;

  form {
    max-width: 500px;
    background: #fff;
    border-radius: 5px;
    margin: 40px auto 20px;

    h3 {
      padding: 20px;
      color: #0b1857;
      font-size: 2em;
      font-weight: 300;
      text-align: center;
      margin-bottom: 10px;

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
        margin-bottom: 3px;
      }

      input {
        width: 100%;
        border: none;
        padding: 3px 5px;
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

      &.fullName {
        display: flex;
        flex-wrap: wrap;

        span, .error {
          width: 100%;
        }

        input {
          flex: 1;
          &:last-of-type {
            margin-left: 10px;
          }

          ::placeholder {
            color: #555;
          }
        }
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
    }

    @media (max-width: 510px) {
      max-width: 95%;
    }
  }

  .login {
    padding: 10px 20px;
    text-align: center;
    background: #fafafb;
    border-radius: 0 0 5px 5px;

    a {
      color: #1330c0;
    }
  }
`;
