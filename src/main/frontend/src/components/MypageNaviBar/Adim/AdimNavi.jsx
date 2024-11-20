import styled from "styled-components";
import LinkButton from "../LinkButton";
import { useState } from "react";

// 부모 div 스타일
const StyledDiv = styled.div`
  padding : 0;
  display: flex;             /* 버튼들을 가로로 배치 */
  width: 806px;               /* 부모 div의 너비는 100%로 설정 */
  height: 70px;              /* 부모 div의 고정된 높이 */
  align-items: stretch;      /* 버튼들이 세로로 늘어나도록 설정 */
  justify-content: space-between; /* 버튼들 사이의 간격을 일정하게 배분 */
`;

// LinkButton을 styled-components로 감싼 스타일 정의
const StyledLinkButton = styled(LinkButton)`
  flex: 1;                   /* 각 버튼이 부모 div의 너비를 균등하게 나누어 가짐 */
  height: 100%;              /* 버튼이 div의 높이에 꽉 차게 설정 */
  width : 100%
  display: flex;             /* 버튼 내부의 내용도 flexbox로 설정하여 중앙 정렬 */
  justify-content: center;   /* 버튼 텍스트를 가로로 중앙 정렬 */
  align-items: center;       /* 버튼 텍스트를 세로로 중앙 정렬 */
  min-width: 0;              /* 최소 너비를 0으로 설정하여 버튼들이 고정된 크기 유지 */


`;


function AdimNavi() {
    const [selectedButton, setSelectedButton] = useState(null);
  
    const buttonData = [
      { text: "동물 글 관리" },
      { text: "사용자 관리" },
      { text: "글 관리" },
      { text: "상담예약" },
      { text: "블랙리스트" },
    ];
  
    const handleButtonClick = (buttonText) => {
      // 버튼 클릭 시 선택된 버튼을 상태로 업데이트
      setSelectedButton(buttonText === selectedButton ? null : buttonText);
    };
  
    return (
      <StyledDiv>
        {buttonData.map((button) => (
          <StyledLinkButton
            key={button.text} // 각 버튼에 고유한 키를 추가
            text={button.text}
            selected={selectedButton === button.text}
            onClick={() => handleButtonClick(button.text)}
          />
        ))}
      </StyledDiv>
    );
  }
  
  export default AdimNavi;