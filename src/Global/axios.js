const axios = require('axios');

const axiosAPI = axios.create({
  baseURL:
    process.env.NODE_ENV === 'production'
      ? 'https://jitendra-personal-website.herokuapp.com'
      : 'http://localhost:3000'
});

export default axiosAPI;
