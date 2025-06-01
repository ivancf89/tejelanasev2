import React, { useEffect, useState } from 'react';
import { Container, Typography, Box, CircularProgress } from '@mui/material';
import api from '../services/api';
import ServiceCard from '../components/ServiceCard';
import AOS from 'aos';
import 'aos/dist/aos.css';

function ProductsPage() {
  const [products, setProducts] = useState([]);
  const [services, setServices] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');

  useEffect(() => {
    AOS.init({ duration: 800, once: false }); // Cambia once: true a once: false
    api.get('products-services/')
      .then(res => {
        setProducts(res.data.data.productos);
        setServices(res.data.data.servicios);
        setLoading(false);
      })
      .catch(() => {
        setError('No se pudieron cargar los productos.');
        setLoading(false);
      });
  }, []);

  return (
    <Container maxWidth="lg" sx={{ mt: 4, mb: 6, textAlign: 'center' }}>
      <Typography variant="h3" component="h1" gutterBottom data-aos="fade-down">
        Productos y Servicios
      </Typography>

      {loading && (
        <Box sx={{ display: 'flex', justifyContent: 'center', my: 4 }}>
          <CircularProgress />
        </Box>
      )}

      {error && (
        <Typography color="error" variant="body1" sx={{ my: 4 }}>
          {error}
        </Typography>
      )}

      {!loading && !error && products.length === 0 && (
        <Typography variant="body1" sx={{ my: 4 }}>
          No hay productos disponibles.
        </Typography>
      )}

      {!loading && !error && products.length > 0 && (
        <>
          <Typography variant="h5" sx={{ mb: 2 }} data-aos="fade-right">
            Productos
          </Typography>
          <Box
            sx={{
              display: 'flex',
              flexWrap: 'wrap',
              justifyContent: 'center',
              gap: 3,
              mb: 6,
            }}
          >
            {products.map(product => (
              <div data-aos="fade-up" key={product.id}>
                <ServiceCard
                  imagen={product.imgs[0]}
                  titulo={product.nombre}
                  descripcion={product.descripcion}
                />
              </div>
            ))}
          </Box>

          {services.length > 0 && (
            <>
              <Typography variant="h5" sx={{ mb: 2 }} data-aos="fade-right">
                Servicios
              </Typography>
              <Box
                sx={{
                  display: 'flex',
                  flexWrap: 'wrap',
                  justifyContent: 'center',
                  gap: 3,
                }}
              >
                {services.map(service => (
                  <div data-aos="fade-up" key={service.id}>
                    <ServiceCard
                      imagen={service.imgs[0]}
                      titulo={service.nombre}
                      descripcion={`Ubicación: ${service.ubicacion} | Fecha: ${service.fecha} | Cupos: ${service.cupos}`}
                    />
                  </div>
                ))}
              </Box>
            </>
          )}
        </>
      )}
    </Container>
  );
}

export default ProductsPage;
