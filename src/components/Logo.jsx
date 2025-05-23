import React, { useState } from 'react';
import { useNavigate } from "react-router-dom";
import { FaShoppingCart, FaUser } from "react-icons/fa";
import Carrito from '../paginas/Carrito';

const Logo = () => {
  const navigate = useNavigate();
  const [mostrarCarrito, setMostrarCarrito] = useState(false);

  const toggleCarrito = () => {
    setMostrarCarrito(prev => !prev);
  };

  return (
    <div className="top-bar d-flex align-items-center justify-content-between p-3 bg-light position-relative">
      {/* Logo navegable */}
      <img 
        src="./img/logos/logosercoplus.png"
        alt="Logo SERCOPLUS" 
        className="logo-img" 
        style={{ height: '50px', cursor: 'pointer' }} 
        onClick={() => navigate('/')} 
      />

      {/* Barra de búsqueda */}
      <input
        className="form-control w-50 mx-3"
        type="search"
        placeholder="Buscar en catálogo"
      />

      {/*Botones de la derecha*/}
      <div className="d-flex align-items-center position-relative">
        {/*Botón de dashboard externo */}
      
        {/* Botón de login */}
        <button
          className="btn btn-outline-secondary me-2"
          onClick={() => navigate('/login')}
        >
          <FaUser /> Iniciar Sesión
        </button>

        {/* Botón de carrito */}
        <button
          className="btn btn-warning"
          onClick={toggleCarrito}
        >
          <FaShoppingCart />
        </button>

        {/* Carrito desplegable */}
        <div className="position-absolute" style={{ top: '60px', right: 0 }}>
          <Carrito visible={mostrarCarrito} />
        </div>
      </div>
    </div>
  );
};

export default Logo;