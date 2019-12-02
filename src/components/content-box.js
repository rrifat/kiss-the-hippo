/**@jsx jsx */
import {jsx, css} from '@emotion/core';
// import React from 'react';

function RightBox({children}) {
  return (
    <div
      className="row col-lg-5"
      style={{
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
      }}
    >
      {children}
    </div>
  );
}

function LeftBox({children}) {
  return (
    <div
      className="col-md-7 h-100"
      css={css`
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
      `}
    >
      <div className="col-md-12" style={{margin: '0 auto'}}>
        {children}
      </div>
    </div>
  );
}

export {RightBox, LeftBox};
