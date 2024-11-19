import React from "react";
import styles from '../components/Header.module.css'
import HeaderDivider from "./HeaderDivider";
import Mypageicon from "./Mypageicon";
import Button from "../button/Button";



function Header(){

    
    return (
        <div className={styles.head}>
        <div className={styles.header}>
            <div className={styles.logo} />
                <a className={styles.menuItem}>센터소개</a>
                <a className={styles.menuItem}>입양</a>
                <a className={styles.menuItem}>커뮤니티</a>
                <a className={styles.menuItem}>고객센터</a>
                <Mypageicon/>
                <Button text="로그아웃"/>
        </div>
        <HeaderDivider/>
        </div>
    )
}

export default Header;