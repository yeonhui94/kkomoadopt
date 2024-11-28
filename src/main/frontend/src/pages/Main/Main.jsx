// src/container/Main.jsx
import React from 'react';
import Footer from '../../container/Footer';
import Header from '../../container/mainheader/MainHeader';
import styles from './Main.module.css';
import { Outlet } from 'react-router-dom';

const Main = () => {
  return (
    <div className={styles.mainGrid}>
      <Header />
      <Outlet />
      <Footer />
    </div>
  );
};

export default Main;
