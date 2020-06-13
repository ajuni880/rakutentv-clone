import React, { useState, useRef, useEffect } from 'react';

const useVideoPlayer = () => {
  const videoRef = useRef();
  const [play, setPlay] = useState(false);
  const [volume, setVolume] = useState(5);
  const [duration, setDuration] = useState(0);
  const [currentTime, setCurrentTime] = useState(0);
  const [canPlay, setCanPlay] = useState(false);

  const toggleVideoState = () => {
    setPlay(!play);
  }

  useEffect(() => {
    function handleProgress() {
      setCurrentTime(videoRef.current.currentTime);
    }
    videoRef.current.addEventListener('timeupdate', handleProgress);
    return () => videoRef.current.removeEventListener('timeupdate', handleProgress);
  }, []);

  const onCanPlay = () => {
    setDuration(videoRef.current.duration);
    setCanPlay(true);
    setPlay(true);
  }

  useEffect(() => {
    videoRef.current.volume = volume / 10;
  }, [volume]);

  useEffect(() => {
    if (!canPlay) return;
    play ? videoRef.current.play() : videoRef.current.pause();
  }, [play]);

  return {
    videoRef,
    onCanPlay,
    toggleVideoState,
    setVolume,
    volume,
    duration,
    setDuration,
    currentTime,
    setCurrentTime,
    play,
    canPlay
  };
}

export default useVideoPlayer;