const axios = require('axios');

const axiosAPI = axios.create({
  //   baseURL: 'https://jitendra-personal-website.herokuapp.com'
  baseURL: 'http://localhost:3000'
});

export default axiosAPI;
