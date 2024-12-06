import styled from "styled-components";
import { Link } from "react-router-dom";
import { useState } from "react";
import LinkButton from "../LinkButton";

// 부모 div 스타일
const StyledDiv = styled.div`
  padding: 0;
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

function UserNavi() {
  const [selectedButton, setSelectedButton] = useState(null);

  const buttonData = [
    { text: "스크랩", to: "/mypage/user" },
    { text: "내가 쓴 글", to: "/mypage/user/my-posts" },
    { text: "나의 댓글", to: "/mypage/user/my-comments" },
    { text: "회원정보 수정", to: "/mypage/user/edit-profile1" },
    { text: "상담신청 내역", to: "/mypage/user/cs-detail" },
  ];

  return (
    <StyledDiv>
      {buttonData.map((button) => (
        <StyledLinkButton
          key={button.text}
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

export default UserNavi;
