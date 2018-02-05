import checkStatus from 'fetch-check-http-status';
import serviceFetch from './service-fetch';

function login(username, password) {
  return new Promise((resolve, reject) => {
    const formData = new URLSearchParams();
    formData.set('username', username);
    formData.set('password', password);
    formData.set('grant_type', 'password');

    serviceFetch('/token', {
      method: 'POST',
      body: formData,
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded',
      },
    })
      .then(checkStatus)
      .then(data => data.json())
      .then(authData => resolve(authData))
      .catch(e => reject(e));
  });
}

function register(userName, password, confirmPassword) {
  return new Promise((resolve, reject) => {
    serviceFetch('/api/account/register', {
      method: 'POST',
      body: JSON.stringify({ userName, password, confirmPassword }),
      headers: {
        'Content-Type': 'application/json',
      },
    })
      .then(checkStatus)
      .then(data => data.json())
      .catch(e => reject(e));
  });
}

export {
  login,
  register,
};