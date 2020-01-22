import React from 'react';
import {CenteredButton, ErrorText} from '../components/lib';
import Question from '../components/question';
import {useForm, FormContext} from 'react-hook-form';
import {LeftBox, RightBox} from '../components/content-box';
import pages from '../page-format.json';
import * as itemClient from '../clients/item-client';
import {useAuth} from '../context/auth-context';

const {
  subtitle = '',
  question_heading: questionHeading = '',
  questions = [],
  commentBoxQuestions = [],
  instruction = '',
  page_title: pageTitle,
} = pages[0];

function HealthQuestionnaires({navigate}) {
  const {
    page,
    setPage,
    userData: {user},
  } = useAuth();
  const methods = useForm();
  const {register, handleSubmit, errors, watch} = methods;

  const onSubmit = handleSubmit((data, event) => {
    event.preventDefault();
    itemClient.create({user, page, data}).then(({data: response}) => {
      const {data} = response;
      if (data && data.nextPageNo) {
        setPage(data.nextPageNo);
        navigate('/jcl');
      }
    });
  });
  return (
    <>
      <LeftBox>
        <h3 className="text-center my-3">{pageTitle.toUpperCase()}</h3>
        <FormContext {...methods}>
          <form onSubmit={onSubmit}>
            <div className="form-group">
              <label className="font-weight-bold">{subtitle}:</label>
              <textarea
                className="form-control"
                id="historyOfIllness"
                name="historyOfIllness"
                ref={register({required: true})}
                rows="3"
              />
            </div>
            <div className="form-group">
              <label className="font-weight-bold">{questionHeading}</label>
              <small className="form-text text-muted">{`(${instruction})`}</small>
            </div>
            <ol>
              {questions.map((question, index) => (
                <li key={index}>
                  <div className="form-group">
                    <Question
                      name={question['name']}
                      question={question['question']}
                      options={question['options']}
                      correctAns={question['correct_answer']}
                      type={question['type']}
                    />
                    {errors[question['name']] && (
                      <ErrorText>Your input is required</ErrorText>
                    )}
                  </div>
                </li>
              ))}
            </ol>
            <ol start="15">
              <div className="form-group">
                <br />
                <label className="text-muted">
                  If you answer ‘Yes’ to questions 15 to 20 please provide
                  details
                </label>
              </div>
              {commentBoxQuestions.map((question, index) => (
                <div key={index}>
                  {question['note'] && (
                    <div className="from-group">
                      <br />
                      <label className="text-muted">{question['note']}</label>
                    </div>
                  )}

                  <li>
                    <div className="form-group">
                      <Question
                        name={question['name']}
                        question={question['question']}
                        options={question['options']}
                        correctAns={question['correct_answer']}
                        type={question['type']}
                      />
                      {errors[question['name']] && (
                        <ErrorText>Your input is required</ErrorText>
                      )}
                    </div>
                    {watch(question['name']) === 'Yes' && (
                      <div className="form-group">
                        <textarea
                          className="form-control"
                          name={question['name'] + 'Details'}
                          ref={register({required: true})}
                          rows="3"
                          placeholder="please provide details"
                        />
                      </div>
                    )}
                  </li>
                </div>
              ))}
            </ol>
            <div className="form-group">
              <label>
                The next question only is to be answered by <b>female</b>{' '}
                applicants where the proposed employment might present as a risk
                during pregnancy.
                <b>
                  <em>You are not obliged to answer these questions.</em>
                </b>
              </label>
            </div>
            <ol start="21">
              <li>
                <div className="form-group">
                  <label>Are you pregnant?</label>
                  {['Yes', 'No'].map((value, index) => (
                    <div className="form-check" key={index}>
                      <input
                        className="form-check-input"
                        type="radio"
                        name="fQuestion"
                        value={value}
                        ref={register({required: true})}
                      />
                      <label className="form-check-label">{value}</label>
                    </div>
                  ))}
                  {errors['fQuestion'] && (
                    <ErrorText>Your input is required</ErrorText>
                  )}
                </div>
                {watch('fQuestion') === 'Yes' && (
                  <>
                    <div className="form-group">
                      <label>How far are you into the pregnancy?</label>
                      <div className="row col-6">
                        <input
                          name="pregnancy"
                          type="number"
                          className="form-control col-5"
                          ref={register({required: true})}
                        />
                        <label className="col-form-label col-1">months</label>
                      </div>
                    </div>
                    <div className="form-group">
                      <label>
                        If you are employed by us would you require us to
                        arrange any special arrangement?
                      </label>
                      {['Yes', 'No'].map((value, index) => (
                        <div className="form-check" key={index}>
                          <input
                            className="form-check-input"
                            type="radio"
                            name="innerFQuestion"
                            value={value}
                            ref={register({required: true})}
                          />
                          <label className="form-check-label">{value}</label>
                        </div>
                      ))}
                      {errors['innerFQuestion'] && (
                        <ErrorText>Your input is required</ErrorText>
                      )}
                    </div>
                    {watch('innerFQuestion') === 'Yes' && (
                      <div className="form-group">
                        <textarea
                          className="form-control"
                          name="specialArrangement"
                          ref={register({required: true})}
                          rows="3"
                          placeholder="please give us a brief description"
                        />
                      </div>
                    )}
                  </>
                )}
              </li>
              <li>
                <div className="form-group">
                  <label>
                    Have you ever had any medical condition that prevents you to
                    handle food?
                  </label>
                  {['Yes', 'No'].map((value, index) => (
                    <div className="form-check" key={index}>
                      <input
                        className="form-check-input"
                        type="radio"
                        name="preventsHandleFood"
                        value={value}
                        ref={register({required: true})}
                      />
                      <label className="form-check-label">{value}</label>
                    </div>
                  ))}
                  {errors['preventsHandleFood'] && (
                    <ErrorText>Your input is required</ErrorText>
                  )}
                </div>
                {watch('preventsHandleFood') === 'Yes' && (
                  <div className="form-group">
                    <textarea
                      className="form-control"
                      name="medicalCondition"
                      ref={register({required: true})}
                      rows="3"
                      placeholder="please provide detail (time, present status etc.)"
                    />
                  </div>
                )}
              </li>
            </ol>
            <div className="form-group">
              <label className="font-weight-bold">Additional Comments:</label>
              <textarea
                className="form-control"
                name="additionComments"
                rows="3"
                ref={register}
              />
            </div>
            <div className="form-group form-check">
              <input
                type="checkbox"
                name="acknowledgement"
                className="form-check-input"
                ref={register({required: true})}
              />
              <label className="form-check-label">
                <b>
                  <em>
                    I read and understood and provided all the information
                    above.
                  </em>
                </b>
              </label>
            </div>
            <CenteredButton type="submit" value="Continue" />
          </form>
        </FormContext>
      </LeftBox>
      <RightBox>
        <div>
          <img
            src={`${process.env.PUBLIC_URL}/images/KTH_Pantone.jpg`}
            alt="KTH Pantone"
            className="img-fluid"
          />
        </div>
      </RightBox>
    </>
  );
}

export default HealthQuestionnaires;
