import axios from 'axios';

function client(endpoint, {body, ...customConfig} = {}) {
  const token = window.localStorage.getItem('__kiss_the_hippo__');
  const headers = {'Content-Type': 'application/json'};

  if (token) {
    headers.Authorization = `Bearer ${token}`;
  }

  const config = {
    method: body ? 'post' : 'get',
    ...customConfig,
    headers: {
      ...headers,
      ...customConfig.headers,
    },
  };

  if (body) {
    config.data = JSON.stringify(body);
  }

  return axios(`http://103.69.149.246:4002/api/v1.0/${endpoint}`, config);
}

export default client;
