import React from 'react'
import { Link, Route, Routes } from 'react-router-dom'
import Home from '../pages/Home'
import Cart from '../pages/Cart';
import { Box } from '@chakra-ui/react';
import AboutUs from '../pages/AboutUs';

const AllRoutes = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/about" element={<AboutUs />} />
      </Routes>
    </>
  );
}

export default AllRoutes
