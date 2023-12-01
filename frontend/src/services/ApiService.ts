import axios from 'axios';

const ApiService = axios.create({
  baseURL: import.meta.env.VITE_API_BASE_URL,
});

export default ApiService;
