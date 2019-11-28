import React from 'react';
import {LeftBox, RightBox} from '../components/content-box';
import {CenteredButton} from '../components/lib';
import {Link} from '@reach/router';
function EmployeeInfo() {
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
              <form>
                <div className="form-row">
                  <div className="form-group col-md-6">
                    <input
                      type="text"
                      className="form-control"
                      placeholder="First Name"
                    />
                  </div>
                  <div className="form-group col-md-6">
                    <input
                      type="text"
                      className="form-control"
                      placeholder="Last Name"
                    />
                  </div>
                </div>
                <div className="form-row">
                  <div className="form-group col-md-9">
                    <input
                      type="text"
                      className="form-control"
                      placeholder="Address"
                    />
                  </div>
                  <div className="form-group col-md-3">
                    <input
                      type="text"
                      className="form-control"
                      placeholder="Post Code"
                    />
                  </div>
                </div>
                <div className="form-row">
                  <div className="form-group col-md-9">
                    <input
                      type="date"
                      className="form-control"
                      placeholder="Address"
                    />
                  </div>
                  <div className="form-group col-md-3">
                    <input
                      type="text"
                      className="form-control"
                      placeholder="Gender"
                    />
                  </div>
                </div>
                <div className="form-row">
                  <div className="form-group col-md-6">
                    <input
                      type="email"
                      className="form-control"
                      placeholder="Email"
                    />
                  </div>
                  <div className="form-group col-md-6">
                    <input
                      type="text"
                      className="form-control"
                      placeholder="Mobile"
                    />
                  </div>
                </div>
                <div className="form-row">
                  <div className="form-group col-md-7">
                    <input
                      type="email"
                      className="form-control"
                      placeholder="National insurance no."
                    />
                  </div>
                  <div className="form-group col-md-5">
                    <input
                      type="text"
                      className="form-control"
                      placeholder="Nationality"
                    />
                  </div>
                </div>
                <div className="form-group">
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Proof eligibility document no."
                  />
                </div>
                <div className="form-group">
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Proof eligibility (eg. Passport, Id card. Leave blank if you don't have)"
                  />
                </div>

                <div className="form-group">
                  <input
                    type="date"
                    className="form-control"
                    placeholder="Proof eligibility expiry date"
                  />
                </div>

                <div className="form-row">
                  <div className="form-group col-md-6">
                    <input
                      type="text"
                      className="form-control"
                      placeholder="Primary work location"
                    />
                  </div>
                  <div className="form-group col-md-6">
                    <input
                      type="text"
                      className="form-control"
                      placeholder="Job title"
                    />
                  </div>
                </div>
                <div className="form-row">
                  <div className="form-group col-md-6">
                    <input
                      type="number"
                      className="form-control"
                      placeholder="Salary/Hourly"
                    />
                  </div>
                  <div className="form-group col-md-6">
                    <input
                      type="number"
                      className="form-control"
                      placeholder="Salary/Per hours pay"
                    />
                  </div>
                </div>
                <div className="form-row">
                  <div className="form-group col-md-6">
                    <input
                      type="text"
                      className="form-control"
                      placeholder="Employee status flexible casual"
                    />
                  </div>
                  <div className="form-group col-md-6">
                    <input
                      type="text"
                      className="form-control"
                      placeholder="Contracted hours"
                    />
                  </div>
                </div>
                <div className="form-row">
                  <div className="form-group col-md-6">
                    <input
                      type="text"
                      className="form-control"
                      placeholder="Name in the bank account"
                    />
                  </div>
                  <div className="form-group col-md-6">
                    <input
                      type="text"
                      className="form-control"
                      placeholder="Bank name"
                    />
                  </div>
                </div>
                <div className="form-row">
                  <div className="form-group col-md-6">
                    <input
                      type="text"
                      className="form-control"
                      placeholder="Bank short code"
                    />
                  </div>
                  <div className="form-group col-md-6">
                    <input
                      type="text"
                      className="form-control"
                      placeholder="Bank account number"
                    />
                  </div>
                </div>
                <div className="form-row">
                  <div className="form-group col-md-5 md-offset-7">
                    <small>If you have p45, please provide a copy of p45</small>
                    <small>otherwise fill up the p46 form</small>
                  </div>
                </div>

                <div className="form-group col-md-5">
                  <label>Information Summary</label>
                  <div className="check">
                    <small>This is my first job since 6 April</small>
                    <input type="checkbox" />
                    <span className="checkmark"></span>
                  </div>
                  <div className="check">
                    <small>This is my first job since 6 April</small>
                    <input type="checkbox" />
                    <span className="checkmark"></span>
                  </div>
                  <div className="check">
                    <small>This is my first job since 6 April</small>
                    <input type="checkbox" defaultChecked />
                    <span className="checkmark"></span>
                  </div>
                </div>

                <div className="form-row">
                  <div className="form-group col-md-4">
                    <input
                      type="text"
                      className="form-control"
                      placeholder="Reporting manager title"
                    />
                  </div>
                  <div className="form-group col-md-4">
                    <input
                      type="text"
                      className="form-control"
                      placeholder="Next of kin name"
                    />
                  </div>
                  <div className="form-group col-md-4">
                    <input
                      type="text"
                      className="form-control"
                      placeholder="Relationship with next of kin"
                    />
                  </div>
                </div>
                <div className="form-row">
                  <div className="form-group col-md-6">
                    <input
                      type="email"
                      className="form-control"
                      placeholder="Next of kin email"
                    />
                  </div>
                  <div className="form-group col-md-6">
                    <input
                      type="text"
                      className="form-control"
                      placeholder="Next of kin phone"
                    />
                  </div>
                </div>
                <Link to="/health">
                  <CenteredButton type="submit" value="Continue" />
                </Link>
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
