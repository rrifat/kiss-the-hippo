import React from 'react';
import {LeftBox, RightBox} from '../components/content-box';
import {IFrame} from '../components/lib';
import {CenteredButton} from '../components/lib';
import Carousel from '../components/carousel';
import {Link} from '@reach/router';
const carouselSlidesData = [
  {
    question:
      'Lorem ipsum dolor sit amet, ex eam putent commodo, sit eu erroribus ullamcorper consequuntur, mei ex nulla iisque?',
    options: [
      'Cum impetus deserunt philosophia ea',
      'Cum impetus deserunt philosophia ea',
      'Cum impetus deserunt philosophia ea',
      'Cum impetus deserunt philosophia ea',
    ],
  },
  {
    question:
      'Percipit similique ad vim, omnium deleniti eu vis. Mei hendrerit definiebas ne?',
    options: [
      'Cum impetus deserunt philosophia ea',
      'Cum impetus deserunt philosophia ea',
      'Cum impetus deserunt philosophia ea',
      'Cum impetus deserunt philosophia ea',
    ],
  },
  {
    question:
      'Lorem ipsum dolor sit amet, ex eam putent commodo, sit eu erroribus ullamcorper consequuntur, mei ex nulla iisque?',
    options: [
      'Cum impetus deserunt philosophia ea',
      'Cum impetus deserunt philosophia ea',
      'Cum impetus deserunt philosophia ea',
      'Cum impetus deserunt philosophia ea',
    ],
  },
];
function VisualQuestion() {
  return (
    <>
      <LeftBox>
        <h3>Tuberculosis, pleurisy, asthma, bronchitis, or any other lung</h3>
        <IFrame
          src="https://www.youtube.com/embed/fyqDC_AKVgE?controls=0"
          title="Kiss the hippo"
        />
      </LeftBox>
      <RightBox>
        <div>
          <Carousel slides={carouselSlidesData} />
          <br />
          <Link to="/final">
            <CenteredButton type="submit" value="Submit" />
          </Link>
        </div>
      </RightBox>
    </>
  );
}
export default VisualQuestion;
