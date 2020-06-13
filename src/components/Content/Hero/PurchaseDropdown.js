import React, { useState } from 'react';
import PurchaseButton from './PurchaseButton';
import classNames from 'classnames';
import { useContentDetailCtx } from 'context';

const PurchaseDropdown = () => {
  const [isOpen, setOpen] = useState(false);
  const content = useContentDetailCtx();

  return (
    <div className='content__purchase'>
      <div className='content__purchar-trigger'>
        <PurchaseButton
          label={'ver ahora'}
          price={3.99}
          points={399}
          className='btn--secondary'
          onClick={() => setOpen(!isOpen)}
        />
      </div>

      {isOpen && (
        <div className={classNames('content__purchase-options', isOpen && 'is-open')}>
          <PurchaseButton
          label={'alquilar'} price={3.99} points={399} className='btn--white'/>
          <PurchaseButton label={'comprar'} price={3.99} points={399} className='btn--white' />
        </div>
      )}
    </div>
  );
};

export default PurchaseDropdown;
