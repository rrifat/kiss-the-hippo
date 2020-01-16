import React from 'react';

const PageContext = React.createContext();

function PageProvider(props) {
  const [pageNo, setPageNo] = React.useState(1);
  return <PageContext.Provider value={{pageNo, setPageNo}} {...props} />;
}

function usePage() {
  const context = React.useContext(PageContext);
  if (context === undefined) {
    throw new Error(`useAuth must be within PageProvider`);
  }
  return context;
}
export {PageProvider, usePage};
