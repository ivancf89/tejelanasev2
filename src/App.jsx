import React, { useState } from 'react';
import AppRoutes from './routes/AppRoutes.jsx';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import ScrollToTop from './components/ScrollToTop';

function App() {
  const [cart, setCart] = useState([]);

return (
    <div style={{
      minHeight: '100vh',
      display: 'flex',
      flexDirection: 'column'
    }}>
      <Navbar />
      <main style={{ flex: 1 }}>
        <AppRoutes cart={cart} setCart={setCart} />
      </main>
      <Footer />
      <ScrollToTop />
    </div>
  );
}

export default App;