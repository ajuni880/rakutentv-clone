import React, { useState } from 'react';
import classNames from 'classnames';

const CouponForm = ({ onChange, disabled = true }) => {
  const [isVisible, setVisible] = useState(false);


  const handleChange = (e) => {
    onChange && onChange(e.target.value);
  }

  return (
    <div className={classNames('coupon-form', isVisible ? 'is-visible' : null)}>
      {!isVisible && (
        <button
          className='btn text-secondary full-height full-width'
          onClick={() => setVisible(true)}
        >
          canejar cupon
        </button>
      )}
      {isVisible && (
        <form className='coupon-form__form full-width full-height'>
          <input type='text' placeholder='Escribir código...' onChange={handleChange}/>
          <button
            className='btn btn--secondary no-border'
            disabled={disabled}
          >confirmar</button>
        </form>
      )}
    </div>
  );
};

export default CouponForm;
