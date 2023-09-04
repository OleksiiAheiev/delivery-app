import axios from 'axios';

export default axios.create({
  baseURL: 'https://648d8e822de8d0ea11e7fc57.mockapi.io/api/v1/',
  headers: { 'Content-Type': 'application/json' },
});
