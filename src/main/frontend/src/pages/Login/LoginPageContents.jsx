import Button from "../../components/Button/Button";
import styled from 'styled-components';
import InputField from "../../components/InputField";
import styles from "../Login/LoginPageContents.module.css";
import { Outlet } from "react-router-dom";

const StyledButton1 = styled(Button)`
  margin-bottom: 12px; /* 각 버튼들 사이에 12px 간격 추가 */
`;

const StyledButton2 = styled(Button)`
  margin-bottom: 12px; /* 각 버튼들 사이에 12px 간격 추가 */
  &:hover {
    color: black; /* 호버 시 텍스트 색상은 black으로 설정 */
    background-color: ${props => props.bg1color || "var(--main-color)"};
  }
`;

const StyledButton3 = styled(Button)`
  margin-bottom: 12px; /* 각 버튼들 사이에 12px 간격 추가 */
`;

// "또는" 텍스트와 수평 밑줄을 배치하는 스타일
const OrTextWithLine = styled.div`
  display: flex;
  align-items: center;
  position: relative;
  margin-bottom: 12px; /* 텍스트와 버튼 간의 간격 */
  width: ${(props) => props.width || 'auto'}; /* 버튼의 너비에 맞춰 설정 */
`;

const Line = styled.div`
  flex-grow: 1; /* 밑줄을 가능한 길게 확장 */
  height: 2px; /* 밑줄 두께 */
  background-color: var(--line-color); /* 밑줄 색상 */
`;

const OrText = styled.span`
  position: absolute;
  background-color: white; /* 밑줄 위에 텍스트를 보이게 하기 위해 배경을 흰색으로 설정 */
  padding: 0 10px;
  font-size: 16px;
  font-weight: bold;
  color: var(--title-black);
  text-align: center; /* 텍스트 중앙 정렬 */
  left: 50%; /* 텍스트를 중앙으로 배치 */
  transform: translateX(-50%); /* 텍스트의 가로 길이를 고려하여 정확한 중앙 배치 */
`;



function LoginPageContents({text, gridArea}) {
  const buttonWidth = "400px"; // 여기에 버튼 너비를 고정값 또는 동적으로 설정 (예시로 400px)

  return (
    <div className={styles.LoginContainer} style={{gridArea: gridArea}} >
      <h1 className={styles.hText}>로그인</h1>
      <div className={styles.LoginBox}>
        {/* StyledALink들을 가로로 배치하는 부모 wrapper 추가 */}
        <div className={styles.a1Box}>
          <a href="http://localhost:5173/IdPassword" className={styles.a1}><p style={{fontSize:"15px"}}>ID/PW찾기</p></a>
          <a href="http://localhost:5173/join"  className={styles.a1}><p style={{fontSize:"15px", paddingLeft : "5px"}}>회원가입</p></a>
        </div>


        <form className={styles.form1}>
        <InputField type="text" placeholder="이메일" width="497px" height="35px" marginBottom="5px"/>
        <InputField type="password"placeholder="비밀번호" width="497px" height="35px"  marginBottom="20px" />
        <StyledButton1
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
        {/* "또는" 텍스트와 밑줄의 너비를 버튼의 너비와 같게 설정 */}
        <OrTextWithLine width={buttonWidth}>
          <Line />
          <OrText>또는</OrText>
        </OrTextWithLine>

        <StyledButton2
          text="네이버로 로그인"
          color="var(--title-white)"
          bg1color="#03C75A"
          backColor="#03C75A"
          fontWeight="bold"
          fontSize="24px"
          horizontalPadding="172px"
          verticalPadding="14px"
          marginBottom="24px"
          marginTop="24px"
        />

        <StyledButton3
          text="카카오톡 로그인"
          color="var(--title-black)"
          bg1color="#F5DE00"
          backColor="#F5DE00"
          fontWeight="bold"
          fontSize="24px"
          horizontalPadding="172px"
          verticalPadding="14px"
        />
      </div>
      <Outlet />
    </div>
  );
}

export default LoginPageContents;
