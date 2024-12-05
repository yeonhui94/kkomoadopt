import React, { useState } from 'react';
import Logo from '../../components/logo/Logo';
import Mypageicon2 from '../../components/header/Mypageicon2';
import Button from '../../components/Button/Button';
import HeaderList from '../../components/header/HeaderList';
import styles from '../../components/header/MainHeader.module.css';
import Divider from '../../components/Divider';

const MainHeader = () => {

  const [clickedItem, setClickedItem] = useState(null);

  // Handle HeaderList item click
  const handleItemClick = (itemName) => {
    setClickedItem(itemName);
  };

  return (
    <div className={styles.headerGroup}>
      <div className={styles.header}>
        <a className={styles.logo} href="http://localhost:5173">
          <Logo />
        </a>
        <HeaderList onItemClick={handleItemClick} />
        <div className={styles.icongrid}>
          <Mypageicon2 />
        </div>
        <a className={styles.btn} href="http://localhost:5173/login">
          <Button text="로그아웃" />
        </a>
      </div> 
      <div
        className={styles.divider}
      >

          <Divider
            display={"block"}
            width="100%"
            backgroundColor="var(--line-color)"
            marTop={"0px"}
          />

      </div>
    </div>
  );
};

export default MainHeader;
