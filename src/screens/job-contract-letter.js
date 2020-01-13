/**@jsx jsx */
import {jsx, css} from '@emotion/core';
import styled from '@emotion/styled';
import {CenteredButton, DivWithScroll} from '../components/lib';
import {Link} from '@reach/router';

const Input = styled.input`
  border: none;
  border-bottom: 2px solid grey;
  border-radius: unset;
  &:focus {
    outline: none;
    border-color: grey;
    box-shadow: none;
  }
`;
export default function JobContractLetter() {
  return (
    <DivWithScroll className="col-sm-12 h-100">
      <div className="container">
        <div className="row col-md-9">
          <div className="pt-5 pb-3">
            <h3>STATEMENT OF MAIN TERMS OF EMPLOYMENT</h3>
          </div>
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
            <div className="form-group row no-gutters">
              <label className="col-auto col-form-label">
                Employs&nbsp;&nbsp;
              </label>
              <div className="col-auto">
                <Input type="text" className="form-control" />
              </div>
            </div>
            <div className="form-group row no-gutters">
              <label className="col-form-label">
                Your employment began on&nbsp;&nbsp;
              </label>
              <div>
                <Input type="date" className="form-control" />
              </div>
              <label className="col-form-label">
                &nbsp;&nbsp;No previous employment counts as part of your period
                of continuous employment.
              </label>
            </div>
            <p>
              The first three months of your employment shall be a probationary
              period and your employment may be terminated during this period at
              any time on one week's prior notice. We may, at our discretion,
              extend this period for up to a further three months. During this
              probationary period your performance and suitability for continued
              employment will be monitored. At the end of your probationary
              period you will be informed in writing if you have successfully
              completed your probationary period.
            </p>
            <h6 className="font-weight-bold">JOB TITLE</h6>
            <div className="form-group row no-gutters">
              <label className="col-auto col-form-label">
                You are employed as a&nbsp;&nbsp;
              </label>
              <div>
                <Input type="text" className="form-control" />
              </div>
              <label className="col-form-label">
                &nbsp;&nbsp;and your duties will be as advised by your Manager.
              </label>
            </div>
            <p>
              Your duties may be modified from time to time to suit the needs of
              the business. You are employed to diligently perform your duties
              in respect of your role and other as we may from time to time
              assign to you, comply with all reasonable and lawful directions
              given to you by and use your best endeavours to promote, protect,
              develop and extend our business.
            </p>
            <h6 className="font-weight-bold">PLACE OF WORK</h6>
            <p>
              You will normally be required to work at Kiss The Hippo Coffee
              Limited stores, head office and Company sites as required. You
              will not be required to work outside the United Kingdom.
            </p>
            <h6 className="font-weight-bold">EMPLOYEE WARRANTY</h6>
            <p>
              You warrant that you are entitled to work in the UK without any
              additional approvals and will notify the Company immediately if
              you cease to be so entitled at any time during your employment
              with the Company.
            </p>
            <h6 className="font-weight-bold">HOURS OF WORK</h6>
            <div className="form-group row no-gutters">
              <label className="col-form-label">
                Your normal hours of work are normally&nbsp;&nbsp;&nbsp;
              </label>
              <div className="col-1">
                <Input type="number" className="form-control" />
              </div>
              <label className="col-form-label">
                &nbsp;&nbsp;per week, Monday to Sunday with agreed minutes of
                paid/ unpaid break each shift /day.
              </label>
              <label className="col-form-label">
                You will usually be expected to work&nbsp;&nbsp;&nbsp;
              </label>
              <div className="col-1">
                <Input type="number" className="form-control" />
              </div>
              <label className="col-form-label">
                &nbsp;&nbsp;days from seven days. Actual days, start/finish
                times will be variable and in accordance with the rota.
              </label>
              <label className="col-form-label">
                You may be required to work additional hours when authorised and
                as necessitated by the needs of the business.
              </label>
            </div>
            <h6 className="font-weight-bold">REMUNERATION</h6>
            <div className="form-group row no-gutters">
              <label className="col-auto col-form-label">
                Your salary is currently&nbsp;&nbsp;
              </label>
              <div className="col-2 input-group-prepend">
                <span
                  className="input-group-text"
                  css={css`
                    background-color: transparent;
                    border: none;
                  `}
                >
                  £
                </span>
                <Input type="number" className="form-control" />
              </div>
              <label className="col-form-label">
                &nbsp;&nbsp; per hour/ annum payable monthly by BACS monthly in
                arrears as detailed on your pay statement.
              </label>
            </div>
            <p>
              Your salary is set at such a level as to compensate for the need
              for occasional additional hours. We will ensure that you always
              receive no less than the National Minimum Wage/National Living
              Wage.
            </p>

            <h6 className="font-weight-bold">COLLECTIVE AGREEMENTS</h6>
            <p>
              No collective agreements directly affect your terms and conditions
              of employment.
            </p>
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
            <div>
              <h6 className="font-weight-bold">SICKNESS PAY AND CONDITIONS</h6>
              <p>
                There is no contractual sickness/injury payments scheme in
                addition to SSP. Conditions relating to the above are shown in
                the Employee Handbook to which you should refer.
              </p>
            </div>
            <div>
              <h6 className="font-weight-bold">
                48 HOURS MAXIMUM AVERAGE WORKING WEEK (SALARIED EMPLOYEE ONLY)
              </h6>
              <p>
                The Working Time Regulations 1998 provide that the average
                working week, including overtime, shall not exceed 48 hours. The
                Company and the Worker agree that this limit shall not apply to
                the Worker. This Agreement will remain in force indefinitely.
                The Worker, or the Company, may terminate this Agreement at any
                time by giving not less than three months’ written notice to the
                other.
              </p>
            </div>
            <ConfirmAcknowledgement />
            <div>
              <h6 className="font-weight-bold">
                CAPABILITY AND DISCIPLINARY PROCEDURES
              </h6>
              <p>
                Your attention is drawn to the disciplinary rules applicable to
                your employment and the procedures that will apply when dealing
                with capability or disciplinary issues are shown under the
                headings “Capability Procedures” and “Disciplinary Procedures”
                in the Employee Handbook to which you should refer. These
                procedures do not form part of your contract.
              </p>
            </div>
            <div>
              <h6 className="font-weight-bold">
                CAPABILITY/DISCIPLINARY APPEAL PROCEDURE
              </h6>
              <p>
                Should you be dissatisfied with any decision to take action or
                dismiss you on capability/disciplinary grounds, you should
                apply, either verbally or in writing, to the Managing Director
                within five working days of the decision you are complaining
                against. Further information can be found in the Employee
                Handbook under the heading “Capability/Disciplinary Appeal
                Procedure” to which you should refer.
              </p>
            </div>
            <div>
              <h6 className="font-weight-bold">GRIEVANCE PROCEDURE</h6>
              <p>
                Should you feel aggrieved at any matter relating to your
                employment, you should raise the grievance with your Line
                Manager either verbally or in writing. Further information can
                be found in the Employee Handbook.
              </p>
            </div>
            <ConfirmAcknowledgement />
            <div>
              <h6 className="font-weight-bold">
                NOTICE OF TERMINATION TO BE GIVEN BY EMPLOYER
              </h6>
              <p>
                Up to successful completion of your probationary period – Nil.
                On successful completion of your probationary period but less
                than 5 years’ service – 2 weeks. 5 years’ service or more - 1
                week for each completed year of service to a maximum of 12 weeks
                after 12 years.
              </p>
            </div>
            <div>
              <h6 className="font-weight-bold">
                NOTICE OF TERMINATION TO BE GIVEN BY EMPLOYEE
              </h6>
              <p>
                Under 1 month’s service – 1 Week. 1 month up to successful
                completion of your probationary period - 2 weeks. On successful
                completion of your probationary period - 1 month.
              </p>
            </div>
            <div>
              <h6 className="font-weight-bold">PAY IN LIEU OF NOTICE</h6>
              <p>
                We reserve the contractual right to give pay in lieu of all or
                any part of the above notice by either party.
              </p>
            </div>
            <div>
              <h6 className="font-weight-bold">PENSION AND PENSION SCHEME</h6>
              <p>
                When required, we will operate a contributory pension scheme to
                which you will be auto-enrolled into (subject to the conditions
                of the scheme). Further details are available from your Line
                Manager.
              </p>
            </div>
            <div>
              <h6 className="font-weight-bold">PROCEDURES</h6>
              <p>
                You shall comply with any rules, policies and procedures in
                force from time to time including those set out in the Employee
                Handbook, a copy of which will be made available to you and a
                copy of which you can request at any time. The Employee Handbook
                does not form part of this agreement and we may amend it at any
                time. To the extent that there is any conflict between the terms
                of this agreement and the Employee Handbook, this agreement and
                related any agreements shall prevail.
              </p>
            </div>
            <ConfirmAcknowledgement />
            <div>
              <h6 className="font-weight-bold">
                RESTRICTIVE COVENANT AGREEMENT
              </h6>
              <p>
                The Employee agrees to be bound by the restrictive covenants set
                out in this Agreement, and further agrees that this Agreement
                forms part of, and is incorporated into, their contract of
                employment with the Company.
              </p>
              <p>
                <u>
                  <strong>
                    <em>DEFINITIONS</em>
                  </strong>
                </u>
              </p>
              <p>
                "Restricted Business" shall mean any business or activity
                carried on by the Company at any time during the Relevant Period
                and in which the Employee shall have been directly concerned
                during the Relevant Period. "Restricted Customers" shall mean
                any person, firm or Company or other organisation or entity who
                was at any time in the Relevant Period a Customer of the
                Company. "Prospective Customers" shall mean any person, firm,
                Company or other organisation or entity who at the date of
                termination of the Employee's employment with the Company was
                engaged in negotiation with the Company with a view to engaging
                the Company's services. "Relevant Period" shall mean the
                three-month period preceding the date of termination of the
                Employee's employment with the Company, ending on that date.
              </p>
            </div>
            <div>
              <h6 className="font-weight-bold">
                CLAUSE 1: NON-SOLICITATION AND NON-DEALING COVENANTS
              </h6>
              <p>
                <strong>Of Restricted Customers:</strong>
                <br />
                The Employee shall not, during the period of three months after
                the date of termination of their employment with the Company,
                directly or indirectly on their own account or on behalf of or
                in conjunction with any person, firm, company or other
                organisation or entity either: conduct Restricted Business; or
                canvass or solicit or by any other means seek to conduct
                Restricted Business; with any Restricted Customer whom the
                Employee shall have had material dealings in the course of their
                duties during the Relevant Period.
              </p>
              <p>
                <strong>Of prospective Customers:</strong>
                <br />
                The Employee shall not during the period of three months after
                the date of termination of their employment with the Company,
                directly or indirectly on their own account or on behalf of or
                in conjunction with any person, firm, company or other
                organisation or entity either: conduct Restricted Business; or
                canvass or solicit or by any other means seek to conduct
                Restricted Business; with any Prospective Customer whom the
                Employee shall have had material dealings in the course of their
                duties during the Relevant Period.
              </p>
            </div>
            <ConfirmAcknowledgement />
            <div>
              <h6 className="font-weight-bold">CLAUSE 2: CONFIDENTIALITY</h6>
              <p>
                The Employee shall not make use of, divulge or communicate to
                any person (save in the proper performance of their duties) any
                trade secrets or other confidential information of or relating
                to the Company, or that of other persons or bodies with whom the
                Company has dealings of any sort, which the Employee may have
                received or obtained, or has otherwise been acquired by them in
                confidence, whilst in the employment of the Company. The
                restriction shall continue to apply after the termination of
                employment without limit in point of time but shall cease to
                apply to information ordered to be disclosed by a Court of
                competent jurisdiction or otherwise required to be disclosed by
                law.
              </p>
              <p>
                Confidential information shall include but shall not be limited
                to 'customer information'. 'Customer information' includes
                information relating to: the names or addresses or telephone
                numbers of the Company's customers and/or the employees of such
                customers with whom the Company has had contact. the
                requirements of such customers for food and beverage services.
                The Employee is to exercise reasonable care to keep safe all
                documentary or other material containing confidential
                information, and shall at the time of termination of their
                employment with the Company, or at any other time upon demand,
                return to the Company any such material in their possession.
              </p>
            </div>
            <ConfirmAcknowledgement />
            <div>
              <h6 className="font-weight-bold">CLAUSE 3 COPYRIGHT</h6>
              <p>
                All written material, whether held on paper, electronically or
                magnetically which was made or acquired by the Employee during
                the course of employment with the Company, is the Company's
                property and copyright. At the time of termination of employment
                with the Company, or at any other time upon demand, the Employee
                shall return to the Company any such material in their
                possession.
              </p>
            </div>
            <ConfirmAcknowledgement />
            <div>
              <h6 className="font-weight-bold">
                CLAUSE 4: NON-POACHING OF EMPLOYEES
              </h6>
              <p>
                The Employee shall not either during their employment with the
                Company or during the period of three months after the date of
                termination of their employment, directly or indirectly induce
                or seek to induce any management, kitchen staff, office staff,
                team members and supervisors who was employed by the Company at
                the date of termination of the Employee's employment and with
                whom they had material contact/dealings to leave the employment
                of the Company, whether or not this would constitute a breach of
                contract on the part of the aforementioned other employee.
              </p>
            </div>
            <div>
              <h6 className="font-weight-bold">
                CLAUSE 5: PREVENTION OF EMPLOYMENT BY CUSTOMERS
              </h6>
              <p>
                The Employee shall not during the period of three months after
                the date of termination of their employment with the Company
                directly or indirectly be engaged or employed by any Restricted
                Customer with whom the Employee shall have had material dealings
                in the course of their duties during the Relevant Period.
              </p>
            </div>
            <ConfirmAcknowledgement />
            <div>
              <h6 className="font-weight-bold">CLAUSE 6: NON-COMPETITION</h6>
              <p>
                The Employee hereby undertakes with the Company that they will
                not (without the prior written consent of the Company) during
                their employment and during the period of three months after the
                date of termination of their employment whether by themselves,
                through their employees or agents or otherwise or howsoever, and
                whether on their own behalf of any other person, firm, Company,
                or other organisation directly or indirectly in competition with
                the Company, be employed or engaged or otherwise conduct any
                Restricted Business.
              </p>
              <p>
                The employee hereby undertakes with the Company that they will
                not at any time after the termination of their employment in the
                course of carrying on any trade or business, claim, represent or
                otherwise indicate any association with the Company, or for the
                purpose of carrying on or retaining any business or custom,
                claim, represent or otherwise indicate any past association with
                the Company to its detriment.
              </p>
            </div>
            <ConfirmAcknowledgement />
            <div>
              <h6 className="font-weight-bold">
                CLAUSE 7 INTELLECTUAL PROPERTY
              </h6>
              <p>
                It is anticipated that in the course of the employee’s duties
                they may make or discover intellectual property and, in this
                respect,, they have a special obligation to further the
                interests of the Company.
              </p>
              <p>
                Intellectual property includes patents, registered or
                unregistered trademarks and designs, utility models, copyrights,
                including design copyrights, applications for any of the
                foregoing and the right to apply for them in any part of the
                world, discoveries, creations, inventions or improvements upon
                or additions to an invention, confidential information, know-how
                and any research relating to the above, business names, whether
                registerable or not, moral rights and any similar rights in any
                country.
              </p>
              <p>
                Subject to the provisions of the Patents Act 1977 and the
                Copyright, Designs and Patents Act 1988, if any time during the
                employee’s employment they make or discover or participate in
                the making or discovery of any intellectual property relating to
                or capable of being used in the business carried on by the
                Company, the employee must communicate the details forthwith to
                the Company and such intellectual property will be the absolute
                property of the Company. At the Company’s request and expense,
                the employee must give and supply all such information, data,
                drawings and assistance as may be necessary to enable the
                Company to exploit the intellectual property to best advantage,
                and must execute all documents and do such things as may be
                necessary or desirable for obtaining patent and other protection
                for the intellectual property in such parts of the world as may
                be specified by the Company and for vesting the same in our
                Company or as they may direct.
              </p>
              <p>
                The employee irrevocably appoints the Company in their name and
                on their behalf to sign and execute such instruments and do such
                things and generally to use their name for the purposes of
                giving to the Company (or their nominees) the full benefit of
                the provisions of this clause. A certificate in writing signed
                by the Company that an instrument or act falls within the
                authority conferred by this clause will be conclusive evidence
                that such is the case.
              </p>
              <p>
                If while in the employment of the Company the employee makes, or
                discovers intellectual property which does not become the
                property of the Company then, subject to the provisions of the
                Patents Act 1977, the Company will have the right to acquire for
                themselves or their nominee the employee’s right therein on fair
                and reasonable terms, to be agreed or settled by a single
                arbitrator appointed by the President of Chartered Institute of
                Arbitrators who shall adjudicate at our joint expense.
              </p>
              <p>
                The rights and obligations arising under this clause will
                continue to have full force and effect after the employee’s
                employment has terminated and will be binding upon their
                representatives.
              </p>
            </div>
            <ConfirmAcknowledgement />
            <div>
              <h6 className="font-weight-bold">CLAUSE 8 SOCIAL MEDIA</h6>
              <p>
                Any work content or material, or contacts or connections list,
                created by the Employee during the course of their employment,
                on any of their authorised social networking sites (ownership of
                which vests in the Company) shall remain, at all times, the
                property of the Company. Accordingly, upon termination of their
                employment, the Employee shall hand over to the Company, the
                access rights to their accounts, together with any work content
                or material, and any contacts or connections list.
              </p>
            </div>
            <div>
              <h6 className="font-weight-bold">SEVERABILITY CLAUSE</h6>
              <p>
                Each of the restrictions contained in this Restrictive Covenant
                Agreement is intended to be separate and severable. In the event
                that any of the restrictions set out above shall be held to be
                void, then its/their deletion shall not affect the remainder of
                this Agreement, whose restrictions shall continue to apply with
                such deletion as may be necessary to make it valid and
                effective.
              </p>
            </div>
            <ConfirmAcknowledgement />
            <div>
              <h6 className="font-weight-bold">AMENDING TERMS</h6>
              <p>
                We reserve the right to make reasonable changes to any of your
                terms of employment. You will be notified in writing of any
                change as soon as possible and in any event within one month of
                the change.
              </p>
              <p>
                I acknowledge receipt of this statement and agree that, for the
                purpose of the Working Time Regulations, any applicable
                entitlements and provisions constitute a Relevant Agreement.
              </p>
              <p>
                <strong>
                  You will be required to sign a paper copy of your employment
                  contract in witness of your line manager or representative
                  appointed by kiss the hippo.
                </strong>
              </p>
            </div>
            <ConfirmAcknowledgement />
            <Link to="/h-safety">
              <CenteredButton type="submit" value="submit" />
            </Link>
          </form>
        </div>
      </div>
    </DivWithScroll>
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
      <Input type="date" className="form-control" />
      <br />
    </div>
  );
}
