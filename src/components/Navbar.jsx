// src/components/Navbar.jsx
import React from 'react';

const Navbar = () => (
  <nav className="navbar navbar-expand-lg navbar-dark bg-dark py-2 shadow-sm">
    <div className="container justify-content-center">
      <ul className="navbar-nav gap-4">
        <li className="nav-item"><a className="nav-link text-white" href="#">PC Powered</a></li>
        <li className="nav-item"><a className="nav-link text-white" href="#">Laptops</a></li>
        <li className="nav-item"><a className="nav-link text-white" href="/marcas">Marcas</a></li>
        <li className="nav-item"><a className="nav-link text-white" href="/mediosPago">Medios de Pago</a></li>
        <li className="nav-item"><a className="nav-link text-white" href="/terminos">Términos</a></li>
      </ul>
    </div>
  </nav>
);

export default Navbar;
