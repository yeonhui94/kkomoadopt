import { useState } from "react";
import Button from "../../components/Button/Button";
import InputField from "../../components/InputField";
import styles from "../Login/LoginPageContents.module.css";
import { Outlet, useNavigate } from "react-router-dom";

function LoginPageContents({gridArea }) {

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const navigate = useNavigate();

  // 로그인 요청을 보내는 함수
  const handleLogin = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post("/api/user/login", {
        email: email,
        password: password,
      });
      console.log(response);
      console.log(response.data);
      if (response.status === 200) {
        // 로그인 성공 시 세션에 정보를 저장
        sessionStorage.setItem("userId", response.data.userId);
        sessionStorage.setItem("email", response.data.email);
        sessionStorage.setItem("nickname", response.data.nickname);

      // 로그인 성공 후 useNavigate를 사용하여 페이지 이동
      navigate("/"); // 홈 페이지로 리디렉션
      }
    } catch (error) {
      // 로그인 실패 시 에러 메시지가 반환됨
      if (error.response && error.response.status === 401) {
        // 비밀번호나 이메일 불일치 시 alert 창 띄우기
        alert("이메일 또는 비밀번호가 잘못되었습니다.");
      } else {
        alert("알 수 없는 오류가 발생했습니다.");
      }
    }
  };

  return (
    <div className={styles.LoginContainer} style={{ gridArea: gridArea }} >
      <h1 className={styles.hText}>로그인</h1>
      <div className={styles.LoginBox}>
        
        <div className={styles.a1Box}>
          <a href="http://localhost:5173/IdPassword" className={styles.a1}><p style={{ fontSize: "15px" }}>ID/PW찾기</p></a>
          <a href="http://localhost:5173/join" className={styles.a1}><p style={{ fontSize: "15px", paddingLeft: "5px" }}>회원가입</p></a>
        </div>

        <form className={styles.form1} onSubmit={handleLogin}>
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
