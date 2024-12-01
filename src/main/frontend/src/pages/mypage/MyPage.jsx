import React from 'react';
import { Outlet } from 'react-router-dom';
import UserNavi from '../../components/MyPage/MypageNaviBar/User/UserNavi'; // UserNavi 컴포넌트 경로에 맞게 설정
import Profile from "../../components/MyPage/Profile/Profile";
import styles from "./MyPage.module.css";

function MyPage({ gridArea }) {
  return (
    <div style={{ gridArea: gridArea }} >
      <div className={styles.mpWrapper}>
        <Profile
          name={"조랭삼"} 
          text1={"자기소개는 부끄렁 인삼이 최고"} 
          btnName1={"프로필 변경"} 
          btnName2={"로그아웃"} 
          btnLink1="/mypage/change-profile">
          </Profile>
        <div className={styles.mpsmallWrapper} >
          {/* <Router> */}
          <UserNavi /> {/* 네비게이션 바 추가 */}
          <Outlet />
        </div>
      </div>
    </div>
  );
}

export default MyPage;
