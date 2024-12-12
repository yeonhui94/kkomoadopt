import React from 'react';
import styled from 'styled-components';
import Mypageimg from '../../../components/logo/Mypageicon.svg';
import { Link, useNavigate } from 'react-router-dom'; // useNavigate를 추가

const StyledImg = styled.img`
  margin-top: 5px;
  cursor: pointer;
`;

const Mypageicon2 = ({ isLoggedIn }) => {
  const navigate = useNavigate(); // navigate 훅을 사용해 페이지 이동

  const handleClick = () => {
    if (!isLoggedIn) {
      // 로그인되지 않았다면 로그인하라는 알림과 함께 로그인 페이지로 이동
      alert('로그인 해주세요!');
      navigate('/login'); // 로그인 페이지로 이동
    } else {
      // 로그인 상태라면 마이페이지로 이동
      navigate('/mypage/user');
    }
  };

  return (
    <div onClick={handleClick} style={{cursor : 'pointer'}}>
      <StyledImg src={Mypageimg} alt="Mypage"/>
    </div>
  );
};

export default Mypageicon2;
