import axios from 'axios';

const instance = axios.create({
  baseURL: 'http://10.0.2.2:5000',
  
  withCredentials: true, // Important for cookies
});

export default instance;
// localhost:5000