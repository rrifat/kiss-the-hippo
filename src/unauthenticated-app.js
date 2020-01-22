import React from 'react';
import {GradientButton, ErrorText} from './components/lib';
import {useAuth} from './context/auth-context';
// import {useForm} from 'react-hook-form';

function UnAuthenticatedApp({navigate}) {
  const {onSubmit, register, error} = useAuth();
  // const {register, handleSubmit} = useForm();
  // const [error, setError] = React.useState();

  // const onSubmit = handleSubmit(({username, password}, e) => {
  //   e.preventDefault();
  //   login({
  //     userid: username,
  //     password: password,
  //   })
  //     .then(val => console.log('un auth', val))
  //     .catch(error => {
  //       if (error.response) {
  //         setError(error.response.data);
  //       } else if (error.request) {
  //         console.log('Request error', error.request);
  //         setError(error);
  //       } else {
  //         setError(error);
  //       }
  //     });
  // });
  return (
    <>
      <div className="col-sm-6">
        <img
          src="images/slide-pic.png"
          alt=""
          width="90%"
          height="80%"
          className="fluid"
        />
      </div>
      <div className="upper-right col-sm-3 offset-sm-2">
        <div className="logo">
          <img
            src="images/kiss-hippo-logo.png"
            alt="kiss the hippo"
            className="fluid"
          />
        </div>
        <div className="login-form">
          <form id="loginForm" onSubmit={onSubmit}>
            <div className="form-group group">
              <input
                name="username"
                className="username"
                type="text"
                placeholder="Username"
                ref={register({required: true})}
              />
              <i className="fas fa-user icon" aria-hidden="true"></i>
            </div>
            <div className="form-group group">
              <input
                name="password"
                className="password"
                type="password"
                placeholder="Password"
                ref={register({required: true})}
              />
              <i className="fas fa-lock icon" />
            </div>
            {error && error.message && (
              <div className="form-group group">
                <ErrorText>{error.message}</ErrorText>
              </div>
            )}
            <GradientButton type="submit">Login</GradientButton>
          </form>
        </div>
      </div>
    </>
  );
}

export default UnAuthenticatedApp;
