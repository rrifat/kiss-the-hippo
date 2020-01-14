import React from 'react';
import {LeftBox, RightBox} from '../components/content-box';
import Comprehension from './comprehension-exercises';
import Visual from './visual';
import Exercise from '../components/exercise';
import pages from '../page-format.json';
import Final from './final';

const HEALTH_QUESTIONNAIRES = 'health questionnaires';
const ESSAY_QUESTIONNAIRES = 'essay questionnaires';
const VIDEO_QUESTIONNAIRES = 'video questionnaires';

function Questionnaires() {
  const [page, setPage] = React.useState({});
  const {page_title: pageTitle = '', content_type: contentType = ''} = page;

  React.useEffect(() => {
    setPage(pages[0]);
  }, []);

  // const handlePage = (e, nextPageRenderType) => {
  //   e.preventDefault();

  //   if (nextPageRenderType === 'essay') {
  //     setPage(pages[1]);
  //   }
  //   if (nextPageRenderType === 'video') {
  //     setPage(pages[2]);
  //   }
  //   if (nextPageRenderType === 'final') {
  //     setPage({});
  //   }
  // };

  const renderLeftSideContent = () => {
    switch (contentType) {
      case HEALTH_QUESTIONNAIRES:
        return;
      case ESSAY_QUESTIONNAIRES:
        return <Comprehension page={page} />;
      case VIDEO_QUESTIONNAIRES:
        return <Visual page={page} />;
      default:
        return;
    }
  };
  const renderRightSideContent = () => {
    switch (contentType) {
      case HEALTH_QUESTIONNAIRES:
        return;
      case ESSAY_QUESTIONNAIRES:
        return (
          <Exercise
            page={page}
            // handleNextPageRender={e => handlePage(e, 'video')}
          />
        );
      case VIDEO_QUESTIONNAIRES:
        return (
          <Exercise
            page={page}
            // handleNextPageRender={e => handlePage(e, 'final')}
          />
        );
      default:
        return;
    }
  };

  return contentType ? (
    <>
      <LeftBox>
        <h3 className="text-center my-3">{pageTitle.toUpperCase()}</h3>
        {renderLeftSideContent()}
      </LeftBox>
      <RightBox>{renderRightSideContent()}</RightBox>
    </>
  ) : (
    <Final />
  );
}
export default Questionnaires;
