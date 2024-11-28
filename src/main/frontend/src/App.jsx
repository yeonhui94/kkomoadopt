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
import SubNaviBar from './components/MyPage/SubNavi/SubNaviBar';
import Scrappg from './pages/mypage/scrappg/Scrappg';
import Mypost from './pages/mypage/MyPost';
import MyComments from './pages/mypage/MyComments';
import EditProfile from './pages/mypage/EdifProfile';
import Csdetail from './pages/mypage/Csdetail';
import MyPage from './pages/mypage/MyPage';
import Scrap_all from './pages/mypage/scrappg/scrap_all';
import Scrap_dog from './pages/mypage/scrappg/scrap_dog';
import Scrap_cat from './pages/mypage/scrappg/scrap_cat';
import Scrap_etc from './pages/mypage/scrappg/scrap_etc ';


const router = createBrowserRouter([
  {
      path : "/", element : <Main/>,
      children : [
        { path: "", element: <Intro/>},
        { path: "/login", element: <LoginPageContents gridArea="section"/>},
        { path: "/join", element: <AccesstionPageContents gridArea="section"/>},
        // { path: "adopt", element: <gridArea="section"/>}, // 입양
        { path: "/community", element: <Community gridArea="section"/>,
          children : [
            { path: "", element: <Announcement gridArea="subsection"/>},
            { path: "resell", element: <Resell gridArea="subsection"/>},
            // { path: "report", element: <Announcement gridArea="section"/>},
            // { path: "adoption-review", element: <Announcement gridArea="section"/>},
            // { path: "find-child", element: <Announcement gridArea="section"/>},
          ]
        },
        { path: "customerservice", element: <Customer_service gridArea="section"/>,
          children : [
            { path: "", element: <FAQ gridArea="subsection"/>},
          ]
        },
        { path: "/CenterIntro", element: <CenterIntro gridArea="section"/>},
        { path: "/mypage", element: <MyPage gridArea="section"/>,
          children : [
            { path: "", element: <Scrappg gridArea="subsection" />,
              children : [
                { path: "", element: <Scrap_all gridArea="content" />},
                { path: "scrap-dog", element: <Scrap_dog gridArea="content" />},
                { path: "scrap-cat", element: <Scrap_cat gridArea="content" />},
                { path: "scrap-etc", element: <Scrap_etc gridArea="content" />},
              ]
            },
            { path: "mypost", element: <Mypost gridArea="subsection" />},
            { path: "mycomments", element: <MyComments gridArea="subsection" />},
            { path: "edit-profile", element: <EditProfile gridArea="subsection" />},
            { path: "csdatail", element: <Csdetail gridArea="subsection" />},
          ]
        },
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
      {/* <Routes>
        <Route path="/notice" element={<p>공지사항</p>} />
        <Route path="/find-child" element={<p>아이를 찾습니다.</p>} />
        <Route path="/adoption-review" element={<p>입양후기</p>} />
        <Route path="/trade" element={<p>사고팝니다.</p>} />
        <Route path="/report" element={<p>신고합니다.</p>} />
        
      </Routes> */}

    </div>
  );
}

export default App;
