import React from 'react';
import {Router} from '@reach/router';
import HealthQuestion from './screens/health-question';
import VisualQuestion from './screens/visual-question';
import EmployeeInfo from './screens/employee-info';
import CarouselQuestion from './screens/carousel-ques';
import UnAuthenticatedApp from './unauthenticated-app';

function AuthenticatedApp() {
  return (
    <Router className="row h-100 w-100">
      <UnAuthenticatedApp path="/" />
      <HealthQuestion path="/health" />
      <CarouselQuestion path="/carousel-ques" />
      <VisualQuestion path="/visual" />
      <EmployeeInfo path="/info" />
    </Router>
  );
}
export default AuthenticatedApp;
