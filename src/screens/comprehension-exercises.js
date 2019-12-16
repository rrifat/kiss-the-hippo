import React from 'react';

function Comprehension({page}) {
  const {content} = page;
  return <div dangerouslySetInnerHTML={{__html: content}} />;
}
export default Comprehension;
