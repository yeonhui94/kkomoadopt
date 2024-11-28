import styled from "styled-components";
import Logo from "../../components/logo/Logo";
import Button from "../../components/Button/Button";
import logo from "../../assets/logo.svg";

// 텍스트 데이터 관리
const texts = {
  h1: "환영합니다",
  text1: "회원 가입을 통해 유기견들에게 희망을 주는 멋진 선택을 하셨습니다.",
  text2: "당신의 작은 손길이 큰 변화를 만들어 낼 것입니다.",
  text3: "행복한 동행을 기원합니다!",
  btnName: "메인 페이지로 이동",
};

const StyledDiv = styled.div`
  display: flex;
  flex-direction: column;
  padding: 0px;
  margin : 0px;
  justify-content: center;
  align-items: center;
`;

const StyledLogo = styled.img`
  margin-top : -150px;
  width: 400px;  /* 원하는 너비로 설정 */
  height: 400px;  /* 원하는 높이로 설정 */

`;

const StyledP1 = styled.p`
  font-size: 40px;
  font-weight: bold;
  margin-top: -65px;
  margin-bottom: 42px;
  font-family: var(--main-font);
`;

const StyledP2 = styled.p`
  font-size: 20px;
  margin-bottom: 30px;
  white-space: normal;
  word-wrap: break-word;
  overflow-wrap: break-word;
  font-family: var(--main-font);

  /* 반응형 글자 크기 조정 */
  @media (max-width: 480px) {
    font-size: 16px;
  }
`;

const StyledButton = styled(Button)``;

function JoinSecession() {
  // 텍스트를 컴포넌트 내에서 관리
  return (
    <StyledDiv>
      <a href="./intro" >
          <StyledLogo src={logo} alt="로고" />
          </a>
      <StyledP1>{texts.h1}</StyledP1>
      <StyledP2>{texts.text1}</StyledP2>
      <StyledP2>{texts.text2}</StyledP2>
      <StyledP2>{texts.text3}</StyledP2>
      <StyledButton text={texts.btnName} />
    </StyledDiv>
  );
}

export default JoinSecession;