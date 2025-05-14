import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

import Navbar from './components/Navbar';
import LoginCard from './components/LoginCard';
import Footer from './components/Footer';
import Logo from './components/Logo';

function App() {
  return (
    <div>
      <Logo/>
      <Navbar />
      <LoginCard />
      <Footer />
    </div>
  );
}

export default App;
