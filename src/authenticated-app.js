import React from 'react';
import {Router} from '@reach/router';
import Questionnaires from './screens/questionnaires';
import EmployeeInfo from './screens/employee-info';
import UnAuthenticatedApp from './unauthenticated-app';

function AuthenticatedApp() {
  return (
    <Router className="row h-100 w-100">
      <UnAuthenticatedApp path="/" />
      <EmployeeInfo path="/info" />
      <Questionnaires path="/questionnaires" />
    </Router>
  );
}
export default AuthenticatedApp;
