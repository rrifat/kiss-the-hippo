/**@jsx jsx */
import {jsx, css} from '@emotion/core';
import {CenteredButton} from '../components/lib';
import {Link} from '@reach/router';

export default function JobContractLetter() {
  return (
    <div
      className="col-sm-12 h-100"
      css={css`
        overflow-y: scroll;
      `}
    >
      <div className="container">
        <div className="row col-md-9">
          <h3>STATEMENT OF MAIN TERMS OF EMPLOYMENT</h3>
          <p>
            This Statement forms part of your Contract of Employment (except
            where the contrary is expressly stated) and sets out particulars of
            the main terms on which:
          </p>
        </div>
        <div className="row col-md-4">
          <strong>
            Kiss The Hippo 50 George Street,
            <br />
            Richmond,
            <br />
            TW9 1HJ
          </strong>
        </div>
        <br />
        <div className="row col-sm-12">
          <form>
            <p>
              Employs <input type="text" placeholder="username" />
            </p>
            <p>
              Your employment began on <input type="date" /> No previous
              employment counts as part of your period of continuous employment.
              The first three months of your employment shall be a probationary
              period and your employment may be terminated during this period at
              any time on one week's prior notice. We may, at our discretion,
              extend this period for up to a further three months. During this
              probationary period your performance and suitability for continued
              employment will be monitored. At the end of your probationary
              period you will be informed in writing if you have successfully
              completed your probationary period.
            </p>
            <h6 className="font-weight-bold">Job Title</h6>
            <p>
              You are employed as a <input type="text" /> and your duties will
              be as advised by your Manager. Your duties may be modified from
              time to time to suit the needs of the business. You are employed
              to diligently perform your duties in respect of your role and
              other as we may from time to time assign to you, comply with all
              reasonable and lawful directions given to you by and use your best
              endeavours to promote, protect, develop and extend our business.
            </p>
            <h6 className="font-weight-bold">Place of work</h6>
            <p>
              You will normally be required to work at Kiss The Hippo Coffee
              Limited stores, head office and Company sites as required. You
              will not be required to work outside the United Kingdom.
            </p>
            <h6 className="font-weight-bold">Employee Warranty</h6>
            <p>
              You warrant that you are entitled to work in the UK without any
              additional approvals and will notify the Company immediately if
              you cease to be so entitled at any time during your employment
              with the Company.
            </p>
            <h6 className="font-weight-bold">Hours of work</h6>
            <p>
              Your normal hours of work are normally per week, Monday to Sunday
              with agreed minutes of paid/ unpaid break each shift /day. You
              will usually be expected to work days from seven days. Actual
              days, start/finish times will be variable and in accordance with
              the rota. You may be required to work additional hours when
              authorised and as necessitated by the needs of the business
            </p>
            <h6 className="font-weight-bold">REMUNERATION</h6>
            <div className="row">
              <div className="col-sm-3">
                <p>Your salary is currently</p>
              </div>
              <div className="col-sm-3">
                <div class="input-group">
                  <div class="input-group-prepend">
                    <span class="input-group-text">$</span>
                  </div>
                  <input
                    type="number"
                    class="form-control"
                    aria-label="Amount (to the nearest dollar)"
                  />
                </div>
              </div>
              <div className="col">
                <p>
                  per hour/ annum payable monthly by BACS monthly in arrears as
                  detailed on your pay statement.
                </p>
              </div>
            </div>
            <div className="row col-sm-12">
              <p>
                Your salary is set at such a level as to compensate for the need
                for occasional additional hours. We will ensure that you always
                receive no less than the National Minimum Wage/National Living
                Wage.
              </p>
            </div>
            <h6 className="font-weight-bold">COLLECTIVE AGREEMENTS</h6>
            <small>
              &nbsp;&nbsp;No collective agreements directly affect your terms
              and conditions of employment.
            </small>
            <h6 className="font-weight-bold">
              PHOTOGRAPHY CONSENT (SOCIAL MEDIA)
            </h6>
            <p>
              By signing this document, you grant permission to Kiss the Hippo
              Coffee to reproduce any portion of the photo images that have been
              taken by Kiss the Hippo Coffee (Including third-party of Kiss the
              Hippo Coffee) for the purpose of COMPANY USE and or COMPANY
              PROMOTION publications which can include but is not limited to,
              books, cards, calendars, invitations, social media and websites
              without any more compensation or recognition given to you.
              Furthermore, you grant creative permission to alter the
              photograph(s). You DO NOT grant permission to resale or use the
              photographs in a manner that would exploit or cause malicious
              representation towards you or my company and associates. Any
              infringements of this policy may violate U.K law(s). I understand
              that I have right to refuse photography consent agreement which
              has no impact in the recruitment process, current or future
              employment process with Kiss the Hippo Coffee. I will provide
              letter addressing to my line manager
            </p>
            <ConfirmAcknowledgement />
            <h6 className="font-weight-bold">
              ANNUAL LEAVE AND PUBLIC/BANK HOLIDAYS
            </h6>
            <p>
              Your holiday year begins on 1st April and ends on 31st March each
              year, during which you will receive a paid holiday entitlement of
              28 days inclusive of any public/bank holidays which you may choose
              to request. Entitlements are pro-rata for part-time employees. In
              your first holiday year your entitlement will be proportionate to
              the amount of time left in the holiday year. Conditions relating
              to the taking of holidays are shown in the Employee Handbook to
              which you should refer. However, because of the nature of our
              business you may be required to work on any of the public/bank
              holidays listed below, and it is a condition of employment that
              you work on these days when required to do so. If you are required
              to work on any of these days you will be given an alternative day
              of leave in lieu. The date when a day off in lieu is to be taken
              is to be mutually agreed with us.
              <div className="row mt-3">
                <div className="col-sm-6">
                  <ul>
                    <li>New Year's Day</li>
                    <li>The last Monday in May</li>
                    <li>Good Friday</li>
                    <li>The last Monday in August</li>
                  </ul>
                </div>
                <div className="col-sm-6">
                  <ul>
                    <li>Easter Monday</li>
                    <li>Christmas Day</li>
                    <li>The first Monday in May</li>
                    <li>Boxing Day</li>
                  </ul>
                </div>
              </div>
              <br />
              In the event of you working on any of the above public/bank
              holidays, you will be paid at single time for the hours worked. In
              the event of termination of employment holiday entitlement will be
              calculated as 1/12th of the annual entitlement for each completed
              month of service during that holiday year and any holidays accrued
              but not taken will be paid for and must be taken as part of your
              notice period. However, in the event of you having taken any
              holidays in the current holiday year, which have not been accrued
              pro-rata, then the appropriate payments will be deducted from your
              final pay.
            </p>
            <ConfirmAcknowledgement />
            <Link to="/h-safety">
              <CenteredButton type="submit" value="submit" />
            </Link>
          </form>
        </div>
      </div>
    </div>
  );
}

function ConfirmAcknowledgement() {
  return (
    <div>
      <p>
        <mark>
          Enter your date of Birth to confirm acknowledgement of the information
          s above.
        </mark>
      </p>
      <input type="date" className="form-control" />
      <br />
    </div>
  );
}
