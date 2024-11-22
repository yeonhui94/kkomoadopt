import React from 'react';
import Footer from './container/Footer';
import Header from "./container/header/Header";
import Logo from './components/logo/Logo';
import Profile from './components/MyPage/Profile/Profile';
import Card1Ex from './components/Card1/Card1Ex';



const App = () => {
  return (
    <>
    <Logo />
    <Header />
    <Footer />
    <Profile  text1="소개할 글이 없습니다" name="관리자" btnName1="프로필 변경" btnName2="로그아웃" hori2="12px"/>
    <Card1Ex></Card1Ex>
    </>
  )
};

export default App;
