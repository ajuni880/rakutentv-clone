import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

export const HeroActionsContainer = ({ children, className }) => (
  <div className={classNames('hero__actions', className)}>{children}</div>
);

HeroActionsContainer.propTypes = {
  children: PropTypes.node.isRequired,
  className: PropTypes.string
}


export const AddToFavourite = ({ label, onClick }) => (
  <button className='btn btn__pin btn--center' onClick={onClick}>
    <span className='btn--rounded btn__pin-icon'></span>
    <span className='btn__label'>{label}</span>
  </button>
);

AddToFavourite.propTypes = {
  label: PropTypes.string,
  onClick: PropTypes.func
}

export const PlayButton = ({ label, onClick }) => (
  <button className='btn btn__play btn--center' onClick={onClick}>
    <span className='btn--rounded btn__play-icon'></span>
    <span className='btn__label'>{label}</span>
  </button>
);

PlayButton.propTypes = {
  label: PropTypes.string,
  onClick: PropTypes.func
}
