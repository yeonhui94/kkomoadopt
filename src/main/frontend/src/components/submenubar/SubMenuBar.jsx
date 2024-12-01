import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import styles from './SubMenuBar.module.css';

const SubMenuBar = ({ menuItems, onTabClick, isFilterEnabled }) => {
  const [selectedButton, setSelectedButton] = useState(null);

  // 메뉴 클릭 시 선택된 버튼을 상태로 설정하고 onTabClick 호출
  const handleButtonClick = (item) => {
    setSelectedButton(item.path || item.category); // 링크가 있으면 링크로, 아니면 카테고리로 처리
    if (onTabClick && !item.path) { // 링크가 없을 때만 카테고리 필터링
      onTabClick(item.category); // 카테고리 변경을 부모 컴포넌트로 전달
    }
  };

  return (
    <div className={styles.submenuwrap}>
      <div className={styles.subMenuBar}>
        {menuItems.map((item) => (
          <Link
            key={item.path || item.category}
            to={item.path || "#"}  // path가 있을 경우 링크로, 아니면 "#"로
            onClick={() => handleButtonClick(item)}  // 버튼 클릭 시 카테고리 필터링 또는 링크 이동
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
