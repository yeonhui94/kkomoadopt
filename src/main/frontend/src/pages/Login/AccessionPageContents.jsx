import { Outlet } from "react-router-dom";


import styles from '../../pages/Login/AccessionPageContents.module.css';
import Button from "../../components/Button/Button";
import Divider from "../../components/Divider";


function AccesstionPageContents() {

  return (
    <div className={styles.Box} style={{gridArea: "section"}}>

      <div style={{gridArea :"contents"}}>
      <Divider text="회원가입" marTop="40px" />

      <div className={styles.loginBox}>
        <Button className={styles.btn1}
          text="이메일로 회원가입"
          color="var(--title-black)"
          bg1color="var(--line-color)"
          fontWeight="bold"
          fontSize="24px"
          horizontalPadding="30px"
          marginLeft="40px"
          marginRight="40px"
          verticalPadding="14px"
          marginBottom="25px"
        />
        
        {/* "또는" 텍스트와 밑줄의 너비를 버튼의 너비와 같게 설정 */}
        <div className={styles.lineBox}>
          <div className={styles.line}/>
          <span className={styles.textSpan}>또는</span>
        </div>
        
        <Button className={styles.btn2}
          text="네이버로 회원가입"
          color="var(--title-white)"
          bg1color="#03C75A"
          backColor="#03C75A"
          fontWeight="bold"
          fontSize="24px"
          horizontalPadding="30px"
          marginLeft="40px"
          marginRight="40px"
          verticalPadding="14px"
          marginBottom="24px"
          marginTop="24px"
        />
        
        <Button className={styles.btn3}
          text="카카오로 회원가입"
          color="var(--title-black)"
          bg1color="#F5DE00"
          backColor="#F5DE00"
          fontWeight="bold"
          fontSize="24px"
          horizontalPadding="30px"
          marginLeft="40px"
          marginRight="40px"
          verticalPadding="14px"
        />
      </div>

      </div>
      <Outlet />
    </div>
    
  );
}

export default AccesstionPageContents;
