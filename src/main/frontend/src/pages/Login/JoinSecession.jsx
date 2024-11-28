import styled from "styled-components"
import Button from "../../components/Button/Button";
import logo from "../../assets/logo.svg";
import styles from "../../pages/Login/JoinSecession.module.css";
import { Outlet } from "react-router-dom";
import Logo from "../../components/logo/Logo";

// 텍스트 데이터 관리
const texts = {
  h1: "환영합니다",
  text1: "회원 가입을 통해 유기견들에게 희망을 주는 멋진 선택을 하셨습니다.",
  text2: "당신의 작은 손길이 큰 변화를 만들어 낼 것입니다.",
  text3: "행복한 동행을 기원합니다!",
  btnName: "메인 페이지로 이동",
};


const StyledLogo = styled(Logo)`
  grid-area : logo1;

`;

const StyledP1 = styled.p`
  font-size: 40px;
  font-weight: bold;
  margin-top: -85px;
  
  font-family: var(--main-font);
`;

const StyledP2 = styled.p`
  font-size: 19px;
  margin-bottom: 30px;
  white-space: normal;
  word-wrap: break-word;
  overflow-wrap: break-word;
  font-family: var(--main-font);
`;
 
;

function JoinSecession() {
  // 텍스트를 컴포넌트 내에서 관리
  return (
    <div className={styles.welcomeContainer} style={{gridArea: "section"}} >
      
      <div className={styles.a1}>
      <a href="./intro" style={{height : "100px"}} >
          <StyledLogo width="200px"/>
          </a>
          </div>
      <StyledP1 className={styles.hText1}>{texts.h1}</StyledP1>
      <StyledP2 className={styles.p1}>{texts.text1}</StyledP2>
      <StyledP2 className={styles.p2}>{texts.text2}</StyledP2>
      <StyledP2 className={styles.p3}>{texts.text3}</StyledP2>
      <div className={styles.btn1}>
      <Button width="100%"text={texts.btnName} />
      </div>
      <Outlet />
    </div>
  );
}

export default JoinSecession;