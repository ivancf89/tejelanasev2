import React, { Suspense, lazy } from 'react';
import { Routes, Route } from 'react-router-dom';

// Lazy load de las páginas principales
const HomePage = lazy(() => import('../pages/HomePage'));
const AboutPage = lazy(() => import('../pages/AboutPage'));
const ProductsPage = lazy(() => import('../pages/ProductsPage'));
const FaqPage = lazy(() => import('../pages/FaqPage'));
const ContactForm = lazy(() => import('../components/Contactform')); // Asegúrate que el nombre y ruta coincidan

function AppRoutes() {
  return (
    <Suspense fallback={<div>Cargando...</div>}>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/products" element={<ProductsPage />} />
        <Route path="/faq" element={<FaqPage />} />
        <Route path="/contact" element={<ContactForm />} />
      </Routes>
    </Suspense>
  );
}

export default AppRoutes;
