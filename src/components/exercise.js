import React from 'react';
import Carousel from '../components/carousel';
import {CenteredButton} from '../components/lib';

function Exercise({page, handleNextPageRender}) {
  return (
    <div>
      <form onSubmit={handleNextPageRender}>
        <Carousel slides={page.questions} />
        <br />
        <CenteredButton type="submit" value="Submit" />
      </form>
    </div>
  );
}

export default Exercise;
