// src/components/Navbar.jsx
import React from 'react';
import { Link } from 'react-scroll';

function Navbar() {
  return (
    <nav style={{
      backgroundColor: '#fff',
      padding: '1rem',
      position: 'fixed',
      top: 0,
      left: 0,
      right: 0,
      boxShadow: '0 2px 4px rgba(0,0,0,0.1)',
      zIndex: 1000
    }}>
      <ul style={{
        listStyle: 'none',
        display: 'flex',
        justifyContent: 'center',
        gap: '1.5rem',
        margin: 0,
        padding: 0
      }}>
        <li><Link to="home" smooth={true} offset={-70}>Inicio</Link></li>
        <li><Link to="about" smooth={true} offset={-70}>Quiénes Somos</Link></li>
        <li><Link to="products" smooth={true} offset={-70}>Productos</Link></li>
        <li><Link to="faq" smooth={true} offset={-70}>FAQ</Link></li>
        <li><Link to="contact" smooth={true} offset={-70}>Contacto</Link></li>
      </ul>
    </nav>
  );
}

export default Navbar;
