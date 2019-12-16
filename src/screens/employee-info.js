import React from 'react';
import {LeftBox, RightBox} from '../components/content-box';
import {CenteredButton} from '../components/lib';
// import {Link} from '@reach/router';
import {Input, Select, CheckBox} from '../components/form-input';
import useForm from 'react-hook-form';

const gender = [
  {label: 'Male', value: 'male'},
  {label: 'Female', value: 'female'},
];
const checkboxes = [
  {label: 'This is my first job since 6 April', checked: false},
  {label: 'This is now my only job', checked: false},
  {label: 'I have another job or pension', checked: false},
];

function EmployeeInfo() {
  let selectedCheckboxes = new Set();
  const {register, handleSubmit} = useForm();
  const onSubmit = handleSubmit(data => {
    data['summary'] = [...selectedCheckboxes];
    console.log(data);
  });

  const handleChange = label => {
    if (selectedCheckboxes.has(label)) {
      selectedCheckboxes.delete(label);
    } else {
      selectedCheckboxes.add(label);
    }
  };

  return (
    <>
      <LeftBox>
        <div className="sign-up-section">
          <div className="row">
            <div className="col-md-12">
              <h2 className="text-center">
                Please complete in all capital letter
              </h2>
              <br />
              <form onSubmit={onSubmit}>
                <div className="form-row">
                  <div className="form-group col-md-6">
                    <Input type="text" name="firstName" ref={register} />
                  </div>
                  <div className="form-group col-md-6">
                    <Input type="text" name="lastName" ref={register} />
                  </div>
                </div>
                <div className="form-row">
                  <div className="form-group col-md-9">
                    <Input type="text" name="address" ref={register} />
                  </div>
                  <div className="form-group col-md-3">
                    <Input type="text" name="postCode" ref={register} />
                  </div>
                </div>
                <div className="form-row">
                  <div className="form-group col-md-9">
                    <Input type="date" name="dateOfBirth" ref={register} />
                  </div>
                  <div className="form-group col-md-3">
                    <Select options={gender} name="gender" ref={register} />
                  </div>
                </div>
                <div className="form-row">
                  <div className="form-group col-md-6">
                    <Input type="email" name="email" ref={register} />
                  </div>
                  <div className="form-group col-md-6">
                    <Input type="number" name="mobile" ref={register} />
                  </div>
                </div>
                <div className="form-row">
                  <div className="form-group col-md-7">
                    <Input
                      type="number"
                      name="nationalInsuranceNumber"
                      ref={register}
                    />
                  </div>
                  <div className="form-group col-md-5">
                    <Input type="text" name="nationality" ref={register} />
                  </div>
                </div>
                <div className="form-group">
                  <Input
                    type="number"
                    name="proofEligibilityDocumentNumber"
                    ref={register}
                  />
                </div>
                <div className="form-group">
                  <Input
                    type="file"
                    className="form-control"
                    name="proofEligibility"
                    placeholder="(eg. Passport, Id card. Leave blank if you don't have)"
                    ref={register}
                  />
                </div>

                <div className="form-group">
                  <Input
                    type="date"
                    name="proofEligibilityExpiryDate"
                    ref={register}
                  />
                </div>

                <div className="form-row">
                  <div className="form-group col-md-6">
                    <Input
                      type="text"
                      name="primaryWorkLocation"
                      ref={register}
                    />
                  </div>
                  <div className="form-group col-md-6">
                    <Input type="text" name="jobTitle" ref={register} />
                  </div>
                </div>
                <div className="form-row">
                  <div className="form-group col-md-6">
                    <Input type="number" name="salaryOrHourly" ref={register} />
                  </div>
                  <div className="form-group col-md-6">
                    <Input type="text" name="salaryPerHourPay" ref={register} />
                  </div>
                </div>
                <div className="form-row">
                  <div className="form-group col-md-6">
                    <Input
                      type="text"
                      name="employeeStatusFlexibleCasual"
                      ref={register}
                    />
                  </div>
                  <div className="form-group col-md-6">
                    <Input type="text" name="contractedHours" ref={register} />
                  </div>
                </div>
                <div className="form-row">
                  <div className="form-group col-md-6">
                    <Input
                      type="text"
                      name="nameInTheBankAccount"
                      ref={register}
                    />
                  </div>
                  <div className="form-group col-md-6">
                    <Input type="text" name="bankName" ref={register} />
                  </div>
                </div>
                <div className="form-row">
                  <div className="form-group col-md-6">
                    <Input type="text" name="bankShortCode" ref={register} />
                  </div>
                  <div className="form-group col-md-6">
                    <Input
                      type="text"
                      name="bankAccountNumber"
                      ref={register}
                    />
                  </div>
                </div>

                <div className="form-group text-center">
                  <strong>
                    If you have p45, please provide a copy of p45 otherwise sign
                    the p46 form
                  </strong>
                </div>

                <div className="form-row">
                  <div className="form-group col-md-3">
                    <span>P46 Information Summary</span>
                  </div>
                  <div className="form-group col-md-9">
                    {checkboxes.map((checkbox, index) => (
                      <div className="form-check" key={index}>
                        <CheckBox
                          type="checkbox"
                          name="summary"
                          checked={checkbox.checked}
                          label={checkbox.label}
                          ref={register}
                          handleChange={handleChange}
                        />
                      </div>
                    ))}
                  </div>
                </div>

                <div className="form-row">
                  <div className="form-group col-md-4">
                    <Input
                      type="text"
                      name="reportingManagerTitle"
                      ref={register}
                    />
                  </div>
                  <div className="form-group col-md-4">
                    <Input type="text" name="nextOfKinName" ref={register} />
                  </div>
                  <div className="form-group col-md-4">
                    <Input
                      type="text"
                      name="relationshipWithNextOfKin"
                      ref={register}
                    />
                  </div>
                </div>
                <div className="form-row">
                  <div className="form-group col-md-6">
                    <Input type="email" name="nextOfKinEmail" ref={register} />
                  </div>
                  <div className="form-group col-md-6">
                    <Input type="number" name="nextOfKinPhone" ref={register} />
                  </div>
                </div>
                {/* <Link to="/health"> */}
                <CenteredButton type="submit" value="Continue" />
                {/* </Link> */}
              </form>
            </div>
          </div>
        </div>
      </LeftBox>
      <RightBox>
        <div>
          <img src="images/coffee-two.png" alt="coffee one" />
        </div>
      </RightBox>
    </>
  );
}
export default EmployeeInfo;


