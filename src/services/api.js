// src/services/api.js
import axios from 'axios';

// URL base de tu API (ajusta si cambia)
const API_URL = 'https://www.clinicatecnologica.cl/ipss/tejelanasVivi/api/v1';

// Configuramos axios con baseURL y el header de autorización Bearer
const api = axios.create({
  baseURL: API_URL,
  headers: {
    Authorization: `Bearer ipss.get`,
    'Content-Type': 'application/json',
  },
});

export default api;
