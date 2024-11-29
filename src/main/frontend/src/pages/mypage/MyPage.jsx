import React from 'react';
import { BrowserRouter as Router, Routes, Route, Outlet } from 'react-router-dom';
import UserNavi from '../../components/MyPage/MypageNaviBar/User/UserNavi'; // UserNavi 컴포넌트 경로에 맞게 설정
import MyPost from '../../pages/mypage/MyPost';
import MyComments from '../../pages/mypage/MyComments';
import EditProfile from '../../pages/mypage/EdifProfile';
import Csdetail from '../../pages/mypage/Csdetail';
import Profile from "../../components/MyPage/Profile/Profile";
import styles from "./MyPage.module.css";
import Footer from '../../container/Footer';

function MyPage({gridArea}) {
  return (
    <div style={{gridArea : gridArea}} >
    <div className={styles.mpWrapper}>
    <Profile
     name={"조랭삼"} text1={"자기소개는 부끄렁 인삼이 최고"} btnName1={"프로필 변경"} btnName2={"로그아웃"}></Profile>
    <div className={styles.mpsmallWrapper} >
    {/* <Router> */}
      <UserNavi /> {/* 네비게이션 바 추가 */}
    <Outlet/>
    </div>  
    </div>
    {/* <Footer></Footer> */}
    </div>
  );
}

export default MyPage;
