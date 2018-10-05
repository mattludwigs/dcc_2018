const axios = require('axios');
const Response = require('./response');

class Client {
  constructor({authToken, baseURL}) {
    this.http = axios.create({
      baseURL: baseURL,
      headers: {'Authorization': `Bearer ${authToken}`}
    });
  }

  runRequest(config) {
    return this.http.request(config)
      .then(res => {
        return new Response({
          headers: res.headers,
          status: res.status,
          data: res.data.data,
        });
      });
  }
}

module.exports = Client;

