import { useState, useEffect } from "react";
import { Link, Outlet, useNavigate } from "react-router-dom";
import Button from "../../components/Button/Button";
import InputField from "../../components/InputField";
import styles from "../Login/LoginPageContents.module.css";
import { useStore as UserStore2 } from "../../stores/UserStore2/useStore"; // UserStore2를 import
// import { useStore as VisitRequestStore2 } from "../../stores/VisitRequestStore2/useStore";
// import { useStore as CommunityPostStore2 } from "../../stores/CommunityPostStore2/useStore";
// import { readCommunityPostsByCategory } from "../../stores/CommunityPostStore2/action";
// import { useStore as CommentStore2 } from "../../stores/CommentStore2/useStore"; // CommentStore를 import
// import { readAllComments } from "../../stores/CommentStore2/action"; // readAllComments 액션을 import

function LoginPageContents({ gridArea }) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();
  const { state, actions } = UserStore2(); // UserStore2에서 상태와 액션 가져오기
  // const { state: visitRequestState, actions: visitRequestActions } = VisitRequestStore2();
  // const { state: communityPostState, actions: communityPostActions } = CommunityPostStore2();
  // const { actions: commentActions } = CommentStore2(); // CommentStore에서 actions 가져오기

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
      <h1 className={styles.hText}>KKOMO 센터</h1>
      <div className={styles.LoginBox}>
        <div className={styles.a1Box}>
          <Link to="/IdPassword" className={styles.a1}>
            <p style={{ fontSize: "15px" }}>ID/PW찾기</p>
          </Link>
          <Link to="/join" className={styles.a1}>
            <p style={{ fontSize: "15px", paddingLeft: "5px" }}>회원가입</p>
          </Link>
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
            color="#444"
            bg1color="var(--main-color)"
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
