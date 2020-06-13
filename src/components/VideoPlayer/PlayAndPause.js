import React from 'react';
import PropTypes from 'prop-types';

const PlayAndPause = ({ playing, onPlay, onPause }) => (
  <div className='videoplayer__actions-play-pause'>
    { !playing && <span className='fas fa-play icon' onClick={onPlay}></span> }
    { playing && <span className='fas fa-pause' onClick={onPause}></span> }
  </div>
);

PlayAndPause.propTypes = {
  playing: PropTypes.bool.isRequired,
  onPlay: PropTypes.func.isRequired,
  onPause: PropTypes.func.isRequired,
}

export default PlayAndPause;