import client from './api-client';
const localStorageKey = '__isp_dash_token__';

function handleUserResponse({data}) {
  window.localStorage.setItem(localStorageKey, data.access_token);
  return data;
}

function getUser() {
  const token = getToken();
  if (!token) {
    return Promise.resolve(null);
  }

  return Promise.resolve({access_token: token}).catch(error => {
    logout();
    return Promise.reject(error);
  });
}

function login({username, password}) {
  return client('auth/', {body: {username, password}}).then(handleUserResponse);
}

function logout() {
  window.localStorage.removeItem(localStorageKey);
  return Promise.resolve();
}

function getToken() {
  return window.localStorage.getItem(localStorageKey);
}

export {login, logout, getToken, getUser};
