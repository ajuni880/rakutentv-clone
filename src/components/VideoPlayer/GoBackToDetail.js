import React from 'react';
import { useHistory } from 'react-router-dom';

const GoBackToDetail = () => {
  const history = useHistory();

  return (
  <div className='go-back' onClick={() => history.goBack()}>
    <span className="fas fa-arrow-left go-back__icon"></span>
    <span className="go-back__label">Página de detalles</span>
  </div>
)};

export default React.memo(GoBackToDetail);