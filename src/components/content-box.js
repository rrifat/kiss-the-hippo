import React from 'react';

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
    <div className="col-md-7 h-100" style={{overflowY: 'scroll'}}>
      <div className="col-md-12" style={{margin: '0 auto'}}>
        {children}
      </div>
    </div>
  );
}

export {RightBox, LeftBox};
