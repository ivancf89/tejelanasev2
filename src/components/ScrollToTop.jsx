import { useEffect, useState } from 'react';

export default function ScrollToTop() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => setVisible(window.scrollY > 300);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return visible ? (
    <button
      style={{
        position: 'fixed',
        bottom: 20,
        right: 20,
        borderRadius: '50%',
        padding: '1rem',
        background: '#1976d2',
        color: 'white',
        border: 'none',
        cursor: 'pointer',
        zIndex: 1000
      }}
      onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
      aria-label="Volver arriba"
    >
      ↑
    </button>
  ) : null;
}
