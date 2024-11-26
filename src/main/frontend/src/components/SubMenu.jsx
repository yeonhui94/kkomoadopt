import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './SubMenu.css';

const SubMenu = ({ menuItems }) => {
  const [activeIndex, setActiveIndex] = useState(null); // 클릭된 항목 추적

  const handleClick = (index) => {
    setActiveIndex(index); // 클릭된 메뉴 인덱스를 상태에 저장
  };

  return (
    <div className="submenu-container">
      <nav className="submenu">
        <ul>
          {menuItems.map((item, index) => (
            <li key={index}>
              <Link
                to={item.path}
                className={`menu-item ${activeIndex === index ? 'active' : ''}`} // 클릭된 항목에 'active' 클래스 추가
                onClick={() => handleClick(index)} // 클릭 시 상태 업데이트
              >
                {item.label}
              </Link>
            </li>
          ))}
        </ul>
      </nav>
    </div>
  );
};

export default SubMenu;
