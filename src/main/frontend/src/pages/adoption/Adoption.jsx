import React from 'react';
import { Outlet, Route, Routes } from 'react-router-dom';
import SubMenuBar from '../../components/submenubar/SubMenuBar';

const Adoption = ({gridArea}) => {
  const menuItems = [
    { name: '강아지', path: '/dogs' },
    { name: '고양이', path: '/cats' },
    { name: '기타동물', path: '/others' },
  ];

  return (
    <div style={{gridArea: gridArea}}>
      <SubMenuBar menuItems={menuItems} />
      <Outlet/>
    </div>
  );
};

export default Adoption;
