import { useEffect, useState } from 'react';
import api from '../services/api';

function ProductsPage() {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    api.get('/products-services/')
      .then(res => setProducts(res.data))
      .catch(err => {
        console.error(err);
        setProducts([
          { id: 1, title: 'Producto de ejemplo 1' },
          { id: 2, title: 'Producto de ejemplo 2' }
        ]);
      })
      .finally(() => setLoading(false));
  }, []);

  return (
    <div>
      <h1>Productos</h1>
      {loading ? (
        <p>Cargando productos...</p>
      ) : (
        <ul>
          {products.map(p => (
            <li key={p.id}>{p.title || p.nombre}</li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default ProductsPage;
