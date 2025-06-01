import React, { useEffect, useState } from 'react';
import { Container, Typography, List, ListItem, CircularProgress, Box } from '@mui/material';
import api from '../services/api';

function FaqPage() {
  const [faqs, setFaqs] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');

  useEffect(() => {
    api.get('faq/')
      .then(res => {
        setFaqs(res.data.data);
        setLoading(false);
      })
      .catch(() => {
        setError('No se pudieron cargar las preguntas frecuentes.');
        setLoading(false);
      });
  }, []);

  return (
    <Container maxWidth="md" sx={{ mt: 4, mb: 6 }}>
      <Typography variant="h3" component="h1" align="center" gutterBottom>
        Preguntas Frecuentes
      </Typography>

      {loading && (
        <Box sx={{ display: 'flex', justifyContent: 'center', my: 4 }}>
          <CircularProgress />
        </Box>
      )}

      {error && (
        <Typography color="error" variant="body1" align="center" sx={{ my: 4 }}>
          {error}
        </Typography>
      )}

      {!loading && !error && faqs.length === 0 && (
        <Typography variant="body1" align="center" sx={{ my: 4 }}>
          No hay preguntas frecuentes disponibles.
        </Typography>
      )}

      {!loading && !error && faqs.length > 0 && (
        <List sx={{ textAlign: 'left' }}>
          {faqs.map((faq) => (
            <ListItem key={faq.id} sx={{ flexDirection: 'column', alignItems: 'flex-start', mb: 2 }}>
              <Typography variant="subtitle1" fontWeight="bold" component="div" gutterBottom>
                {faq.titulo}
              </Typography>
              <Typography variant="body2" color="text.secondary">
                {faq.respuesta}
              </Typography>
            </ListItem>
          ))}
        </List>
      )}
    </Container>
  );
}

export default FaqPage;
