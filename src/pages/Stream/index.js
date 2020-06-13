import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import GoBackToDetail from 'components/VideoPlayer/GoBackToDetail';
import VideoPlayer from 'components/VideoPlayer';
import usePlayTrailer from 'hooks/usePlayTrailer';

const Stream = () => {
  const { type, id } = useParams();
  // const [trailer, setTrailer] = useState();
  const { data } = usePlayTrailer({ type, id });

  return (
    <div className='videoplayer'>
      <GoBackToDetail />
      <div className='videoplayer__inner'>
        { data ? <VideoPlayer src={data.stream_infos[0].url}/> : 'Loading...'}
      </div>
    </div>
  );
};

export default Stream;
