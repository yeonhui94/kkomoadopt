import React from 'react';
import { Link } from 'react-router-dom';
import styles from '../container/SubMenu.module.css';

const SubMenu = ({ menuItems }) => {
  return (
    <div className={styles.submenucontainer}>
      <nav className={styles.submenu}>
        <ul>
          {menuItems.map((item, index) => (
            <li key={index}>
              <Link to={item.path} className={styles.menuitem}>
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