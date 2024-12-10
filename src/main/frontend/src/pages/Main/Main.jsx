// src/container/Main.jsx
import React from 'react';
import { Outlet, useLocation } from 'react-router-dom';
import MainHeader from '../../container/mainheader3/MainHeader';

const Main = () => {
  const location = useLocation();

  // 현재 경로가 '/' (메인 페이지)일 때는 MainHeader를 숨김
  const isMainPage = location.pathname === '/';


  const handleLogoClick = () => {
    setCurrentSection(2);  // section 2로 이동
  };

  return (
    <div>
      {/* 메인 페이지일 때는 MainHeader를 숨김 */}
      <div style={{ display: isMainPage ? 'none' : 'block' }} >
        <MainHeader handleLogoClick={handleLogoClick}/>
      </div>
      <Outlet />
    </div>
  );
};

export default Main;
