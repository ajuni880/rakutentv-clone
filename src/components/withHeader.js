import React from 'react';
import Header from 'components/Header';

const withHeader = (Comp) => (props) => (
  <>
    <Header />
    <main>
      <Comp {...props} />
    </main>
  </>
);

export default withHeader;