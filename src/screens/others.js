/**@jsx jsx */
import {jsx, css} from '@emotion/core';
import {CenteredButton, DivWithScroll, ErrorText} from '../components/lib';
import {useForm, ErrorMessage} from 'react-hook-form';
import * as itemClient from '../clients/item-client';
import {useAuth} from '../context/auth-context';

const proofOfAddress = [
  'Bank /Credit Card /Mortgage statement',
  'Rental agreement paper copy only',
  'Letter from university dated within last three months',
  'a copy of p45 dated within last three month',
  'a pay slip dated within last three month',
  'letter from HMRC with NI number dated within last three month',
  'NI letter from HMRC',
  'Utility bill',
  'Driving license',
];

export default function Others({navigate}) {
  const {
    page,
    setPage,
    userData: {user},
  } = useAuth();
  let selectedCheckboxes = new Set();
  const {handleSubmit, register, errors} = useForm();
  const onSubmit = (data, e) => {
    e.preventDefault();
    data['others3'] = [...selectedCheckboxes];
    itemClient
      .create({user, page, data})
      .then(({data: response}) => {
        const {data} = response;
        if (data && data.nextPageNo) {
          setPage(data.nextPageNo + 1);
          navigate('/nutshell');
        }
      })
      .catch(err => console.log(err.response));
  };
  const handleChange = label => {
    if (selectedCheckboxes.has(label)) {
      selectedCheckboxes.delete(label);
    } else {
      selectedCheckboxes.add(label);
    }
  };
  return (
    <DivWithScroll className="col-sm-12 h-100">
      <div className="container">
        <div className="row">
          <form onSubmit={handleSubmit(onSubmit)}>
            <div className="col-sm-9 pl-2">
              <div className="my-5">
                <h6 className="font-weight-bold">
                  Proof of National Insurance:
                </h6>
                <p>
                  Please confirm how you have provided Proof of National
                  Insurance -
                </p>
                <ol>
                  <li>a copy of p45 dated within last three month</li>
                  <li>a pay slip dated within last three month</li>
                  <li>
                    letter from HMRC with NI number dated within last three
                    month
                  </li>
                  <li>NI letter from HMRC</li>
                  <li>NI card from HMRC</li>
                  <li>
                    <div className="form-group">
                      <label>Ohter</label>
                      <input
                        type="text"
                        className="form-control"
                        name="others1"
                        ref={register({required: true})}
                      />
                    </div>
                  </li>
                </ol>
              </div>
              <div>
                <h6 className="font-weight-bold">Future Plans:</h6>

                <div className="form-group">
                  <label>
                    Please detail your Holidays, flexibility and three months’
                    plan regarding time :
                  </label>
                  <textarea
                    className="form-control"
                    rows="3"
                    name="others2"
                    ref={register({required: true})}
                  />
                </div>
              </div>
              <div className="row">
                <h6 className="font-weight-bold col-12">Proof of address:</h6>
                <p className="col-12">
                  Please confirm how you will provided Proof of address (no
                  online /photocopies are accepted):
                </p>
                <div className="col-11 offset-1">
                  <ul
                    css={css`
                      padding-left: 25px;
                    `}
                  >
                    {proofOfAddress.map((label, index) => (
                      <li key={index}>
                        <div className="form-group">
                          <label className="form-check-label">
                            <input
                              className="form-check-input"
                              type="checkbox"
                              name="others3"
                              ref={register({required: 'Please confirm'})}
                              onChange={() => handleChange(label)}
                            />
                            {label}
                          </label>
                        </div>
                      </li>
                    ))}
                    <ErrorMessage
                      errors={errors}
                      name="others3"
                      as={<ErrorText />}
                    />
                  </ul>
                </div>
              </div>
              <div className="row">
                <h6 className="font-weight-bold col-12">
                  COSHH and Allergy Courses:
                </h6>
                <div className="col-12">
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
                    Innusicience App in your mobile phone and select the ‘Front
                    of House’ option.
                  </p>
                  <p>
                    You need to provide the certificate of these courses before
                    you began to work with us.
                  </p>
                </div>
              </div>
              <div className="form-group row">
                <div className="col-12">
                  <small>
                    Please enter your date of birth to confirm your
                    acknowledgement of above information.
                  </small>
                  <input
                    type="date"
                    name="ack"
                    className="form-control mb-3"
                    ref={register({required: true})}
                  />
                </div>
              </div>
            </div>
            <CenteredButton type="submit" value="submit" />
          </form>
        </div>
      </div>
    </DivWithScroll>
  );
}
