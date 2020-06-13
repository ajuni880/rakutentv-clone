import { useState, useEffect } from 'react';

const useScrollableSlider = (elemRef) => {
  const [currentScroll, setCurrentScroll] = useState(0);
  const [totalScroll, setTotalScroll] = useState(0);

  const getViewport = () => window.innerWidth;
  const getScrollSize = () => elemRef.current.firstChild.offsetWidth * elemRef.current.children.length;
  let viewport = getViewport();

  useEffect(() => {
    const scrollSize = getScrollSize();
    setTotalScroll(scrollSize / viewport);
  }, []);

  const canScrollNext = totalScroll - Math.abs(currentScroll) >= 0.5;
  const canScrollPrev = currentScroll !== 0;

  return {
    currentScroll,
    setCurrentScroll,
    canScrollNext,
    canScrollPrev
  }
}

export default useScrollableSlider;