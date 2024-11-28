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
import Scrappg from './scrappg/Scrappg';

function MyPage({gridArea}) {
  return (
    <div style={{gridArea : gridArea}}>
    <div className={styles.mpWrapper}>
    <Profile></Profile>
    <div className={styles.mpsmallWrapper}>
    {/* <Router> */}
      <UserNavi /> {/* 네비게이션 바 추가 */}
     {/* <Routes>
        <Route path="/mypage/scrap" element={<Scrappg />} />
        <Route path="/mypage/my-posts" element={<MyPost />} />
        <Route path="/mypage/my-comments" element={<MyComments />} />
        <Route path="/mypage/edit-profile" element={<EditProfile />} />
        <Route path="/mypage/cs-detail" element={<Csdetail />} />
      </Routes>
    </Router>  */}
    <Outlet/>
    </div>  
    </div>
    {/* <Footer></Footer> */}
    </div>
  );
}

export default MyPage;
