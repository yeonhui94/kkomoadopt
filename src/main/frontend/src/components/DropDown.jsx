import React, { useState } from 'react';
import styles from './Dropdown.module.css';

function Dropdown({ options = [], defaultText = "선택해주세요", maxVisibleItems = 5 }) {
  const [selectedOption, setSelectedOption] = useState(defaultText);
  const [isOpen, setIsOpen] = useState(false);

  const handleToggle = () => {
    setIsOpen(!isOpen); // 드롭박스 열기/닫기 토글
  };

  const handleOptionClick = (option) => {
    setSelectedOption(option); // 선택된 옵션 고정
    setIsOpen(false); // 드롭박스 닫기
  };

  return (
    <div className={styles.dropdown}>
      {/* 드롭다운 버튼 */}
      <div className={styles.dropdownButton} onClick={handleToggle}>
        {selectedOption}
      </div>

      {/* 드롭다운 리스트 */}
      {isOpen && (
        <ul
          className={styles.dropdownList}
          style={{ maxHeight: `${maxVisibleItems * 40}px`, overflowY: 'auto' }}
        >
          {options.length > 0 ? (
            options.map((option, index) => (
              <li
                key={index}
                className={styles.dropdownItem}
                onClick={() => handleOptionClick(option)}
              >
                {option}
              </li>
            ))
          ) : (
            <li className={styles.noOptions}>옵션이 없습니다</li>
          )}
        </ul>
      )}
    </div>
  );
}

export default Dropdown;
