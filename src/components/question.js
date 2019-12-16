import React from 'react';
function Question({question, options, name}) {
  return (
    <>
      <label>{question}</label>
      {options.map((value, index) => (
        <div className="form-check" key={index}>
          <input
            className="form-check-input"
            type="radio"
            name={name}
            value={value}
          />
          <label className="form-check-label">{value}</label>
        </div>
      ))}
    </>
  );
}

export default Question;
