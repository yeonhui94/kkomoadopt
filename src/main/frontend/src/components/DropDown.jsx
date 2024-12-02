import React, { useState } from 'react';
import styles from './Dropdown.module.css';

function Dropdown({ options = [], defaultText = "선택해주세요", maxVisibleItems = 5, onChange }) {
  const [selectedOption, setSelectedOption] = useState("");
  const [isOpen, setIsOpen] = useState(false);

  const handleToggle = () => {
    setIsOpen(!isOpen);
  };

  const handleOptionClick = (option) => {
    console.log("옵션 선택됨:", option); // 디버깅 로그
    setSelectedOption(option);
    setIsOpen(false);
    onChange?.(option); // 부모로 전달
  };
  console.log(options);
  return (
    <div className={styles.dropdown}>
      <div className={styles.dropdownButton} onClick={handleToggle}>
        {selectedOption || defaultText}
      </div>
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
