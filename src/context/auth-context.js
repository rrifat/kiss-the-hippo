import React from 'react';
// import {useAsync} from 'react-async';
// import {FullPageSpinner} from '../components/lib';
import * as authClient from '../clients/auth-client';
import {useForm} from 'react-hook-form';

const AuthContext = React.createContext();

function usePersistedState(key, defaultValue) {
  const [state, setState] = React.useState(
    () => JSON.parse(localStorage.getItem(key)) || defaultValue
  );
  React.useEffect(() => {
    localStorage.setItem(key, JSON.stringify(state));
  }, [key, state]);
  return [state, setState];
}

function AuthProvider(props) {
  // const [firstAttemptFinished, setFirstAttemptFinished] = React.useState(false);
  // const {
  //   data = {user: false},
  //   error,
  //   isRejected,
  //   isPending,
  //   isSettled,
  //   reload,
  // } = useAsync({
  //   promiseFn: bootstrapData,
  // });

  // React.useLayoutEffect(() => {
  //   if (isSettled) {
  //     setFirstAttemptFinished(true);
  //   }
  // }, [isSettled]);

  // if (!firstAttemptFinished) {
  //   if (isPending) {
  //     // return <FullPageSpinner />;
  //     return <h1>LOADING>>>></h1>;
  //   }
  //   if (isRejected) {
  //     return (
  //       <div css={{color: 'red'}}>
  //         <p>Uh oh... There's a problem. Try refreshing the app.</p>
  //         <pre>{error.message}</pre>
  //       </div>
  //     );
  //   }
  // }

  // const login = form => authClient.login(form).then(reload);
  // const logout = () => authClient.logout().then(reload);
  const [page, setPage] = usePersistedState('page-count', 0);
  const [user, setUser] = React.useState(false);
  const [userData, setUserData] = React.useState({});
  const {register, handleSubmit} = useForm();
  const [error, setError] = React.useState();
  // const token = window.localStorage.getItem('__kiss_the_hippo__');

  async function bootstrapData() {
    const data = await authClient.getUser();
    if (!data) {
      setUserData({user: false});
      return;
    }
    setUserData(data);
    return;
  }
  React.useEffect(() => {
    bootstrapData();
  }, [user]);

  const onSubmit = handleSubmit(({username, password}, e) => {
    e.preventDefault();
    authClient
      .login({
        userid: username,
        password: password,
      })
      .then(({data}) => {
        setUser(true);
        // data.access_token
        // data.nextPageNo
        setPage(data.nextPageNo);
      })
      .catch(error => {
        if (error.response) {
          setError(error.response.data);
        } else if (error.request) {
          console.log('Request error', error.request);
          setError(error);
        } else {
          setError(error);
        }
      });
  });

  const logout = () =>
    authClient.logout().then(() => {
      setUser(false);
    });

  return (
    <AuthContext.Provider
      value={{
        onSubmit,
        error,
        register,
        logout,
        userData,
        page,
        setPage,
      }}
      {...props}
    />
  );
}

function useAuth() {
  const context = React.useContext(AuthContext);
  if (context === undefined) {
    throw new Error(`useAuth must be within AuthProvider`);
  }
  return context;
}

export {AuthProvider, useAuth};
