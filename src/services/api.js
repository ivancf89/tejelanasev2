import axios from 'axios';

// Carga la URLbase y el token desde la (.env)
// Esto permite cambiar el endpoint o el token sin modificar el código fuente.
const API_URL = import.meta.env.VITE_API_URL;      // URL base de la API
const TOKEN = import.meta.env.VITE_API_TOKEN;      // Token Bearer

// Crea una instancia de Axios con la config base
const api = axios.create({
  baseURL: API_URL,
  headers: {
    Authorization: `Bearer ${TOKEN}`,             // Autentica el tipo Bearer
    'Content-Type': 'application/json',           // Tipo de contenido JSON
  },
});

// Muestra un mensaje si hay un error de autenticacion
api.interceptors.response.use(
  response => response,
  error => {
    if (error.response && error.response.status === 401) {
      // Puedes personalizar este mensaje o mostrarlo en pantalla
      alert('Error de autenticación. Verificar el token.');
    }
    return Promise.reject(error);
  }
);

export default api;
