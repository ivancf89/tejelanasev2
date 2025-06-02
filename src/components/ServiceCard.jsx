import React from 'react';
import PropTypes from 'prop-types';
import { Card, CardMedia, CardContent, Typography, Button } from '@mui/material';

const PLACEHOLDER_IMG = 'https://via.placeholder.com/250x150?text=Imagen+no+disponible';

function ServiceCard({ imagen, titulo, descripcion, onAddToCart, showButton }) {
  const imgSrc = imagen && imagen.trim() !== '' ? imagen : PLACEHOLDER_IMG;

  return (
    <Card
      sx={{
        width: 320,
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        p: 2,
      }}
      data-aos="zoom-in" // Puedes cambiar el efecto o quitarlo si lo manejas desde el padre
    >
      <CardMedia
        component="img"
        height="180"
        image={imgSrc}
        alt={titulo}
        loading="lazy" // <-- Lazy loading nativo aquí
        sx={{ objectFit: 'contain', mb: 2 }}
      />
      <CardContent sx={{ width: '100%' }}>
        <Typography variant="h6" gutterBottom>
          {titulo}
        </Typography>
        <Typography variant="body2" sx={{ mb: 2 }}>
          {descripcion}
        </Typography>
        {showButton && (
          <Button
            variant="contained"
            color="secondary"
            fullWidth
            onClick={onAddToCart}
          >
            Agregar al carrito
          </Button>
        )}
      </CardContent>
    </Card>
  );
}

ServiceCard.propTypes = {
  imagen: PropTypes.string,
  titulo: PropTypes.string.isRequired,
  descripcion: PropTypes.string.isRequired,
  onAddToCart: PropTypes.func,
  showButton: PropTypes.bool,
};

ServiceCard.defaultProps = {
  imagen: PLACEHOLDER_IMG,
  onAddToCart: () => {},
  showButton: false,
};

export default ServiceCard;
