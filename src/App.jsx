import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';

import React, { useState } from 'react';
import Navbar from './components/Navbar';
import LoginCard from './components/LoginCard';
import Footer from './components/Footer';
import Logo from './components/Logo';
import Principal from './paginas/Principal'; // asegúrate de que esta ruta sea correcta
import Terminos from './paginas/Terminos'; // asegúrate de que esta ruta sea correcta
import Medios from './paginas/Medios';
import Marcas from './paginas/Marcas';
import Crud from './paginas/Crud';

function App() {
  const [pagina, setPagina] = useState('principal'); // 'principal' o 'login'

  return (
    <div className="App">
      <Logo />
      <Navbar onNavigate={setPagina} />

      <main>
        {pagina === 'login' && <LoginCard />}
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
