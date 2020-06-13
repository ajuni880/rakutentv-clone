import React from 'react';
import withHeader from 'components/withHeader';

const NotFound = () => (
  <div className="not-found">
    <h1 className="text-secondary">404 Resource Not found</h1>
  </div>
);

export default withHeader(NotFound);