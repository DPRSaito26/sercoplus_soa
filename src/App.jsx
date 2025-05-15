import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

import React, { useState } from 'react';
import Navbar from './components/Navbar';
import LoginCard from './components/LoginCard';
import Footer from './components/Footer';
import Logo from './components/Logo';
import Principal from './paginas/Principal'; // asegúrate de que esta ruta sea correcta
import Terminos from './paginas/Terminos'; // asegúrate de que esta ruta sea correcta
import Medios from './paginas/Medios';
import Marcas from './paginas/Marcas';

function App() {
  const [pagina, setPagina] = useState('login'); // 'principal' o 'login'

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
      </main>

      <Footer />
    </div>
  );
}

export default App;
