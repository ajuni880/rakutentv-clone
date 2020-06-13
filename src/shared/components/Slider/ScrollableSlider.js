import React, { useRef } from "react";
import PropTypes from "prop-types";
import useScrollableSlider from "./useScrollableSlider";

const propTypes = {
  children: PropTypes.arrayOf(PropTypes.element).isRequired,
  onNext: PropTypes.func,
  onPrev: PropTypes.func,
};

const PreviousButton = ({ canScrollPrev, handlePrev }) =>
  canScrollPrev && (
    <div
      className="slider__arrow slider__arrow--prev"
      onClick={handlePrev}
    ></div>
  );

const NextButton = ({ canScrollNext, handleNext }) =>
  canScrollNext && (
    <div
      className="slider__arrow slider__arrow--next"
      onClick={handleNext}
    ></div>
  );

const ScrollableSlider = ({ children, onNext, onPrev }) => {
  const scrollableRef = useRef();
  const {
    currentScroll,
    setCurrentScroll,
    canScrollNext,
    canScrollPrev,
  } = useScrollableSlider(scrollableRef);

  const handleNext = () => {
    setCurrentScroll(currentScroll - 1);
    onNext && onNext();
  };

  const handlePrev = () => {
    setCurrentScroll(currentScroll + 1);
    onPrev && onPrev();
  };

  return (
    <div className="slider">
      <div className="slider__inner">
        <div
          className="slider__scrollable"
          ref={scrollableRef}
          style={{ transform: `translate3d(${currentScroll * 90}%, 0, 0)` }}
        >
          {children}
        </div>
        <PreviousButton canScrollPrev={canScrollPrev} handlePrev={handlePrev} />
        <NextButton canScrollNext={canScrollNext} handleNext={handleNext} />
      </div>
    </div>
  );
};

ScrollableSlider.propTypes = propTypes;

export default ScrollableSlider;
