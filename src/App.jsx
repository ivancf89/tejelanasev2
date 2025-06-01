// src/App.jsx
import React, { Suspense, lazy } from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Navbar from './components/Navbar';
import ScrollToTop from './components/ScrollToTop';

// Cargando las páginas de forma lazy (code splitting)
const HomePage = lazy(() => import('./pages/HomePage'));
const AboutPage = lazy(() => import('./pages/AboutPage'));
const ProductsPage = lazy(() => import('./pages/ProductsPage'));
const FaqPage = lazy(() => import('./pages/FaqPage'));

function App() {
  return (
    <Router>
      {/* Aquí va el Navbar fijo en la parte superior */}
      <Navbar />
      {/* ScrollToTop maneja el botón de “ir arriba” */}
      <ScrollToTop />

      {/* Suspense muestra un fallback mientras carga cada página */}
      <Suspense fallback={<div style={{ textAlign: 'center', marginTop: '2rem' }}>Cargando...</div>}>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/products" element={<ProductsPage />} />
          <Route path="/faq" element={<FaqPage />} />
          {/* Cualquier ruta desconocida redirige a la raíz */}
          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
      </Suspense>
    </Router>
  );
}

export default App;
