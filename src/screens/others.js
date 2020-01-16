/**@jsx jsx */
import {jsx, css} from '@emotion/core';
import {Link} from '@reach/router';
import {CenteredButton, DivWithScroll} from '../components/lib';

const proofOfAddress = [
  {label: 'Bank /Credit Card /Mortgage statement'},
  {label: 'Rental agreement paper copy only'},
  {label: 'Letter from university dated within last three months'},
  {label: 'a copy of p45 dated within last three month'},
  {label: 'a pay slip dated within last three month'},
  {label: 'letter from HMRC with NI number dated within last three month'},
  {label: 'NI letter from HMRC'},
  {label: 'Utility bill'},
  {label: 'Driving license'},
];

export default function Others() {
  return (
    <DivWithScroll className="col-sm-12 h-100">
      <div className="container">
        <div className="row col-sm-9">
          <form>
            <div className="my-5">
              <h6 className="font-weight-bold">Proof of National Insurance:</h6>
              <p>
                Please confirm how you have provided Proof of National Insurance
                -
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
                  <div className="form-group">
                    <label>Ohter</label>
                    <input type="text" className="form-control" />
                  </div>
                </li>
              </ol>
            </div>
            <div>
              <h6 className="font-weight-bold">Future Plans:</h6>

              <div class="form-group">
                <label>
                  Please detail your Holidays, flexibility and three months’
                  plan regarding time :
                </label>
                <textarea class="form-control" rows="3"></textarea>
              </div>
            </div>
            <div className="row">
              <h6 className="font-weight-bold">Proof of address:</h6>
              <p>
                Please confirm how you will provided Proof of Proof of address
                (no online /photocopies are accepted):
              </p>
              <div className="col-12">
                <ul
                  css={css`
                    padding-left: 20px;
                  `}
                >
                  {proofOfAddress.map((checkbox, index) => (
                    <li key={index}>
                      <div className="form-group row">
                        {/* <div className="col-md-1 col-2"></div> */}
                        <label className="col-md-6 col-10 form-check-label">
                          <input
                            className="form-check-input"
                            type="checkbox"
                            name="summary"
                            defaultChecked={checkbox.checked}
                          />
                          {checkbox.label}
                        </label>
                      </div>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
            <div className="row">
              <h6 className="font-weight-bold">COSHH and Allergy Courses:</h6>
              <p>
                To complete Allergy training please visit{' '}
                <a href="http://allergytraining.food.gov.uk/english/">
                  http://allergytraining.food.gov.uk/english/
                </a>{' '}
                You need to register yourself to complete the course.
              </p>
              <p>
                This is a course provided by our Chemical manufacturer
                Innuscience . To complete this course you need to download
                Innusicience App in your mobile phone and select the ‘Front of
                House’ option.
              </p>
              <p>
                You need to provide the certificate of these courses before you
                began to work with us.
              </p>
            </div>
            <div className="form-group row">
              <label>
                Please enter your date of birth to confirm your acknowledgement
                of above information.
              </label>
              <input type="date" className="form-control mb-3" />
            </div>
            <Link to="/nutshell">
              <CenteredButton type="submit" value="submit" />
            </Link>
          </form>
        </div>
      </div>
    </DivWithScroll>
  );
}
