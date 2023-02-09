import './RootLayout.css';

import NavBar from './NavBar';
import { Outlet } from 'react-router-dom';
import React from 'react';

function RootLayout() {
  return (
    <>
      <NavBar />
      <main className='main-size'>
        <Outlet />
      </main>
    </>
  );
}

export default RootLayout;