import axios from 'axios';

const API_URL = 'http://192.168.190.84:8000/api/v1';

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
  try {
    
    const requestUrl = API_URL + '/producers';
    console.log("ICI")
    const res = await axios.post(requestUrl, productData, {
      responseType: 'json',
    });
    return res.data;
  } catch (error) {
    console.log("createdProducer: ", error)
    return Promise.resolve({})
  }
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
