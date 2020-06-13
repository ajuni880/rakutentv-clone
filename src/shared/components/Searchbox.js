import React from 'react';
import PropTypes from 'prop-types';

const propTypes = {
  className: PropTypes.string,
  value: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  placeholder: PropTypes.string,
  onChange: PropTypes.func,
};

const defaultProps = {
  className: undefined,
  value: undefined,
  placeholder: 'Buscar',
  onChange: () => {},
};

const Searchbox = () => {
  const handleChange = (e) => {
    onChange(e.target.value, event);
  };

  return (
    <div className='searchbox'>
      <span className='searchbox__icon fas fa-search'></span>
      <input
        onChange={handleChange}
        className='searchbox__input'
        type='text'
        placeholder='Buscar'
      />
    </div>
  );
};

Searchbox.propTypes = propTypes;
Searchbox.defaultProps = defaultProps;

export default Searchbox;
