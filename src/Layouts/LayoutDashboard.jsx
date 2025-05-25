// LayoutDashboard.jsx
import React from 'react';
import Sidebar from '../components/Sidebar';
import { Outlet } from 'react-router-dom';

const LayoutDashboard = () => {
  return (
    <>
      <Sidebar />
      <Outlet />
    </>
  );
};

export default LayoutDashboard;
