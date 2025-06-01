import { useState } from 'react';
import { Box, Button } from '@mui/material';

function ImageCarousel({ images }) {
  const [index, setIndex] = useState(0);

  const prev = () => setIndex((i) => (i === 0 ? images.length - 1 : i - 1));
  const next = () => setIndex((i) => (i === images.length - 1 ? 0 : i + 1));

  return (
    <Box sx={{ maxWidth: 400, mx: 'auto', textAlign: 'center', my: 4 }}>
      <img
        src={images[index]}
        alt={`slide-${index}`}
        style={{ width: '100%', height: 'auto', background: '#ccc', borderRadius: 8 }}
        loading="lazy"
      />
      <Box sx={{ mt: 2 }}>
        <Button onClick={prev} variant="outlined" sx={{ mr: 1 }}>Anterior</Button>
        <Button onClick={next} variant="outlined">Siguiente</Button>
      </Box>
    </Box>
  );
}

export default ImageCarousel;
