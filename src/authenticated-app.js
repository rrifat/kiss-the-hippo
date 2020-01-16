import React from 'react';
import {Router} from '@reach/router';
import EmployeeInfo from './screens/employee-info';
import UnAuthenticatedApp from './unauthenticated-app';
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
import {usePage} from './context/page-context';

function AuthenticatedApp() {
  const {pageNo} = usePage();
  return (
    <Router className="row h-100 w-100">
      <UnAuthenticatedApp path="/" />
      <EmployeeInfo path="info" />
      <HealthQuestionnaires path="h-question" />
      <JobContractLetter path="jcl" />
      <HealthSafety path="h-safety" />
      <FoodSafety path="f-safety" />
      <Riddor path="riddor" />
      <Ladder path="ladder" />
      <UniformPolicy path="uniform" />
      <EmployeeDiscount path="employee-discount" />
      <Others path="others" />
      <Final path="final" />
      <Nutshell path="nutshell" />
      <NotFound default />
    </Router>
  );
}
export default AuthenticatedApp;

function NotFound() {
  return <h1>No Router Found</h1>;
}
