import React from 'react';
import { Outlet } from 'react-router-dom';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import Logo from '../components/Logo';

const LayoutCliente = () => {
  return (
    <>
      <Logo />
      <Navbar />
      <Outlet />
      <Footer />
    </>
  );
};

export default LayoutCliente;
