/**@jsx jsx */
import {jsx, css} from '@emotion/core';
import {Link} from '@reach/router';
import {CenteredButton} from '../components/lib';

export default function Others() {
  return (
    <div
      className="col-sm-12 h-100"
      css={css`
        overflow-y: scroll;
      `}
    >
      <div className="container">
        <div className="row col-sm-9">
          <div className="my-5">
            <h6 className="font-weight-bold">Proof of National Insurance:</h6>
            <p>
              Please confirm how you have provided Proof of National Insurance -
            </p>
            <ol>
              <li>a copy of p45 dated within last three month</li>
              <li>a pay slip dated within last three month</li>
              <li>
                letter from HMRC with NI number dated within last three month
              </li>
              <li>NI letter from HMRC</li>
              <li>NI card from HMRC</li>
              <li>
                <input type="text" className="form-control" />
                Ohter
              </li>
            </ol>
          </div>
          <div>
            <h6 className="font-weight-bold">Future Plans:</h6>

            <div class="form-group">
              <label>
                Please detail your Holidays, flexibility and three months’ plan
                regarding time :
              </label>
              <textarea class="form-control" rows="3"></textarea>
            </div>
          </div>
          <div>
            <h6 className="font-weight-bold">Proof of address:</h6>
            <p>
              Please confirm how you will provided Proof of Proof of address (no
              online /photocopies are accepted):
            </p>
            <ol>
              <li>Bank /Credit Card /Mortgage statement</li>
              <li>Rental agreement paper copy only</li>
              <li>Letter from university dated within last three months</li>
              <li>a copy of p45 dated within last three month</li>
              <li>a pay slip dated within last three month</li>
              <li>
                letter from HMRC with NI number dated within last three month
              </li>
              <li>NI letter from HMRC</li>
              <li>Utility bill</li>
              <li>Driving license</li>
            </ol>
          </div>
          <div>
            <h6 className="font-weight-bold">COSHH and Allergy Courses:</h6>
            <p>
              To complete Allergy training please visit{' '}
              <a href="http://allergytraining.food.gov.uk/english/">
                http://allergytraining.food.gov.uk/english/
              </a>{' '}
              You need to register yourself to complete the course.
            </p>
            <p>
              This is a course provided by our Chemical manufacturer Innuscience
              . To complete this course you need to download Innusicience App in
              your mobile phone and select the ‘Front of House’ option.
            </p>
            <p>
              You need to provide the certificate of these courses before you
              began to work with us.
            </p>
          </div>
          <p>
            Please enter your date of birth to confirm your acknowledgement of
            above information.
          </p>
          <input type="date" className="form-control mb-3" />
        </div>
        <Link to="/nutshell">
          <CenteredButton type="submit" value="submit" />
        </Link>
      </div>
    </div>
  );
}
