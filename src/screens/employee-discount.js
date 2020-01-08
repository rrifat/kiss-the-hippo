/**@jsx jsx */
import {jsx, css} from '@emotion/core';
import {Link} from '@reach/router';
import {CenteredButton} from '../components/lib';

export default function EmployeeDiscount() {
  return (
    <div
      className="col-sm-12 h-100"
      css={css`
        overflow-y: scroll;
      `}
    >
      <div className="container">
        <div className="row">
          <div class="col-sm-9 mb-3">
            <h3 class="text-uppercase text-center">
              <strong>EMPLOYEE DISCOUNT POLICY</strong>
            </h3>
            <h6 class="pb-2">
              <strong> Discounts on the shift:</strong>
            </h6>
            <h6>
              <strong>- Coffee </strong>
            </h6>
            <p>
              Coffee is free for all employees of Kiss the Hippo Coffee. Free
              coffee should be taken only before the shift and/or during the
              break and/or after the shift. During the shift, only baristas can
              taste coffee to dial in the grinders. Otherwise, only water should
              be consumed by front of house team during the shifts.{' '}
            </p>

            <h6>
              <strong>- All Other Drinks </strong>
            </h6>
            <p>
              All other drinks should be paid fully. This includes all drinks
              which don’t have any coffee such as teas, bottled drinks,
              smoothies etc.{' '}
            </p>
            <h6>
              <strong>- Food Items </strong>
            </h6>
            <p>There is a 40% discount on all food items. </p>
            <h6>
              <strong>- Retail Items </strong>
            </h6>
            <p>
              There is a 10% discount on retail items including equipment and
              coffee bags.{' '}
            </p>
          </div>

          <div class="col-sm-9 mb-3">
            <h6 class="pb-2">
              <strong>Discounts off the shift: </strong>
            </h6>
            <h6>
              <strong>- Retail Items </strong>
            </h6>
            <p>
              There is a 10% discount on retail items including equipment and
              coffee bags.{' '}
            </p>
            <h6>
              <strong>Additional benefit: </strong>
            </h6>
            <p>- 1 free 250g bag of coffee per month for each employee. </p>
            <p>
              The coffees will be chosen by the roastery team and Shop Manager
              will hand out individually to each employee by signature.{' '}
            </p>
            <h6>
              <strong>Procedure: </strong>
            </h6>
            <p>
              - If you need to go on a break and order food/drink, pre-order it.
              Queue up as a normal guest to process payment. Once you get your
              order, start your break.{' '}
            </p>
            <p>
              - You are allowed for a free coffee within 30 minutes before your
              shift, before going for your breaks and within 30 minutes after
              your shift.{' '}
            </p>
            <p>
              - For any discount, the till person needs to print the receipt,
              write full name and signed by the employee who ordered and the
              till person’s initials.{' '}
            </p>
            <p>
              - All receipts to be kept in an envelope in the safe at end of day
              for audit purposes
            </p>

            <p>
              <strong>
                Enter your date of birth as acknowledgement of ladder policy.
              </strong>
            </p>
            <input type="date" className="form-control" />
          </div>
        </div>
        <Link to="/others">
          <CenteredButton type="submit" value="submit" />
        </Link>
      </div>
    </div>
  );
}
