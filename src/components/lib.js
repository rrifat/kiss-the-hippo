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
        frameborder="0"
        allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
        allowfullscreen
      />
    </div>
  );
}
