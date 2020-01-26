import React from 'react';
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
  const [page, setPage] = usePersistedState('page-count', 0);
  const [user, setUser] = React.useState(false);
  const [userData, setUserData] = React.useState({});
  const {register, handleSubmit} = useForm();
  const [error, setError] = React.useState();

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
