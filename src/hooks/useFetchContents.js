import { useState, useEffect } from 'react';
import { fetchContents  } from 'api';

export default (id) => {
  const [data, setContents] = useState();

  useEffect(() => {
    fetchContents(id)
      .then((res) => setContents(res.data))
      .catch(e => console.error('[fetchContents]', e));
  }, []);

  return { data };
}
