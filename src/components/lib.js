/**@jsx jsx */
import {jsx, css} from '@emotion/core';
import styled from '@emotion/styled';
import * as mq from '../styles/media-queries';

const buttonSizeVariants = {
  medium: {
    width: '16.75rem',
  },
};
export const GradientButton = styled.button`
  ${({size = 'medium'}) => buttonSizeVariants[size]};
  height: 46px;
  border: none;
  border-radius: 23px;
  padding: 8px 0px;
  box-shadow: 0 3px 6px 0 rgba(0, 0, 0, 0.16);
  background-image: linear-gradient(
    to bottom,
    #ffffff,
    #e7e7e7 48%,
    #d9d9d9 54%
  );
  font-family: PerpetuaTitlingMT;
  font-size: 23px;
  font-weight: bold;
  text-transform: uppercase;
  color: #6a5050;
  &:focus {
    outline: 0;
  }
`;

export function CenteredButton({value, ...props}) {
  return (
    <div
      css={css`
        display: flex;
        justify-content: center;
        margin: 15px 0px;
      `}
    >
      <GradientButton {...props}>{value}</GradientButton>
    </div>
  );
}

export function IFrame({src, title}) {
  return (
    <div
      css={css`
        position: relative;
        padding-top: 25px;
        padding-bottom: 56.25%;
        height: 0px;
      `}
    >
      <iframe
        css={css`
          position: absolute;
          width: 100%;
          height: 100%;
          left: 0;
          right: 0;
          top: 25%;
          bottom: 0;
          /* ${mq.small} {
            top: '80%';
          }
          ${mq.medium} {
            top: '50%';
          } */
        `}
        title={title}
        src={src}
        frameBorder="0"
        allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
      />
    </div>
  );
}

const CarouselArrowButton = styled.button`
  position: absolute;
  top: 50%;
  display: block;
  color: #111;
  opacity: 0.75;
  transform: translateY(-50%);
  transition: opacity 0.15s cubic-bezier(0.4, 0, 1, 1);
  background: transparent;
  border: none;
  &:focus {
    outline: 0;
  }
  &:hover {
    opacity: 0.5;
  }
`;

export function CarouselLeftArrow({onClick}) {
  return (
    <CarouselArrowButton
      css={css`
        left: 32px;
      `}
      onClick={onClick}
    >
      <span className="fa fa-2x fa-angle-left" />
    </CarouselArrowButton>
  );
}

export function CarouselRightArrow({onClick}) {
  return (
    <CarouselArrowButton
      css={css`
        right: 32px;
      `}
      onClick={onClick}
    >
      <span className="fa fa-2x fa-angle-right" />
    </CarouselArrowButton>
  );
}
// const CarouselIndicatorButton = styled.button`
//   display: block;
//   width: 24px;
//   height: 3px;
//   background-color: #111;
//   opacity: 0.15;
//   transition: opacity 0.15s cubic-bezier(0.4, 0, 1, 1);
//   &:hover {
//     opacity: 0.5;
//   }
//   .carousel__indicator--active,
//   .carousel__indicator--active:hover {
//     opacity: 0.75;
//   }
// `;
export function CarouselIndicator({index, activeIndex, handleSlide}) {
  return (
    <li>
      <span
        className={
          index === activeIndex
            ? 'carousel__indicator carousel__indicator--active'
            : 'carousel__indicator'
        }
        onClick={() => handleSlide(index)}
      />
    </li>
  );
}

export const DivWithScroll = styled.div`
  overflow-y: scroll;
  &::-webkit-scrollbar {
    width: 0.8em;
    background-color: #f6efed;
  }
  &::-webkit-scrollbar-thumb {
    border-radius: 10px;
    box-shadow: inset 0 0 6px rgba(0, 0, 0, 0.3);
    background-color: #551120;
  }
  &::-webkit-scrollbar-track {
    box-shadow: inset 0 0 6px rgba(0, 0, 0, 0.3);
    border-radius: 10px;
    background-color: #f6efed;
  }
`;
