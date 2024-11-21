import styled from "styled-components";
import LinkButton from "../LinkButton";
import { useState } from "react";

// 부모 div 스타일
const StyledDiv = styled.div`
  padding : 0;
  display: flex;                         
  height: 70px;              
  align-items: stretch;      
  justify-content: space-between; 
`;

// LinkButton을 styled-components로 감싼 스타일 정의
const StyledLinkButton = styled(LinkButton)`
  flex: 1;                   
  height: 100%;              
  width : 100%
  display: flex;             
  justify-content: center;   
  align-items: center;       
  min-width: 0;
`;


function UserNavi() {
    const [selectedButton, setSelectedButton] = useState(null);
  
    const buttonData = [
      { text: "스크랩" },
      { text: "내가 쓴 글" },
      { text: "나의 댓글" },
      { text: "회원정보 수정" },
      { text: "상담신청 내역" },
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
  
  export default UserNavi;