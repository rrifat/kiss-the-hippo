import React from 'react';
import {LeftBox, RightBox} from '../components/content-box';
import {CenteredButton} from '../components/lib';
import Question from '../components/question';
import {Link} from '@reach/router';
function HealthQuestion() {
  return (
    <>
      <LeftBox>
        <h3 className="text-center my-3">
          PRE- EMPLOYMENT HEALTH QUESTIONNAIRES
        </h3>
        <form>
          <div className="form-group">
            <label htmlFor="historyOfIllness">
              History of illness (Last 12months):
            </label>
            <textarea
              className="form-control"
              id="historyOfIllness"
              rows="3"
            ></textarea>
          </div>
          <div className="form-group">
            <label htmlFor="questionsTitle">
              Do you, or have you ever suffered from any of the following:
            </label>
            <small id="emailHelp" className="form-text text-muted">
              (For questions 1 to 12 inclusively, indicate if you have you ever
              suffered from any of the following conditions by underlining the
              appropriate condition and providing details in the comments box on
              the back page).
            </small>
          </div>
          <div className="form-group">
            <Question>
              Tuberculosis, pleurisy, asthma, bronchitis, or any other lung,
              throat or ear complaint, including deafness.
            </Question>
          </div>
          <div className="form-group">
            <Question>
              Tuberculosis, pleurisy, asthma, bronchitis, or any other lung,
              throat or ear complaint, including deafness.
            </Question>
          </div>
          <div className="form-group">
            <Question>
              Tuberculosis, pleurisy, asthma, bronchitis, or any other lung,
              throat or ear complaint, including deafness.
            </Question>
          </div>
          <div className="form-group">
            <Question>
              Tuberculosis, pleurisy, asthma, bronchitis, or any other lung,
              throat or ear complaint, including deafness.
            </Question>
          </div>
          <div className="form-group">
            <Question>
              Tuberculosis, pleurisy, asthma, bronchitis, or any other lung,
              throat or ear complaint, including deafness.
            </Question>
          </div>
          <div className="form-group">
            <Question>
              Tuberculosis, pleurisy, asthma, bronchitis, or any other lung,
              throat or ear complaint, including deafness.
            </Question>
          </div>
          <div className="form-group">
            <Question>
              Tuberculosis, pleurisy, asthma, bronchitis, or any other lung,
              throat or ear complaint, including deafness.
            </Question>
          </div>
          <div className="form-group">
            <Question>
              Tuberculosis, pleurisy, asthma, bronchitis, or any other lung,
              throat or ear complaint, including deafness.
            </Question>
          </div>
          <div className="form-group">
            <Question>
              Tuberculosis, pleurisy, asthma, bronchitis, or any other lung,
              throat or ear complaint, including deafness.
            </Question>
          </div>
          <div className="form-group">
            <Question>
              Tuberculosis, pleurisy, asthma, bronchitis, or any other lung,
              throat or ear complaint, including deafness.
            </Question>
          </div>
          <div className="form-group">
            <Question>
              Tuberculosis, pleurisy, asthma, bronchitis, or any other lung,
              throat or ear complaint, including deafness.
            </Question>
          </div>
          <Link to="/carousel-ques">
            <CenteredButton type="submit" value="Continue" />
          </Link>
        </form>
      </LeftBox>
      <RightBox>
        <div>
          <img src="images/coffee-one.png" alt="coffee one" />
        </div>
      </RightBox>
    </>
  );
}
export default HealthQuestion;
