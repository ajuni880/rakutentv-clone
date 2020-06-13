import React from 'react';
import useIsNearToViewport from 'hooks/useIsNearToViewport';

const LazyRender = ({ children }) => {
  const { isNear, elemRef } = useIsNearToViewport();
  return <div style={{height: `${isNear ? 'auto': '50vh'}`}} ref={elemRef}>{isNear ? children : null}</div>;
};

export default LazyRender;
