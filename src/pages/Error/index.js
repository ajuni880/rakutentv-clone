import React from 'react';
import withHeader from 'components/withHeader';

const ErrorPage = () => (
  <div className="error-page">
    <h1 className="text-secondary">Algo salió mal :(</h1>
  </div>
)

export default withHeader(ErrorPage);