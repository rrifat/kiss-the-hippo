import React from 'react';
import {useFormContext} from 'react-hook-form';

function Question({question, options, name, correctAns}) {
  const {register} = useFormContext();
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
            ref={register({
              validate: value => value === correctAns || 'Wrong Answer',
            })}
          />
          <label className="form-check-label">{value}</label>
        </div>
      ))}
    </>
  );
}

export default Question;
