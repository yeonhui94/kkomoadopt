import Button from "../components/Button/Button";
import Divider from "../components/Divider";
import styled from 'styled-components';

// Divider 스타일 설정
const StyledLoginBox = styled.div`
  height: 426px; /* 컨텐츠에 맞게 높이를 자동으로 조정 */
  border: 4px solid var(--line-color);
  border-radius: 10px;
  margin-top: 74px;
  padding-top: 74px;
  display: flex;
  flex-direction: column;
  align-items: center; /* 가운데 정렬 */
  position: relative; /* 밑줄을 절대 위치로 배치하려면 parent 요소에 relative 설정 필요 */
  padding-bottom: 24px; /* 박스 하단에 여백 추가 */
`;

const StyledButton1 = styled(Button)`
  margin-bottom: 12px; /* 각 버튼들 사이에 12px 간격 추가 */
`;

const StyledButton2 = styled(Button)`
  margin-bottom: 12px; /* 각 버튼들 사이에 12px 간격 추가 */
  
  
  &:hover {
    color: black; /* 호버 시 텍스트 색상은 black으로 설정 */
    background-color: ${props => props.bg1color || "var(--main-color)"};
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

function AccesstionPageContents() {
  // 버튼의 너비를 구하기 위해 inline-block을 사용하여 버튼의 렌더링 후 너비를 계산
  const buttonWidth = "400px"; // 여기에 버튼 너비를 고정값 또는 동적으로 설정 (예시로 400px)

  return (
    <div style={{width:"607px", height: "700px"}}>
      <Divider text="회원가입" marTop="50px" />
      <StyledLoginBox>
        <StyledButton1
          text="이메일로 회원가입"
          color="var(--title-black)"
          bg1color="var(--line-color)"
          fontWeight="bold"
          fontSize="24px"
          horizontalPadding="160px"
          verticalPadding="14px"
          marginBottom="25px"
        />
        
        {/* "또는" 텍스트와 밑줄의 너비를 버튼의 너비와 같게 설정 */}
        <OrTextWithLine width={buttonWidth}>
          <Line />
          <OrText>또는</OrText>
        </OrTextWithLine>
        
        <StyledButton2
          text="네이버로 회원가입"
          color="var(--title-white)"
          bg1color="#03C75A"
          backColor="#03C75A"
          fontWeight="bold"
          fontSize="24px"
          horizontalPadding="160px"
          verticalPadding="14px"
          marginBottom="24px"
          marginTop="24px"
        />
        
        <StyledButton3
          text="카카오로 회원가입"
          color="var(--title-black)"
          bg1color="#F5DE00"
          backColor="#F5DE00"
          fontWeight="bold"
          fontSize="24px"
          horizontalPadding="160px"
          verticalPadding="14px"
        />
      </StyledLoginBox>
    </div>
  );
}

export default AccesstionPageContents;
