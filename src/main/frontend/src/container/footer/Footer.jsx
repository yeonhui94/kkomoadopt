import React, { useEffect, useState } from "react";
import styles from "./Footer.module.css";
import Logo from "../../components/logo/Logo";

const Footer = () => {
  const [isEdge, setIsEdge] = useState(false);

  // useEffect(() => {
  //   const userAgent = navigator.userAgent;

  //   // Edge 브라우저를 감지하는 정규식
  //   if (userAgent.indexOf("Edg") > -1) {
  //     setIsEdge(true);
  //   }
  // }, []);

  return (
    <footer className={`${styles.footer} ${isEdge ? styles.edge : ""}`}>
      <div className={styles.logoSection}>
        <a href="./intro" style={{ height: "140px" }}>
          <Logo className={styles.logo} />
        </a>
      </div>
      <div className={styles.separator}></div>
      <div className={styles.infoSection}>
        <div>
          <ul className={styles.tabs}>
            <li><a href="">서비스 이용 약관</a></li>
            <li><a href="">개인정보 처리 방침</a></li>
          </ul>
        </div>
        <p className={styles.infoText}>
          상호 : (주)KKOMO 센터 <span className={styles.highlight}></span> 주소 : 서울 금천구 가산디지털 2로 101 한라원앤원타워 B동 3층
        </p>
        <p className={styles.infoText}>
          대표자 : 레일라 <span className={styles.highlight}></span> 사업자번호 : 000-00-00000 <span className={styles.highlight}></span>
          <a href="mailto:abcd@naver.com" className={styles.infoText}>email : abcd@naver.com</a>
        </p>
        <br />
        <p className={styles.copyright}>
          Copyright© 2024 KKOMO센터 All Rights Reserved
        </p>
      </div>
    </footer>
  );
};

export default Footer;
