import styled from "styled-components";
import LinkButton from "../LinkButton";
import { useState } from "react";
import { Link } from "react-router-dom";

// 부모 div 스타일
const StyledDiv = styled.div`
  padding : 0;
  display: flex;             
              
  height: 70px;             
  align-items: stretch;     
  justify-content: space-between;
`;

// LinkButton을 styled-components로 감싼 스타일 정의
const StyledLinkButton = styled(Link)`
  flex: 1;
  display: flex;
  justify-content: center;
  align-items: center;
  text-decoration: none;
  height: 100%; // 부모 요소에 맞게 버튼 높이 설정
  margin-inline : 0px;

`;


function AdminNavi() {
  const [selectedButton, setSelectedButton] = useState(null);

  const buttonData = [
    { text: "동물 글 관리", to: "/mypage/admin" },
    { text: "사용자 관리", to: "/mypage/admin/user-management" },
    { text: "글 관리", to:"/mypage/admin/post-management"},
    { text: "상담예약", to:"/mypage/admin/reservationlist" },
    { text: "블랙리스트", to: "/mypage/admin/blacklist"},
  ];

  // const handleButtonClick = (buttonText) => {
  //   // 버튼 클릭 시 선택된 버튼을 상태로 업데이트
  //   setSelectedButton(buttonText === selectedButton ? null : buttonText);
  // };

  return (
    <StyledDiv>
      {buttonData.map((button) => (
        <StyledLinkButton
          key={button.text} // 각 버튼에 고유한 키를 추가
          text={button.text}
          to={button.to}
          onClick={() => setSelectedButton(button.text)}
        >

          <LinkButton
            text={button.text}
            selected={selectedButton === button.text}
          />
        </StyledLinkButton>
      ))}
    </StyledDiv>
  );
}

export default AdminNavi;