import React, {Component} from 'react';
import {LeftBox, RightBox} from '../components/content-box';
import {CenteredButton} from '../components/lib';
import Question from '../components/question';
const carouselSlidesData = [
  {
    question:
      'Lorem ipsum dolor sit amet, ex eam putent commodo, sit eu erroribus ullamcorper consequuntur, mei ex nulla iisque?',
    options: [
      'Cum impetus deserunt philosophia ea',
      'Cum impetus deserunt philosophia ea',
      'Cum impetus deserunt philosophia ea',
      'Cum impetus deserunt philosophia ea',
    ],
  },
  {
    question:
      'Percipit similique ad vim, omnium deleniti eu vis. Mei hendrerit definiebas ne?',
    options: [
      'Cum impetus deserunt philosophia ea',
      'Cum impetus deserunt philosophia ea',
      'Cum impetus deserunt philosophia ea',
      'Cum impetus deserunt philosophia ea',
    ],
  },
  {
    question:
      'Lorem ipsum dolor sit amet, ex eam putent commodo, sit eu erroribus ullamcorper consequuntur, mei ex nulla iisque?',
    options: [
      'Cum impetus deserunt philosophia ea',
      'Cum impetus deserunt philosophia ea',
      'Cum impetus deserunt philosophia ea',
      'Cum impetus deserunt philosophia ea',
    ],
  },
];
function CarouselQuestion() {
  return (
    <>
      <LeftBox>
        <h3 className="text-center my-3">
          PRE- EMPLOYMENT HEALTH QUESTIONNAIRES
        </h3>
        <form>
          <div className="form-group">
            <label htmlFor="historyOfIllness">
              History of illness (Last 12months):
            </label>
            <textarea
              className="form-control"
              id="historyOfIllness"
              rows="3"
            ></textarea>
          </div>
          <div className="form-group">
            <label htmlFor="questionsTitle">
              Do you, or have you ever suffered from any of the following:
            </label>
            <small id="emailHelp" className="form-text text-muted">
              (For questions 1 to 12 inclusively, indicate if you have you ever
              suffered from any of the following conditions by underlining the
              appropriate condition and providing details in the comments box on
              the back page).
            </small>
          </div>
          <div className="form-group">
            <Question>
              Tuberculosis, pleurisy, asthma, bronchitis, or any other lung,
              throat or ear complaint, including deafness.
            </Question>
          </div>
          <div className="form-group">
            <Question>
              Tuberculosis, pleurisy, asthma, bronchitis, or any other lung,
              throat or ear complaint, including deafness.
            </Question>
          </div>
          <div className="form-group">
            <Question>
              Tuberculosis, pleurisy, asthma, bronchitis, or any other lung,
              throat or ear complaint, including deafness.
            </Question>
          </div>
          <div className="form-group">
            <Question>
              Tuberculosis, pleurisy, asthma, bronchitis, or any other lung,
              throat or ear complaint, including deafness.
            </Question>
          </div>
          <div className="form-group">
            <Question>
              Tuberculosis, pleurisy, asthma, bronchitis, or any other lung,
              throat or ear complaint, including deafness.
            </Question>
          </div>
          <div className="form-group">
            <Question>
              Tuberculosis, pleurisy, asthma, bronchitis, or any other lung,
              throat or ear complaint, including deafness.
            </Question>
          </div>
          <div className="form-group">
            <Question>
              Tuberculosis, pleurisy, asthma, bronchitis, or any other lung,
              throat or ear complaint, including deafness.
            </Question>
          </div>
          <div className="form-group">
            <Question>
              Tuberculosis, pleurisy, asthma, bronchitis, or any other lung,
              throat or ear complaint, including deafness.
            </Question>
          </div>
          <div className="form-group">
            <Question>
              Tuberculosis, pleurisy, asthma, bronchitis, or any other lung,
              throat or ear complaint, including deafness.
            </Question>
          </div>
          <div className="form-group">
            <Question>
              Tuberculosis, pleurisy, asthma, bronchitis, or any other lung,
              throat or ear complaint, including deafness.
            </Question>
          </div>
          <div className="form-group">
            <Question>
              Tuberculosis, pleurisy, asthma, bronchitis, or any other lung,
              throat or ear complaint, including deafness.
            </Question>
          </div>
          <CenteredButton type="submit" value="Continue" />
        </form>
      </LeftBox>
      <RightBox>
        <div>
          <Carousel slides={carouselSlidesData} />
        </div>
      </RightBox>
    </>
  );
}
export default CarouselQuestion;

