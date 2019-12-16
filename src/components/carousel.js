import React from 'react';
import {CarouselLeftArrow, CarouselRightArrow, CarouselIndicator} from './lib';

function CarouselSlide({index, activeIndex, slide, name}) {
  return (
    <li
      className={
        index === activeIndex
          ? 'carousel__slide carousel__slide--active'
          : 'carousel__slide'
      }
    >
      <p className="carousel-slide__content">{slide.question}</p>

      {slide.options.map((option, key) => (
        <div className="form-check" key={key}>
          <input
            className="form-check-input"
            type="radio"
            name={name}
            value={option}
          />
          <label className="form-check-label">{option}</label>
        </div>
      ))}
    </li>
  );
}

// Carousel wrapper component
function Carousel({slides}) {
  const [activeIndex, setActiveIndex] = React.useState(0);

  function goToSlide(index) {
    setActiveIndex(index);
  }

  function goToPrevSlide(e) {
    e.preventDefault();
    let index = activeIndex;
    const slidesLength = slides.length;
    if (index < 1) {
      index = slidesLength;
    }
    --index;
    setActiveIndex(index);
  }

  function goToNextSlide(e) {
    e.preventDefault();
    let index = activeIndex;
    const slidesLength = slides.length - 1;
    if (index === slidesLength) {
      index = -1;
    }
    ++index;
    setActiveIndex(index);
  }

  return (
    <div className="carousel">
      <ul className="carousel__slides">
        {slides.map((slide, index) => (
          <CarouselSlide
            key={slide.name}
            index={index}
            activeIndex={activeIndex}
            slide={slide}
            name={slide.name}
          />
        ))}
      </ul>
      <CarouselLeftArrow onClick={goToPrevSlide} />
      <CarouselRightArrow onClick={goToNextSlide} />
      <ul className="carousel__indicators">
        {slides.map((slide, index) => (
          <CarouselIndicator
            key={index}
            index={index}
            activeIndex={activeIndex}
            isActive={activeIndex === index}
            handleSlide={goToSlide}
          />
        ))}
      </ul>
    </div>
  );
}

export default Carousel;
