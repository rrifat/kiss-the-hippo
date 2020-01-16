import React from 'react';
import {CenteredButton, ErrorText} from '../components/lib';
import Question from '../components/question';
import useForm, {FormContext} from 'react-hook-form';
import {LeftBox, RightBox} from '../components/content-box';
import pages from '../page-format.json';
import {Link} from '@reach/router';
const {
  subtitle = '',
  question_heading: questionHeading = '',
  questions = [],
  instruction = '',
  page_title: pageTitle,
} = pages[0];

function HealthQuestionnaires() {
  const methods = useForm();
  const {register, handleSubmit, errors} = methods;
  const onSubmit = handleSubmit((data, event) => {
    event.preventDefault();
    console.log(data);
  });
  return (
    <>
      <LeftBox>
        <h3 className="text-center my-3">{pageTitle.toUpperCase()}</h3>
        <FormContext {...methods}>
          <form onSubmit={onSubmit}>
            <div className="form-group">
              <label htmlFor="historyOfIllness">{subtitle}</label>
              <textarea
                className="form-control"
                id="historyOfIllness"
                name="historyOfIllness"
                // ref={register({required: true})}
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
                  correctAns={question['correct_answer']}
                />
                {errors[question['name']] && (
                  <ErrorText>{errors[question['name']].message}</ErrorText>
                )}
              </div>
            ))}
            <Link to="/jcl">
              <CenteredButton type="submit" value="Continue" />
            </Link>
          </form>
        </FormContext>
      </LeftBox>
      <RightBox>
        <div>
          <img src="images/coffee-one.png" alt="coffee one" />
        </div>
      </RightBox>
    </>
  );
}

export default HealthQuestionnaires;
