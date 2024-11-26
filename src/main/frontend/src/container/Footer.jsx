import React from "react";
import styles from "./Footer.module.css";
import logo from "../assets/logo.svg";
import Logo from "../components/logo/Logo";

const Footer = ({ marginTop }) => {
  return (
      <footer className={styles.footer} style={{gridArea: "footer", marginTop: marginTop }}>
        <div className={styles.logoSection}>
          <a href="./intro" style={{height : "140px"}}>
          <Logo className={styles.logo}/>
          </a>
        </div>
        <div className={styles.separator}></div>
        <div className={styles.infoSection}>
          <p className={styles.infoText}>
            상호 : (주)KKOMO 센터 <span className={styles.highlight}>|</span> 주소 : 서울 금천구 가산디지털 2로 101 한라원앤원타워 B동 3층{" "}
            <span className={styles.highlight}>|</span> 대표자 : 레일라
          </p>
          <p className={styles.infoText}>
            사업자번호 : 000-00-00000 <span className={styles.highlight}>|</span><a href="mailto:abcd@naver.com" className={styles.infoText}>abcd@naver.com</a>
          </p>
          <p className={styles.copyright}>
            Copyright© 2024 KKOMO센터 All Rights Reserved 
          </p>
        </div>
      </footer>
  );
};

export default Footer;
