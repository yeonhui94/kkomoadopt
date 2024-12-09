// src/container/Main.jsx
import React from 'react';
// import Footer from '../../container/Footer';
// import styles from './Main.module.css';
import { Outlet } from 'react-router-dom';
// import MainHeader from '../../container/mainheader/MainHeader';
import MainPage from './MainPage';
import MainHeader from '../../container/mainheader3/MainHeader';

const Main = () => {
  return (
    // <div className={styles.mainGrid}>
    <div>
      <MainHeader/>
      {/* <MainPage/> */}
      <Outlet />
    </div>
  );
};

export default Main;
