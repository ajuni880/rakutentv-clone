import { useState, useEffect } from 'react';
import { fetchContent  } from 'api';

export default (id) => {
  const [content, setContent] = useState();

  useEffect(() => {
    fetchContent(id)
      .then((res) => setContent(res.data))
      .catch(e => console.error('[fetchContent]', e));
  }, []);

  return { content };
}
