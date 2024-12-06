import React from 'react';
import { Outlet } from 'react-router-dom';
import UserNavi from '../../components/MyPage/MypageNaviBar/User/UserNavi'; // UserNavi 컴포넌트 경로에 맞게 설정
import AdminNavi from "../../components/MyPage/MypageNaviBar/Adim/AdminNavi"; // AdminNavi 컴포넌트 경로에 맞게 설정
import Profile from "../../components/MyPage/Profile/Profile";
import styles from "./MyPage.module.css";

function MyPage({ gridArea, userType }) {
  // userType이 'admin'이면 AdminPage, 아니면 UserPage를 렌더링
  if (userType === 'admin') {
    return (
      <div style={{ gridArea: gridArea }}>
        <div>
          <Profile
            name={"관리자"}
            text1={"소개글이 없습니다"}
            btnName1={"관리자 정보 변경"}
            btnName2={"로그아웃"}
            btnLink1={"/"}
          />
          <div>
            <AdminNavi /> {/* 어드민 네비게이션 바 */}
            <Outlet />
          </div>
        </div>
      </div>
    );
  }

  // userType이 'user'일 경우
  return (
    <div style={{ gridArea: gridArea }}>
      <div className={styles.mpWrapper}>
        <Profile
          name={"조랭삼"} 
          text1={"자기소개는 부끄렁 인삼이 최고"} 
          btnName1={"프로필 변경"} 
          btnName2={"로그아웃"} 
          btnLink1="/mypage/change-profile"
        />
        <div className={styles.mpsmallWrapper}>
          <UserNavi /> {/* 유저 네비게이션 바 */}
          <Outlet />
        </div>
      </div>
    </div>
  );
}

export default MyPage;
