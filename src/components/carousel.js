import React from 'react';

function CarouselLeftArrow({onClick}) {
  return (
    <button className="carousel__arrow carousel__arrow--left" onClick={onClick}>
      <span className="fa fa-2x fa-angle-left" />
    </button>
  );
}

function CarouselRightArrow({onClick}) {
  return (
    <button
      className="carousel__arrow carousel__arrow--right"
      onClick={onClick}
    >
      <span className="fa fa-2x fa-angle-right" />
    </button>
  );
}

function CarouselIndicator({index, activeIndex, onClick}) {
  return (
    <li>
      <button
        className={
          index === activeIndex
            ? 'carousel__indicator carousel__indicator--active'
            : 'carousel__indicator'
        }
        onClick={onClick}
      />
    </li>
  );
}

function CarouselSlide({index, activeIndex, slide}) {
  return (
    <li
      className={
        index === activeIndex
          ? 'carousel__slide carousel__slide--active'
          : 'carousel__slide'
      }
    >
      <p className="carousel-slide__content">{slide.question}</p>
      <form>
        <ul>
          {slide.options.map((option, index) => (
            <li className="carousel-slide__author" key={index}>
              <input type="checkbox" className="form-check form-check-inline" />
              <label>{option}</label>
              <br />
            </li>
          ))}
        </ul>
      </form>
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
      <CarouselLeftArrow onClick={goToPrevSlide} />

      <ul className="carousel__slides">
        {slides.map((slide, index) => (
          <CarouselSlide
            key={index}
            index={index}
            activeIndex={activeIndex}
            slide={slide}
          />
        ))}
      </ul>

      <CarouselRightArrow onClick={goToNextSlide} />

      <ul className="carousel__indicators">
        {slides.map((slide, index) => (
          <CarouselIndicator
            key={index}
            index={index}
            activeIndex={activeIndex}
            isActive={activeIndex === index}
            onClick={() => goToSlide(index)}
          />
        ))}
      </ul>
    </div>
  );
}

export default Carousel;
