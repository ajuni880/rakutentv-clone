import React from 'react';
import PropTypes from 'prop-types';

const VolumeControl = ({ value, onChange }) => {
  return (
    <div className='volume'>
      <div className='volume__icon'>
        { value === 0 && <span className='fas fa-volume-off icon'></span>}
        { value > 0 && value <= 5 && <span className='fas fa-volume-down icon'></span> }
        { value >= 6 && <span className='fas fa-volume-up icon'></span> }
      </div>
      <input
        type='range'
        className='volume__range'
        min='0'
        step='1'
        max='10'
        value={value}
        onChange={(e) => onChange(e.target.value)}
      />
    </div>
  );
}

VolumeControl.propTypes = {
  value: PropTypes.number.isRequired,
  onChange: PropTypes.func
}

export default React.memo(VolumeControl);