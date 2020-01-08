/**@jsx jsx */
import {jsx, css} from '@emotion/core';
import {Link} from '@reach/router';
import {CenteredButton} from '../components/lib';

export default function UniformPolicy() {
  return (
    <div
      className="col-sm-12 h-100"
      css={css`
        overflow-y: scroll;
      `}
    >
      <div className="container">
        <div className="row">
          <div class="col-sm-9 mb-2 text-center">
            <h3 class="mb-4">
              <strong>Uniform Acceptance Form</strong>
            </h3>
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
              Every item is worth &euro;25 and should be handed back to the
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
    </div>
  );
}
