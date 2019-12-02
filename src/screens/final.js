import React from 'react';

function Final() {
  return (
    <div className="col-12">
      <div className="d-flex flex-column align-items-center justify-content-center h-100">
        <img src="images/trophy.png" alt="trophy" className="fluid" />
        <h2
          style={{
            fontFamily: "'Lobster', cursive",
            fontSize: '4rem',
            padding: '20px 0px',
            color: '#da8d70',
          }}
        >
          Congratulations!!
        </h2>
        <p
          style={{
            fontFamily: "'Oxygen', sans-serif",
            fontSize: '1.5rem',
            color: '#581a27',
          }}
        >
          You've completed your employment process.
        </p>
        <p
          style={{
            fontFamily: "'Oxygen', sans-serif",
            fontSize: '1.5rem',
            color: '#581a27',
            textAlign: 'center',
          }}
        >
          Please contact to your manager with your full report for any futher
          instructions.
        </p>
      </div>
    </div>
  );
}
export default Final;
