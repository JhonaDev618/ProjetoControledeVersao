import React, { useState } from 'react';
import axios from 'axios';

const ProductForm = () => {
  const [productName, setProductName] = useState('');

  const handleSubmit = async (event) => {
    event.preventDefault();
    if (productName) {
      try {
        await axios.post('http://localhost:5000/products', {
          name: productName,
        });
        setProductName('');
      } catch (error) {
        console.error('Error adding product:', error);
      }
    }
  };

  return (
    <div>
      <h2>Cadastro de Produto</h2>
      <form onSubmit={handleSubmit}>
        <label>
          Nome do Produto:
          <input
            type="text"
            value={productName}
            onChange={(e) => setProductName(e.target.value)}
          />
        </label>
        <button type="submit">Cadastrar</button>
      </form>
    </div>
  );
};

export default ProductForm;