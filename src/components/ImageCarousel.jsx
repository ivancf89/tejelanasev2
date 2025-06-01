import React, { useState } from 'react';

const PLACEHOLDER_IMG = 'https://via.placeholder.com/400x250?text=Imagen+no+disponible';

function ImageCarousel({ images = [] }) {
  const [current, setCurrent] = useState(0);

  const hasImages = images.length > 0;
  const displayedImages = hasImages ? images : [PLACEHOLDER_IMG];

  const next = () => setCurrent((current + 1) % displayedImages.length);
  const prev = () => setCurrent((current - 1 + displayedImages.length) % displayedImages.length);

  return (
    <div style={{ maxWidth: 400, margin: 'auto', position: 'relative' }}>
      <img
        src={displayedImages[current]}
        alt={`Slide ${current + 1}`}
        style={{ width: '100%', borderRadius: 8, objectFit: 'cover', height: 250 }}
        loading="lazy"
      />
      {displayedImages.length > 1 && (
        <>
          <button
            onClick={prev}
            style={{
              position: 'absolute',
              left: 0,
              top: '50%',
              transform: 'translateY(-50%)',
              background: 'rgba(255,255,255,0.8)',
              border: 'none',
              fontSize: 24,
              cursor: 'pointer',
              padding: '0 10px',
              borderRadius: '0 4px 4px 0',
              userSelect: 'none',
            }}
            aria-label="Anterior"
          >
            ‹
          </button>
          <button
            onClick={next}
            style={{
              position: 'absolute',
              right: 0,
              top: '50%',
              transform: 'translateY(-50%)',
              background: 'rgba(255,255,255,0.8)',
              border: 'none',
              fontSize: 24,
              cursor: 'pointer',
              padding: '0 10px',
              borderRadius: '4px 0 0 4px',
              userSelect: 'none',
            }}
            aria-label="Siguiente"
          >
            ›
          </button>
          {/* Indicadores */}
          <div
            style={{
              position: 'absolute',
              bottom: 10,
              left: '50%',
              transform: 'translateX(-50%)',
              display: 'flex',
              gap: 6,
            }}
          >
            {displayedImages.map((_, idx) => (
              <span
                key={idx}
                style={{
                  width: 10,
                  height: 10,
                  borderRadius: '50%',
                  backgroundColor: idx === current ? '#007bff' : 'rgba(0,0,0,0.3)',
                  cursor: 'pointer',
                }}
                onClick={() => setCurrent(idx)}
                aria-label={`Ir a la imagen ${idx + 1}`}
                role="button"
                tabIndex={0}
                onKeyDown={(e) => {
                  if (e.key === 'Enter' || e.key === ' ') setCurrent(idx);
                }}
              />
            ))}
          </div>
        </>
      )}
    </div>
  );
}

export default ImageCarousel;
