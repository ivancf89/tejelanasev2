import React from 'react';
import AppRoutes from './routes/AppRoutes.jsx';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import ScrollToTop from './components/ScrollToTop';

const appStyle = {
  display: 'flex',
  flexDirection: 'column',
  minHeight: '100vh',
};

const mainContainerStyle = {
  flex: 1,
  paddingTop: '4.5rem',
  background: '#f8f9fa',
  boxSizing: 'border-box',
};

function App() {
  return (
    <div style={appStyle}>
      <Navbar />
      <main style={mainContainerStyle}>
        <AppRoutes />
      </main>
      <Footer />
      <ScrollToTop />
    </div>
  );
}

export default App;
