import React from 'react';

function Final() {
  return (
    <div className="col-12">
      <div className="d-flex flex-column align-items-center justify-content-center h-100">
        <img
          src={`${process.env.PUBLIC_URL}/images/kiss-hippo-logo.png`}
          alt="trophy"
          className="fluid"
        />
        <h2
          style={{
            fontFamily: "'Lobster', cursive",
            fontSize: '4rem',
            padding: '20px 0px',
            color: 'black',
          }}
        >
          Congratulations!!
        </h2>
        <p
          style={{
            fontFamily: "'Oxygen', sans-serif",
            fontSize: '1.3rem',
            color: '#581a27',
          }}
        >
          You have successfully completed followings:
        </p>
        <ul
          style={{
            fontFamily: "'Oxygen', sans-serif",
            fontSize: '1.2rem',
            color: '#581a27',
            textAlign: 'center',
          }}
        >
          <li>Employment Questionnaires</li>
          <li>Health and Safety Level 1</li>
          <li>Food Safety Level 1</li>
        </ul>
      </div>
    </div>
  );
}
export default Final;
