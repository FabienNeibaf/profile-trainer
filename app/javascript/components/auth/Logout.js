import React from 'react';
import { Redirect } from '@reach/router';

const Logout = () => {
  return (
    <Redirect to="/login" noThrow />
  )
};

export default Logout;
