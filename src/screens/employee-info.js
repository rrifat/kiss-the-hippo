/**@jsx jsx */
import {jsx, css} from '@emotion/core';
import React from 'react';
import {LeftBox, RightBox} from '../components/content-box';
import {CenteredButton, ErrorText} from '../components/lib';
import {Input, Select} from '../components/form-input';
import useForm from 'react-hook-form';
import * as yup from 'yup';
import {usePage} from '../context/page-context';
const gender = [
  {label: 'Male', value: 'male'},
  {label: 'Female', value: 'female'},
];
const checkboxes = [
  {label: 'This is my first job since 6 April', checked: false},
  {label: 'This is now my only job', checked: false},
  {label: 'I have another job or pension', checked: false},
];
const proofOfEligibilities = [
  {label: 'Passport', value: 'passport'},
  {label: 'Residence or ID Card', value: 'residence card'},
  {label: 'Both', value: 'both'},
];
const EmployeeInfoSchema = yup.object().shape({
  firstName: yup.string().required(),
  lastName: yup.string().required(),
  address: yup.string().required(),
  postCode: yup.string().required(),
  dateOfBirth: yup.string().required(),
  gender: yup.string().required(),
  email: yup.string().required(),
  mobile: yup.string().required(),
  nationalInsuranceNumber: yup.string().required(),
  nationality: yup.string().required(),
  // proofEligibilityDocumentNumber: yup.string().required(),
  // proofEligibility: yup.string().required(),
  // proofEligibilityExpiryDate: yup.string().required(),
  // primaryWorkLocation: yup.string().required(),
  // jobTitle: yup.string().required(),
  // salaryOrHourly: yup.string().required(),
  // salaryPerHourPay: yup.string().required(),
  // employeeStatusFlexibleCasual: yup.string().required(),
  // contractedHours: yup.string().required(),
  // nameInTheBankAccount: yup.string().required(),
  // bankName: yup.string().required(),
  // bankSortCode: yup.string().required(),
  // bankAccountNumber: yup.string().required(),
  // reportingManagerTitle: yup.string().required(),
  // relationshipWithNextOfKin: yup.string().required(),
  // nextOfKinEmail: yup.string().required(),
  // nextOfKinPhone: yup.string().required(),
});

