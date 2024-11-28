import React from 'react';
import styled from 'styled-components';
import Mypageimg from '../../components/logo/Mypageicon.svg';

// 스타일링된 img 컴포넌트 생성
const StyledImg = styled.img`
  margin-right: 25px; // 오른쪽 간격을 20px로 설정
`;

function Mypageicon2() {
  return (
    <a href="https://rummikub-apps.com/">
      <StyledImg src={Mypageimg} alt="Mypage" />
    </a>
  );
}

export default Mypageicon2;
