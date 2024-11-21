import React, { useState } from "react";
import styles from "./CheckBox.module.css";  // 모듈 CSS 파일 임포트

const CheckBox = () => {
  const [isChecked, setIsChecked] = useState(false);

  const handleChange = () => {
    setIsChecked((prev) => !prev);
  };

  return (
    <div className={styles.checkboxContainer}>
      <input
        type="checkbox"
        id="checkbox"
        checked={isChecked}
        onChange={handleChange}
        className={styles.checkbox} // 모듈 CSS 적용
      />
   
    </div>
  );
};

export default CheckBox;
