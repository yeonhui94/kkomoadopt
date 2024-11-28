// src/container/Main.jsx
import React from 'react';
import Footer from '../../container/Footer';
import styles from './Main.module.css';
import { Outlet } from 'react-router-dom';
import MainHeader from '../../container/mainheader/MainHeader';

const Main = () => {
  return (
    <div className={styles.mainGrid}>
      <MainHeader />
      <Outlet />
      <Footer />
    </div>
  );ㄴ
};

export default Main;
