import axios from 'axios';

const api = axios.create({
  baseURL: 'http://localhost:3002', // Atualize para o IP do backend
});

export default api;
