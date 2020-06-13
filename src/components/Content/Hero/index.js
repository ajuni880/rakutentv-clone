import React from 'react';
import { useHistory } from 'react-router-dom';
import { useContentDetailCtx } from 'context';
import { HeroActionsContainer, PlayButton, AddToFavourite } from './HeroActions';
import HeroRating from './HeroRating';
import HeroDetail from './HeroDetail';
import HeroTitle from './HeroTitle';
import PurchaseDropdown from './PurchaseDropdown';
import CouponForm from '../CuponForm.js';

const Hero = () => {
  const content = useContentDetailCtx();
  const history = useHistory();

  const playTrailer = () => {
    history.push(`/streams/${content.type}/${content.id}`);
  }

  return (
    <div className='hero'>
      <div className='hero__inner'>
        <div className='hero__bg' style={{backgroundImage: `url(${content.images.snapshot})`}}></div>
        <div className='hero__content'>
          <HeroActionsContainer>
            <PlayButton label='tráiler' onClick={playTrailer} />
            <AddToFavourite label='añadir a quiero ver' onClick={() => {}} />
          </HeroActionsContainer>
          <HeroDetail>
            <HeroRating rating={content.rating.average}/>
            <HeroTitle title={content.title} />
            <div className="hero__detail-actions">
              <PurchaseDropdown />
              <CouponForm />
            </div>
          </HeroDetail>
        </div>
      </div>
    </div>
  );
};

export default Hero;
