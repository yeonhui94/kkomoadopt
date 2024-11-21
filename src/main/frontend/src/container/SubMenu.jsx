import React from 'react';
import { Link } from 'react-router-dom';
import './SubMenu.css';

const SubMenu = () => {
  return (
    <div className="submenu-container">
      <nav className="submenu">
        <ul>
          <li>
            <Link to="/Announcement" className="menu-item">
              공지사항
            </Link>
          </li>
          <li>
            <Link to="/find-child" className="menu-item">
              아이를 찾습니다
            </Link>
          </li>
          <li>
            <Link to="/adopt-review" className="menu-item">
              입양후기
            </Link>
          </li>
          <li>
            <Link to="/buy-sell" className="menu-item">
              사고팝니다
            </Link>
          </li>
          <li>
            <Link to="/report" className="menu-item">
              신고합니다
            </Link>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default SubMenu;