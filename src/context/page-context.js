import React from 'react';
import {navigate} from '@reach/router';

const PageContext = React.createContext();
const routes = [
  '/',
  '/info',
  '/h-question',
  '/jcl',
  '/h-safety',
  '/f-safety',
  '/riddor',
  '/ladder',
  '/unifor',
];
function PageProvider(props) {
  const [page, setPage] = React.useState(1);

  return (
    <PageContext.Provider
      value={{page, setPage, navigateToNextPage}}
      {...props}
    />
  );
}
function navigateToNextPage(page) {
  navigate(routes[page]);
}

function usePage() {
  const context = React.useContext(PageContext);
  if (context === undefined) {
    throw new Error(`useAuth must be within PageProvider`);
  }
  return context;
}
export {PageProvider, usePage, navigateToNextPage};
