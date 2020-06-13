import React, { useCallback } from 'react';
import { useHistory } from 'react-router-dom';
import PropTypes from 'prop-types';

import useVideoPlayer from 'hooks/useVideoPlayer';
import ProgressBar from './ProgressBar';
import VolumeControl from './VolumeControl';
import PlayAndPause from './PlayAndPause';

const VideoPlayer = ({ src }) => {
  const {
    videoRef,
    onCanPlay,
    toggleVideoState,
    setVolume,
    currentTime,
    setCurrentTime,
    duration,
    volume,
    play
  } = useVideoPlayer()

  const history = useHistory();

  const handleVolumeMemo = useCallback((value) => setVolume(value));
  const handleToggle = () => toggleVideoState();

  const onEnd = () => history.goBack();

  const handleProgressBar = (offsetX) => {
    videoRef.current.currentTime = offsetX * duration;
    setCurrentTime(offsetX * duration);
  }

  return (
    <div className='videoplayer__video'>
      <video
        className='videoplayer__video'
        src={src}
        ref={videoRef}
        onClick={handleToggle}
        onCanPlay={onCanPlay}
        onEnded={onEnd}
      ></video>
      <div className='videoplayer__actions'>
        <ProgressBar
          currentTime={currentTime} duration={duration}
          onClick={handleProgressBar}
        />
        <div className='videoplayer__actions-bottom'>
          <VolumeControl value={volume} onChange={handleVolumeMemo} />
          <PlayAndPause playing={play} onPlay={handleToggle} onPause={handleToggle}/>
          <div className='mix'>
            <span className='fas fa-compress icon'></span>
          </div>
        </div>
      </div>
    </div>
  );
};

VideoPlayer.propTypes = {
  src: PropTypes.string.isRequired
};

export default React.memo(VideoPlayer);



