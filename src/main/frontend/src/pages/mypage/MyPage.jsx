// MyPage.jsx

import React from 'react';
import { Route, Routes } from 'react-router-dom'; // Routes와 Route 사용
import UserNavi from '../../components/MyPage/MypageNaviBar/User/UserNavi'; // 네비게이션 컴포넌트
import Scrap from './Scrappg'; // 스크랩 페이지
import MyPost from "./MyPost"; // 내가 쓴 글 페이지
import MyComments from './MyComments'; // 댓글 페이지
import EditProfile from './EdifProfile'; // 프로필 수정 페이지
import Csdetail from './Csdetail'; // 상담 신청 페이지

function MyPage() {
  return (
    <div>
      <UserNavi />
      <Routes>
        <Route path="/mypage/scrap" element={<Scrap />} />
        <Route path="/mypage/my-posts" element={<MyPost />} />
        <Route path="/mypage/my-comments" element={<MyComments />} />
        <Route path="/mypage/edit-profile" element={<EditProfile />} />
        <Route path="/mypage/cs-detail" element={<Csdetail />} />
      </Routes>
    </div>
  );
}

export default MyPage;
