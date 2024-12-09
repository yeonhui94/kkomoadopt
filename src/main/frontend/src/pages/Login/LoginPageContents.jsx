import { useState } from "react";
import Button from "../../components/Button/Button";
import InputField from "../../components/InputField";
import styles from "../Login/LoginPageContents.module.css";
import { Outlet, useNavigate } from "react-router-dom";
import { useStore as UserStore2 } from "../../stores/UserStore2/useStore"; // UserStore2를 import

function LoginPageContents({ gridArea }) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();
  const { state, actions } = UserStore2(); // UserStore2에서 상태와 액션 가져오기

  // 로그인 요청을 트리거하는 함수
  const handleLogin = async (e) => {
    e.preventDefault();

    try {
      // 로그인 액션을 호출하여 로그인 시도
      await actions.login(email, password);
      // 로그인 성공 시 페이지 이동
      navigate("/"); // 홈 페이지로 리디렉션
    } catch (error) {
      // 로그인 실패 시 에러 메시지 출력
      setError("이메일 또는 비밀번호가 잘못되었습니다.");
    }
  };

  return (
    <div className={styles.LoginContainer} style={{ gridArea: gridArea }}>
      <h1 className={styles.hText}>로그인</h1>
      <div className={styles.LoginBox}>
        <div className={styles.a1Box}>
          <a href="http://localhost:5173/IdPassword" className={styles.a1}>
            <p style={{ fontSize: "15px" }}>ID/PW찾기</p>
          </a>
          <a href="http://localhost:5173/join" className={styles.a1}>
            <p style={{ fontSize: "15px", paddingLeft: "5px" }}>회원가입</p>
          </a>
        </div>

        <form className={styles.form1} onSubmit={handleLogin}>
          <InputField
            type="text"
            placeholder="이메일"
            width="497px"
            height="35px"
            marginBottom="5px"
            onChange={(e) => setEmail(e.target.value)}
          />
          <InputField
            type="password"
            placeholder="비밀번호"
            width="497px"
            height="35px"
            marginBottom="20px"
            onChange={(e) => setPassword(e.target.value)}
          />
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

        {/* 로그인 실패 에러 메시지 출력 */}
        {error && <p style={{ color: "red" }}>{error}</p>}
      </div>
      <Outlet />
    </div>
  );
}

export default LoginPageContents;
