import React from 'react';
import { Container, Typography, Box } from '@mui/material';
import logo from '../assets/images/logo.png';

function HomePage() {
  return (
    <Box sx={{ background: '#f3f4f6', minHeight: '100vh', py: { xs: 2, md: 6 } }}>
      <Container
        maxWidth="md"
        sx={{
          backgroundColor: '#fff',
          borderRadius: 3,
          boxShadow: 3,
          py: { xs: 4, md: 6 },
          px: { xs: 2, md: 6 },
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
        }}
      >
        <img
          src={logo}
          alt="Logo Tejelanas Vivi"
          style={{ width: 100, marginBottom: 16 }}
        />
        <Typography
          id="home-title"
          variant="h3"
          component="h1"
          gutterBottom
          sx={{ fontWeight: 700, fontSize: { xs: '2rem', md: '2.5rem' } }}
        >
          Bienvenido a Tejelanas Vivi
        </Typography>
        <Typography
          variant="h6"
          component="p"
          sx={{
            fontWeight: 400,
            fontSize: { xs: '1rem', sm: '1.15rem' },
            maxWidth: 500,
            mx: 'auto'
          }}
        >
          Descubre productos y servicios únicos de tejido artesanal.
        </Typography>
      </Container>
    </Box>
  );
}

export default HomePage;