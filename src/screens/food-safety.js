/**@jsx jsx */
import {jsx, css} from '@emotion/core';
import {CenteredButton} from '../components/lib';
import {Link} from '@reach/router';

export default function FoodSafety() {
  return (
    <div
      className="col-sm-12 h-100"
      css={css`
        overflow-y: scroll;
      `}
    >
      <div className="container">
        <div className="row col-sm-9">
          <div name="title">
            <h3>Food Handlers Essential Food Hygiene</h3>
            <p>
              These notes have been prepared to help you understand the
              ‘essentials’ of food hygiene.
            </p>
            <p>
              Please study the notes carefully and raise any questions that you
              have with your manager.
            </p>
            <p>
              When you have read the notes, please sign and date the
              confirmation slip at the end and return it to your manager for
              their records.
            </p>
          </div>
          <form>
            <div name="policy" className="mt-2">
              <h5 className="font-weight-bold">Our Food Hygiene Policy</h5>
              <p>
                A full copy of our Food Hygiene Policy is available for you to
                read at any time. Please ask your manager where it is kept and
                make a note of it here:
              </p>
              <input type="text" className="form-control" />
              <p>It is a document which contains:</p>
              <ol type="a">
                <li>a signed Statement of Policy;</li>
                <li>
                  details of people who are responsible for standards of food
                  hygiene (and your own responsibilities); and
                </li>
                <li>
                  the arrangements that are in place within the company manual
                  to maintain food hygiene standards.
                </li>
              </ol>
              <p>The signed Statement of Policy is displayed here:</p>
              <input type="text" className="form-control" />
            </div>
            <div name="bacteria" className="mt-5">
              <h5 className="font-weight-bold">Bacteria</h5>
              <p>There are 3 types of bacteria:</p>
              <ol type="a">
                <div className="row">
                  <div className="col-8">
                    <li>
                      friendly bacteria (can be used to make foods such as
                      yoghurt)
                    </li>
                    <li>spoilage bacteria (cause food to ‘go off’)</li>
                  </div>
                  <div className="col-4">
                    <img
                      src={`${process.env.PUBLIC_URL}/images/bacteria.jpg`}
                      alt="bacteria"
                      width="100"
                      height="100"
                    />
                  </div>
                </div>
                <li>pathogenic bacteria (cause food poisoning)</li>
                <li>
                  By following good food hygiene practices, food poisoning can
                  be avoided by:
                </li>
                <li>preventing contamination</li>
                <li>preventing growth of bacteria</li>
                <li>
                  destroying bacteria by thorough cooking or using disinfectants
                </li>
              </ol>
              <div className="row">
                <div className="col-3">
                  <img
                    src={`${process.env.PUBLIC_URL}/images/bacteria2.jpg`}
                    alt="bacteria"
                  />
                </div>
                <div className="col-9">
                  <p>
                    Bacteria multiply by splitting into 2, then those split into
                    4 etc. In ideal conditions this can result in high numbers
                    of bacteria in a short period of time
                  </p>
                  <MultipleChoices
                    options={{0: 'False', 1: 'True'}}
                    question="There are 3 types of bacteria"
                  />
                </div>
              </div>
              <div>
                <p>They need 4 basic requirements to grow:</p>
                <div>
                  <h6 className="font-weight-bold">Food</h6>
                  <p>
                    All bacteria need something to live on - pathogenic bacteria
                    like high-protein foods. If it will receive no further
                    cooking, it is called ‘high-risk’ food. Ready-to-eat (RTE)
                    foods do not necessarily contain protein, but can transfer
                    harmful bacteria.
                  </p>
                </div>
                <div>
                  <h6 className="font-weight-bold">Moisture</h6>
                  <p>
                    Without moisture bacteria cannot grow, which is why drying
                    food is a safe method of preservation.
                  </p>
                </div>
                <div>
                  <h6 className="font-weight-bold">Time</h6>
                  <p>
                    Given the right conditions one single bacterium can become
                    millions in hours. They take between 10 and 20 minutes to
                    multiply in ideal conditions.
                  </p>
                </div>
                <div>
                  <h6 className="font-weight-bold">Warmth</h6>
                  <p>
                    They love temperatures between 8°C and 63°C. Below 8°C
                    bacteria growth slows down. The best temperature for
                    bacterial growth is 37°C – human body temperature.
                  </p>
                  <img
                    src={`${process.env.PUBLIC_URL}/images/hazard4.jpg`}
                    alt="warmth"
                    width="600"
                    height="300"
                  />
                </div>
                <p>
                  Cooked foods must be chilled as rapidly as possible through
                  the danger zone. This can be achieved by using blast chillers,
                  shallow, metal trays, fans or cold water.
                </p>
                <MultipleChoices
                  options={{5: '5', 4: '4'}}
                  question="How many requirements are needed to be met for bacterial
                    growth:"
                />
              </div>
            </div>
            <div name="ready-to-eat" className="mt-5">
              <h5 className="font-weight-bold">Read to eat foods</h5>
              <p>
                Ready-to-eat foods will have no further cooking to kill any
                bacteria that might be present on the food.
              </p>
              <p>Examples of ready-to-eat foods:</p>
              <ol type="a">
                <li>
                  cooked meat and meat products or raw meat to be used in
                  Carpaccio
                </li>
                <li>cooked poultry and poultry products</li>
                <li>dairy products</li>
                <li>cooked eggs or eggs to be eaten raw</li>
                <li>cooked rice (carbohydrate)</li>
                <li>washed fruit and vegetables</li>
              </ol>
              <p>
                We must take great care in the handling and storage of these
                foods - they should be kept out of the danger zone temperatures
                as much as possible and protected from sources of contamination.
              </p>
            </div>
            <div name="contamination" className="mt-5">
              <h5 className="font-weight-bold">Contamination</h5>
              <p>
                <em>Contamination</em> is the occurrence of any objectionable
                matter in the food or food environment.
              </p>
              <p>
                <em>Cross-contamination</em> is the transfer of bacteria from
                contaminated foods to ready-to-eat foods by direct contact or
                indirect contact using a ‘vehicle’ such as hands or a cloth.
              </p>
              <p>There are three main types contamination: </p>
              <p>
                <em>Bacterial</em>: food poisoning bacteria enter the food{' '}
                <br />
                <em>Physical</em>: a ‘foreign body (such as a piece of glass)
                enters the food
                <br />
                <em>Chemical</em>: a chemical (such as a cleaning chemical)
                enters the food
              </p>
              <h6 className="font-weight-bold">Prevent this by:</h6>
              <ol type="a">
                <li>
                  <div className="row">
                    <div className="col-8">
                      storing foods correctly (non-ready to eat foods below/away
                      from ‘ready to eat’ foods – controlling the risk of E.
                      coli O157)
                    </div>
                    <div className="col-4">
                      <img
                        src={`${process.env.PUBLIC_URL}/images/boards.jpg`}
                        alt="chopping board"
                      />
                    </div>
                  </div>
                </li>
                <li>
                  using the correct separate equipment such as knives, chopping
                  boards, slicers, vacuum packing , mincers for RTE and non RTE
                </li>
                <li>washing hands between handling RTE and non RTE foods</li>
                <li>
                  disinfecting food and hand-contact surfaces, (see cleaning
                  section)
                </li>
                <li>ideally, wearing gloves for the handling of RTE foods</li>
                <li>disinfecting the food sink before RTE food use</li>
                <li>only preparing RTE foods in clean areas</li>
                <li>
                  using paper towels to turn off manually operated taps if
                  automatic taps not provided
                </li>
                <li>covering food during storage</li>
                <li>keeping glass out of the kitchen</li>
                <li>never decanting chemicals into unmarked containers</li>
                <li>ensuring lids are tightly fitted to chemical containers</li>
                <li>
                  following company policies and procedures to prevent physical
                  or chemical contamination.
                </li>
              </ol>
              <MultipleChoices
                options={{0: 'False', 1: 'True'}}
                question="There are three main types contamination."
              />
              <div className="my-3">
                <img
                  src={`${process.env.PUBLIC_URL}/images/ready-to-eat-foods.jpg`}
                  alt="ready to eat foods"
                />
              </div>
              <div>
                <h6 className="font-weight-bold">
                  What should you do if you are ill?
                </h6>
                <p>
                  As a food handler, it can be extremely dangerous for you, your
                  colleagues and your customers if you feel, or recently have
                  been, ill.
                </p>
                <p>
                  It is essential you tell your manager if you do not feel well
                  and especially if you:
                </p>
                <ol type="a">
                  <li>have been sick;</li>
                  <li>have diarrhoea, vomiting or an upset stomach;</li>
                  <li>live with anyone who is sick, or has diarrhoea;</li>
                  <li>were ill while on holiday;</li>
                  <li>have ear, nose or throat infections;</li>
                  <li>have infected sores or cuts;</li>
                  <li>have skin irritations or infections; and/or</li>
                  <li>
                    think you are suffering from a disease that could be passed
                    on through food.
                  </li>
                </ol>
                <p>
                  If you have diarrhoea and/or vomiting you must not handle food
                  and can only resume your usual duties when you have been
                  symptom-free for 48 hours. Your Manager will advise you.
                </p>
                <MultipleChoices
                  options={{0: 'False', 1: 'True'}}
                  question="If you have diarrhoea and/or vomiting you must not handle food and can only resume your usual duties when you have been symptom-free for 48 hours"
                />
              </div>
            </div>
            <div name="personal-hygiene" className="mt-5">
              <h5 className="font-weight-bold">Personal hygiene</h5>
              <p>
                Bacteria that can cause food poisoning can be carried in our
                stomachs, noses, throats, ears and hair. They can also be
                present in cuts, sores, boils and spots.
              </p>
              <p>
                As dirt harbours bacteria, you must keep your body and clothes
                extremely clean. A good personal hygiene routine is essential,
                washing your hair and body at least once every day. Your
                clothing must also be kept clean and changed every day and, in
                particular, after handling raw foods.
              </p>
              <div>
                <h6 className="font-weight-bold">
                  When you arrive at work you must:
                </h6>
                <div className="row">
                  <div className="col-8">
                    <ol type="a">
                      <li>wash your hands;</li>
                      <li>put on your clean protective uniform;</li>
                      <li>
                        put on clean, closed shoes/clogs with non-slip soles;
                      </li>
                      <li>
                        keep your hair tied up, if it is shoulder length or
                        longer;
                      </li>
                      <li>
                        remove all jewellery, apart from sleeper earrings and
                        plain wedding rings (check your company’s policy); and
                      </li>
                      <li>
                        cover all cuts/sores/boils with a clean, blue waterproof
                        dressing - these dressings should be changed regularly.
                      </li>
                    </ol>
                  </div>
                  <div className="col-4">
                    <img
                      src={`${process.env.PUBLIC_URL}/images/food-serve.jpg`}
                      alt="serving food"
                    />
                  </div>
                </div>
              </div>
              <div>
                <h6 className="font-weight-bold">Hand washing procedure:</h6>
                <div className="row">
                  <div className="col-8">
                    <ol type="a">
                      <li>under hot running water;</li>
                      <li>using bactericidal soap;</li>
                      <li>
                        only in wash hand basins, not food preparation or
                        washing up sinks;
                      </li>
                      <li>
                        if you don’t have automatic taps, use a piece of
                        disposable paper towel when using the taps to control
                        any risks from E. coli O157.
                      </li>
                      <li>
                        remember that when washing the most commonly missed
                        parts are the back of the hand and tops of the finger
                        tips around the nails;
                      </li>
                      <li>
                        drying hands thoroughly is important because wet hands
                        spread bacteria more easily. Use paper towel or hot air
                        dryers. Try to avoid using anything that will
                        re-contaminate hands such as your uniform.
                      </li>
                    </ol>
                  </div>
                  <div className="col-4">
                    <img
                      src={`${process.env.PUBLIC_URL}/images/washing-hand.jpg`}
                      alt="serving food"
                    />
                  </div>
                </div>
              </div>
              <div>
                <h6 className="font-weight-bold">What not to do!</h6>
                <ol type="a">
                  <div className="row">
                    <div className="col-6">
                      <li>chew gum or eat whilst handling food</li>
                      <li>
                        dip fingers into food and lick fingers always use a
                        clean spoon for tasting
                      </li>
                      <li>over-handle food</li>
                      <li>cough into food</li>
                    </div>
                    <div className="col-6">
                      <li>spit into food</li>
                      <li>smoke (only outside)</li>
                      <li>scratch yourself</li>
                      <li>sneeze over food</li>
                    </div>
                  </div>
                </ol>
                <h6 className="font-weight-bold">Also,</h6>
                <ol type="a">
                  <li>
                    nail polish must not be worn, as it may chip and fall into
                    the food
                  </li>
                  <li>
                    your finger nails should be kept short and clean; no false
                    nails
                  </li>
                  <li>use a deodorant</li>
                  <li>
                    perfume and aftershave must not be worn as it may taint food
                  </li>
                  <li>
                    jewellery must be removed as it can harbour bacteria or fall
                    into food
                  </li>
                </ol>
                <MultipleChoices
                  options={{0: 'False', 1: 'True'}}
                  question="Handwashing us only necessary when you dirt is visible in hand."
                />
                <div className="my-3">
                  <h6 className="font-weight-bold">
                    What should you do if you are ill?
                  </h6>
                  <p>
                    As a food handler, it can be extremely dangerous for you,
                    your colleagues and your customers if you feel, or recently
                    have been, ill.
                  </p>
                  <p>
                    It is essential you tell your manager if you do not feel
                    well and especially if you:
                  </p>
                  <ol type="a">
                    <li>have been sick;</li>
                    <li>have diarrhoea, vomiting or an upset stomach;</li>
                    <li>live with anyone who is sick, or has diarrhoea;</li>
                    <li>were ill while on holiday;</li>
                    <li>have ear, nose or throat infections;</li>
                    <li>have infected sores or cuts;</li>
                    <li>
                      have skin irritations or infections; and/orthink you are
                      suffering from a disease that could be passed on through
                      food.
                    </li>
                  </ol>
                  <p>
                    If you have diarrhoea and/or vomiting you must not handle
                    food and can only resume your usual duties when you have
                    been symptom-free for 48 hours. Your Manager will advise
                    you.
                  </p>
                  <MultipleChoices
                    options={{0: 'False', 1: 'True'}}
                    question="As a food handler, it can be extremely dangerous for you, your colleagues and your customers if you feel, or recently have been, ill."
                  />
                </div>
              </div>
            </div>
            <div name="critical control points" className="mt-5">
              <h5 className="font-weight-bold">
                Critical Control Points (CCPs)
              </h5>
              <p>
                These are stages in the production of the food where we need to
                control hazards (such as bacterial survival, contamination and
                growth or physical/chemical contamination).
              </p>
              <p>
                You may be asked to assist in the monitoring and recording of
                CCPs.
              </p>
              <p>
                This may involve taking and logging food temperatures including:
              </p>
              <div className="row">
                <div className="col-8">
                  <ol type="a">
                    <li>food arriving at the premises</li>
                    <li>chilled or frozen storage</li>
                    <li>cooking or reheating</li>
                    <li>chilling (times and temperatures)</li>
                    <li>hot holding</li>
                  </ol>
                </div>
                <div className="col-4">
                  <img
                    src={`${process.env.PUBLIC_URL}/images/ccps.jpg`}
                    alt="critical control points"
                    width="200"
                    height="100"
                  />
                </div>
              </div>
              <p>
                Use a probe thermometer which has been disinfected either using
                probe wipes or a sanitizer.
              </p>
              <MultipleChoices
                options={{0: 'False', 1: 'True'}}
                question="You may be asked to assist in the monitoring and recording of CCPs."
              />
            </div>
            <div name="cleaning" className="mt-5">
              <h5 className="font-weight-bold">Cleaning</h5>
              <p>
                Remember, dirt carries bacteria and you cannot see bacteria - so
                all working areas must be kept clean.
              </p>
              <p>
                Clean-as-you-go! All surfaces and equipment which come into
                contact with food should be thoroughly cleaned and disinfected
                after preparing batches of food, particularly raw food either
                with a detergent and disinfectant or a sanitiser which is
                applied twice. Surfaces which come into contact with RTE food
                need to be disinfected regularly, for example chopping boards,
                utensils and slicing machines. The best way is for the equipment
                to be passed through the dish washer. Failing that they should
                be disinfected using a chemical.
              </p>
              <img
                src={`${process.env.PUBLIC_URL}/images/cleaning.jpg`}
                alt="cleaning"
              />
              <p>
                Some surfaces in the kitchen are regularly touched by food
                handlers, such as fridge door handles, microwave door handles
                and hand wash basin and equipment sink taps. These should also
                be disinfected regularly throughout the day.
              </p>
              <p>
                Disinfectants/sanitisers must be left for the designated
                ‘contact time’. The use of clean, disinfected equipment prevents
                bacteria spreading to other food, where they could multiply and
                possibly affect your customer.
              </p>
              <p>
                Equipment which has been used for raw food must never be used
                for RTE food unless it has been thoroughly cleaned and
                disinfected. Dirt, food waste and scraps which carry bacteria
                end up in your bins - so bins must be regularly emptied and
                cleaned.
              </p>
              <MultipleChoices
                options={{0: 'False', 1: 'True'}}
                question="Equipment which has been used for raw food must never be used for RTE food unless it has been thoroughly cleaned and disinfected."
              />
            </div>
            <Link to="/riddor">
              <CenteredButton type="submit" value="submit" />
            </Link>
          </form>
        </div>
      </div>
    </div>
  );
}
function MultipleChoices({options, question}) {
  const [[value1, label1], [value2, label2]] = Object.entries(options);
  return (
    <div
      class="form-group"
      css={css`
        font-size: large;
        font-weight: bold;
      `}
    >
      <label class="form-check-label">{question}</label>
      &nbsp; &nbsp;
      <div class="form-check form-check-inline">
        <input
          class="form-check-input"
          type="radio"
          name="contamination"
          value={value1}
        />
        <label class="form-check-label">{label1}</label>
      </div>
      <div class="form-check form-check-inline">
        <input
          class="form-check-input"
          type="radio"
          name="contamination"
          value={value2}
        />
        <label class="form-check-label">{label2}</label>
      </div>
    </div>
  );
}
