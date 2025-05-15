// src/components/Navbar.jsx
import React from 'react';

const Navbar = ({ onNavigate }) => (
  <nav className="navbar navbar-expand-lg navbar-dark bg-dark py-2 shadow-sm">
    <div className="container justify-content-center">
      <ul className="navbar-nav gap-4">
        <li className="nav-item">
          <button 
            className="nav-link btn btn-link text-white" 
            onClick={() => onNavigate('principal')} 
            style={{ textDecoration: 'none' }}
          >
            Principal
          </button>
        </li>
        <li className="nav-item">
          <button 
            className="nav-link btn btn-link text-white" 
            onClick={() => onNavigate('login')} 
            style={{ textDecoration: 'none' }}
          >
            Login
          </button>
        </li>
        <li className="nav-item">
            <button 
            className="nav-link btn btn-link text-white" 
            onClick={() => onNavigate('marcas')} 
            style={{ textDecoration: 'none' }}
          >
            Marcas
          </button>
        </li>
        <li className="nav-item">
            <button 
            className="nav-link btn btn-link text-white" 
            onClick={() => onNavigate('medios')} 
            style={{ textDecoration: 'none' }}
          >
            Medios de Pago
          </button>
        </li>
        <li className="nav-item">
          <button 
            className="nav-link btn btn-link text-white" 
            onClick={() => onNavigate('terminos')} 
            style={{ textDecoration: 'none' }}
          >
            Terminos
          </button>
        </li>
      </ul>
    </div>
  </nav>
);

export default Navbar;

