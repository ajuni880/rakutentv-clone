import React from 'react';
import { useParams } from 'react-router-dom';
import { Helmet } from 'react-helmet';
import useFetchContentDetail from 'hooks/useFetchContentDetail';
import Hero from 'components/Content/Hero';
import About from 'components/Content/About';
import { Provider } from 'context';
import withHeader from 'components/withHeader';
import { Loading } from 'shared/components';

const ContentDetail = () => {
  const { type, id } = useParams();
  const { content } = useFetchContentDetail(id);

  return content ? (
    <Provider value={content}>
      <Helmet>
        <title>{`${content.title} - Rakuten`}</title>
        <meta name="description" content={content.short_plot} />
      </Helmet>
      <div className='content'>
        <Hero />
        <About />
      </div>
    </Provider>
  ) : <Loading />
};

export default withHeader(ContentDetail);
