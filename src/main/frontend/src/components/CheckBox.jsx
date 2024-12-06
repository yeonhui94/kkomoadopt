import React, { useState } from "react";
import styles from "./CheckBox.module.css";  // 모듈 CSS 파일 임포트

const CheckBox = ({ checked, onChange }) => {
  return (
    <div className={styles.checkboxContainer}>
      <input
        type="checkbox"
        checked={checked}
        onChange={onChange}
        className={styles.checkbox} // 모듈 CSS 적용
      />
    </div>
  );
};

export default CheckBox;
