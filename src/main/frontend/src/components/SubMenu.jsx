import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import styles from '../container/SubMenu.module.css';

const SubMenu = ({ menuItems }) => {
  // 클릭된 항목을 추적하기 위한 상태 변수
  const [activeIndex, setActiveIndex] = useState(null);

  const handleClick = (index) => {
    setActiveIndex(index); // 클릭된 항목의 인덱스를 상태로 저장
  };

  return (
    <div className={styles.submenucontainer}>
      <nav className={styles.submenu}>
        <ul>
          {menuItems.map((item, index) => (
            <li
              key={index}
              className={activeIndex === index ? styles.active : ''} // 활성화된 항목에 클래스 추가
            >
              <Link
                to={item.path}
                className={`${styles.menuitem} ${activeIndex === index ? styles.active : ''}`} 
                onClick={() => handleClick(index)} // 항목 클릭 시 상태 변경
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
