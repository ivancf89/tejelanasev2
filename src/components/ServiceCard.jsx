import React from 'react';
import PropTypes from 'prop-types';

const PLACEHOLDER_IMG = 'https://via.placeholder.com/250x150?text=Imagen+no+disponible';

function ServiceCard({ imagen, titulo, descripcion }) {
  const imgSrc = imagen && imagen.trim() !== '' ? imagen : PLACEHOLDER_IMG;

  return (
    <div
      style={{
        border: '1px solid #ddd',
        borderRadius: 8,
        margin: 12,
        padding: 16,
        width: 250,
        textAlign: 'left',
        background: '#fff',
        boxShadow: '0 2px 8px rgba(0,0,0,0.05)',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-between'
      }}
      aria-label={titulo}
    >
      <img
        src={imgSrc}
        alt={titulo}
        style={{ width: '100%', borderRadius: 8, marginBottom: 8 }}
        loading="lazy"
      />
      <h3 style={{ fontSize: '1.2rem', margin: '0 0 0.5rem 0' }}>{titulo}</h3>
      <p style={{ fontSize: '0.95rem', color: '#444' }}>{descripcion}</p>
    </div>
  );
}

ServiceCard.propTypes = {
  imagen: PropTypes.string,
  titulo: PropTypes.string.isRequired,
  descripcion: PropTypes.string.isRequired,
};

ServiceCard.defaultProps = {
  imagen: PLACEHOLDER_IMG,
};

export default ServiceCard;
