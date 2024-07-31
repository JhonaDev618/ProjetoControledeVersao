import React from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import ProductForm from './components/ProductForm';
import ProductList from './components/ProductList';

function App() {
  return (
    <Router>
      <div>
        <nav>
          <ul>
            <li>
              <Link to="/">Cadastro de Produto</Link>
            </li>
            <li>
              <Link to="/list">Lista de Produtos</Link>
            </li>
          </ul>
        </nav>
        <Routes>
          <Route path="/" element={<ProductForm />} />
          <Route path="/list" element={<ProductList />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;