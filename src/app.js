import React from 'react';
import UnAuthenticatedApp from './unauthenticated-app';
import BeanBackground from './components/bean-background';
import AuthenticatedApp from './authenticated-app';
import {PageProvider} from './context/page-context';

const auth = {
  user: true,
};
function App() {
  return (
    <BeanBackground>
      {auth.user ? (
        <PageProvider>
          <AuthenticatedApp />
        </PageProvider>
      ) : (
        <UnAuthenticatedApp />
      )}
    </BeanBackground>
  );
}
export default App;
