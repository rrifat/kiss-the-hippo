import React from 'react';
import {LeftBox, RightBox} from '../components/content-box';

function VisualQuestion() {
  return (
    <>
      <LeftBox>
        {/* <iframe
          width="720"
          height="720"
          src="https://www.youtube.com/embed/9i-nvqPe5Rs"
          frameborder="0"
          allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
          allowfullscreen
        /> */}
      </LeftBox>
      <RightBox>
        <div>
          <img src="images/coffee-one.png" alt="coffee one" />
        </div>
      </RightBox>
    </>
  );
}
export default VisualQuestion;
