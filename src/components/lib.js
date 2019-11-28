/**@jsx jsx */
import {jsx, css} from '@emotion/core';
import styled from '@emotion/styled';

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
