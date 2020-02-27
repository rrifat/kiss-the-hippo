/**@jsx jsx */
import {jsx, css} from '@emotion/core';
import React from 'react';
import {CenteredButton, DivWithScroll, ErrorText} from '../components/lib';
import {useForm, ErrorMessage} from 'react-hook-form';
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
          setPage(data.nextPageNo + 1);
          navigate('/final');
        }
      })
      .catch(err => console.log(err.response));
  };
  return (
    <DivWithScroll className="col-sm-12 h-100">
      <div className="container">
        <form onSubmit={handleSubmit(onSubmit)}>
          <div
            className="row col-sm-9 offset-sm-1"
            css={css`
              text-align: justify;
              justify-content: inter-word;
            `}
          >
            <div className="pt-5 pb-3">
              <h5 className="font-weight-bold">OUR COFFEE AND EQUIPMENTS:</h5>
              <p>
                With seasonality in mind, our mission is to ethically source
                truly exceptional coffee lots from quality-focused producers
                around the globe. the coffee is then roasted in-house using the
                most environmentally friendly roaster, the{' '}
                <strong>Loring S15 Falcon</strong> smart roaster. The patented
                roasting system uses almost entirely convective heat transfer,
                cleaning and recycling the hot air as it goes. This reduces fuel
                consumption and emissions at the same time making it a very
                ecological, economical and consistent performer. each coffee is
                carefully roasted to safeguard its individual flavour identity
                and the taste of its terroir
              </p>
              <MultipleChoices
                name="nutshell1"
                options={['Gisenw140', 'Loring S15 Falcon', 'Genio 6']}
                question="What is the  name of our Roasting Machine -"
                ref={register({
                  validate: value =>
                    value === '1' || 'Your answers is not correct!',
                })}
              />
              <ErrorMessage
                errors={errors}
                name="nutshell1"
                as={<ErrorText />}
              />
            </div>
            <div>
              <h6 className="font-weight-bold">ORGANIC CERTIFICATION</h6>
              <p>
                Part of our brand values are supporting sustainable and
                ecological agriculture. One of the ways we felt would be most
                effective is ensure our house espresso blend George Street
                contains 100% certified organic coffee by the Soil Association.
              </p>
              <MultipleChoices
                name="nutshell2"
                options={['Fair trade Association', 'Soil Association']}
                question="Which organization has certified us for our organic roastery -"
                ref={register({
                  validate: value =>
                    value === '1' || 'Your answers is not correct!',
                })}
              />
              <ErrorMessage
                errors={errors}
                name="nutshell2"
                as={<ErrorText />}
              />
              <MultipleChoices
                name="nutshell3"
                options={['Donna Blend', 'George street blend']}
                question="What is the name of our house blend?"
                ref={register({
                  validate: value =>
                    value === '1' || 'Your answers is not correct!',
                })}
              />
              <ErrorMessage
                errors={errors}
                name="nutshell3"
                as={<ErrorText />}
              />
            </div>
            <div className="py-3">
              <h6 className="font-weight-bold">SUSTAINABILITY</h6>
              <p>
                Sustainability is at the heart of Kiss the Hippo Coffee, from
                using the lowest impact coffee roaster, the Loring smart
                roaster, to the compostable materials used at the very end of
                the coffee making process (cups, lids, straws, etc.). In
                addition to compostable solutions we maximise the use of
                recycled and recyclable packaging materials. Our equipment is
                selected for its minimal environmental impact, as well as its
                quality and precision. Annually, we save 13.6 tonnes of CO2
                emission, the carbon offset of which equates to growing 204
                trees over the course of a decade. We achieve this by sending
                all our used coffee grounds to Bio-bean, a company that produces
                sustainable transport fuel from this waste.
              </p>
              <MultipleChoices
                name="nutshell4"
                options={['First mile', 'Bio bean']}
                question="Which company s turning our coffee ground waste to fuel -"
                ref={register({
                  validate: value =>
                    value === '1' || 'Your answers is not correct!',
                })}
              />
              <ErrorMessage
                errors={errors}
                name="nutshell4"
                as={<ErrorText />}
              />
            </div>
            <div>
              <h6 className="font-weight-bold">
                SUPPORTING THE FUTURE OF COFFEE
              </h6>
              <p>
                Coffee producers often shoulder the heaviest price pressure in
                the coffee industry. Each year, costs increase as climate change
                makes coffee production all the more challenging. Unfortunately,
                the global commodity price for coffee hasn’t grown to reflect
                this. We believe that price increases and stability are needed
                to maintain a healthy industry, which is why we are dedicated to
                paying at least 50% above the Fairtrade price for all our
                coffees.
              </p>
              <MultipleChoices
                name="nutshell5"
                options={['50% above', '20% above']}
                question="How much we are dedicated above Fairtrade price of all of our coffee?"
                ref={register({
                  validate: value =>
                    value === '0' || 'Your answers is not correct!',
                })}
              />
              <ErrorMessage
                errors={errors}
                name="nutshell5"
                as={<ErrorText />}
              />
            </div>
            <div className="pb-3">
              <h6 className="font-weight-bold">GOING THE EXTRA MILE</h6>
              <p>
                Stewardship is an imperative part of coffee preservation. We
                support coffee conservation efforts by making regular financial
                contributions to the research organizations tasked with
                discovering sustainable solutions. For every kilo of coffee we
                buy, we donate 3 pence to the World Coffee Research program,
                which is double the amount WCR has asked of the industry to
                support its research. We are also the first coffee roaster to
                attach our growth to the funding of the Kew Gardens coffee
                research program - an initiative we are proud to support with 2
                pence for every kilo of coffee we buy. Finally, we partner with
                the Just a Drop clean water foundation in an effort to support
                the places our coffee comes from. To read more about our work
                supplying the 228 students of the Mwambui Secondary School in
                Kenya with safe water.
              </p>
              <p
                css={css`
                  line-height: 1.8em;
                `}
              >
                We make picking coffees easier by breaking our single origin
                coffees into four categories they are:
                <ul>
                  <li>
                    Mellow & Balanced – Coffees that everyone loves and are easy
                    to drink with a low acidity.
                  </li>
                  <li>
                    Vibrant & Bright – Coffees that are high in acidity with a
                    lot of vibrant fruit flavours.
                  </li>
                  <li>
                    Unique & Interesting – Coffees that will change people’s
                    mind of what a coffee can taste like. They are bursting in
                    fruitiness.
                  </li>
                  <li>
                    Rare & Acclaimed – The worlds most awarded and beloved
                    coffees. They are the best coffees grown each year.
                  </li>
                </ul>
              </p>
              <MultipleChoices
                name="nutshell6"
                options={['Bold & Creamy', 'Mellow & Balanced']}
                question="Which Single Origin Type is NOT one of ours -"
                ref={register({
                  validate: value =>
                    value === '0' || 'Your answers is not correct!',
                })}
              />
              <ErrorMessage
                errors={errors}
                name="nutshell6"
                as={<ErrorText />}
              />
            </div>
            <div className="pb-3">
              <h6 className="font-weight-bold">MENU INFORMATION</h6>
              <p>
                <em>
                  This is a list of top tips from our menu at Kiss the Hippo, it
                  is not exhaustive and it can vary – please always check with
                  someone from the kitchen if you’re unsure about something
                </em>
              </p>
              <div>
                <ul
                  css={css`
                    margin-bottom: 16px;
                  `}
                >
                  <li>
                    Cakes
                    <ul
                      css={css`
                        padding-left: 40px;
                        margin-bottom: 16px;
                        list-style-type: disc;
                      `}
                    >
                      <li>
                        BAKED IN HOUSE - We have a selection of cakes, all baked
                        by the kitchen team. Our croissants and pain au
                        chocolate baked in house each morning. All the other
                        cakes are made from scratch.
                      </li>
                      <li>
                        UNAVAILBLE ITEMS - We make the cinnamon rolls in house
                        each morning, which is why they are sometimes
                        unavailable first thing. Anything else, ask the kitchen
                        – they should have more
                      </li>
                      <li>
                        GLUTEN FREE – we have brownies, hazelnut flapjacks and
                        coconut cookies which are all gluten free. Our banana
                        and date cake is made using wholemeal spelt flour, which
                        some gluten sensitive people can tolerate.
                      </li>
                      <li>
                        VEGAN – we have hazelnut flapjack and banana date cake
                        which are both completely vegan
                      </li>
                      <li>
                        NUTS – there are nuts in several of our products and we
                        handle nuts in the kitchen. NUT FREE cakes include
                        croissants, pain au choc, brownies, cookies, lemon cake,
                        banana cake, jam tart, cinnamon roll.
                      </li>
                      <li>
                        SUGAR FREE – Our banana cake is made without refined
                        sugars. Also our cashew/coconut balls in the fridge are
                        made without refined sugars.
                      </li>
                    </ul>
                    <ul
                      css={css`
                        padding-left: 40px;
                        margin-bottom: 16px;
                      `}
                    >
                      <li>
                        <MultipleChoices
                          name="nutshell7"
                          options={['Haznault flapjack', 'Banana Cake', 'Both']}
                          question="A customer is gluten free and vegan, what can you recommend?"
                          ref={register({
                            validate: value =>
                              value === '2' || 'Your answers is not correct!',
                          })}
                        />
                        <ErrorMessage
                          errors={errors}
                          name="nutshell7"
                          as={<ErrorText />}
                        />
                      </li>
                      <li>
                        <MultipleChoices
                          name="nutshell8"
                          options={['Banana Cake', 'Cashew Balls', 'Both']}
                          question="A customer wants a healthy snack, what can you recommend?"
                          ref={register({
                            validate: value =>
                              value === '2' || 'Your answers is not correct!',
                          })}
                        />
                        <ErrorMessage
                          errors={errors}
                          name="nutshell8"
                          as={<ErrorText />}
                        />
                      </li>
                      <li>
                        <MultipleChoices
                          name="nutshell9"
                          options={['Inform Kitchen', 'Call 999']}
                          question="A customer has told you they have a severe nut allergy, what should you do?"
                          ref={register({
                            validate: value =>
                              value === '0' || 'Your answers is not correct!',
                          })}
                        />
                        <ErrorMessage
                          errors={errors}
                          name="nutshell9"
                          as={<ErrorText />}
                        />
                      </li>
                    </ul>
                  </li>
                </ul>
              </div>

              <div>
                <ul
                  css={css`
                    margin-bottom: 16px;
                  `}
                >
                  <li>
                    HOT FOOD
                    <ul
                      css={css`
                        padding-left: 40px;
                        margin-bottom: 16px;
                        list-style-type: disc;
                      `}
                    >
                      <li>
                        TIMING - We make hot food to order fresh from the
                        kitchen. It takes around 10 minutes to prepare. If a
                        customer asks how long the food will take, it is best to
                        say 10-15 minutes
                      </li>
                      <li>
                        PROVENANCE AND WELFARE - we use free range eggs and
                        meat, organic chicken, MSC approved tuna
                      </li>
                      <li>
                        GLUTEN FREE – We have gluten free bread (contains egg)
                        which can be used instead of the usual sourdough. We use
                        a separate gluten free toaster. Our porridge is also
                        gluten free.
                      </li>
                      <li>
                        VEGAN – We have avocado toast, tofu scramble on toast
                        and porridge, for our vegan customers. They can also
                        choose the mushrooms on toast without the cheese. Our
                        gluten free bread is not vegan.
                      </li>
                      <li>
                        NUTS – The only hot food menu item containing nuts is
                        the porridge. We can prepare it without nuts on asking.
                      </li>
                      <li>
                        SUGAR FREE – Our banana cake is made without refined
                        sugars. Also our cashew/coconut balls in the fridge are
                        made without refined sugars.
                      </li>
                    </ul>
                  </li>
                </ul>
              </div>
              <div>
                <ul
                  css={css`
                    margin-bottom: 16px;
                  `}
                >
                  <li>
                    Fridge Items
                    <ul
                      css={css`
                        padding-left: 40px;
                        margin-bottom: 16px;
                      `}
                    >
                      <li>
                        Please review the allergen matrix for information about
                        the pots as this varies between shops
                      </li>
                      <li>
                        <ul
                          css={css`
                            padding-left: 20px;
                            margin-bottom: 16px;
                            list-style-type: disc;
                          `}
                        >
                          <li>
                            VEGAN AND GLUTEN FREE – Our energy cashew/ coconut
                            balls are both vegan and gluten free.
                          </li>
                          <li>
                            SMOOTHIES – Are all gluten free, the berry smoothie
                            contains dairy but the green and orange smoothies
                            are also vegan. They are all nut free.
                          </li>
                        </ul>
                      </li>
                      <li>
                        <ul
                          css={css`
                            padding-left: 20px;
                            margin-bottom: 16px;
                          `}
                        >
                          <li>
                            <MultipleChoices
                              name="nutshell10"
                              options={[
                                'Avocado toast with Mushroom',
                                'Mushrooms on Toast',
                                'Both',
                              ]}
                              question="A customer is vegetarian and really hungry, what can you recommend?"
                              ref={register({
                                validate: value =>
                                  value === '2' ||
                                  'Your answers is not correct!',
                              })}
                            />
                            <ErrorMessage
                              errors={errors}
                              name="nutshell10"
                              as={<ErrorText />}
                            />
                          </li>
                        </ul>
                      </li>
                    </ul>
                  </li>
                </ul>
              </div>
            </div>
            <div className="pb-3">
              <h6 className="font-weight-bold">
                <em>
                  FOR MORE INFORMATION ON ALLERGENS AND INGREDIENTS PLEASE
                  REVIEW THE ALLERGEN MATRIX AND INGREDIENT LIST, AVAILABLE
                  BEHIND THE BAR
                </em>
              </h6>
              <p>
                If a customer makes a serious complaint, please inform your line
                manager or supervisor. If there is a complaint about food taking
                longer than expected, your line manager may be able to offer
                them a free coffee. If there is a more serious complaint, for
                example a hair in the food, we offer to refund the customer for
                their food, or remake the dish. If the customer wishes to make a
                formal complaint, there is a complaint form in the folder behind
                the bar which your supervisor will fill in.
              </p>
              <div>
                <MultipleChoices
                  name="nutshell11"
                  options={[
                    'Inform Manager/Supervisor',
                    'Report to Head Roaster',
                    'Both',
                  ]}
                  question="A customer is unhappy with a food item we’ve sold them, who should you report this to?"
                  ref={register({
                    validate: value =>
                      value === '0' || 'Your answers is not correct!',
                  })}
                />
                <ErrorMessage
                  errors={errors}
                  name="nutshell11"
                  as={<ErrorText />}
                />
              </div>
            </div>
            <div className="pb-3">
              <h6 className="font-weight-bold">
                REMEMBER IF YOU ARE NOT SURE ABOUT SOMETHING, PLEASE ASK ANOTHER
                MEMBER OF YOUR TEAM, YOUR SUPERVISOR, OR SOMEONE FROM THE
                KITCHEN. 
              </h6>
              <br />
              <ol
                css={css`
                  padding-left: 20px;
                `}
              >
                <li>
                  <MultipleChoices
                    name="nutshell12"
                    options={['Haznault flapjack', 'Banana Cake', 'Both']}
                    question="A customer is gluten free and vegan, what can you recommend?"
                    ref={register({
                      validate: value =>
                        value === '2' || 'Your answers is not correct!',
                    })}
                  />
                  <ErrorMessage
                    errors={errors}
                    name="nutshell12"
                    as={<ErrorText />}
                  />
                </li>
                <li>
                  <MultipleChoices
                    name="nutshell13"
                    options={['Banana Cake', 'Cashew Balls', 'Both']}
                    question="A customer wants a healthy snack, what can you recommend?"
                    ref={register({
                      validate: value =>
                        value === '2' || 'Your answers is not correct!',
                    })}
                  />
                  <ErrorMessage
                    errors={errors}
                    name="nutshell13"
                    as={<ErrorText />}
                  />
                </li>
                <li>
                  <MultipleChoices
                    name="nutshell14"
                    options={['Inform Kitchen', 'Call 999']}
                    question="A customer has told you they have a severe nut allergy, what should you do?"
                    ref={register({
                      validate: value =>
                        value === '0' || 'Your answers is not correct!',
                    })}
                  />
                  <ErrorMessage
                    errors={errors}
                    name="nutshell14"
                    as={<ErrorText />}
                  />
                </li>
                <li>
                  <MultipleChoices
                    name="nutshell15"
                    options={[
                      'Avocado toast with Mushroom',
                      'Mushrooms on Toast',
                      'Both',
                    ]}
                    question="A customer is vegetarian and really hungry, what can you recommend?"
                    ref={register({
                      validate: value =>
                        value === '2' || 'Your answers is not correct!',
                    })}
                  />
                  <ErrorMessage
                    errors={errors}
                    name="nutshell15"
                    as={<ErrorText />}
                  />
                </li>
                <li>
                  <MultipleChoices
                    name="nutshell16"
                    options={[
                      'Inform Manager/Supervisor',
                      'Report to Head Roaster',
                      'Both',
                    ]}
                    question="A customer is unhappy with a food item we’ve sold them, who should you report this to?"
                    ref={register({
                      validate: value =>
                        value === '0' || 'Your answers is not correct!',
                    })}
                  />
                  <ErrorMessage
                    errors={errors}
                    name="nutshell16"
                    as={<ErrorText />}
                  />
                </li>
              </ol>
            </div>
          </div>
          <CenteredButton value="submit" type="submit" />
        </form>
      </div>
    </DivWithScroll>
  );
}

const MultipleChoices = React.forwardRef(
  ({name, options = [], question}, ref) => {
    return (
      <div
        className="form-group"
        css={css`
          font-weight: bold;
        `}
      >
        <label className="form-check-label">{question}&nbsp;</label>
        {options.map((option, index) => (
          <div className="form-check" key={index}>
            <br />
            <input
              className="form-check-input"
              type="radio"
              name={name}
              value={index}
              ref={ref}
            />
            <label className="form-check-label">{option}</label>
          </div>
        ))}
      </div>
    );
  }
);
