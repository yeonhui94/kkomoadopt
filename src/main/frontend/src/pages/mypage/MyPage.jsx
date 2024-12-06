import React from 'react';
import { Outlet } from 'react-router-dom';
import UserNavi from '../../components/MyPage/MypageNaviBar/User/UserNavi'; // UserNavi 컴포넌트 경로에 맞게 설정
import AdminNavi from "../../components/MyPage/MypageNaviBar/Adim/AdminNavi"; // AdminNavi 컴포넌트 경로에 맞게 설정
import Profile from "../../components/MyPage/Profile/Profile";
import styles from "./MyPage.module.css";
import { useLocation } from 'react-router-dom';

function MyPage({gridArea}) {
  const location = useLocation(); // 현재 경로를 가져옴
  const isAdminPage = location.pathname.includes('admin'); // 경로가 /mypage/admin으로 포함되어 있는지 확인

  return (
    <div className={styles.mpWrapper}>
      <div className={styles.Profile}>
        {/* 공통적인 프로필 정보 렌더링 */}
        <Profile
          name={isAdminPage ? '관리자' : '조랭삼'}
          text1={isAdminPage ? '소개글이 없습니다' : '자기소개는 부끄렁 인삼이 최고'}
          btnName1={isAdminPage ? '관리자 정보 변경' : '프로필 변경'}
          btnName2={'로그아웃'}
          btnLink1={isAdminPage ? '/mypage/admin/edit-profile1' : "/mypage/user/change-profile"}
        />
      </div>

      <div className={styles.mpsmallWrapper}>
        {/* 경로에 맞는 네비게이션을 렌더링 */}
        {isAdminPage ? <AdminNavi /> : <UserNavi />}
        {/* 자식 라우트를 Outlet으로 렌더링 */}
        <Outlet />
      </div>
    </div>
  );
}

export default MyPage;