class CarouselLeftArrow extends Component {
  render() {
    return (
      <a
        href="#"
        className="carousel__arrow carousel__arrow--left"
        onClick={this.props.onClick}
      >
        <span className="fa fa-2x fa-angle-left" />
      </a>
    );
  }
}

class CarouselRightArrow extends Component {
  render() {
    return (
      <a
        href="#"
        className="carousel__arrow carousel__arrow--right"
        onClick={this.props.onClick}
      >
        <span className="fa fa-2x fa-angle-right" />
      </a>
    );
  }
}

class CarouselIndicator extends Component {
  render() {
    return (
      <li>
        <a
          className={
            this.props.index == this.props.activeIndex
              ? 'carousel__indicator carousel__indicator--active'
              : 'carousel__indicator'
          }
          onClick={this.props.onClick}
        />
      </li>
    );
  }
}

class CarouselSlide extends Component {
  render() {
    return (
      <li
        className={
          this.props.index == this.props.activeIndex
            ? 'carousel__slide carousel__slide--active'
            : 'carousel__slide'
        }
      >
        <p className="carousel-slide__content">{this.props.slide.question}</p>

        <p>
          {this.props.slide.options.map(option => (
            <strong className="carousel-slide__author">
              {option}
              <br />
            </strong>
          ))}

          {/* <small className="carousel-slide__source">
            {this.props.slide.source}
          </small> */}
        </p>
      </li>
    );
  }
}

// Carousel wrapper component
class Carousel extends Component {
  constructor(props) {
    super(props);

    this.goToSlide = this.goToSlide.bind(this);
    this.goToPrevSlide = this.goToPrevSlide.bind(this);
    this.goToNextSlide = this.goToNextSlide.bind(this);

    this.state = {
      activeIndex: 0,
    };
  }

  goToSlide(index) {
    this.setState({
      activeIndex: index,
    });
  }

  goToPrevSlide(e) {
    e.preventDefault();

    let index = this.state.activeIndex;
    let {slides} = this.props;
    let slidesLength = slides.length;

    if (index < 1) {
      index = slidesLength;
    }

    --index;

    this.setState({
      activeIndex: index,
    });
  }

  goToNextSlide(e) {
    e.preventDefault();

    let index = this.state.activeIndex;
    let {slides} = this.props;
    let slidesLength = slides.length - 1;

    if (index === slidesLength) {
      index = -1;
    }

    ++index;

    this.setState({
      activeIndex: index,
    });
  }

  render() {
    return (
      <div className="carousel">
        <CarouselLeftArrow onClick={e => this.goToPrevSlide(e)} />

        <ul className="carousel__slides">
          {this.props.slides.map((slide, index) => (
            <CarouselSlide
              key={index}
              index={index}
              activeIndex={this.state.activeIndex}
              slide={slide}
            />
          ))}
        </ul>

        <CarouselRightArrow onClick={e => this.goToNextSlide(e)} />

        <ul className="carousel__indicators">
          {this.props.slides.map((slide, index) => (
            <CarouselIndicator
              key={index}
              index={index}
              activeIndex={this.state.activeIndex}
              isActive={this.state.activeIndex == index}
              onClick={e => this.goToSlide(index)}
            />
          ))}
        </ul>
      </div>
    );
  }
}
