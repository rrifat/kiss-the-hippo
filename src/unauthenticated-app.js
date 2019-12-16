import React from 'react';
import {GradientButton} from './components/lib';
import {Link} from '@reach/router';
function UnAuthenticatedApp() {
  return (
    <>
      <div className="col-lg-8">
        <img
          src="images/slide-pic.png"
          alt=""
          width="90%"
          height="80%"
          className="fluid"
        />
      </div>
      <div className="upper-right col-lg-4">
        <div className="logo">
          <img
            src="images/kiss-hippo-logo.png"
            alt="kiss the hippo"
            className="fluid"
          />
        </div>
        <div className="login-form">
          <form id="loginForm">
            <div className="form-group group">
              <input className="username" type="text" placeholder="Username" />
              <i className="fas fa-user icon" aria-hidden="true"></i>
            </div>
            <div className="form-group group">
              <input
                className="password"
                type="password"
                placeholder="Password"
              />
              <i className="fas fa-lock icon" />
            </div>
            <Link to="/info">
              <GradientButton type="submit">Login</GradientButton>
            </Link>
          </form>
        </div>
      </div>
    </>
  );
}

export default UnAuthenticatedApp;
