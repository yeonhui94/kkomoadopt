import React from 'react';
import { NavLink } from 'react-router-dom';
import styles from './SubMenuBar.module.css';
import Divider from '../Divider';

const SubMenuBar = ({ menuItems }) => {
  return (
    <>
    <div className={styles.subMenuBar}>
      {menuItems.map((item) => (
        <NavLink
          key={item.path}
          to={item.path}
          className={({ isActive }) =>
            isActive ? `${styles.menuItem} ${styles.active}` : styles.menuItem
          }
        > 
          {item.name}
        </NavLink>
      ))}
    </div>
    <div className={styles.divider}>
    <Divider display={"grid"} width={"100%"} height={"4px"} marTop={"0px"}/>
    </div>
    </>
  );
};

export default SubMenuBar;

// /pages/community/Community
// Community.jsx를 보고 참고하면됨! 