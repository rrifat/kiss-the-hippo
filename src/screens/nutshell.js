/**@jsx jsx */
import {jsx, css} from '@emotion/core';
import React from 'react';
import {CenteredButton, DivWithScroll, ErrorText} from '../components/lib';
import {useForm, ErrorMessage} from 'react-hook-form';
import {usePage, navigateToNextPage} from '../context/page-context';
// import {useUser} from '../context/user-context';
import * as itemClient from '../clients/item-client';
import {useAuth} from '../context/auth-context';

export default function Nutshell({navigate}) {
  const {
    page,
    setPage,
    userData: {user},
  } = useAuth();
  const {handleSubmit, register, errors} = useForm();
  const onSubmit = (data, e) => {
    e.preventDefault();
    itemClient
      .create({user, page, data})
      .then(({data: response}) => {
        const {data} = response;
        if (data && data.nextPageNo) {
          setPage(data.nextPageNo);
          navigate('/final');
        }
      })
      .catch(err => console.log(err.response));
  };
  return (
    <DivWithScroll className="col-sm-12 h-100">
      <div className="container">
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="row col-sm-9 offset-sm-1">
            <div className="pt-5 pb-3">
              <h5 className="font-weight-bold">OUR COFFEE AND EQUIPMENTS:</h5>
              <p>
                With seasonality in mind, our mission is to ethically source
                truly exceptional coffee lots from quality-focused producers
                around the globe. the coffee is then roasted in-house using the
                most environmentally friendly roaster, the loring smart roaster.
                each coffee is carefully roasted to safeguard its individual
                flavour identit y and the taste of its terroir.
              </p>
              <MultipleChoices
                name="roastingMachine"
                options={{
                  gisenw140: 'gisenw140',
                  loring: 'Loring',
                  genio6: 'Genio 6',
                }}
                question="What is the  name of our Roasting Machine:"
                ref={register({
                  validate: value =>
                    value === 'loring' || 'Your answers is not correct!',
                })}
              />
              <ErrorMessage
                errors={errors}
                name="roastingMachine"
                as={<ErrorText />}
              />
            </div>
            <div>
              <h6 className="font-weight-bold">Loring S15 Falcon</h6>
              <p>
                At the heart of our roastery is the beautifully utilitarian most
                environment friendly Loring roaster. The patented roasting
                system uses almost entirely convective heat transfer, cleaning
                and recycling the hot air as it goes. This reduces fuel
                consumption and emissions at the same time making it a very
                ecological, economical and consistent performer.
              </p>
              <MultipleChoices
                name="loring"
                options={{
                  environment: 'environment friendliness',
                  cost: 'cost effective',
                  zero: 'Zero waste',
                }}
                question="Which one is the key feature of loring:"
                ref={register({
                  validate: value =>
                    value === 'environment' || 'Your answers is not correct!',
                })}
              />
              <ErrorMessage errors={errors} name="loring" as={<ErrorText />} />
            </div>
            <div className="py-3">
              <h6 className="font-weight-bold">Kees van der Westen</h6>
              <p>
                Truly the Rolls Royce of coffee machines. Nothing under the hood
                is off the shelf for this beauty. Built to order and custom made
                to our desired specifications, this is a unique coffee machine
                that marries striking design and engineering excellence.
              </p>
              <MultipleChoices
                name="kees"
                options={{
                  kees: 'Kees van der Westen',
                  mastrena: 'mastrena',
                  mazrocco: 'La mazrocco',
                }}
                question="Which one is our coffee machine:"
                ref={register({
                  validate: value =>
                    value === 'kees' || 'Your answers is not correct!',
                })}
              />
              <ErrorMessage errors={errors} name="kees" as={<ErrorText />} />
            </div>
            <div>
              <h6 className="font-weight-bold">Mythos One Clima Pro</h6>
              <p>
                The most consistent <b>grinder</b> on the market (until the
                Mythos 2 is released!), the grading chamber and burrs are
                temperature controlled to counteract the fluctuations in
                atmospheric conditions which would normally affect the grind.
              </p>
            </div>
            <div className="pb-3">
              <h6 className="font-weight-bold">Mahlkonig EK43S</h6>
              <p>
                The new update of the classic filter/bulk grinder. This version
                is way more barista friendly with an improved front dial, hardy
                power switch and lower profile. The flat vertical burrs of the
                EK43 produce the most consistent grind of any grinder in this
                price bracket meaning more even extractions.
              </p>
              <MultipleChoices
                name="mahlkonig"
                options={{
                  mythos2: 'mythos 2',
                  mythos1: 'mythos 1',
                  mahlkonigEK43s: 'MahlkonigEK43s',
                }}
                question="Which one is not our coffee grinder:"
                ref={register({
                  validate: value =>
                    value === 'mythos2' || 'Your answers is not correct!',
                })}
              />
              <ErrorMessage
                errors={errors}
                name="mahlkonig"
                as={<ErrorText />}
              />
            </div>
            <div className="pb-3">
              <h6 className="font-weight-bold">PuqPress</h6>
              <p>
                <b>Tamping</b> is undoubtedly one of the most inconsistent
                variables in espresso preparation. The PuqPress tamps using the
                same pressure every time, delivering consistency and saving
                baristas from RSI!
              </p>
              <MultipleChoices
                name="puqpress"
                options={{
                  kees: 'Kees van der Westen',
                  mastrena: 'mastrena',
                  pugpress: 'PugPress',
                }}
                question="Which one is our tamping machine"
                ref={register({
                  validate: value =>
                    value === 'pugpress' || 'Your answers is not correct!',
                })}
              />
              <ErrorMessage
                errors={errors}
                name="puqpress"
                as={<ErrorText />}
              />
            </div>
            <div className="pb-3">
              <h6 className="font-weight-bold">
                Marco MIX and custom drip tray
              </h6>
              <p>
                Our brew bar features a custom made drip tray which houses Acaia
                scales and a Marco MIX variable temperature boiler. Marco make
                the most elegant hot water delivery equipment on the market and
                the MIX is the newest addition to their covetable range of
                boiler/font combos. This allows us to dispense water at three
                different user defined temperatures.
              </p>
            </div>
            <div className="pb-3">
              <h6 className="font-weight-bold">Acaia Orion bean dosers</h6>
              <p>
                The latest “must have” product from scale manufacturer Acaia.
                These dosing units very cleverly dispense a user defined dose
                each time and constantly adjust themselves to remain accurate.
              </p>
              <MultipleChoices
                name="orion"
                options={{
                  a: 'Acaia Orion bean dosers',
                  b: 'marc mix',
                  c: 'mastrena',
                }}
                question="Which one is not our appliance"
                ref={register({
                  validate: value =>
                    value === 'c' || 'Your answers is not correct!',
                })}
              />
              <ErrorMessage errors={errors} name="orion" as={<ErrorText />} />
            </div>
            <div className="pb-3">
              <h6 className="font-weight-bold">Roasting</h6>
              <p>
                Our roasting style is light to medium depending on what we want
                to emphasis from the coffee. We approach roasting methodically
                and sensitively, aiming to preserve and enhance all of the
                natural flavors which resulted from the careful growing,
                harvesting and processing before it reached us.
              </p>
              <MultipleChoices
                name="roasting"
                options={{
                  a: 'Medium to dark',
                  b: 'light to medium',
                  c: 'dark roast',
                }}
                question="Which one from the below is our coffee roasting-?"
                ref={register({
                  validate: value =>
                    value === 'b' || 'Your answers is not correct!',
                })}
              />
              <ErrorMessage
                errors={errors}
                name="roasting"
                as={<ErrorText />}
              />
            </div>
            <div className="pb-3">
              <h6 className="font-weight-bold">Organic Certification</h6>
              <p>
                Part of our brand values are supporting sustainable and
                ecological agriculture. One of the ways we felt would be most
                effective is to buy mainly organic certified coffees. We made a
                commitment to purchasing at least 80%of our green coffee from
                certified producers. Its extremely difficult to find certified
                coffee, so the other 20% of our offerings are reserved for
                outstanding coffees from these sources. Our roasting procedures
                are certified by the Soil Association. FYI Our house blend
                George Street is 100% Organic.
              </p>
              <MultipleChoices
                name="organic1"
                options={{
                  a: '48%',
                  b: '60%',
                  c: '80%',
                }}
                question="What percentage of coffee we are committed to buy from certified producers-"
                ref={register({
                  validate: value =>
                    value === 'c' || 'Your answers is not correct!',
                })}
              />
              <ErrorMessage
                errors={errors}
                name="organic1"
                as={<ErrorText />}
              />
              <MultipleChoices
                name="organic2"
                options={{
                  a: 'Organic Blend',
                  b: 'George street blend',
                  c: 'Donna Blend',
                }}
                question="What is the name of our houseblend"
                ref={register({
                  validate: value =>
                    value === 'b' || 'Your answers is not correct!',
                })}
              />
              <ErrorMessage
                errors={errors}
                name="organic2"
                as={<ErrorText />}
              />
            </div>
            <div className="pb-3">
              <h6 className="font-weight-bold">
                Premier training campus and training
              </h6>
              <p>
                Kiss the hippo’s professional barista training is a curriculum
                led by our award-winning team of coffee experts. The courses are
                designed to elevate someone who has never made a coffee in their
                life to specialty barista standard. These take place in our
                premium training campus certified by the specialty coffee
                association. Our campus is certified by the specialty coffee
                association as an official premier training campus. We are
                proudly the 4th in london and 6th in the uk with this
                distinction. It serves as a centre for all things coffee, from
                theory to practice, tasting to training. We offer sca approved
                barista, coffee brewing and sensory programmes, raising the
                skill level of coffee professionals to world-class.
              </p>
              <MultipleChoices
                name="training"
                options={{
                  a: '2nd',
                  b: '5th',
                  c: '6th',
                }}
                question="Where’s our training campus official  standing in UK-"
                ref={register({
                  validate: value =>
                    value === 'c' || 'Your answers is not correct!',
                })}
              />
              <ErrorMessage
                errors={errors}
                name="training"
                as={<ErrorText />}
              />
            </div>
            <div className="pb-3">
              <h6 className="font-weight-bold">Sustainability</h6>
              <p>
                Sustainability is at the heart of kiss the hippo coffee, from
                using the lowest impact coffee roaster, the loring smart
                roaster, to the compostable materials used at the very end of
                the coffee making process (cups, lids, straws, etc.). In
                addition to compostable solutions we maximise the use of
                recycled and recycable packaging materials.
              </p>
              <p>
                Our equipment is selected for its minimal environmental impact,
                as well as its quality and precision. Annually, we save 13.6
                tonnes of co2 emission, the carbon offset of which equates to
                Growing 204 trees over the course of a decade. We achieve this
                by sending all our used coffee grounds to Bio-bean, a company
                that produces sustainable transport fuel from this waste. Our
                commitment to driving positive change for the environment with a
                360 degree approach to sustainabilit y at every stage of the
                process truly sets us apart.
              </p>
              <MultipleChoices
                name="sus1"
                options={{
                  a: '16.3 ton',
                  b: '61.3 ton',
                  c: '13.6ton',
                }}
                question="How much we save currently in co2 omission"
                ref={register({
                  validate: value =>
                    value === 'c' || 'Your answers is not correct!',
                })}
              />
              <ErrorMessage errors={errors} name="sus1" as={<ErrorText />} />
              <MultipleChoices
                name="sus2"
                options={{
                  a: 'first mile',
                  b: 'biffa',
                  c: 'Bio bean',
                }}
                question="Which company s turning our coffee ground waste to fuel-"
                ref={register({
                  validate: value =>
                    value === 'c' || 'Your answers is not correct!',
                })}
              />
              <ErrorMessage errors={errors} name="sus2" as={<ErrorText />} />
            </div>
            <div className="pb-3">
              <h5 className="font-weight-bold">Our Food:</h5>
              <p>
                Please note this information is in addition to allergen
                information which is on a separate document and will also be
                readily available in front of house to consult if you have a
                customer query. When advising the customer please be positive
                about all menu items – you can have a favourite dish to
                recommend but you should not proclaim your “least favourite”
                items! As a company, one of our core values is environmental
                sustainability and ethically sourced ingredients.
              </p>
            </div>
            <div className="pb-3">
              <h6 className="font-weight-bold">Meat, Fish and Eggs</h6>
              <p>
                We have sourced only high welfare meat and fish with
                environmentally sustainable credentials.
              </p>

              <ul
                css={css`
                  list-style-type: disc;
                  padding-left: 50px;
                `}
              >
                <li>
                  Our ham is free range from <b>Dingely Dell</b> farm in Suffolk
                </li>
                <li>
                  Our bacon is free range and cured by a small-scale producer
                  called <b>Moons Green</b> in Kent
                </li>
                <li>
                  Our chicken is organic and free range and from{' '}
                  <b>Haye Farm</b>
                  in South Devon
                </li>
                <li>
                  Our smoked salmon is farmed organic by <b>Severn and Wye</b>,
                  located on the River Severn in Gloucester
                </li>
                <li>
                  Our eggs are “<b>Breckland Browns</b>”, they are free range
                  and are from a farm called Norfolk Quail in Suffolk.
                </li>
              </ul>
              <p className="">Please identify true/ false statement –</p>
              <ol
                css={css`
                  padding-left: 50px;
                `}
              >
                <li>
                  <MultipleChoices
                    name="ham"
                    options={{0: 'False', 1: 'True'}}
                    question="Our Ham is free range"
                    ref={register({
                      validate: value =>
                        value === '1' || 'Your answers is not correct!',
                    })}
                  />
                  <ErrorMessage errors={errors} name="ham" as={<ErrorText />} />
                </li>
                <li>
                  <MultipleChoices
                    name="chicken"
                    options={{0: 'False', 1: 'True'}}
                    question="Our chicken is supplied by Haye Farm"
                    ref={register({
                      validate: value =>
                        value === '1' || 'Your answers is not correct!',
                    })}
                  />
                  <ErrorMessage
                    errors={errors}
                    name="chicken"
                    as={<ErrorText />}
                  />
                </li>
                <li>
                  <MultipleChoices
                    name="bacon"
                    options={{0: 'False', 1: 'True'}}
                    question="Our bacon is supplied by Dingely Dell"
                    ref={register({
                      validate: value =>
                        value === '0' || 'Your answers is not correct!',
                    })}
                  />
                  <ErrorMessage
                    errors={errors}
                    name="bacon"
                    as={<ErrorText />}
                  />
                </li>
                <li>
                  <MultipleChoices
                    name="salmon1"
                    options={{0: 'False', 1: 'True'}}
                    question="Our salmon is organic"
                    ref={register({
                      validate: value =>
                        value === '1' || 'Your answers is not correct!',
                    })}
                  />
                  <ErrorMessage
                    errors={errors}
                    name="salmon1"
                    as={<ErrorText />}
                  />
                </li>
                <li>
                  <MultipleChoices
                    name="salmon2"
                    options={{0: 'False', 1: 'True'}}
                    question="Our salmons are Breckland Browns"
                    ref={register({
                      validate: value =>
                        value === '0' || 'Your answers is not correct!',
                    })}
                  />
                  <ErrorMessage
                    errors={errors}
                    name="salmon2"
                    as={<ErrorText />}
                  />
                </li>
              </ol>
            </div>
            <div className="pb-3">
              <h6 className="font-weight-bold">Dairy</h6>
              <ul
                css={css`
                  list-style-type: disc;
                  padding-left: 50px;
                `}
              >
                <li>
                  Our cheddar is <b>Godminster Cheddar</b> and is organic
                </li>
                <li>
                  Our yoghurt is authentic Greek yoghurt called <b>Kolios</b>
                </li>
                <li>Our butter is French butter</li>
              </ul>
            </div>
            <div className="pb-3">
              <h6 className="font-weight-bold">Bread</h6>
              <ul
                css={css`
                  list-style-type: disc;
                  padding-left: 50px;
                `}
              >
                <li>Our sourdough bread for toast is by The Flour Station</li>
                <li>Our baguettes are made by Food Lab</li>
                <li>
                  Our croissants are freshly baked each <b>morning in-house</b>
                </li>
                <li>
                  All the cakes are made and baked <b>fresh in house</b>
                </li>
              </ul>
              <p>Please identify true/ false statement –</p>
              <ol
                css={css`
                  padding-left: 50px;
                `}
              >
                <li>
                  <MultipleChoices
                    name="yoghurt"
                    options={{0: 'False', 1: 'True'}}
                    question="Our yoghurt is called Kolios"
                    ref={register({
                      validate: value =>
                        value === '1' || 'Your answers is not correct!',
                    })}
                  />
                  <ErrorMessage
                    errors={errors}
                    name="yoghurt"
                    as={<ErrorText />}
                  />
                </li>
                <li>
                  <MultipleChoices
                    name="butter"
                    options={{0: 'False', 1: 'True'}}
                    question="Our butter is french"
                    ref={register({
                      validate: value =>
                        value === '1' || 'Your answers is not correct!',
                    })}
                  />
                  <ErrorMessage
                    errors={errors}
                    name="butter"
                    as={<ErrorText />}
                  />
                </li>
                <li>
                  <MultipleChoices
                    name="crossaints"
                    options={{0: 'False', 1: 'True'}}
                    question="Our crossaints are supplied by external supplier"
                    ref={register({
                      validate: value =>
                        value === '0' || 'Your answers is not correct!',
                    })}
                  />
                  <ErrorMessage
                    errors={errors}
                    name="crossaints"
                    as={<ErrorText />}
                  />
                </li>
                <li>
                  <MultipleChoices
                    name="chedder"
                    options={{0: 'False', 1: 'True'}}
                    question="Our chedder is organic"
                    ref={register({
                      validate: value =>
                        value === '1' || 'Your answers is not correct!',
                    })}
                  />
                  <ErrorMessage
                    errors={errors}
                    name="chedder"
                    as={<ErrorText />}
                  />
                </li>
                <li>
                  <MultipleChoices
                    name="cakes"
                    options={{0: 'False', 1: 'True'}}
                    question="Our cakes are baked in house"
                    ref={register({
                      validate: value =>
                        value === '1' || 'Your answers is not correct!',
                    })}
                  />
                  <ErrorMessage
                    errors={errors}
                    name="cakes"
                    as={<ErrorText />}
                  />
                </li>
              </ol>
            </div>
            <div className="col-12 pb-3">
              <div className="row">
                <div className="col-6">
                  <h6 className="font-weight-bold">WHAT’S GLUTEN FREE?</h6>
                  <ul
                    css={css`
                      list-style-type: disc;
                      padding-left: 50px;
                    `}
                  >
                    <li>Brownies</li>
                    <li>Coconut cookies</li>
                    <li>All to-go pots</li>
                    <li>Porridge</li>
                  </ul>
                </div>
                <div className="col-6">
                  <h6 className="font-weight-bold">WHAT’S VEGAN?</h6>
                  <ul
                    css={css`
                      list-style-type: disc;
                      padding-left: 50px;
                    `}
                  >
                    <li>Coyo chia pot</li>
                    <li>Hummus pot</li>
                    <li>Banana date cake</li>
                    <li>Porridge</li>
                    <li>Avocado on toast</li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="pb-3">
              <MultipleChoices
                name="gluttenFree"
                options={{a: 'chia pot', b: 'brownie', c: 'porridge'}}
                question="Which one is not Gluten free?"
                ref={register({
                  validate: value =>
                    value === 'a' || 'Your answers is not correct!',
                })}
              />
              <ErrorMessage
                errors={errors}
                name="gluttenFree"
                as={<ErrorText />}
              />
              <MultipleChoices
                name="vegan"
                options={{a: 'Coconut cookies ', b: 'brownie', c: 'porridge'}}
                question="Which one is vegan?"
                ref={register({
                  validate: value =>
                    value === 'c' || 'Your answers is not correct!',
                })}
              />
              <ErrorMessage errors={errors} name="vegan" as={<ErrorText />} />
            </div>
          </div>
          <CenteredButton value="submit" type="submit" />
        </form>
      </div>
    </DivWithScroll>
  );
}

const MultipleChoices = React.forwardRef(
  ({name, options = {}, question}, ref) => {
    return (
      <div
        className="form-group"
        css={css`
          font-weight: bold;
        `}
      >
        <label className="form-check-label">{question}</label>
        &nbsp; &nbsp;
        {Object.entries(options).map(([val, label], index) => (
          <div className="form-check form-check-inline" key={index}>
            <input
              className="form-check-input"
              type="radio"
              name={name}
              value={val}
              ref={ref}
            />
            <label className="form-check-label">{label}</label>
          </div>
        ))}
      </div>
    );
  }
);
