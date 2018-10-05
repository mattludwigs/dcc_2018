const axios = require('axios');

const authToken = process.env.YNAB_TOKEN;

const client = {
  http: axios.create({
    baseURL: 'https://api.youneedabudget.com/v1',
    headers: {'Authorization': `Bearer ${authToken}`}
  })
}

module.exports = client;

