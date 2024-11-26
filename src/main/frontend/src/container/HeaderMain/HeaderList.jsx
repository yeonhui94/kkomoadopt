import React from "react";
import { Link } from "react-router-dom"; // Link 컴포넌트를 사용
import styles from "../HeaderMain/HeaderMain.module.css";

function HeaderList() {
  const menuItems = [
    { name: "센터소개", path: "/center-intro" },
    { name: "입양", path: "/adoption" },
    { name: "커뮤니티", path: "/community" },
    { name: "고객센터", path: "/customer-service" },
  ];


  return (
    <nav className={styles.navbar}>
      <ul className={styles.menuList}>
        {menuItems.map((item, index) => (
          <li key={index} className={styles.menuItem}>
            <Link to={item.path} className={styles.menuLink}>
              {item.name}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
}

export default HeaderList;
