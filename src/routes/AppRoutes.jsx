// src/AppRoutes.jsx
import React from 'react';  
import { Routes, Route } from 'react-router-dom';

import HomePage from '../pages/HomePage';
import AboutPage from '../pages/AboutPage';
import ProductsPage from '../pages/ProductsPage';
import FaqPage from '../pages/FaqPage';
import ContactForm from '../components/Contactform';


function AppRoutes({ cart, setCart }) {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/about" element={<AboutPage />} />
      <Route path="/products" element={<ProductsPage cart={cart} setCart={setCart} />} />
      <Route path="/faq" element={<FaqPage />} />
      <Route path="/contact" element={<ContactForm cart={cart} setCart={setCart} />} />
    </Routes>
  );
}

export default AppRoutes;
