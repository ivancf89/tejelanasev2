import React, { useState } from 'react';
import { Card, CardMedia, CardContent, Typography, Button, FormControl, InputLabel, Select, MenuItem } from '@mui/material';

function ProductCard({ producto, onAddToCart }) {
  const [talla, setTalla] = useState(producto.tallas[0] || '');
  const [color, setColor] = useState(producto.colores[0] || '');

  const handleAdd = () => {
    onAddToCart({
      ...producto,
      talla,
      color,
    });
  };

  return (
    <Card sx={{ width: 320, display: 'flex', flexDirection: 'column', alignItems: 'center', p: 2 }}>
      <CardMedia
        component="img"
        height="180"
        image={producto.imgs[0]}
        alt={producto.nombre}
        sx={{ objectFit: 'contain', mb: 2 }}
      />
      <CardContent sx={{ width: '100%' }}>
        <Typography variant="h6" gutterBottom>{producto.nombre}</Typography>
        <Typography variant="body2" sx={{ mb: 1 }}>{producto.descripcion}</Typography>
        <Typography variant="subtitle1" color="primary" sx={{ mb: 2 }}>${producto.precio}</Typography>
        {producto.tallas.length > 0 && (
          <FormControl fullWidth sx={{ mb: 2 }}>
            <InputLabel>Talla</InputLabel>
            <Select value={talla} label="Talla" onChange={e => setTalla(e.target.value)}>
              {producto.tallas.map(t => <MenuItem key={t} value={t}>{t}</MenuItem>)}
            </Select>
          </FormControl>
        )}
        {producto.colores.length > 0 && (
          <FormControl fullWidth sx={{ mb: 2 }}>
            <InputLabel>Color</InputLabel>
            <Select value={color} label="Color" onChange={e => setColor(e.target.value)}>
              {producto.colores.map(c => <MenuItem key={c} value={c}>{c}</MenuItem>)}
            </Select>
          </FormControl>
        )}
        <Button variant="contained" color="secondary" fullWidth onClick={handleAdd}>
          Agregar al carrito
        </Button>
      </CardContent>
    </Card>
  );
}

export default ProductCard;