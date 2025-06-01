import React, { useEffect, useState } from 'react';
import { Container, Typography, CircularProgress, Box } from '@mui/material';
import api from '../services/api';

function AboutPage() {
  const [info, setInfo] = useState('');
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');

  useEffect(() => {
    api.get('about-us/')
      .then(res => {
        setInfo(res.data.data);
        setLoading(false);
      })
      .catch(() => {
        setError('No se pudo cargar la información.');
        setLoading(false);
      });
  }, []);

  return (
    <Container maxWidth="md" sx={{ mt: 4, mb: 6, textAlign: 'center' }}>
      <Typography variant="h3" component="h1" gutterBottom>
        Quiénes Somos
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

      {!loading && !error && (
        <Typography variant="body1" sx={{ fontSize: { xs: '1rem', sm: '1.125rem' }, lineHeight: 1.6 }}>
          {info}
        </Typography>
      )}
    </Container>
  );
}

export default AboutPage;
