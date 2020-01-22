import React from 'react';
import {Router, Redirect} from '@reach/router';
import EmployeeInfo from './screens/employee-info';
import JobContractLetter from './screens/job-contract-letter';
import HealthSafety from './screens/health-safety';
import FoodSafety from './screens/food-safety';
import Riddor from './screens/riddor';
import Ladder from './screens/ladder';
import UniformPolicy from './screens/uniform-policy';
import EmployeeDiscount from './screens/employee-discount';
import Others from './screens/others';
import Final from './screens/final';
import Nutshell from './screens/nutshell';
import HealthQuestionnaires from './screens/health-questionnaires';
// import {usePage} from './context/page-context';
import {useAuth} from './context/auth-context';

const routes = [
  <EmployeeInfo path="info" />,
  <HealthQuestionnaires path="h-question" />,
  <JobContractLetter path="jcl" />,
  <HealthSafety path="h-safety" />,
  <FoodSafety path="f-safety" />,
  <Riddor path="riddor" />,
  <Ladder path="ladder" />,
  <UniformPolicy path="uniform" />,
  <EmployeeDiscount path="employee-discount" />,
  <Others path="others" />,
  <Nutshell path="nutshell" />,
  <Final path="final" />,
];

function RedirectHome() {
  return <Redirect to="info" noThrow />;
}

function AuthenticatedApp() {
  const {page} = useAuth();
  return (
    <Router className="row h-100 w-100">
      <RedirectHome path="/" />
      {routes[page - 1]}
      <NotFound default />
    </Router>
  );
}
export default AuthenticatedApp;

function NotFound() {
  return (
    <div className="col-sm-12">
      <div className="container">
        <div className="row col-9 offset-3 py-5">
          <h1>
            <b>Page Not Found</b>
          </h1>
          <div className="row col-12">
            <p className="text-muted">
              We couldn't find what you were looking for.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
