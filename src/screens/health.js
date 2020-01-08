import React from 'react';
import {CenteredButton} from '../components/lib';
import Question from '../components/question';
import {Link} from '@reach/router';

function HealthLeft({page}) {
  const {
    subtitle = '',
    question_heading: questionHeading = '',
    questions = [],
    instruction = '',
  } = page;
  return (
    <form>
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
      <Link to="/jcl">
        <CenteredButton type="submit" value="Continue" />
      </Link>
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
