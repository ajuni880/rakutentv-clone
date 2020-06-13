import React from 'react';
import { Helmet } from 'react-helmet';
import ContentsSection from 'components/ContentsSection';
import { contentsSections } from 'api/config';
import LazyRender from 'components/LazyRender';
import withHeader from 'components/withHeader';

const metaDescription = 'Rakuten TV, tu cine en casa. Disfruta de los últimos estrenos en tu SMART TV y muchos otros dispositivos en tan sólo unos clics. Los mejores blockbusters, clásicos premiados y series al instante. Sin contratos ni compromisos. Pruébalo ahora y gana Rakuten Súper Puntos con cada compra que realices.';
const metaTitle = 'Rakuten TV - Tu cine en casa';

const Home = () => (
  <div className="home">
    <Helmet>
        <title>{metaTitle}</title>
        <meta name="description" content={metaDescription} />
    </Helmet>
    {
      contentsSections.map((section) =>
        <LazyRender key={section}>
          <ContentsSection section={section}/>
        </LazyRender>
      )
    }
  </div>
)

export default withHeader(Home);