import React from 'react';
import SubMenu from '../components/SubMenu';

const ParentComponent = () => {
  const menuData = [
    { path: '/Notice', label: '공지사항' },
    { path: '/find-child', label: '아이를 찾습니다' },
    { path: '/adopt-review', label: '입양후기' },
    { path: '/buy-sell', label: '사고팝니다' },
    { path: '/report', label: '신고합니다' },
  ];

  return (
    <div style={{gridArea:"subheader"}}>
      <SubMenu menuItems={menuData} />
    </div>
  );
};

export default ParentComponent;    