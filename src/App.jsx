import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

import React, { useState } from 'react';
import Navbar from './components/Navbar';
import LoginCard from './components/LoginCard';
import Footer from './components/Footer';
import Logo from './components/Logo';
import Principal from './paginas/Principal'; // asegúrate de que esta ruta sea correcta
import Terminos from './paginas/Terminos'; // asegúrate de que esta ruta sea correcta

function App() {
  const [pagina, setPagina] = useState('login'); // 'principal' o 'login'

  return (
    <div>
      <Logo />
      <Navbar onNavigate={setPagina} />
      {pagina === 'login' && <LoginCard />}
      {pagina === 'principal' && <Principal />}
      {pagina === 'terminos' && <Terminos />}
      <Footer />
    </div>
  );
}

export default App;
