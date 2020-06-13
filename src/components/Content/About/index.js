import React from 'react';
import { useContentDetailCtx } from 'context';

const CardIcon = ({ icon, children }) => (
  <div className='card__icon'>
    <span className={icon}></span>
    <span className='card__icon-text'>{children}</span>
  </div>
);

const CardHeader = ({ content }) => (
  <div className='card__header'>
    <CardIcon
      icon='fas fa-user-friends'
>{content.classification.name}</CardIcon>
    <CardIcon icon='fas fa-clock'>{content.duration} minutos</CardIcon>
    <CardIcon icon='far fa-calendar-minus'>{content.year}</CardIcon>
    <CardIcon icon='fas fa-flag'>
      {
        content.countries.map(c => c.name).join(', ')
      }
    </CardIcon>
    <CardIcon icon='fas fa-info-circle'>Título original: {content.original_title}</CardIcon>
  </div>
);

const About = () => {
  const content = useContentDetailCtx();

  return (
    <div className='content__about'>
      <div className='content__about-inner'>
        <div className='card'>
          <CardHeader content={content} />
          <div className='card__body'>
            <p>{content.plot}</p>
          </div>
        </div>
        <div className='content__about-social-media'></div>
      </div>
    </div>
  );
};

export default About;
