import React, { useMemo } from 'react';
import { formatSecondsToReadableTime } from 'lib/utils';
import PropTypes from 'prop-types';

const ProgressBar = ({ currentTime, duration, onClick }) => {
  const width = isNaN(currentTime/duration) ? 0 : (currentTime/duration) * 100;
  const durationValue = useMemo(() => formatSecondsToReadableTime(duration) , [duration]);

  return (
  <div className='progressbar'>
    <div className='progressbar__current-time'>{formatSecondsToReadableTime(currentTime)}</div>
    <div className='progressbar__bar' onClick={(e) => {
      e.persist();
      onClick && onClick(e.nativeEvent.offsetX / e.target.offsetWidth);
    }}>
      <div
        className="progressbar__bar-current"
        style={{width: `${width}%`}}
      ></div>
    </div>
    <div className='progressbar__duration'>{durationValue}</div>
  </div>
)};

ProgressBar.proppTypes = {
  currentTime: PropTypes.number.isRequired,
  duration: PropTypes.number.isRequired,
  onClick: PropTypes.func
}

export default React.memo(ProgressBar);