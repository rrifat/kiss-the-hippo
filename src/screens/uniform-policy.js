/**@jsx jsx */
import {jsx, css} from '@emotion/core';
import {CenteredButton, DivWithScroll, ErrorText} from '../components/lib';
import {useForm, ErrorMessage} from 'react-hook-form';
import * as itemClient from '../clients/item-client';
import {useAuth} from '../context/auth-context';

export default function UniformPolicy({navigate}) {
  const {
    page,
    setPage,
    userData: {user},
  } = useAuth();
  let selectedCheckboxes = new Set();
  const {handleSubmit, register, errors} = useForm();
  const onSubmit = (data, e) => {
    e.preventDefault();
    data['uniformPolicy'] = [...selectedCheckboxes];
    itemClient
      .create({user, page, data})
      .then(({data: response}) => {
        const {data} = response;
        if (data && data.nextPageNo) {
          setPage(data.nextPageNo);
          navigate('/employee-discount');
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
            <div className="col-sm-9 mb-2 text-center">
              <div className="pt-5 pb-3">
                <h3 className="mb-4">
                  <strong>Uniform Acceptance Form</strong>
                </h3>
              </div>
            </div>
            <div className="col-sm-9 mb-4">
              <p>The following 6 items have been receved in good condition.</p>
              <ul
                css={css`
                  padding-left: 25px;
                `}
              >
                {['4 Shirts', '2 Aprons'].map((label, index) => (
                  <li key={index}>
                    <div className="form-group">
                      <input
                        className="form-check-input"
                        type="checkbox"
                        name="uniformPolicy"
                        ref={register({required: 'This is required'})}
                        onChange={() => handleChange(label)}
                      />
                      <label className="form-check-label">{label}</label>
                    </div>
                  </li>
                ))}
                <ErrorMessage
                  errors={errors}
                  name="uniformPolicy"
                  as={<ErrorText />}
                />
              </ul>
            </div>
            <div className="col-sm-9 mb-4">
              <p>
                Every item is worth &pound; 25 and should be handed back to the
                Company in the end of the employment. In the event of loss of
                items, we have the contractual right to duduct such costs from
                your last pay.
              </p>
            </div>
            <CenteredButton type="submit" value="submit" />
          </form>
        </div>
      </div>
    </DivWithScroll>
  );
}
