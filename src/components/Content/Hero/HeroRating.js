import React from 'react';

const HeroRating = ({ rating }) => {
  return (
    <div className='hero__rating'>
      <span className='icon-star'></span>
      <span>{rating}</span>
    </div>
  );
};

export default HeroRating;
