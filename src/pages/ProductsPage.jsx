import React, { useEffect, useState } from 'react';
import { Container, Typography, Box, CircularProgress, Snackbar, Alert } from '@mui/material';
import api from '../services/api';
import ServiceCard from '../components/ServiceCard';
import ProductCard from '../components/ProductCard';

function ProductsPage({ cart, setCart }) {
  const [products, setProducts] = useState([]);
  const [services, setServices] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');
  const [snackOpen, setSnackOpen] = useState(false);

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

  // Función para agregar al carrito
  const handleAddToCart = (item) => {
    setCart(prev => [...prev, item]);
    setSnackOpen(true);
  };

  return (
    <Container maxWidth="md"
      sx={{
        backgroundColor: '#fff',
        borderRadius: 3,
        boxShadow: 3,
        py: { xs: 4, md: 6 },
        px: { xs: 2, md: 6 },
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
      }}>
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
              <ProductCard
                key={product.id}
                producto={product}
                onAddToCart={handleAddToCart}
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
                    onAddToCart={() => handleAddToCart(service)}
                    showButton
                  />
                ))}
              </Box>
            </>
          )}
        </>
      )}

      {/* Snackbar para feedback */}
      <Snackbar open={snackOpen} autoHideDuration={2000} onClose={() => setSnackOpen(false)}>
        <Alert onClose={() => setSnackOpen(false)} severity="success" sx={{ width: '100%' }}>
          Producto agregado al carrito
        </Alert>
      </Snackbar>

      {/* Resumen simple del carrito */}
      {cart.length > 0 && (
        <Box sx={{ mt: 4, width: '100%' }}>
          <Typography variant="h6">Carrito:</Typography>
          <ul>
            {cart.map((item, idx) => (
              <li key={idx}>
                {item.nombre || item.titulo} {item.talla ? `- Talla: ${item.talla}` : ''} {item.color ? `- Color: ${item.color}` : ''}
              </li>
            ))}
          </ul>
        </Box>
      )}
    </Container>
  );
}

export default ProductsPage;