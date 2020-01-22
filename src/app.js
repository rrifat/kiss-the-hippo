import React from 'react';
import UnAuthenticatedApp from './unauthenticated-app';
import BeanBackground from './components/bean-background';
import AuthenticatedApp from './authenticated-app';
import {PageProvider} from './context/page-context';
// import {useUser} from './context/user-context';
import {useAuth} from './context/auth-context';

function App() {
  const {
    userData: {user},
  } = useAuth();

  return (
    <BeanBackground>
      {user ? (
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
