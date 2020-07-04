import React from 'react';
import PropTypes from 'prop-types';
import { Link } from '@reach/router';
import styled from 'styled-components';

const Header = ({ className }) => (
  <header className={className}>
    <h1><Link to="/">Kinga</Link></h1>
    <nav>
      <ul>
        <li>
          <Link to="/register-client">Join as a Client</Link>
        </li>
        <li>
          <Link to="/register-pro">Join as a Pro</Link>
        </li>
      </ul>
    </nav>
  </header>
);

Header.propTypes = {
  className: PropTypes.string.isRequired,
}

export default styled(Header)`
  color: #fff;
  padding: 7px;
  display: flex;
  background: #1330c0;
  align-items: center;

  h1 {
    flex: none;
    font-size: 2em;
    padding: 0 10px;
    font-weight: 300;

    @media (max-width: 500px) {
      font-size: 1.5em;
    }
  }

  nav {
    flex: auto;

    ul {
      display: flex;
      padding-right: 5%;
      justify-content: flex-end;

      li {
        margin: 0 1em;

        a {
          display: block;
          font-weight: 400;
          padding: 5px 15px;
          border-radius: 2px;
          background: #2b36d9;
          border: 1px solid transparent;

          &:hover {
            border-color: #6d85ff;
          }
        }
      }

      @media (max-width: 310px) {
        padding-right: 0;

        li {
          margin: 0 5px;
        }
      }
    }
  }
`;
