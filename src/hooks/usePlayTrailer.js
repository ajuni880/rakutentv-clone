import { useState, useEffect } from 'react';
import { playTrailer  } from 'api';

export default (body) => {
  const [data, setData] = useState();

  useEffect(() => {
    playTrailer(body)
      .then((res) => setData(res.data))
      .catch(e => console.error('[playTrailer]', e));
  }, []);

  return { data };
}