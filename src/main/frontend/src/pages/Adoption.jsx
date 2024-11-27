import React from 'react';
import SubMenuBar from '../components/submenubar/SubMenuBar';
import { Route, Routes } from 'react-router-dom';

const Adoption = () => {
  const menuItems = [
    { name: '강아지', path: '/dogs' },
    { name: '고양이', path: '/cats' },
    { name: '기타동물', path: '/others' },
  ];

  return (
    <div>
      <SubMenuBar menuItems={menuItems} />
      <Routes>
        <Route path="/dogs" element={<p>강아지</p>} />
        <Route path="/cats" element={<p>고양이</p>} />
        <Route path="/others" element={<p>기타동물</p>} />
        
      </Routes>
    </div>
  );
};

export default Adoption;
