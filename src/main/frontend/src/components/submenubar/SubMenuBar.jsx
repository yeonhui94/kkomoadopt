import React from 'react';
import { Link } from 'react-router-dom';
import styles from './SubMenuBar.module.css';

const SubMenuBar = ({ menuItems, selectedButton, onTabClick }) => {
  const handleButtonClick = (item) => {
    if (onTabClick) {
      onTabClick(item.path || item.category);
    }
  };

  return (
    <div className={styles.submenuwrap}>
      <div className={styles.subMenuBar}>
        {menuItems.map((item) => (
          <Link
            key={item.path || item.category}
            to={item.path || '#'}
            onClick={() => handleButtonClick(item)}
            className={`${styles.menuItem} ${selectedButton === (item.path || item.category) ? styles.active : ''}`}
          >
            {item.name}
          </Link>
        ))}
      </div>
    </div>
  );
};

export default SubMenuBar;
