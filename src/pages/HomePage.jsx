import React from 'react';
import { Container, Typography, Box } from '@mui/material';

function HomePage() {
  return (
    <Container maxWidth="md" sx={{ mt: 6, mb: 6, textAlign: 'center' }}>
      <Box component="section" aria-labelledby="home-title">
        <Typography id="home-title" variant="h3" component="h1" gutterBottom>
          Bienvenido a Tejelanas Vivi
        </Typography>
        <Typography variant="h6" component="p" sx={{ fontWeight: 'light', fontSize: { xs: '1rem', sm: '1.25rem' } }}>
          Descubre productos y servicios únicos de tejido artesanal.
        </Typography>
      </Box>
    </Container>
  );
}

export default HomePage;
