import React from 'react';
import UnAuthenticatedApp from './unauthenticated-app';
import BeanBackground from './components/bean-background';
import AuthenticatedApp from './authenticated-app';

const auth = {
  user: true,
};
function App() {
  return (
    <BeanBackground>
      {auth.user ? <AuthenticatedApp /> : <UnAuthenticatedApp />}
    </BeanBackground>
  );
}
export default App;
