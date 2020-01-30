/**@jsx jsx */
import {jsx} from '@emotion/core';
import {CenteredButton, DivWithScroll} from '../components/lib';
import {useAuth} from '../context/auth-context';
import {useForm} from 'react-hook-form';

export default function EmployeeDiscount({navigate}) {
  const {register, handleSubmit} = useForm();
  const {setPage} = useAuth();
  const onSubmit = (_, event) => {
    event.preventDefault();
    setPage(page => page + 1);
    navigate('/others');
  };
  return (
    <DivWithScroll className="col-sm-12 h-100">
      <div className="container">
        <div className="row">
          <div className="col-sm-9 mb-3">
            <div className="pt-5 pb-3">
              <h3 className="text-uppercase text-center">
                <strong>EMPLOYEE DISCOUNT POLICY</strong>
              </h3>
            </div>
            <h6 className="pb-2">
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

          <div className="col-sm-9 mb-3">
            <h6 className="pb-2">
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
          </div>
          <div className="col-sm-9">
            <form onSubmit={handleSubmit(onSubmit)}>
              <div className="form-group">
                <small>
                  Enter your date of Birth to confirm acknowledgement of the
                  information s above.
                </small>
                <input
                  type="date"
                  className="form-control"
                  name="ack"
                  ref={register({required: true})}
                />
              </div>
              <CenteredButton type="submit" value="continue" />
            </form>
          </div>
        </div>
      </div>
    </DivWithScroll>
  );
}
