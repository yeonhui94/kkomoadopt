import React from 'react';
import Logo from '../../components/logo/Logo';
import Mypageicon2 from '../../components/header/MyPageIcon2';
import Button from '../../components/Button/Button';
import HeaderList from '../../components/header/HeaderList';
import styles from "../../components/header/HeaderMain.module.css";
import Divider from '../../components/Divider';

function MainHeader() {
  return (
    <div className="headerGroup" style={{gridArea: "header"}}>
      <div className={styles.header}>
        <Logo />
        <HeaderList /> {/* 메뉴 네비게이션 */}
        <Mypageicon2 className="myPageicon"/>
        <Button text={"로그아웃"}/>
      </div>
      <Divider width={"100%"} paddingbt={"5px"} backgroundColor={"var(--line-color)"}/>
    </div>
  );
}

export default MainHeader;
