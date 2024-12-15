import React from 'react';
import styled from 'styled-components';
// import Mypageimg from '../../../components/logo/Mypageicon.svg';
// import MypageImg from '../../../assets/maincolor.svg';
import blackImg from '../../../assets/black.svg';
import whiteImg from '../../../assets/white.svg';
import mypageImg6 from '../../../assets/maincolor.svg'
import { Link, useNavigate,useLocation } from 'react-router-dom'; // useNavigate를 추가

const StyledImg = styled.img`
  margin-top: 5px;
  cursor: pointer;
`;

const Mypageicon2 = ({ isLoggedIn, isScrolled,isAnimatingComplete }) => {
  const navigate = useNavigate(); // navigate 훅을 사용해 페이지 이동
  const location = useLocation();

  const isMainPage = location.pathname === '/';

  const handleClick = () => {
    if (!isLoggedIn) {
      // 로그인되지 않았다면 로그인하라는 알림과 함께 로그인 페이지로 이동
      alert('로그인 해주세요!');
      navigate('/login'); // 로그인 페이지로 이동
    } else {
      let user = JSON.parse(localStorage.getItem('user'))
      console.log(user)
      if(user.authority === 'USER') {
        // 로그인 상태라면 마이페이지로 이동
      navigate('/mypage/user');
      } else  if(user.authority === 'ADMIN') { 
        // 로그인 상태라면 마이페이지로 이동
        navigate('/mypage/admin');
      }

      
      
    }
  };

  return (
    <div onClick={handleClick} style={{ cursor: 'pointer', display: 'flex' }}>
      {/* 메인 페이지 여부에 따라 다른 StyledImg 렌더링 */}
      {isMainPage ? (
          <StyledImg src={isScrolled ? whiteImg : isAnimatingComplete ? mypageImg6 : blackImg} alt="Mypage" />
      ) : (
          <StyledImg src={mypageImg6} alt="Mypage" />
      )}
    </div>
  );
};

export default Mypageicon2;
