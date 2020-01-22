import React from 'react';
import {useFormContext} from 'react-hook-form';

function Question({question, name, type, note}) {
  const {register} = useFormContext();
  return (
    <>
      {note && <p>{note}</p>}
      <label>{question}</label>
      {type === 'radio' &&
        ['Yes', 'No'].map((value, index) => (
          <div className="form-check" key={index}>
            <input
              className="form-check-input"
              type={type}
              name={name}
              value={value}
              ref={register({
                required: true,
              })}
            />
            <label className="form-check-label">{value}</label>
          </div>
        ))}
      {type === 'date' && (
        <input
          name={name}
          type={type}
          className="form-control col-auto col-sm-8"
          ref={register}
        />
      )}
    </>
  );
}

export default Question;
