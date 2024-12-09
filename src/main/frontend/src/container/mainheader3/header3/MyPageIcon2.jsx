// src/components/header/Mypageicon2.jsx
import React from 'react';
import styled from 'styled-components';
import Mypageimg from '../../../components/logo/Mypageicon.svg';
import { Link } from 'react-router-dom'; 
const StyledImg = styled.img`
  /* margin-top: 5px; */
`;

const Mypageicon2 = () => {
  return (
    <Link to="/mypage">
      <StyledImg src={Mypageimg} alt="Mypage" />
    </Link>
  );
};

export default Mypageicon2;