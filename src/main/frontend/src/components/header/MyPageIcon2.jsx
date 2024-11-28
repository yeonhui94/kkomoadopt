// src/components/header/Mypageicon2.jsx
import React from 'react';
import styled from 'styled-components';
import Mypageimg from '../../components/logo/Mypageicon.svg';

const StyledImg = styled.img`

`;

const Mypageicon2 = () => {
  return (
    <a href="https://rummikub-apps.com/">
      <StyledImg src={Mypageimg} alt="Mypage" />
    </a>
  );
};

export default Mypageicon2;
