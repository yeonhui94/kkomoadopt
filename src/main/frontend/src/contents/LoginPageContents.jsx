import Button from "../components/Button/Button";
import styled from 'styled-components';
import InputField from "../components/InputField";

// Divider 스타일 설정
const StyledLoginBox = styled.div`
  height: 553px; /* 컨텐츠에 맞게 높이를 자동으로 조정 */
  border: 4px solid var(--line-color);
  border-radius: 10px;
  margin-top: 34px;
  padding-top: 36px;
  display: flex;
  flex-direction: column;
  align-items: center; /* 가운데 정렬 */
  position: relative; /* 밑줄을 절대 위치로 배치하려면 parent 요소에 relative 설정 필요 */
  padding-bottom: 24px; /* 박스 하단에 여백 추가 */
`;

const StyledForm = styled.form`
  margin : 0;
  padding : 0;

`


const StyledH1 = styled.h1`
  color : var(--main-color);
  font-size : 64px;
  font-weight : bold;
  text-align : center;
`;

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

const StyledALinkWrapper = styled.div`
  display: flex;
  justify-content: flex-end;
  width: 100%; /* 부모의 너비에 맞춰서 확장 */
  margin-bottom: 20px; /* 링크들 사이 간격 추가 */
  padding-right : 40px
`;

const StyledALink = styled.a`
  color: #aaa; /* 검은색 계열 색상 (어두운 회색) */
  
  
  p {
    color: inherit; /* <p> 태그도 부모의 색상 상속 */
    margin: 0; /* <p> 태그의 기본 여백 제거 */
  }

  &:hover {
    color: #666; /* 마우스를 올렸을 때 색상을 검은색으로 변경 */
  }
`;

const handleClick = () => {
    window.location.href = '/accesstion'; // '/accesstion' 경로로 이동
};

function LoginPageContents({text}) {
  const buttonWidth = "400px"; // 여기에 버튼 너비를 고정값 또는 동적으로 설정 (예시로 400px)

  return (
    <div style={{width:"607px", height: "700px"}}>
      <StyledH1>{text}</StyledH1>
      <StyledLoginBox>
        {/* StyledALink들을 가로로 배치하는 부모 wrapper 추가 */}
        <StyledALinkWrapper>
          <StyledALink href="#"><p style={{fontSize:"15px"}}>ID/PW찾기</p></StyledALink>
          <StyledALink href="#" onClick={handleClick}><p style={{fontSize:"15px", paddingLeft : "5px"}}>회원가입</p></StyledALink>
        </StyledALinkWrapper>


        <StyledForm>
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
        </StyledForm>
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
      </StyledLoginBox>
    </div>
  );
}

export default LoginPageContents;
