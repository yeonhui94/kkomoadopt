import React from 'react';
import { Link } from 'react-router-dom'; // Link 컴포넌트를 사용
import styles from './MainHeader.module.css'; // MainHeader.module.css를 사용
const menuItems = [
  { name: '센터소개', path: 'http://localhost:5173/CenterIntro' },
  { name: '입양', path: '/adoption' },
  { name: '커뮤니티', path: 'http://localhost:5173/community' },
  { name: '고객센터', path: 'http://localhost:5173/customerservice' },
];

const HeaderList = ({ onItemClick }) => {

  const handleClick = (itemName) => {
    if (onItemClick) {
      onItemClick(itemName);
    }
  };

  return (
    <nav className={styles.navbar}>
      <ul className={styles.menuList}>
        {menuItems.map((item) => (
          <li key={item.name} className={styles.menuItem}
          onClick={() => handleClick(item.name)} >
            <Link to={item.path} className={styles.menuLink}>
              {item.name}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default HeaderList;