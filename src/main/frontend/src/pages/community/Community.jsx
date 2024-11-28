
import React from 'react';
import SubMenuBar from '../../components/submenubar/SubMenuBar';
import { Outlet, Route, Routes } from 'react-router-dom';

function Community({gridArea}) {
  const menuItems = [
    { name: '공지사항', path: '/notice' },
    { name: '아이를 찾습니다', path: '/find-child' },
    { name: '입양 후기', path: 'http://localhost:5173/community/adoption-review' },
    { name: '사고팝니다', path: 'http://localhost:5173/community/resell' },
    { name: '신고합니다', path: '/report' },
  ];

  return (
    <div style={{gridArea : gridArea}}>
      <SubMenuBar menuItems={menuItems} />
      <Outlet/>
    </div>
  );
};

export default Community;


