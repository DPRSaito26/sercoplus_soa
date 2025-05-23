import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate, useNavigate } from 'react-router-dom';

import { AuthProvider } from './context/AuthProvider';
import { CarritoProvider } from './context/CarritoContext';

import LoginCard from './components/LoginCard';
import RegisterCard from './components/RegisterCard';
import LayoutCliente from './Layouts/LayoutCliente';
import LayoutDashboard from './Layouts/LayoutDashboard';

import Principal from './paginas/Principal';
import Terminos from './paginas/Terminos';
import Medios from './paginas/Medios';
import Marcas from './paginas/Marcas';
import Carrito from './paginas/Carrito';
import PagoCard from './components/PagoCard';
import EnvioCard from './components/EnvioCard';

import Dashboard from './paginas/Dashboard';
import Usuarios from './paginas/Usuarios';
import Productos from './paginas/Productos';
import Categorias from './paginas/Categorias';
import Proveedores from './paginas/Proveedores';
import Analytics from './paginas/Analytics';
import Earnings from './paginas/Earnings';
import Transfers from './paginas/Transfers';
import Profile from './paginas/Profile';
import Detalles from './paginas/Detalles';
import FAQ from './paginas/FAQ';
import Graficos from './paginas/Graficos';

function AppRoutes({ setTipoUsuario }) {
  const navigate = useNavigate();

  const handleLoginSuccess = (tipoUsuario) => {
    setTipoUsuario(tipoUsuario);
    if (tipoUsuario === 'CLIENTE') {
      navigate('/principal');
    } else if (tipoUsuario === 'USUARIO') {
      navigate('/dashboard');
    } else {
      navigate('/login');
    }
  };

  return (
    <Routes>


      {/* Cliente */}
      <Route element={<LayoutCliente />}>
        <Route path="/principal" element={<Principal />} />
        <Route path="/terminos" element={<Terminos />} />
        <Route path="/medios" element={<Medios />} />
        <Route path="/marcas" element={<Marcas />} />
        <Route path="/carrito" element={<Carrito />} />
        <Route path="/pago" element={<PagoCard />} />
        <Route path="/envio" element={<EnvioCard />} />  
        <Route path="/login" element={<LoginCard onRegisterClick={() => navigate("/registro")} onLoginSuccess={handleLoginSuccess} />} />   
        <Route path="/registro" element={<RegisterCard onLoginClick={() => navigate('/login')} />} />
      </Route>

      {/* Dashboard */}
      <Route element={<LayoutDashboard />}>
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/usuarios" element={<Usuarios />} />
        <Route path="/productos" element={<Productos />} />
        <Route path="/categorias" element={<Categorias />} />
        <Route path="/proveedores" element={<Proveedores />} />
        <Route path="/analytics" element={<Analytics />} />
        <Route path="/earnings" element={<Earnings />} />
        <Route path="/transfers" element={<Transfers />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/detalles" element={<Detalles />} />
        <Route path="/faq" element={<FAQ />} />
        <Route path="/graficos" element={<Graficos />} />
      </Route>

      <Route path="*" element={<Navigate to="/principal" replace />} />
    </Routes>
  );
}

function App() {
  const [tipoUsuario, setTipoUsuario] = useState(null);

  return (
    <AuthProvider>
      <CarritoProvider>
        <AppRoutes setTipoUsuario={setTipoUsuario} />
      </CarritoProvider>
    </AuthProvider>
  );
}

export default App;
