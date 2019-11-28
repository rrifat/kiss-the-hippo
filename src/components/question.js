import React from 'react';
function Question({children}) {
  return (
    <>
      <label htmlFor="questionsTitle">{children}</label>
      <RadioButton />
    </>
  );
}
function RadioButton() {
  return (
    <>
      <div className="form-check">
        <input
          className="form-check-input"
          type="radio"
          name="inlineRadioOptions"
          id="inlineRadio1"
          value="option1"
        />
        <label className="form-check-label" htmlFor="inlineRadio1">
          Yes
        </label>
      </div>
      <div className="form-check">
        <input
          className="form-check-input"
          type="radio"
          name="inlineRadioOptions"
          id="inlineRadio2"
          value="option2"
        />
        <label className="form-check-label" htmlFor="inlineRadio2">
          No
        </label>
      </div>
    </>
  );
}

export default Question;
