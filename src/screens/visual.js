import React from 'react';
import {IFrame} from '../components/lib';

function Visual({page}) {
  return <IFrame src={page.content} title="Kiss the hippo" />;
}
export default Visual;
