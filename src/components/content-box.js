/**@jsx jsx */
import {jsx, css} from '@emotion/core';
import * as mq from '../styles/media-queries';

function RightBox({children}) {
  return (
    <div
      className="row col-xl-5"
      css={css`
        display: none;
        ${mq.large} {
          flex-direction: column;
          align-items: center;
          justify-content: center;
          display: flex;
        }
      `}
    >
      {children}
    </div>
  );
}

function LeftBox({children}) {
  return (
    <div className="col-xl-7 col-12 h-100">
      <div
        className="col-xl-12"
        css={css`
          margin: 0 auto;
          overflow-y: scroll;
          height: 100%;
          &::-webkit-scrollbar {
            width: 0.8em;
            background-color: #f6efed;
          }
          &::-webkit-scrollbar-thumb {
            border-radius: 10px;
            box-shadow: inset 0 0 6px rgba(0, 0, 0, 0.3);
            background-color: #ef3f29;
          }
          &::-webkit-scrollbar-track {
            box-shadow: inset 0 0 6px rgba(0, 0, 0, 0.3);
            border-radius: 10px;
            background-color: #f6efed;
          }
        `}
      >
        {children}
      </div>
    </div>
  );
}

export {RightBox, LeftBox};
