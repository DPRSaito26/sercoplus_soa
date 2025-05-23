import React from 'react';
import NavbarDashboard from '../components/NavbarDashboard';
import Sidebar from '../components/Sidebar';
import { Outlet } from 'react-router-dom';

const LayoutDashboard = () => {
  return (
    <>
      <NavbarDashboard />
      <Sidebar />
      <Outlet />
    </>
  );
};

export default LayoutDashboard;
