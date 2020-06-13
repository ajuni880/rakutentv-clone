import React from 'react';
import classNames from 'classnames';

const PurchaseButton = ({ label, price, points, onClick, className }) => {
  return (
  <button className={classNames('btn', 'btn__purchase', className)} onClick={onClick}>
    <div className="btn__purchase-inner">
      <div className="btn__purchase-label">{label}</div>
      <div className="btn__purchase-pricing">
        <span>desde {price}</span>
        <small>o {points} P</small>
      </div>
    </div>
  </button>
)};


export default PurchaseButton;