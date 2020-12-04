const axios = require('axios')

let videoFeed = axios.create({
  baseURL: 'https://some-domain.com/api/',
  method: 'get',
  responseType: 'stream'
});

export default videoFeed