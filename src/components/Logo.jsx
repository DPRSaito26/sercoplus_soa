// src/components/TopBar.jsx
import React from 'react';

const TopBar = () => (
  <div className="top-bar d-flex align-items-center justify-content-between p-3 bg-light">
    <a href="/principal">
      <img src="corporacion-sercoplus-logo-1632849710.png" alt="Logo SERCOPLUS" className="logo-img" style={{ height: '50px' }} />
    </a>
    <input className="form-control w-50 mx-3" type="search" placeholder="Buscar en catálogo" />
    <div>
      <button className="btn btn-outline-secondary me-2" onClick={() => window.location.href = '/login'}>Iniciar Sesión</button>
      <button className="btn btn-warning">🛒</button>
    </div>
  </div>
);

export default TopBar;