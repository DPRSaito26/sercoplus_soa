import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';

import React, { useState } from 'react';
import Navbar from './components/Navbar';
import LoginCard from './components/LoginCard';
import RegisterCard from './components/RegisterCard'; // Importa tu componente de registro
import Footer from './components/Footer';
import Logo from './components/Logo';
import Principal from './paginas/Principal';
import Terminos from './paginas/Terminos';
import Medios from './paginas/Medios';
import Marcas from './paginas/Marcas';
import Crud from './paginas/Crud';

function App() {
  const [pagina, setPagina] = useState('principal'); // 'principal', 'login', 'registro', etc.

  // Funciones para cambiar entre login y registro
  const irALogin = () => setPagina('login');
  const irARegistro = () => setPagina('registro');

  return (
    <div className="App">
      <Logo onNavigate={setPagina} />
      <Navbar onNavigate={setPagina} />

      <main>
        {pagina === 'login' && (
          <LoginCard onRegisterClick={irARegistro} />
        )}
        {pagina === 'registro' && (
          <RegisterCard onLoginClick={irALogin} />
        )}
        {pagina === 'principal' && <Principal />}
        {pagina === 'terminos' && <Terminos />}
        {pagina === 'medios' && <Medios />}
        {pagina === 'marcas' && <Marcas />}
        {pagina === 'crud' && <Crud />}
      </main>

      <Footer />
    </div>
  );
}

export default App;
