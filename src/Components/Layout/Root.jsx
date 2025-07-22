import React from 'react';
import { Outlet } from 'react-router-dom';
import Header from './Header';
import Footer from './Footer';
import AnimatedButton from '../Animated/AnimatedButton';

const Root = () => {
  return (
    <>
      <Header />
      <Outlet />
      <Footer />
      <AnimatedButton />
    </>
  );
};

export default Root;
