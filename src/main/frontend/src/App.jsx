import React from 'react';
import Logo from './components/logo/Logo';
import Profile from './components/MyPage/Profile/Profile';
import Divider from './components/Divider';
import LoginPageContents from './pages/Login/LoginPageContents';
// import AccesstionPage from './pages/Login/AccessionPage';
// import LoginPage from './pages/Login/LoginPage';
import IdPasswordPage from './pages/Login/IdPasswordPage';
import MemberJoinSecession from './pages/Login/MemberJoinSecession';
import JoinPage from './pages/Login/JoinPage';
import CenterIntro from './pages/CenterIntro';
import { createBrowserRouter, Outlet, RouterProvider } from 'react-router-dom';
import Main from './pages/Main/Main';
import Announcement from './pages/Announcement';
import Intro from './pages/Main/Intro';
import AccesstionPageContents from './pages/Login/AccessionPageContents';
import Customer_service from './pages/customer_service/Customer_service';
import Resell from './pages/Resell';
import Community from './pages/community/community';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import UserNavi from './components/MyPage/MypageNaviBar/User/UserNavi'; // UserNavi 컴포넌트 경로에 맞게 설정
import Scrap from './pages/mypage/Scrappg'; // 예시 페이지
import MyPost from './pages/mypage/MyPost';
import MyComments from './pages/mypage/MyComments';
import EditProfile from './pages/mypage/EdifProfile';
import Csdetail from './pages/mypage/Csdetail';

const router = createBrowserRouter([
  {
      path : "/", element : <Main/>,
      children : [
        { path: "", element: <Intro/>},
        { path: "login", element: <LoginPageContents gridArea="section"/>},
        { path: "join", element: <AccesstionPageContents gridArea="section"/>},
        //  { path: "mypage", element: <gridArea="section"/>}, // 마이페이지
        // { path: "adopt", element: <gridArea="section"/>}, // 입양
        { path: "community", element: <Community gridArea="section"/>,
          children : [
            { path: "", element: <Announcement />},
            { path: "resell", element: <Resell/>},
            { path: "", element: <Announcement gridArea="section"/>},
            { path: "", element: <Announcement gridArea="section"/>},
          ]
        },
        { path: "customer-service", element: <Customer_service gridArea="section"/>},
      ]
  }
]);

function App() {
  return (
    <div>
      <UserNavi /> {/* 네비게이션 바 추가 */}
      {/* <Routes>
        <Route path="/mypage/scrap" element={<Scrap />} />
        <Route path="/mypage/my-posts" element={<MyPost />} />
        <Route path="/mypage/my-comments" element={<MyComments />} />
        <Route path="/mypage/edit-profile" element={<EditProfile />} />
        <Route path="/mypage/cs-detail" element={<Csdetail />} />
      </Routes> */}
    </div>
  );
}

export default App;