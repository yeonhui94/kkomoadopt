import React from 'react';
import { Link } from 'react-router-dom';
import styles from "./SubMenu.module.css";

const SubMenu = () => {
  return (
    <div className={styles.submenucontainer}>
      <nav className={styles.submenu}>
        <ul>
          <li>
            <Link to="/Announcement" className={styles.menuitem}>
              공지사항
            </Link>
          </li>
          <li>
            <Link to="/find-child" className={styles.menuitem}>
              아이를 찾습니다
            </Link>
          </li>
          <li>
            <Link to="/adopt-review" className={styles.menuitem}>
              입양후기
            </Link>
          </li>
          <li>
            <Link to="/buy-sell" className={styles.menuitem}>
              사고팝니다
            </Link>
          </li>
          <li>
            <Link to="/report" className={styles.menuitem}>
              신고합니다
            </Link>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default SubMenu;