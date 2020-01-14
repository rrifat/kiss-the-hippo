import axios from 'axios';

function client(endpoint, { body, ...customConfig } = {}) {
  const token = window.localStorage.getItem('__isp_dash_token__');
  const headers = { 'Content-Type': 'application/json' };

  if (token) {
    headers.Authorization = `Bearer ${token}`;
  }

  const config = {
    method: body ? 'post' : 'get',
    ...customConfig,
    headers: {
      ...headers,
      ...customConfig.headers
    }
  };

  if (body) {
    config.data = JSON.stringify(body);
  }

  return axios(`${process.env.REACT_APP_ADMIN_API_URL}/${endpoint}`, config);
}

export default client;
