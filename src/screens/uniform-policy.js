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

  const {handleSubmit, register, errors} = useForm();
  const onSubmit = (data, e) => {
    e.preventDefault();
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
              <p>
                Write down the no. of following items that you have been receved
                in good condition.
              </p>

              <div className="form-row">
                <div className="form-group col-4">
                  <input
                    className="form-control"
                    type="number"
                    name="shirts"
                    ref={register({required: 'This is required'})}
                  />
                </div>
                <label className="col-form-label">Shirts</label>
              </div>
              {/* <ErrorMessage errors={errors} name="shirts" as={<ErrorText />} /> */}
              <div className="form-row">
                <div className="form-group col-4">
                  <input
                    className="form-control"
                    type="number"
                    name="aprons"
                    ref={register({required: 'This is required'})}
                  />
                </div>
                <label className="col-form-label">Aprons</label>
              </div>
              {/* <ErrorMessage errors={errors} name="aprons" as={<ErrorText />} /> */}

              <div className="form-row">
                <div className="form-group col-4">
                  <input
                    className="form-control"
                    type="number"
                    name="fob"
                    ref={register({required: 'This is required'})}
                  />
                </div>
                <label className="col-form-label">Fob</label>
              </div>
              {/* <ErrorMessage errors={errors} name="shirts" as={<ErrorText />} /> */}
            </div>

            <div className="col-sm-9 mb-4">
              <p>
                Every item is worth &pound; 25 (£15 solely for fob) and should
                be handed back to the Company in the end of the employment. In
                the event of loss of items, we have the contractual right to
                duduct such costs from your last pay.
              </p>
            </div>
            <CenteredButton type="submit" value="submit" />
          </form>
        </div>
      </div>
    </DivWithScroll>
  );
}
