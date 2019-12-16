import React from 'react';
import {CenteredButton} from '../components/lib';
import Question from '../components/question';

function HealthLeft({page, handleNextPageRender}) {
  const {
    subtitle = '',
    question_heading: questionHeading = '',
    questions = [],
    instruction = '',
  } = page;
  return (
    <form onSubmit={handleNextPageRender}>
      <div className="form-group">
        <label htmlFor="historyOfIllness">{subtitle}</label>
        <textarea
          className="form-control"
          id="historyOfIllness"
          rows="3"
        ></textarea>
      </div>
      <div className="form-group">
        <label htmlFor="questionsTitle">{questionHeading}</label>
        <small className="form-text text-muted">{`(${instruction})`}</small>
      </div>
      {questions.map((question, index) => (
        <div className="form-group" key={index}>
          <Question
            name={question['name']}
            question={question['question']}
            options={question['options']}
          />
        </div>
      ))}
      <CenteredButton type="submit" value="Continue" />
    </form>
  );
}

function HealthRight() {
  return (
    <div>
      <img src="images/coffee-one.png" alt="coffee one" />
    </div>
  );
}

export {HealthLeft, HealthRight};
