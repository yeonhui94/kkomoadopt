import React from "react";
import Logo from "../../components/logo/Logo";
import Mypageicon2 from "./MyPageIcon2";
import styles from "../HeaderMain/HeaderMain.module.css";
import Button from "../../components/Button/Button";
import HeaderList from "./HeaderList";
import Divider from "../../components/Divider";

function HeaderMain() {
  return (
    <div className="headerGroup" style={{gridArea: "header"}}>
    <div className={styles.header}>
      <Logo />
      <HeaderList />
      <Mypageicon2 className="myPageicon"/>
      <Button text={"로그아웃"}/>
      
    </div>
    <Divider width={"100%"} paddingbt={"5px"} backgroundColor={"var(--line-color)"}/>


    </div>
  );
}

export default HeaderMain;