function EmployeeInfo({navigate}) {
  const {setPageNo} = usePage();
  let selectedCheckboxes = new Set();
  const {register, handleSubmit, errors} = useForm({
    validationSchema: EmployeeInfoSchema,
  });
  const onSubmit = handleSubmit((data, e) => {
    e.preventDefault();
    data['summary'] = [...selectedCheckboxes];
    console.log(data);
    setPageNo(prevPage => prevPage + 1);
    navigate('/h-question');
  });

  const handleChange = label => {
    if (selectedCheckboxes.has(label)) {
      selectedCheckboxes.delete(label);
    } else {
      selectedCheckboxes.add(label);
    }
  };

  return (
    <React.Fragment>
      <LeftBox>
        <div className="sign-up-section">
          <div className="row">
            <div className="col-md-12">
              <h2 className="text-center">
                Please complete the below form accurately
              </h2>
              <br />
              <form onSubmit={onSubmit}>
                <div className="form-row">
                  <div className="form-group col-lg-6">
                    <Input type="text" name="firstName" ref={register} />
                    {errors.firstName && (
                      <ErrorText>{errors.firstName.message}</ErrorText>
                    )}
                  </div>
                  <div className="form-group col-lg-6">
                    <Input type="text" name="lastName" ref={register} />
                    {errors.lastName && (
                      <ErrorText>{errors.lastName.message}</ErrorText>
                    )}
                  </div>
                </div>
                <div className="form-row">
                  <div className="form-group col-lg-9">
                    <Input type="text" name="address" ref={register} />
                    {errors.address && (
                      <ErrorText>{errors.address.message}</ErrorText>
                    )}
                  </div>
                  <div className="form-group col-lg-3">
                    <Input type="text" name="postCode" ref={register} />
                    {errors.postCode && (
                      <ErrorText>{errors.postCode.message}</ErrorText>
                    )}
                  </div>
                </div>
                <div className="form-row">
                  <div className="form-group col-lg-9">
                    <Input type="date" name="dateOfBirth" ref={register} />
                  </div>
                  <div className="form-group col-lg-3">
                    <Select options={gender} name="gender" ref={register} />
                  </div>
                </div>
                <div className="form-row">
                  <div className="form-group col-lg-6">
                    <Input type="email" name="email" ref={register} />
                  </div>
                  <div className="form-group col-lg-6">
                    <Input type="number" name="mobile" ref={register} />
                  </div>
                </div>
                <div className="form-row">
                  <div className="form-group col-lg-7">
                    <Input
                      type="text"
                      name="nationalInsuranceNumber"
                      ref={register}
                    />
                  </div>
                  <div className="form-group col-lg-5">
                    <Input type="text" name="nationality" ref={register} />
                  </div>
                </div>
                <div className="form-group">
                  <Input
                    type="text"
                    name="proofEligibilityDocumentNumber"
                    ref={register}
                  />
                </div>

                <div className="form-group">
                  <label>Proof of eligibility</label>
                </div>
                <ul
                  css={css`
                    list-style-type: circle;
                    padding-left: 15px;
                  `}
                >
                  {proofOfEligibilities.map((item, index) => (
                    <li key={index}>
                      <div className="form-group row">
                        <label className="col-md-4 col-10 form-check-label">
                          {item.label}
                        </label>
                        <div className="col-md-1 col-2">
                          <input
                            className="form-check-input"
                            type="radio"
                            name="proofEligibility"
                            value={item.value}
                            ref={register}
                          />
                        </div>
                      </div>
                    </li>
                  ))}
                </ul>

                <div className="form-group">
                  <Input
                    type="date"
                    name="proofEligibilityExpiryDate"
                    ref={register}
                  />
                </div>

                <div className="form-row">
                  <div className="form-group col-lg-6">
                    <Input
                      type="text"
                      name="primaryWorkLocation"
                      ref={register}
                    />
                  </div>
                  <div className="form-group col-lg-6">
                    <Input type="text" name="jobTitle" ref={register} />
                  </div>
                </div>
                <div className="form-row">
                  <div className="form-group col-md-6">
                    <Input type="text" name="salaryOrHourly" ref={register} />
                  </div>
                  <div className="form-group col-lg-6">
                    <Input
                      type="number"
                      name="salaryPerHourPay"
                      label="Salary / Hourly Pay"
                      ref={register}
                    />
                  </div>
                </div>
                <div className="form-row">
                  <div className="form-group col-lg-6">
                    <Input
                      type="text"
                      name="employeeStatusFlexibleCasual"
                      label="Employee Status - Flexible / Casual"
                      ref={register}
                    />
                  </div>
                  <div className="form-group col-lg-6">
                    <Input type="text" name="contractedHours" ref={register} />
                  </div>
                </div>
                <div className="form-row">
                  <div className="form-group col-lg-6">
                    <Input
                      type="text"
                      name="nameInTheBankAccount"
                      ref={register}
                    />
                  </div>
                  <div className="form-group col-lg-6">
                    <Input type="text" name="bankName" ref={register} />
                  </div>
                </div>
                <div className="form-row">
                  <div className="form-group col-lg-6">
                    <Input type="text" name="bankSortCode" ref={register} />
                  </div>
                  <div className="form-group col-lg-6">
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
                  <div className="form-group col-12">
                    <label>P46 Information Summary</label>
                  </div>
                </div>

                <ul
                  css={css`
                    list-style-type: circle;
                    padding-left: 15px;
                  `}
                >
                  {checkboxes.map((checkbox, index) => (
                    <li key={index}>
                      <div className="form-group row">
                        <label className="col-md-6 col-10 form-check-label">
                          {checkbox.label}
                        </label>
                        <div className="col-md-2 col-2">
                          <input
                            className="form-check-input"
                            type="checkbox"
                            name="summary"
                            defaultChecked={checkbox.checked}
                            ref={register}
                            onChange={handleChange}
                          />
                        </div>
                      </div>
                    </li>
                  ))}
                </ul>

                <div className="form-row">
                  <div className="form-group col-lg-4">
                    <Input
                      type="text"
                      name="reportingManagerTitle"
                      ref={register}
                    />
                  </div>
                  <div className="form-group col-lg-4">
                    <Input type="text" name="nextOfKinName" ref={register} />
                  </div>
                  <div className="form-group col-lg-4">
                    <Input
                      type="text"
                      name="relationshipWithNextOfKin"
                      ref={register}
                    />
                  </div>
                </div>
                <div className="form-row">
                  <div className="form-group col-lg-6">
                    <Input type="email" name="nextOfKinEmail" ref={register} />
                  </div>
                  <div className="form-group col-lg-6">
                    <Input type="number" name="nextOfKinPhone" ref={register} />
                  </div>
                </div>
                <CenteredButton type="submit" value="Continue" />
              </form>
            </div>
          </div>
        </div>
      </LeftBox>
      <RightBox>
        <div>
          <img
            src={`${process.env.PUBLIC_URL}/images/KTH_Pantone.jpg`}
            alt="KTH Pantone"
            className="img-fluid"
          />
        </div>
      </RightBox>
    </React.Fragment>
  );
}
export default EmployeeInfo;
