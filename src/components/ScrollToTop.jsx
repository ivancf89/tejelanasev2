// src/components/ScrollToTop.jsx
import React, { useState, useEffect } from 'react';

function ScrollToTop() {
  const [showBtn, setShowBtn] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 300) setShowBtn(true);
      else setShowBtn(false);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
      {showBtn && (
        <button
          onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
          style={{
            position: 'fixed',
            bottom: '2rem',
            right: '2rem',
            padding: '0.5rem 1rem',
            backgroundColor: '#007bff',
            color: '#fff',
            border: 'none',
            borderRadius: '50%',
            cursor: 'pointer',
            fontSize: '1.2rem',
          }}
          aria-label="Volver arriba"
        >
          ↑
        </button>
      )}
    </>
  );
}

export default ScrollToTop;
