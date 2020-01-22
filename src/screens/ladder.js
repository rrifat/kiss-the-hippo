/**@jsx jsx */
import {jsx} from '@emotion/core';
import {CenteredButton, DivWithScroll, ErrorText} from '../components/lib';
import {useForm, ErrorMessage} from 'react-hook-form';
import {usePage, navigateToNextPage} from '../context/page-context';
// import {useUser} from '../context/user-context';
import * as itemClient from '../clients/item-client';
import pages from '../page-format.json';
import {useAuth} from '../context/auth-context';

const options = pages[2];

export default function Ladder({navigate}) {
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
          navigate('/uniform');
        }
      })
      .catch(err => console.log(err.response));
  };
  return (
    <DivWithScroll className="col-sm-12 h-100">
      <div className="container">
        <div className="row">
          <form onSubmit={handleSubmit(onSubmit)}>
            <div class="col-sm-9 ">
              <div className="pt-5 pb-3">
                <h3 class="font-weight-bold text-center mb-3">Ladder Policy</h3>
              </div>
              <p>Before you use a ladder, you must check for;</p>
              <h6 class="text-uppercase">GENERAL CONDITION</h6>
              <p>
                -Free from signs of damage likely to compromise the ladder when
                in use.
              </p>
              <h6>
                <span class="text-uppercase">INTERLOCK </span>(if there is one)
              </h6>
              <p>-Moves and locks into correct position.</p>
            </div>
            <div class="col-sm-9 my-5">
              <img
                src={`${process.env.PUBLIC_URL}/images/ladder2.jpg`}
                alt="ladder"
              />
            </div>
            <div class="col-sm-9 mb-3">
              <h6 class="pb-3">Set-up for leaning ladders</h6>
              <ul>
                <li>Do a daily pre-use check (include ladder feet)</li>
                <li>Secure it </li>
                <li>Ground should be firm and level</li>
                <li>
                  Maximum safe ground side slope 16 (level the rungs with a
                  suitable device)
                </li>
                <li>Maximum safe ground back slope</li>
                <li>
                  Have a strong upper resting point (not plastic guttering)
                </li>
                <li>Floors should be clean, not slippery</li>
              </ul>
            </div>
            <div class="col-sm-9 mb-5">
              <strong>
                <p>
                  Which one is not important for Set-up for leaning ladders-
                </p>
                <ul class="list-unstyled">
                  {options['ladderQ1'].map((option, index) => (
                    <li key={index}>
                      <input
                        type="radio"
                        name="ladderQ1"
                        value={option.value}
                        ref={register({
                          validate: value =>
                            value === 'True' || 'Your answers is not correct!',
                        })}
                      />
                      <label>&nbsp;{option.label}</label>
                    </li>
                  ))}
                  <ErrorMessage
                    errors={errors}
                    name="ladderQ1"
                    as={<ErrorText />}
                  />
                </ul>
              </strong>
            </div>
            <div class="col-sm-9 mb-3">
              <h6 class="pb-3">Leaning ladders in-use</h6>
              <ul>
                <li>Short duration work (maximum 30 minutes)</li>
                <li>Light work (up to 10 kg)</li>
                <li>
                  Ladder angle 75 – 1 in 4 rules (1 unit out for every 4 units
                  up)
                </li>
                <li>Always grip the ladder when climbing</li>
                <li>
                  Do not overreach - make sure your belt buckle (navel) stays
                  within the stiles and keep both feet on the same rung or step
                  throughout the task
                </li>
                <li>
                  Do not work off the top three rungs – this provides a handhold
                </li>
              </ul>
            </div>
            <div class="col-sm-9 mb-5">
              <strong>
                <p>What ‘s the maximum weight allowance in leaning ladder-</p>
                <ul class="list-unstyled">
                  {options['ladderQ2'].map((option, index) => (
                    <li key={index}>
                      <input
                        type="radio"
                        name="ladderQ2"
                        value={option.value}
                        ref={register({
                          validate: value =>
                            value === 'True' || 'Your answers is not correct!',
                        })}
                      />
                      <label>&nbsp;{option.label}</label>
                    </li>
                  ))}
                  <ErrorMessage
                    errors={errors}
                    name="ladderQ2"
                    as={<ErrorText />}
                  />
                </ul>
              </strong>
            </div>
            <div class="col-sm-9 mb-5">
              <h6 class="pb-3">Set-up for stepladders</h6>
              <ul>
                <li>Daily pre-use check (feet included)</li>
                <li>Ensure there is space to fully open</li>
                <li>Use any locking devices</li>
                <li>Ground should be firm and level</li>
                <li>Floors should be clean, not slippery</li>
              </ul>
            </div>
            <div class="col-sm-9 mb-3">
              <h6 class="pb-3">Stepladders in-use</h6>
              <ul>
                <li>Short duration work (maximum 30 minutes)</li>
                <li>Light work (up to 10 kg)</li>
                <li>
                  Do not work off the top two steps (top three steps for
                  swing-back/double-sided stepladders) unless you have a safe
                  handhold on the steps
                </li>
                <li>Avoid side-on working</li>
                <li>
                  Do not overreach –{' '}
                  <strong>
                    make sure your belt buckle (navel) stays within the stiles
                    and keep both feet on the same rung or step throughout the
                    task
                  </strong>
                </li>
              </ul>
            </div>
            <div class="col-sm-9 mb-3">
              <p class="pb-3">
                Loft ladder must be accompanied by two persons at all time.
              </p>
              <strong>
                <p>How many people are required to use lost ladder-?</p>
                <ul class="list-unstyled">
                  {options['ladderQ3'].map((option, index) => (
                    <li key={index}>
                      <input
                        type="radio"
                        name="ladderQ3"
                        value={option.value}
                        ref={register({
                          validate: value =>
                            value === 'True' || 'Your answers is not correct!',
                        })}
                      />
                      <label>&nbsp;{option.label}</label>
                    </li>
                  ))}
                  <ErrorMessage
                    errors={errors}
                    name="ladderQ3"
                    as={<ErrorText />}
                  />
                </ul>
                <p>
                  Enter your date of birth as acknowledgement of ladder policy
                </p>
              </strong>
              <input type="date" className="form-control" />
            </div>
            <CenteredButton type="submit" value="submit" />
          </form>
        </div>
      </div>
    </DivWithScroll>
  );
}
