import axios from 'axios';

const api = axios.create({
  baseURL: 'https://www.clinicatecnologica.cl/ipss/tejelanasVivi/api/v1',
  headers: {
    Authorization: 'Bearer ipss.get'
  }
});

export default api;
