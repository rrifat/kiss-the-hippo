/**@jsx jsx */
import {jsx, css} from '@emotion/core';
import {Link} from '@reach/router';
import {CenteredButton} from '../components/lib';

export default function Riddor() {
  return (
    <div
      className="col-sm-12 h-100"
      css={css`
        overflow-y: scroll;
      `}
    >
      <div className="container">
        <div className="row">
          <div className="col-sm-9 text-center">
            <h3 className="py-4">
              <b>
                <span className="text-uppercase">RIDDOR</span> information
                leaflet
              </b>
            </h3>
            <p>
              <span className="text-uppercase">
                <b>RIDDOR:</b>{' '}
              </span>
              Reporting of Injuries, Diseases and Dangerous Occurrences
            </p>
          </div>
          <div className="col-sm-9 mb-1">
            <h6>
              <b>
                What is <span className="text-uppercase">RIDDOR?</span>
              </b>
            </h6>
            <p>
              <span className="text-uppercase">RIDDOR</span> is the law that
              requires employers, and other people in control of work premises,
              to report and keep records of:
            </p>
            <ul>
              <li> work-related accidents which cause death;</li>
              <li>
                {' '}
                work-related accidents which cause certain serious injuries
                (reportable injuries)
              </li>
              <li> diagnosed cases of certain industrial diseases; and</li>
              <li>
                {' '}
                certain ‘dangerous occurrences’ (incidents with the potential to
                cause harm).
              </li>
            </ul>
          </div>
          <div className="col-sm-9 mb-3">
            <strong>
              <p>
                Please confirm which statement is false:{' '}
                <span className="text-uppercase">RIDDOR</span> keeps records of-
              </p>
              <ul className="list-unstyled">
                <li>
                  <input type="radio" /> work-related accidents which cause
                  death;
                </li>
                <li>
                  <input type="radio" /> work-related accidents which cause
                  certain serious injuries (reportable injuries)
                </li>
                <li>
                  <input type="radio" /> diagnosed cases of certain industrial
                  diseases; and
                </li>
                <li>
                  <input type="radio" /> certain ‘dangerous occurrences’
                  (incidents with the potential to cause harm).
                </li>
              </ul>
            </strong>
          </div>
          <div className="col-sm-9 pb-2">
            <h6>
              <b>Why report?</b>
            </h6>
            <p>
              Reporting certain incidents is a legal requirement. The report
              informs the enforcing authorities (HSE, local authorities ETC.)
              about deaths, injuries, occupational diseases and dangerous
              occurrences, so they can identify where and how risks arise, and
              whether they need to be investigated.
            </p>
            <p>
              Allows the enforcing authorities to target their work and provide
              advice about how to avoid work-related deaths, injuries, ill
              health and accidental loss.
            </p>
          </div>
          <div className="col-sm-9 mb-3">
            <strong>
              <p>Please confirm which statement is false:</p>
              <ul className="list-unstyled">
                <li>
                  <input type="radio" /> Reporting certain incidents is a legal
                  requirement.
                </li>
                <li>
                  <input type="radio" /> Reporting incidents will always
                  penalise employer.{' '}
                </li>
              </ul>
            </strong>
          </div>
          <div className="col-sm-9">
            <h6>
              <b>What must be reported?</b>
            </h6>
            <h6 className="font-italic">
              <b>Work-related accidents</b>
            </h6>
            <p>
              For the purposes of RIDDOR, an accident is a separate,
              identifiable, unintended incident that causes physical injury.
              This specifically includes acts of non-consensual violence to
              people at work.
            </p>
            <p>
              Not all accidents need to be reported, a RIDDOR report is required
              only when:
            </p>
            <ul className="list-unstyled">
              <li className="pl-4">-the accident is work-related; and</li>
              <li className="pl-4">
                -it results in an injury of a type which is reportable (as
                listed under ‘Types of reportable injuries’).
              </li>
            </ul>
            <p>
              When deciding if the accident that led to the death or injury is
              work-related, the key issues to consider are whether the accident
              was related to:
            </p>
            <ul className="list-unstyled">
              <li className="pl-4">
                -the way the work was organised, carried out or supervised;
              </li>
              <li className="pl-4">
                -any machinery, plant, substances or equipment used for work;
                and the condition of the site or premises where the accident
                happened.
              </li>
            </ul>
            <p>
              If none of these factors are relevant to the incident, it is
              likely that a report will not be required.
            </p>
          </div>
          <div className="col-sm-9 mb-3">
            <strong>
              <p>Please confirm which statement is True-</p>
              <ul className="list-unstyled">
                <li>
                  <input type="radio" /> Report only work related accident True
                </li>
                <li>
                  <input type="radio" />{' '}
                  <span className="text-uppercase">RIDDOR</span> includes
                  disputes between employee and employer
                </li>
              </ul>
            </strong>
          </div>
          <div className="col-sm-9 mb-3">
            <h6 className="pb-2">
              <b>Types of reportable injury</b>
            </h6>
            <h6 className="font-italic">
              <b>Deaths</b>
            </h6>
            <p>
              All deaths to workers and non-workers must be reported if they
              arise from a work-related accident, including an act of physical
              violence to a worker. Suicides are not reportable, as the death
              does not result from a work-related accident.
            </p>
            <h6 className="font-italic">
              <b>Specified injuries to workers</b>
            </h6>
            <p>
              The list of ‘specified injuries’ in RIDDOR 2013 (regulation 4)
              includes
            </p>
            <ul className="list-unstyled">
              <li className="pl-4">
                -a fracture, other than toe fingers, thumbs and toes;
              </li>
              <li className="pl-4">
                -amputation of an arm, hand, finger, thumb, leg, foot or toe;;
              </li>
              <li className="pl-4">
                -permanent loss of sight or reduction of sight
              </li>
              <li className="pl-4">
                -crush injuries leading to internal organ damage,
              </li>
              <li className="pl-4">
                -serious burns (covering more than 10% of the body, or damaging
                the eyes,
              </li>
              <li className="pl-4">
                -respiratory system or other vital organs);
              </li>
              <li className="pl-4">
                -scalping’s (separation of skin from the head) which require
                hospital treatment;
              </li>
              <li className="pl-4">
                -unconsciousness caused by head injury or asphyxia;
              </li>
              <li className="pl-4">
                -any other injury arising from working in an enclosed space,
                which leads to hypothermia, heat-induced illness or requires
                resuscitation or admittance to hospital for more than 24 hours.
              </li>
            </ul>
          </div>
          <div className="col-sm-9 font-weight-bold mb-5">
            <p>Please confirm which statement is True-</p>
            <ul className="list-unstyled">
              <li>
                <input type="radio" /> permanent loss of sight or reduction of
                sight falls into the list of ‘specified injuries’ True
              </li>
              <li>
                <input type="radio" /> riddor includes potential health issues
                due to non-compliance
              </li>
            </ul>
          </div>
          <div className="col-sm-9">
            <h6 className="font-italic">
              <b>Over-seven-day injuries to workers</b>
            </h6>
            <p>
              This is where an{' '}
              <b>
                {' '}
                employee, or self-employed person, is away from work or unable
                to perform their normal work duties for more than seven
                consecutive days
              </b>{' '}
              (not counting the day of the accident).
            </p>
            <strong>
              <p>
                Is it mandatory to report a worker away from work or unable to
                perform their normal work duties for more than seven consecutive
                days yes /no
              </p>
            </strong>
          </div>
          <div className="col-sm-9 mb-3">
            <h6 className="font-italic">
              <b>Injuries to non-workers</b>
            </h6>
            <p>
              Work-related accidents involving members of the public or people
              who are not at work must be reported if a person is injured and is
              taken from the scene of the accident to hospital for treatment to
              that injury. There is no requirement to establish what hospital
              treatment was actually provided, and no need to report incidents
              where people are taken to hospital purely as a precaution when no
              injury is apparent.
            </p>
            <p>
              If the accident occurred at a hospital, the report only needs to
              be made if the injury is a ‘specified injury’ (see above).
            </p>
            <strong>
              <p>
                You must report -work-related accidents involving members of the
                public or people who are not at work . True/ False
              </p>
            </strong>
          </div>
          <div className="col-sm-9 mb-3">
            <h6>
              <b>Reportable occupational diseases</b>
            </h6>
            <p>
              Employers and self-employed people must report diagnoses of
              certain occupational diseases, where these are likely to have been
              caused or made worse by their work. These diseases include
              (regulations 8 and 9):
            </p>
            <ul className="list-unstyled">
              <li className="pl-4">-severe cramp of the hand or forearm;</li>
              <li className="pl-4">-occupational dermatitis;</li>
              <li className="pl-4">-hand-arm vibration syndrome</li>
              <li className="pl-4">
                -tendonitis or tenosynovitis of the hand or forearm;
              </li>
              <li className="pl-4">-any occupational cancer;</li>
              <li className="pl-4">
                -any disease attributed to an occupational exposure to a
                biological agent.
              </li>
            </ul>
          </div>
          <div className="col-sm-9 mb-3">
            <strong>
              <p>Which one below is not reportable occupational disease-</p>
              <ul className="list-unstyled">
                <li>
                  <input type="radio" /> -occupational dermatitis;
                </li>
                <li>
                  <input type="radio" /> -hand-arm vibration syndrome;
                </li>
                <li>
                  <input type="radio" /> -sore throat
                </li>
                <li>
                  <input type="radio" /> -any occupational cancer;
                </li>
              </ul>
            </strong>
          </div>
          <div className="col-sm-9 mb-3">
            <h6>
              <b>Reportable dangerous occurrences</b>
            </h6>
            <p>
              Dangerous occurrences are certain, specified ‘near-miss’ events
              (incidents with the potential to cause harm.) Not all such events
              require reporting. There are 27 categories of dangerous
              occurrences that are relevant to most workplaces. For example:
            </p>
            <ul className="list-unstyled">
              <li className="pl-4">
                -the collapse, overturning or failure of load-bearing parts of
                lifts and lifting equipment; plant or equipment coming into
                contact with overhead power lines
              </li>
              <li className="pl-4">
                -explosions or fires causing work to be stopped for more than 24
                hours.
              </li>
            </ul>
            <strong>
              <p>
                There are 72 categories of dangerous occurrences. True/False{' '}
              </p>
            </strong>
          </div>
          <div className="col-sm-9 mb-3">
            <h6>
              <b>Recording requirements</b>
            </h6>
            <p>
              <b>Records</b> of incidents covered by RIDDOR are also important.
              They ensure that you collect sufficient information to allow you
              to properly manage health and safety risks. This information is a
              valuable management tool that can be used as an aid to risk
              assessment, helping to develop solutions to potential risks. In
              this way, records also help to prevent injuries and ill health,
              and control costs from accidental loss.
            </p>
            <strong>
              <p>You must keep a record of:</p>
            </strong>
            <ul className="list-unstyled">
              <li className="pl-4">
                -any{' '}
                <b> accident, occupational disease or dangerous occurrence</b>{' '}
                which requires reporting under RIDDOR; and
              </li>
              <li className="pl-4">
                -any other occupational accident causing injuries that result in
                a worker being away from work or{' '}
                <b> incapacitated for more than three consecutive days</b> (not
                counting the day of the accident but including any weekends or
                other rest days).You do not have to report over-three-day
                injuries, unless the incapacitation period goes on to exceed
                seven days.
              </li>
            </ul>
            <p>
              If you are an employer who has to keep an accident book, the
              record you make in this will be enough.
            </p>
          </div>
          <div className="col-sm-9 mb-3">
            <p>
              You <b>must</b> produce RIDDOR records when asked by HSE, local
              authority inspectors.
            </p>
            <strong>
              <p>
                You should only keep records of accident, occupational disease
                or dangerous occurrence which lead to admittance in
                hospital.True /False
              </p>
            </strong>
          </div>
          <div className="col-sm-9">
            <h6 className="pb-2">
              <b>How to report</b>
            </h6>
            <h6 className="font-italic">
              <b>Online</b>
            </h6>
            <p>
              Go to <a href="www.hse.gov.uk/riddor">www.hse.gov.uk/riddor</a>{' '}
              and complete the appropriate online report form. The form will
              then be submitted directly to the RIDDOR database. You will
              receive a copy for your records.
            </p>
            <h6 className="font-italic">
              <b>Telephone</b>
            </h6>
            <p>
              All incidents can be reported online but a telephone service
              remains for reporting <b> fatal and specified injuries only.</b>{' '}
              Call the Incident Contact Centre on 0845 300 9923 (opening hours
              Monday to Friday 8.30 am to 5 pm.
            </p>
            <h6 className="font-italic">
              <b>Reporting out of hours</b>
            </h6>
            <p>
              HSE has an out-of-hours duty officer. Circumstances where HSE may
              need to respond out of hours include:
            </p>
            <ul className="list-unstyled">
              <li className="pl-4">
                -a work-related death or situation where there is a strong
                likelihood of death following an incident at, or connected with,
                work;
              </li>
              <li className="pl-4">
                -a serious accident at a workplace so that HSE can gather
                details of physical evidence that would be lost with time; and
                following a major incident at a workplace where the severity of
                the incident, or the degree of public concern, requires an
                immediate public statement from either HSE or government
                ministers.
              </li>
            </ul>
            <p>
              If you want to report less serious incidents out of normal working
              hours, you should complete an online form at{' '}
              <a href="www.hse.gov.uk/riddor/report.htm#online">
                www.hse.gov.uk/riddor/report.htm#online.
              </a>
            </p>
            <p className="font-italic">
              <b>
                I read and understood all the information above and agree to
                apply them.
              </b>
            </p>
            <p>
              Enter your date of birth confirming the acknowledgement of above
              information.
            </p>
            <input type="date" className="form-control mb-3" />
          </div>
        </div>
        <Link to="/ladder">
          <CenteredButton type="submit" value="submit" />
        </Link>
      </div>
    </div>
  );
}
