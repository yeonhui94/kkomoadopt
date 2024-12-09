import React from 'react';
import { Link } from 'react-router-dom'; 
import styles from './MainHeader.module.css'; 
const menuItems = [
  { name: '센터소개', path: '/centerIntro' },
  { name: '입양', path: '/adoption' },
  { name: '커뮤니티', path: '/community' },
  { name: '고객센터', path: '/customerservice' },
];

const HeaderList = ({ onItemClick, isScrolled,isMenuOpen,setIsMenuOpen }) => {

  const handleClick = (itemName) => {
    if (onItemClick) {
      onItemClick(itemName);
      setIsMenuOpen(false)
    }
  };

  return (
    <nav className={styles.navbar}>
      <ul className={styles.menuList}>
        {menuItems.map((item) => (
          <li key={item.name} className={styles.menuItem} onClick={() => handleClick(item.name)}>
            <Link to={item.path} className={styles.menuLink} style={{color: isScrolled ? (isMenuOpen ? 'black' : 'white') : 'black'}}> 
              {item.name}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default HeaderList;
