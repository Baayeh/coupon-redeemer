import axios from 'axios';

const instance = axios.create({
  baseURL: 'http://127.0.0.1:3000/coupons',
  headers: {
    'Content-Type': 'application/json',
  },
});

export default instance;
