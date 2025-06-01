import React, { useEffect, useState } from 'react';
import { Container, Typography, Box, CircularProgress } from '@mui/material';
import api from '../services/api';
import ServiceCard from '../components/ServiceCard';

function ProductsPage() {
  const [products, setProducts] = useState([]);
  const [services, setServices] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');

  useEffect(() => {
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
      <Typography variant="h3" component="h1" gutterBottom>
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
          <Typography variant="h5" sx={{ mb: 2 }}>
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
              <ServiceCard
                key={product.id}
                imagen={product.imgs[0]}
                titulo={product.nombre}
                descripcion={product.descripcion}
              />
            ))}
          </Box>

          {services.length > 0 && (
            <>
              <Typography variant="h5" sx={{ mb: 2 }}>
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
                  <ServiceCard
                    key={service.id}
                    imagen={service.imgs[0]}
                    titulo={service.nombre}
                    descripcion={`Ubicación: ${service.ubicacion} | Fecha: ${service.fecha} | Cupos: ${service.cupos}`}
                  />
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
