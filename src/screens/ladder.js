/**@jsx jsx */
import {jsx} from '@emotion/core';
import {Link} from '@reach/router';
import {CenteredButton, DivWithScroll} from '../components/lib';

export default function Ladder() {
  return (
    <DivWithScroll className="col-sm-12 h-100">
      <div className="container">
        <div className="row">
          <div class="col-sm-9 ">
            <div className="pt-5 pb-3">
              <h3 class="font-weight-bold text-center mb-3">Ladder Policy</h3>
            </div>
            <p>Before you use a ladder, you must check for;</p>
            <h6 class="text-uppercase">GENERAL CONDITION</h6>
            <p>
              -Free from signs of damage likely to compromise the ladder when in
              use.
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
              <li>Have a strong upper resting point (not plastic guttering)</li>
              <li>Floors should be clean, not slippery</li>
            </ul>
          </div>
          <div class="col-sm-9 mb-5">
            <strong>
              <p>Which one is not important for Set-up for leaning ladders-</p>
              <ul class="list-unstyled">
                <li>
                  <input type="radio" /> Ground should be firm and level
                </li>
                <li>
                  <input type="radio" /> Maximum safe ground back slope
                </li>
                <li>
                  <input type="radio" /> Floors should be clean, not slippery
                </li>
                <li>
                  <input type="radio" /> Manufactures information{' '}
                </li>
              </ul>
            </strong>
          </div>
          <div class="col-sm-9 mb-3">
            <h6 class="pb-3">Leaning ladders in-use</h6>
            <ul>
              <li>Short duration work (maximum 30 minutes)</li>
              <li>Light work (up to 10 kg)</li>
              <li>
                Ladder angle 75 – 1 in 4 rules (1 unit out for every 4 units up)
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
                <li>
                  <input type="radio" /> Up to 10 Kg{' '}
                </li>
                <li>
                  <input type="radio" /> 20 kg{' '}
                </li>
                <li>
                  <input type="radio" /> No restriction
                </li>
                <li>
                  <input type="radio" /> 12kg
                </li>
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
                  make sure your belt buckle (navel) stays within the stiles and
                  keep both feet on the same rung or step throughout the task
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
                <li>
                  <input type="radio" /> At least 2
                </li>
                <li>
                  <input type="radio" /> Minimum 4
                </li>
                <li>
                  <input type="radio" /> No minimum
                </li>
              </ul>
              <p>
                Enter your date of birth as acknowledgement of ladder policy
              </p>
            </strong>
            <input type="date" className="form-control" />
          </div>
        </div>
        <Link to="/uniform">
          <CenteredButton type="submit" value="submit" />
        </Link>
      </div>
    </DivWithScroll>
  );
}
