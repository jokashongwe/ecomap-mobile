import axios from 'axios';

const API_URL = 'http://192.168.59.84:8080/api/v1';

export async function auth(username, password) {
  const requestUrl = API_URL + '/auth';
  const res = await axios.post(
    requestUrl,
    {
      username,
      password,
    },
    {responseType: 'json'},
  );
  return res.data;
}

export async function createdProducer(productData, token) {
  const requestUrl = API_URL + '/producers';
  const res = await axios.post(requestUrl, productData, {
    responseType: 'json',
    headers: {
      Authorization: 'Bearer ' + token,
    },
  });
  return res.data;
}

export async function getProducts(token) {
  const requestUrl = API_URL + '/products';
  const res = await axios.get(requestUrl, null, {
    responseType: 'json',
    headers: {
      Authorization: 'Bearer ' + token,
    },
  });
  return res.data;
}
