import React from 'react';

function BeanBackground({children}) {
  return (
    <div className="container-fluid h-100">
      <div className="row h-100 justify-content-center align-items-center no-gutters">
        <div className="content-box col-10">
          <div className="row h-100 justify-content-center">{children}</div>
        </div>
      </div>
    </div>
  );
}
export default BeanBackground;
