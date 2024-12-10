import React from 'react';
import { Outlet, useLocation } from 'react-router-dom';
import MainHeader from '../../container/mainheader3/MainHeader';
import Footer from '../../container/footer/Footer';
import styles from './Main.module.css';

const Main = () => {
  const location = useLocation();

  // 현재 경로가 '/' (메인 페이지)일 때는 MainHeader를 숨김
  const isMainPage = location.pathname === '/';

  const handleLogoClick = () => {
    setCurrentSection(2);  // section 2로 이동
  };

  return (
    <div className={styles.main_grid}>
      {/* 메인 페이지일 때는 MainHeader를 숨김 */}
      <div style={{ display: isMainPage ? 'none' : 'block' }} className={styles.header}>
        <MainHeader handleLogoClick={handleLogoClick} />
      </div>
      <div className={styles.section}>
        <Outlet />  {/* 각 페이지의 콘텐츠가 여기로 들어옵니다 */}
      </div>
      <div className={styles.footer} style={{ display: isMainPage ? 'none' : 'block' }}>
        <Footer />
      </div>
    </div>
  );
};

export default Main;