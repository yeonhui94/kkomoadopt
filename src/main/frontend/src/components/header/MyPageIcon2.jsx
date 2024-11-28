// src/components/header/Mypageicon2.jsx
import React from 'react';
import styled from 'styled-components';
import Mypageimg from '../../components/logo/Mypageicon.svg';

const StyledImg = styled.img`

`;

const Mypageicon2 = () => {
  return (
    <a href="http://localhost:5173/mypage">
      <StyledImg src={Mypageimg} alt="Mypage" />
    </a>
  );
};

export default Mypageicon2;
