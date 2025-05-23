// src/components/Navbar.jsx
import React from 'react';
import { useNavigate } from 'react-router-dom';

const Navbar = () => {
  const navigate = useNavigate();

  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark py-2 shadow-sm">
      <div className="container justify-content-center">
        <ul className="navbar-nav gap-4">
          <li className="nav-item">
            <button 
              className="nav-link btn btn-link text-white" 
              onClick={() => navigate('/principal')} 
              style={{ textDecoration: 'none' }}
            >
              Principal
            </button>
          </li>
          <li className="nav-item">
            <button 
              className="nav-link btn btn-link text-white" 
              onClick={() => navigate('/marcas')} 
              style={{ textDecoration: 'none' }}
            >
              Marcas
            </button>
          </li>
          <li className="nav-item">
            <button 
              className="nav-link btn btn-link text-white" 
              onClick={() => navigate('/medios')} 
              style={{ textDecoration: 'none' }}
            >
              Medios de Pago
            </button>
          </li>
          <li className="nav-item">
            <button 
              className="nav-link btn btn-link text-white" 
              onClick={() => navigate('/terminos')} 
              style={{ textDecoration: 'none' }}
            >
              Términos
            </button>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
