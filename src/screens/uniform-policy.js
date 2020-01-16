/**@jsx jsx */
import {jsx} from '@emotion/core';
import {Link} from '@reach/router';
import {CenteredButton, DivWithScroll} from '../components/lib';

export default function UniformPolicy() {
  return (
    <DivWithScroll className="col-sm-12 h-100">
      <div className="container">
        <div className="row">
          <div class="col-sm-9 mb-2 text-center">
            <div className="pt-5 pb-3">
              <h3 class="mb-4">
                <strong>Uniform Acceptance Form</strong>
              </h3>
            </div>
          </div>
          <div class="col-sm-9 mb-4">
            <p>The following 6 items have been receved in good condition.</p>
            <p class="pl-4 pt-3">
              <input type="checkbox" /> - 4 Shirts
            </p>
            <p class="pl-4 pt-3">
              <input type="checkbox" />- 2 Aprons
            </p>
          </div>
          <div class="col-sm-9 mb-4">
            <p>
              Every item is worth &pound; 25 and should be handed back to the
              Company in the end of the employment. In the event of loss of
              items, we have the contractual right to duduct such costs from
              your last pay.
            </p>
          </div>
        </div>
        <Link to="/employee-discount">
          <CenteredButton type="submit" value="submit" />
        </Link>
      </div>
    </DivWithScroll>
  );
}
