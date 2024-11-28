import Main from './pages/Main/Main';
import Intro from './pages/Main/Intro';
import AccesstionPageContents from './pages/Login/AccessionPageContents';
import LoginPageContents from './pages/Login/LoginPageContents'
import Customer_service from './pages/customer_service/Customer_service'
import Community from './pages/community/Community';
import Announcement from './pages/Announcement';
import Resell from './pages/Resell';
import { createBrowserRouter, Router, RouterProvider, Routes } from 'react-router-dom';
import UserNavi from './components/MyPage/MypageNaviBar/User/UserNavi'
import FAQ from './container/FAQ/FAQ';
import CenterIntro from './pages/CenterIntro';

const router = createBrowserRouter([
  {
      path : "/", element : <Main/>,
      children : [
        { path: "", element: <Intro/>},
        { path: "/login", element: <LoginPageContents gridArea="section"/>},
        { path: "/join", element: <AccesstionPageContents gridArea="section"/>},
        //  { path: "mypage", element: <gridArea="section"/>}, // 마이페이지
        // { path: "adopt", element: <gridArea="section"/>}, // 입양
        { path: "/community", element: <Community gridArea="section"/>,
          children : [
            { path: "", element: <Announcement />},
            { path: "resell", element: <Resell gridArea="subsection"/>},
            { path: "", element: <Announcement gridArea="section"/>},
            { path: "", element: <Announcement gridArea="section"/>},
          ]
        },
        { path: "customerservice", element: <Customer_service gridArea="section"/>,
          children : [
            { path: "", element: <FAQ gridArea="subsection"/>},
          ]
        },
        { path: "/CenterIntro", element: <CenterIntro gridArea="section"/>},
      ]
  }
]);

function App() {
  return (
    <div>
      <RouterProvider router={router} />
      {/* <ParentComponent/> */}
      {/* <UserNavi /> 네비게이션 바 추가 */}
      {/* <Routes>
        <Route path="/mypage/scrap" element={<Scrap />} />
        <Route path="/mypage/my-posts" element={<MyPost />} />
        <Route path="/mypage/my-comments" element={<MyComments />} />
        <Route path="/mypage/edit-profile" element={<EditProfile />} />
        <Route path="/mypage/cs-detail" element={<Csdetail />} />
      </Routes> */}
       {/* <Router>
      <Routes>
        <Route path="/" element={<Community />} /> */}
        {/* <Route path="/" element={<Adoption />} /> */}

        {/* 다른 페이지도 필요에 따라 추가 */}
      {/* </Routes>
    </Router> */}
    </div>
  );
}

export default App;
