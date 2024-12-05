import Button from "../../components/Button/Button";
import InputField from "../../components/InputField";
import styles from "../Login/LoginPageContents.module.css";
import { Outlet } from "react-router-dom";

function LoginPageContents({gridArea }) {

  return (
    <div className={styles.LoginContainer} style={{ gridArea: gridArea }} >
      <h1 className={styles.hText}>로그인</h1>
      <div className={styles.LoginBox}>
        
        <div className={styles.a1Box}>
          <a href="http://localhost:5173/IdPassword" className={styles.a1}><p style={{ fontSize: "15px" }}>ID/PW찾기</p></a>
          <a href="http://localhost:5173/join" className={styles.a1}><p style={{ fontSize: "15px", paddingLeft: "5px" }}>회원가입</p></a>
        </div>

        <form className={styles.form1}>
          <InputField type="text" placeholder="이메일" width="497px" height="35px" marginBottom="5px" />
          <InputField type="password" placeholder="비밀번호" width="497px" height="35px" marginBottom="20px" />
          <Button
            type="submit"
            text="로그인"
            color="var(--title-black)"
            bg1color="var(--main-color)"
            fontWeight="bold"
            fontSize="24px"
            horizontalPadding="223px"
            verticalPadding="14px"
            marginBottom="25px"
          />
        </form>

      </div>
      <Outlet />
    </div>
  );
}

export default LoginPageContents;
