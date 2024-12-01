import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import styles from './SubMenuBar.module.css';

const SubMenuBar = ({ menuItems }) => {
  const [selectedButton, setSelectedButton] = useState(null);

  // 메뉴 클릭 시 선택된 버튼을 상태로 설정
  const handleButtonClick = (path) => {
    setSelectedButton(path);
  };

  return (
    <div className={styles.submenuwrap}>
      <div className={styles.subMenuBar}>
        {menuItems.map((item) => (
          <Link
            key={item.path}
            to={item.path}
            onClick={() => handleButtonClick(item.path)} // 버튼 클릭 시 상태 업데이트
            className={`${styles.menuItem} ${selectedButton === item.path ? styles.active : ''}`}
          >
            {item.name}
          </Link>
        ))}
      </div>
    </div>
  );
};

export default SubMenuBar;
