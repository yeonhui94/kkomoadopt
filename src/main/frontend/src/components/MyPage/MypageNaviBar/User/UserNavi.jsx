import styled from "styled-components";
import { Link } from "react-router-dom"; // Link 컴포넌트 사용
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
  height: 100%;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  min-width: 0;
  text-decoration: none;
`;

function UserNavi() {
  const [selectedButton, setSelectedButton] = useState(null);

  const buttonData = [
    { text: "스크랩", to: "/mypage/scrap" },
    { text: "내가 쓴 글", to: "/mypage/my-posts" },
    { text: "나의 댓글", to: "/mypage/my-comments" },
    { text: "회원정보 수정", to: "/mypage/edit-profile" },
    { text: "상담신청 내역", to: "/mypage/Cs-detail" },
  ];

  return (
    <StyledDiv>
      {buttonData.map((button) => (
        <StyledLinkButton
          key={button.text}
          to={button.to} // 각 버튼에 맞는 경로로 이동
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
