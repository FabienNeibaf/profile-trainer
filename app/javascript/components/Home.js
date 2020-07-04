import React from 'react';

import AuthGuard from './auth/Guard';

const Home = () => {
  return (
    <section>
      <AuthGuard />
      Hello there
    </section>
  );
}

export default Home;
