/**@jsx jsx */
import {jsx, css} from '@emotion/core';
import SafetyTwo from './safety-two';
import {CenteredButton, DivWithScroll} from '../components/lib';
import {useForm, FormContext} from 'react-hook-form';
import * as itemClient from '../clients/item-client';
import {useAuth} from '../context/auth-context';

export default function HealthSafety({navigate}) {
  const {
    page,
    setPage,
    userData: {user},
  } = useAuth();
  const methods = useForm();
  const {handleSubmit, register} = methods;
  const onSubmit = (data, e) => {
    e.preventDefault();
    itemClient
      .create({user, page, data})
      .then(({data: response}) => {
        const {data} = response;
        if (data && data.nextPageNo) {
          setPage(data.nextPageNo);
          navigate('/f-safety');
        }
      })
      .catch(err => console.log(err.response));
  };
  return (
    <DivWithScroll className="col-sm-12 h-100">
      <div className="container">
        <div className="row col-sm-9">
          <div className="pt-5 pb-3">
            <h3>Health and Safety Essential</h3>
          </div>
          <p>
            <b>
              Please study the notes carefully and raise any questions that you
              have with your manager.
            </b>
          </p>
          <FormContext {...methods}>
            <form onSubmit={handleSubmit(onSubmit)}>
              <div className="row col-sm-12">
                <h5 className="font-weight-bold">
                  Our health and safety policy
                </h5>
                <p>
                  A full copy of our Health and Safety Policy is available for
                  you to read at any time. Please ask your manager where it is
                  kept and make a note of it here:
                </p>
                <input
                  name="hSafety1"
                  ref={register({required: true})}
                  type="text"
                  className="form-control"
                />
                <br />
                <br />
                <p>This document which contains:</p>
                <ol type="a">
                  <li>A signed Statement of Policy.</li>
                  <li>
                    Details of people who are responsible for looking after your
                    health and safety.
                  </li>
                  <li>Your own health and safety responsibilities</li>
                  <li>
                    The arrangements that are in place within the kiss the hippo
                    (H & S) manual to maintain health and safety standards.
                  </li>
                </ol>
                <p>
                  The signed Statement of Policy is displayed here (Ask your
                  manager to assist you and write the location in the box
                  provided):
                </p>
                <input
                  type="text"
                  className="form-control"
                  name="hSafety2"
                  ref={register({required: true})}
                />
                <h6 className="font-weight-bold mt-2">Your responsibilities</h6>
                <div className="row col-sm-12">
                  <p>You are responsible for:</p>
                  <ol type="a">
                    <li>
                      Co-operating with your manager to achieve a healthy and
                      safe workplace.
                    </li>
                    <li>
                      Taking reasonable care of your own health & safety and of
                      others.
                    </li>
                    <li>
                      Participating in health and safety training as requested.
                    </li>
                    <li>
                      Not interfering with, or misusing, anything provided in
                      the interests of health and safety.
                    </li>
                    <li>
                      Using access equipment for work at height as provided.
                    </li>
                    <li>
                      Accepting opportunities for counselling when recommended.
                    </li>
                    <li>
                      Reporting any health and safety concerns to the ‘Competent
                      Person’ or your Manager.
                    </li>
                  </ol>
                </div>
                <h5 className="font-weight-bold mt-2">
                  Important health and safety information for your attention
                </h5>
                <div className="row">
                  <div className="col-sm-9">
                    <p>
                      Please study the ‘Health and Safety Law – What You Need to
                      Know‘ poster. It is located here (Ask your manager to
                      assist you and write the location in the box provided):
                    </p>
                    <input
                      type="text"
                      className="form-control"
                      name="hSafety3"
                      ref={register({required: true})}
                    />
                  </div>
                  <div className="col-sm-3">
                    <img
                      src={`${process.env.PUBLIC_URL}/images/safety-one.png`}
                      alt="safety one"
                      width="200"
                      height="100%"
                    />
                  </div>
                </div>
                <h5 className="font-weight-bold mt-2">Accidents</h5>
                <div className="row col-sm-12">
                  <p>
                    Some of the most common accidents in our industry includes:
                  </p>
                  <ol type="a">
                    <li>Slips on wet or greasy floors.</li>
                    <li>Trips over poorly maintained floors.</li>
                    <li>Burns from hot oil or equipment.</li>
                    <li>Scalds from hot liquids or steam.</li>
                    <li>Cuts from knives and food processing equipment.</li>
                    <li>Misuse of cleaning chemicals.</li>
                    <li>Injuries from lifting and carrying heavy loads.</li>
                  </ol>
                </div>
                <div className="row col-sm-12">
                  <p>Many accidents are preventable.Help us by:</p>
                  <ol type="a">
                    <li>Mopping up spillages immediately.</li>
                    <li>Using wet-floor warning signs, when appropriate.</li>
                    <li>
                      Wearing the personal protective equipment (PPE) that you
                      are provided with.
                    </li>
                    <li>
                      Removing all obstacles which would cause people to trip.
                    </li>
                    <li>
                      Notifying your manager of anything that could cause
                      accidents to occur.
                    </li>
                    <li>Using the correct manual handling techniques.</li>
                    <li>Controlling the risks from working at height.</li>
                    <li>
                      Not using any work equipment for which you have not had
                      training.
                    </li>
                    <li>
                      Carrying out your work responsibly in accordance with the
                      proper safety rules.
                    </li>
                  </ol>
                </div>
                <h6 className="font-weight-bold">
                  What should you do if you have an accident?
                </h6>
                <p>
                  <strong>What is an ‘Accident’</strong>
                  <br /> ‘Any unplanned event that results, or could have
                  resulted, in personal injury or ill health; damage to, or loss
                  of, property, plant or materials’ All accidents{' '}
                  <strong>
                    <em>must</em>
                  </strong>{' '}
                  be reported via accident reporting form, therefore please
                  ensure you notify any accidents that you have, no matter how
                  minor, to your manager.
                </p>
                <h6 className="font-weight-bold">
                  What should you do if you see someone injured?
                </h6>
                <ol type="a">
                  <li>
                    Get help – either call the Emergency First Aider at
                    Work/First Aider at Work or ensure someone does; see the
                    notice board and make a note of the contact details here:
                    <input
                      type="text"
                      className="form-control m-2"
                      name="hSafety4"
                      ref={register({required: true})}
                    />
                  </li>
                  <li>Reassure the patient that help is on the way.</li>
                  <li>
                    Do not move the patient or offer drinks etc., you may make
                    injuries worse.
                  </li>
                </ol>
                <div className="row">
                  <div className="col-sm-7">
                    <h6 className="font-weight-bold">
                      Locations of our first aid boxes:
                    </h6>
                    <input
                      type="text"
                      className="form-control"
                      name="hSafety5"
                      ref={register({required: true})}
                    />
                    <br />
                    <br />
                    <h6 className="font-weight-bold">
                      The list of our qualified first aiders is located here:
                    </h6>
                    <input
                      type="text"
                      className="form-control"
                      name="hSafety6"
                      ref={register({required: true})}
                    />
                  </div>
                  <div className="col-sm-3 offset-sm-2">
                    <img
                      src={`${process.env.PUBLIC_URL}/images/toolbox.png`}
                      alt="toolbox"
                      width="150"
                      height="150"
                    />
                  </div>
                </div>
                <div className="row mt-2">
                  <h5 className="font-weight-bold col-sm-12">Fire</h5>
                  <h6 className="font-weight-bold col-sm-12">
                    The fire triangle
                  </h6>
                  <p className="col-sm-12">
                    When all 3 components of the fire triangle are present, a
                    fire can start.
                  </p>
                  <div className="col-6 offset-3">
                    <div
                      css={css`
                        &::before {
                          content: 'open windows open doors';
                          position: absolute;
                          left: -40px;
                          top: 70px;
                          right: 80%;
                        }
                        &::after {
                          content: 'hot surfaces naked flames electrical equipment static electricity';
                          position: absolute;
                          right: -40px;
                          top: 60px;
                          left: 55%;
                        }
                      `}
                    >
                      <img
                        src={`${process.env.PUBLIC_URL}/images/fire.png`}
                        alt="fire"
                      />
                      <p>
                        combustible materials flammable liquids flammable gases
                      </p>
                      <br />
                      <p>
                        <em>
                          Remove any part of the triangle and the fire dies Keep
                          them apart and the fire can’t start!
                        </em>
                      </p>
                    </div>
                  </div>
                  <h6 className="font-weight-bold col-12">
                    Most fires can be prevented by some very simple steps:
                  </h6>
                  <ol type="a">
                    <li>
                      Keep your workplace tidy, free from a build-up of rubbish.
                    </li>
                    <li>Avoid leaving naked flames unattended.</li>
                    <li>Store flammable substances/fuels correctly.</li>
                    <li>
                      Report all electrical faults and potential fire hazards to
                      your manager.
                    </li>
                  </ol>
                  <h6 className="font-weight-bold col-12">
                    In the event of a fire what do you need to know?
                  </h6>
                  <p>Fill in the following information:</p>
                  <div className="row col-12">
                    <div className="form-group row">
                      <label className="col-12 col-form-label">
                        Where is your nearest fire alarm point?
                      </label>
                      <div className="col-12">
                        <input
                          type="text"
                          className="form-control"
                          name="hSafety7"
                          ref={register({required: true})}
                        />
                      </div>
                    </div>
                    <div className="form-group row">
                      <label className="col-12 col-form-label">
                        Where is your nearest fire extinguisher?
                      </label>
                      <div className="col-12">
                        <input
                          type="text"
                          className="form-control"
                          name="hSafety8"
                          ref={register({required: true})}
                        />
                      </div>
                    </div>
                    <div className="form-group row">
                      <label className="col-12 col-form-label">
                        What type of extinguisher is it?
                      </label>
                      <div className="col-12">
                        <input
                          type="text"
                          className="form-control"
                          name="hSafety9"
                          ref={register({required: true})}
                        />
                      </div>
                    </div>
                    <div className="form-group row">
                      <label className="col-12 col-form-label">
                        What type of fire can it be used on?
                      </label>
                      <div className="col-12">
                        <input
                          type="text"
                          className="form-control"
                          name="hSafety10"
                          ref={register({required: true})}
                        />
                      </div>
                    </div>
                    <div className="form-group row">
                      <label className="col-12 col-form-label">
                        What type of extinguisher should you use on a deep fat
                        fryer fire?
                      </label>
                      <div className="col-12">
                        <input
                          type="text"
                          className="form-control"
                          name="hSafety11"
                          ref={register({required: true})}
                        />
                      </div>
                    </div>
                    <div className="form-group row">
                      <label className="col-12 col-form-label">
                        In the kitchen, where is the fire suppression system
                        activation point (if applicable)?
                      </label>
                      <div className="col-12">
                        <input
                          type="text"
                          className="form-control"
                          name="hSafety12"
                          ref={register({required: true})}
                        />
                      </div>
                    </div>
                    <div className="form-group row">
                      <label className="col-12 col-form-label">
                        In the kitchen, where is the gas shut-off point?
                      </label>
                      <div className="col-12">
                        <input
                          type="text"
                          className="form-control"
                          name="hSafety13"
                          ref={register({required: true})}
                        />
                      </div>
                    </div>
                    <div className="form-group row">
                      <label className="col-12 col-form-label">
                        Where is your nearest fire exit?
                      </label>
                      <div className="col-12">
                        <input
                          type="text"
                          className="form-control"
                          name="hSafety14"
                          ref={register({required: true})}
                        />
                      </div>
                    </div>
                    <div className="form-group row">
                      <label className="col-12 col-form-label">
                        Where is a second means of escape?
                      </label>
                      <div className="col-12">
                        <input
                          type="text"
                          className="form-control"
                          name="hSafety15"
                          ref={register({required: true})}
                        />
                      </div>
                    </div>
                    <div className="form-group row">
                      <label className="col-12 col-form-label">
                        Where is your assembly point?
                      </label>
                      <div className="col-12">
                        <input
                          type="text"
                          className="form-control"
                          name="hSafety16"
                          ref={register({required: true})}
                        />
                      </div>
                    </div>
                    <div className="form-group row">
                      <label className="col-12 col-form-label">
                        In the event of an evacuation, who should you report to
                      </label>
                      <div className="col-12">
                        <input
                          type="text"
                          className="form-control"
                          name="hSafety17"
                          ref={register({required: true})}
                        />
                      </div>
                    </div>
                    <div className="form-group row">
                      <label className="col-12 col-form-label">
                        Who should you report fire hazards to?
                      </label>
                      <div className="col-12">
                        <input
                          type="text"
                          className="form-control"
                          name="hSafety18"
                          ref={register({required: true})}
                        />
                      </div>
                    </div>
                  </div>
                </div>
                <div className="row col-12">
                  <h5 className="font-weight-bold">Fire training</h5>
                  <div className="row">
                    <div className="col-12">
                      <p>
                        Every six months, as part of the practice fire drill,
                        you will receive refresher fire training, covering:
                      </p>
                    </div>
                    <div className="col-12">
                      <ol type="a">
                        <li>Fire hazards and safe practices.</li>
                        <li>
                          How to raise the alarm and action on hearing alarm?
                        </li>
                        <li>Gas shutdown/power isolation.</li>
                        <li>
                          Escape routes (location, use and keeping clear) and
                          assembly point.
                        </li>
                        <li>Assisting evacuation of public and disabled.</li>
                        <li>Use and importance of fire doors, door closers.</li>
                      </ol>
                    </div>
                    <div className="col-12">
                      <h6 className="font-weight-bold">
                        What to do if you discover a fire
                      </h6>
                    </div>
                    <div className="col-12">
                      <img
                        src={`${process.env.PUBLIC_URL}/images/alarm.png`}
                        alt="alarm"
                        height="150"
                      />
                      <p className="align-self-center">
                        Raise the alarm using the nearest manual call point– no
                        matter how small the fire.
                      </p>
                    </div>
                    <div className="col-12">
                      <h6 className="font-weight-bold">Fire extinguishers</h6>
                    </div>
                    <div className="col-12">
                      <img
                        src={`${process.env.PUBLIC_URL}/images/fire-extinguishers.png`}
                        alt="fire extinguishers"
                      />
                    </div>
                    <div className="col-12">
                      <p>
                        Fire Marshals may try to tackle the fire if it is small
                        enough, the firefighting equipment is to hand, and they
                        do not put themselves in harm’s way.
                      </p>
                    </div>
                    <div className="col-12">
                      <h6 className="font-weight-bold">
                        What to do if the fire alarm sounds
                      </h6>
                      <div className="row">
                        <div className="col-9">
                          <ol type="a">
                            <li>
                              Keep calm, reassure and assist customers and
                              visitors.
                            </li>
                            <li>
                              Leave the building immediately by the nearest fire
                              exit.
                            </li>
                            <li>Do not stop to collect personal belongings.</li>
                            <li>Move quickly and quietly, do not run.</li>
                            <li>
                              Where possible close windows and always close
                              doors behind you.
                            </li>
                            <li>Go straight to your assembly point.</li>
                            <li>Make sure that you are accounted for.</li>
                            <li>
                              Do not re-enter the building until the ‘all clear’
                              has been given.
                            </li>
                          </ol>
                        </div>
                        <div className="col-2">
                          <img
                            src={`${process.env.PUBLIC_URL}/images/fire-exit.png`}
                            alt="fire exit"
                            width="250"
                            height="100"
                          />
                        </div>
                      </div>
                      <p>
                        <strong>Remember</strong> it is very dangerous to use
                        the wrong firefighting equipment and tackle a blaze that
                        you cannot cope with -
                        <strong>
                          when in doubt leave the fire and evacuate!
                        </strong>
                      </p>
                    </div>
                    <div className="col-12">
                      <h6 className="font-weight-bold">Fire signage</h6>
                      <div className="row col-12">
                        <img
                          src={`${process.env.PUBLIC_URL}/images/hazard.jpg`}
                          alt="hazard table"
                          className="img-fluid"
                          width="600"
                          height="600"
                        />
                      </div>
                    </div>
                  </div>
                </div>
                <SafetyTwo />
              </div>
              <CenteredButton type="submit" value="submit" />
            </form>
          </FormContext>
        </div>
      </div>
    </DivWithScroll>
  );
}
