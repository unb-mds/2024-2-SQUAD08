// src/AppRouter.tsx
import React from 'react';
import { Routes, Route } from 'react-router-dom';
// import NavBar from './components/navbar';
import Home from './pages/Home';
import Obras from './pages/Obras';
import Mapas from './pages/Mapas';
import Noticias from './pages/Noticias';
import Login from './pages/Auth/Login';
import Register from './pages/Auth/Register';

const AppRouter = () => {
  return (
    <>
      {/* <NavBar /> */}
      <Routes>
        <Route path="/" element={<Mapas />} />
        <Route path="/obras" element={<Obras />} />
        <Route path="/home" element={<Home />} />
        <Route path="/noticias" element={<Noticias />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
      </Routes>
    </>
  );
};

export default AppRouter;