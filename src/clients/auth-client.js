import client from './api-client';
import jwtDecode from 'jwt-decode';
const localStorageKey = '__kiss_the_hippo__';

function handleUserResponse({data: response}) {
  window.localStorage.setItem(localStorageKey, response.data.access_token);
  return response;
}

function getUser() {
  const token = getToken();
  if (!token) {
    return Promise.resolve(null);
  }
  const {identity} = jwtDecode(token);

  return Promise.resolve({user: identity.userid}).catch(error => {
    logout();
    return Promise.reject(error);
  });
}

function login({userid, password}) {
  return client('auth/login', {body: {userid, password}}).then(
    handleUserResponse
  );
}

function logout() {
  window.localStorage.removeItem(localStorageKey);
  return Promise.resolve();
}

function getToken() {
  return window.localStorage.getItem(localStorageKey);
}

export {login, logout, getToken, getUser};
