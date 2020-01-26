/**@jsx jsx */
import {jsx, css} from '@emotion/core';
import {useFormContext} from 'react-hook-form';

export default function SafetyTwo() {
  const {register} = useFormContext();
  return (
    <div>
      <div className="row col-12 mt-2">
        <h5 className="font-weight-bold">Manual handling</h5>
        <p>
          <u>
            You will be required to sign separate manual handling policy as a
            part of your recruitment plan, request your manager to provide you
            with relevant training and documents.
          </u>
        </p>
        <div className="row">
          <div className="col-8">
            <div className="col-12">
              <p>
                Many workplace injuries are caused by lifting and carrying or
                pushing and pulling.
              </p>
            </div>
            <div className="col-12">
              <h6 className="font-weight-bold">Common injuries</h6>
            </div>
            <ol type="a">
              <li>Spinal and nerve injuries.</li>
              <li>Crushed or fractured limbs.</li>
              <li>Cuts and abrasions.</li>
              <li>Soft tissue damage.</li>
              <li>Hernias</li>
            </ol>
            <div className="col-12">
              <h6 className="font-weight-bold">
                How do we reduce the likelihood of these injuries?
              </h6>
            </div>
            <ol type="a">
              <li>
                Do not lift anything that is too heavy (test it to see if you
                can move it with your foot first).
              </li>
              <li>If it is heavy - get help.</li>
              <li>Use mechanical aids such as trolleys if possible.</li>
              <li>
                To lift - bend at the knees, head up and keep your back
                straight.
              </li>
              <li>
                Tell your manager of medical conditions that make lifting
                difficult for you.
              </li>
            </ol>
          </div>
          <div className="col-4">
            <img
              src={`${process.env.PUBLIC_URL}/images/skeleton.png`}
              alt="skeleton"
              width="100"
              height="200"
            />
          </div>
        </div>
        <div className="row">
          <div className="col-12">
            <h6 className="font-weight-bold">Good lifting techniques</h6>
          </div>
          <div className="col-12">
            <img
              src={`${process.env.PUBLIC_URL}/images/good-lifting-techniques.png`}
              alt="good lifting techniques"
              width=""
              height=""
            />
          </div>
        </div>
      </div>
      <div className="row col-12 mt-2">
        <div className="row col-12">
          <h5 className="font-weight-bold">Chemicals</h5>
        </div>
        <div className="row col-12">
          <p>
            Which chemicals are hazardous? Those which show a warning sign on
            their packaging.
          </p>
        </div>
        <div className="row col-12">
          <img
            src={`${process.env.PUBLIC_URL}/images/hazard2.jpg`}
            alt="chemicals"
            className="img-fluid"
            width="600"
            height="600"
          />
        </div>
        <div className="row col-12">
          <h6 className="font-weight-bold">Safe use of chemicals</h6>
        </div>
        <div className="row col-12">
          <p>
            <em>
              You are required to complete Innuscience COSHH training, You line
              manager will provide you with the instructions to complete your
              COSHH training.
            </em>
          </p>
        </div>
        <div className="row col-12">
          <ol type="a">
            <li>
              Do not use any hazardous chemical you have not been trained on.
            </li>
            <li>Follow the manufacturer’s instructions.</li>
            <li>Follow the procedures you have been shown by your manager.</li>
            <li>Do not mix chemicals.</li>
            <li>
              Wear the personal protective equipment (PPE) you have been issued
              with (and report to your manager if it is not available, defective
              or doesn’t fit properly).
            </li>
            <li>
              Do not store chemicals in food or drink containers/label
              containers/make sure lids are secured/don’t use any unlabelled
              containers/keep hazardous chemicals stored upright.
            </li>
            <li>Clean up spillages straight away.</li>
            <li>
              <div className="row">
                <div className="col-7">
                  <p>
                    Let your manager know immediately if you experience any
                    adverse reactions to substances, for example headaches,
                    nausea, skin complaints.
                  </p>
                </div>
                <div className="col-5">
                  <img
                    src={`${process.env.PUBLIC_URL}/images/googles.png`}
                    alt="googles"
                    width="150"
                    height="100"
                  />
                </div>
              </div>
            </li>
            <li>
              If cleaning chemicals are accidentally splashed onto your skin or
              eyes, always wash away with plenty of water. Seek medical advice
              if irritation persists and tell your manager.
            </li>
          </ol>
        </div>
        <div className="row col-12">
          <p>
            <strong>
              For your safety you must read the instructions, safety information
              (including PPE) before you use any chemicals.
            </strong>
          </p>
        </div>
      </div>
      <div className="row col-12 mt-2">
        <div className="row col-12">
          <h5 className="font-weight-bold">Work at height</h5>
        </div>
        <div className="row col-12">
          <p>
            <u>
              <em>
                You will be required to sign separate Ladder policy as a part of
                your recruitment plan
              </em>
            </u>
          </p>
          <p>
            A place is ‘at height’ if you could be injured falling from it.
            Examples might include using ladders, stepladders or footstools.
            Note: We have multiple ladders in the premises, specifically ladder
            to loft storage are in frequent use. Request your manager to train
            you how to use the loft ladder.
          </p>
          <p>
            Most fatalities and a lot of major injuries at work are due to falls
            from height.
          </p>
        </div>
        <div className="row col-12">
          <div className="col-8">
            <h6 className="font-weight-bold">
              Reducing the risks from working at height
            </h6>
            <ol type="a">
              <li>Ensure you avoid work at height if possible.</li>
              <li>
                If this is not possible, follow the training and procedures you
                have been provided with in order to complete the task safely.
              </li>
              <li>Do not carry out the task if you have not been trained.</li>
              <li>
                Check the access equipment carefully before you use it to ensure
                it is in good condition.
              </li>
              <li>
                Any concerns about the task, or the equipment you have available
                to complete it, must be raised with your manager.
              </li>
            </ol>
          </div>
          <div className="col-4">
            <img
              src={`${process.env.PUBLIC_URL}/images/ladder.png`}
              alt="ladder"
              height="300"
            />
          </div>
        </div>
      </div>
      <div className="row col-12 mt-2">
        <h5 className="font-weight-bold">
          Personal protective equipment (PPE)
        </h5>
        <p>
          <u>
            <em>
              You are required to sign PPE record form as a part of your
              recruitment plan
            </em>
          </u>
        </p>
        <p>
          Where you are asked to wear PPE at work, all other methods of control
          must have been used and there remains a risk. PPE is a last resort
          decision. It is designed to protect and safeguard you whilst you carry
          out your work, it is not meant to be a hindrance or nuisance. If PPE
          has been recommended, it has to be used as instructed – it’s a legal
          requirement. Failure to comply with the need to wear or use PPE could
          lead to injury and illness. Report to your manager any defective PPE
          or if it is dirty or doesn’t fit properly.
        </p>
        <div className="row">
          <div className="col-12">
            <img
              className="img-fluid"
              src={`${process.env.PUBLIC_URL}/images/hazard5.jpg`}
              alt="ppe"
              width="600"
              height="600"
            />
          </div>
        </div>
      </div>
      <div className="row col-12 mt-2">
        <h5 className="font-weight-bold">Electricity</h5>
        <p>
          Used correctly, electricity is of great benefit to us, but if it is
          abused or handled in an unsafe manner, it could kill you.
        </p>
        <h6 className="col-12 font-weight-bold">Hazards</h6>
        <div className="row">
          <div className="col-7">
            <ol type="a">
              <li>Electric shock</li>
              <li>Explosion</li>
              <li>Fire</li>
              <li>Burns</li>
            </ol>
          </div>
          <div className="col-5">
            <img
              src={`${process.env.PUBLIC_URL}/images/hazard6.jpg`}
              alt="electricity"
              width="100"
              height="100"
            />
          </div>
        </div>
        <div className="row">
          <div className="col-12">
            <img
              src={`${process.env.PUBLIC_URL}/images/hazard3.jpg`}
              alt="do vs don't"
              width="600"
              height="600"
            />
          </div>
        </div>
      </div>
      <div className="row col-12 mt-2">
        <h5 className="font-weight-bold">Slips and trips</h5>
        <div className="row">
          <div className="col-9">
            <p>
              Slips and trips are one of the main causes of injury at work and
              are the main cause of major injuries.
            </p>
            <p>
              More than half of the accidents involving members of the public in
              the workplace are due to slips and trips.
            </p>
          </div>
          <div className="col-3">
            <img
              src={`${process.env.PUBLIC_URL}/images/slips.jpg`}
              alt="slips"
            />
          </div>
        </div>
        <h6 className="font-weight-bold">Preventing slips and trips</h6>
        <ol type="a">
          <li>Keep your workplace tidy.</li>
          <li>
            ‘Clean as you go’ – if you spill anything, clean it up! Do not leave
            it for other people.
          </li>
          <li>
            Report any potential slip/trip hazards – if you think it’s a danger
            or hazard, report it!
          </li>
          <li>Wear the correct shoes as per the company policy.</li>
          <div className="row">
            <div className="col-4">
              <img
                src={`${process.env.PUBLIC_URL}/images/caution.jpg`}
                alt="caution"
                width="100"
                height="150"
              />
            </div>
            <div className="col-8">
              <li>Don’t go into restricted access areas.</li>
              <li>Carry out regular and systematic cleaning.</li>
              <li>Display warning signs when floors are wet or slippery.</li>
              <li>Do not leave trailing cables across walkways.</li>
              <li>Remove floor obstructions.</li>
            </div>
          </div>
        </ol>
      </div>
      <div className="row col-12 mt-2">
        <h5 className="col-12 font-weight-bold">Burns</h5>
        <p className="col-12">
          Burns can be caused by contact with hot cooking equipment, utensils,
          liquids and containers.
        </p>
        <p className="col-12">
          You can reduce the likelihood of being burned by:
        </p>
        <ol type="a">
          <li>Using the PPE provided – oven cloths, gloves and mitts.</li>
          <div className="row">
            <div className="col-7">
              <li>
                Allowing equipment, food or oil to cool down before moving or
                cleaning it.
              </li>
              <li>
                Being aware of hot surfaces that are identified by warning
                signs.
              </li>
              <li>Using implements such as tongs to move hot items.</li>
            </div>
            <div className="col-5">
              <img
                src={`${process.env.PUBLIC_URL}/images/hot-surface.jpg`}
                alt="hot surface"
                width="100"
                height="100"
              />
            </div>
          </div>
        </ol>
      </div>
      <div className="row col-12 mt-2">
        <h5 className="col-12 font-weight-bold">Cuts</h5>
        <p className="col-12">
          Cuts can be caused when using any sharp implement or machine,
          particularly if you are tired or carrying out the work in a hurry.
        </p>
        <p className="col-12">You can reduce the likelihood of being cut by:</p>
        <ol type="a">
          <li>Carrying knives with the blade pointing downwards.</li>
          <div className="row">
            <div className="col-7">
              <li>Ensuring chopping boards are secure before use.</li>
              <li>Storing knives in a block, magnetic strip or box.</li>
              <li>Not catching a falling knife.</li>
              <li>Not leaving knives in sinks.</li>
              <li>Using a sharp knife.</li>
              <li>Reporting defective knives to your manager.</li>
            </div>
            <div className="col-5">
              <img
                src={`${process.env.PUBLIC_URL}/images/knives.jpg`}
                alt="knives"
                width="200"
                height="200"
              />
            </div>
          </div>
        </ol>
      </div>
      <div className="row col-12 mt-2">
        <h5 className="col-12 font-weight-bold">Stress</h5>
        <p className="col-12">
          Working under pressure is normally beneficial for most people.
        </p>
        <p className="col-12">
          However, if you feel that your health is being affected (angry mood
          swings, poor sleeping, inability to complete work etc.) please speak
          to your line manager regarding possible stress in the workplace.
        </p>
      </div>
      <div>
        <br />
        <p>
          <strong>
            PLEASE CONFIRM YOU HAVE READ AND UNDERSTOOD THIS INFORMATION
          </strong>
        </p>
        <p
          css={css`
            background-color: red;
            display: block;
            font-weight: bold;
            color: white;
          `}
        >
          Ensure your manager has taken you through these notes. Request your
          manager to complete a risk assessment with your.
        </p>
        <br />
        <br />
        <div>
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
        <br />
      </div>
    </div>
  );
}
