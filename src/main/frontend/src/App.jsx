import Main from "./pages/Main/Main";
import Intro from "./pages/Main/Intro";
import AccesstionPageContents from "./pages/Login/AccessionPageContents";
import LoginPageContents from "./pages/Login/LoginPageContents";
import Customer_service from "./pages/customer_service/Customer_service";
import Community from "./pages/community/Community";
import Announcement from './pages/community/announce/Announcement.jsx';
import Resell from "./pages/Resell";
import {
  createBrowserRouter,
  Router,
  RouterProvider,
  Routes,
} from "react-router-dom";
import UserNavi from "./components/MyPage/MypageNaviBar/User/UserNavi";
import FAQ from "./container/FAQ/FAQ";
import CenterIntro from "./pages/CenterIntro";
import SubNaviBar from "./components/MyPage/SubNavi/SubNaviBar";
import Mypost from "./pages/mypage/MyPost";
import MyComments from "./pages/mypage/MyComments";
import EditProfile from "./pages/mypage/EdifProfile";
import Csdetail from "./pages/mypage/Csdetail";
import MyPage from "./pages/mypage/MyPage";
import CommunityWt from "./pages/community/resell/Resell_CommunityWt";
import CommunityWt_report from "./pages/community/report/Report_CommunityWt";
import IdPasswordContents from "./pages/Login/IdPasswordContents";
import Report_Community from "./pages/community/report/Report_Community";
import Report_CommunityWt from "./pages/community/report/Report_CommunityWt";
import Find_child_community from "./pages/community/find_child/Missing_Community";
import Find_child_CommunityWt from "./pages/community/find_child/Missing_CommunityWt";
import Resell_Community from "./pages/community/resell/Resell_Community";
import Adopt_review_Community from "./pages/community/adopt_review/Adopt_review_Community";
import Adopt_review_CommunityWt from "./pages/community/adopt_review/Adopt_review_CommunityWt";
import Resell_CommunityWt from "./pages/community/resell/Resell_CommunityWt";
import Review from "./pages/Review";
import Apply_consult from "./pages/customer_service/apply_consult/Apply_consult";
import Qna from "./pages/customer_service/qna/Qna";
import Adoption from "./pages/adoption/Adoption";
import Missing from "./pages/Missing";
import Missing_community from "./pages/community/find_child/Missing_Community";
import Missing_CommunityWt from "./pages/community/find_child/Missing_CommunityWt";
import Scrappage from "./pages/mypage/Scrappage";
import Report from "./pages/community/report/Report.jsx";
import ChangeProfile from "./pages/mypage/ChangeProfile";
import JoinContents from "./pages/Login/JoinContents.jsx";
import JoinSecession from "./pages/Login/JoinSecession.jsx";
import QnaWritePage from "./pages/QnaPage/QnaWritePage";
import QnaListPage from "./pages/QnaListPage/QnaListPage";
import QnaResultPage from "./pages/QnaPage/QnaResultPage";
import ConcertationPage from "./pages/ConcertationPage/ConcertationPage";
import EditMyPage1 from "./pages/mypage/EditMyPage1.jsx";
import EditMyPage2 from "./pages/mypage/EditMyPage2.jsx";
import Adoption_NewPost from "./pages/adoption/Adoption_NewPost.jsx";
import Section3333 from "./container/section3/Section3333.jsx"
import Secession from "./pages/Login/Secession.jsx";
import { useEffect, useState } from "react";
import AdoptionPostPage from "./pages/adminpage/AdoptionPostPage.jsx"
import Adoption_Post from "./pages/adoption/Adoption_Post.jsx";
import UserMgmt from "./pages/adminpage/UserMgmt.jsx";
import UserReservation from "./pages/adminpage/UserReservation.jsx";
import PostsMgmt from "./pages/adminpage/PostsMgmt.jsx";
import BlackList from "./pages/adminpage/BlackList.jsx";





function App() {
  const userType = "user";
  const router = createBrowserRouter([

    {
      path: "/",
      element: <Main />,
      children: [
        { path: "", element: <Intro /> },
        // 아이디, 비밀번호 찾기
        {
          path: "/IdPassword",
          element: <IdPasswordContents gridArea="section" />,
        },
        //로그인
        { path: "/login", element: <LoginPageContents gridArea="section" /> },
        //회원가입
        { path: "/join", element: <AccesstionPageContents gridArea="section" /> },
        // 회원가입 페이지
        { path: "/createId", element: <JoinContents gridArea="section" /> },
        // 회원가입 완료
        // 회원탈퇴 완료
        { path: "/secession", element: <Secession gridArea="section" /> },
        { path: "/welcome", element: <JoinSecession gridArea="section" /> },
        //입양
        {
          path: "/adoption", element: <Adoption gridArea="section" />,
          children: [
            //글쓰기
            // { path: "adoption-newpost", element: <Adoption_NewPost gridArea="subsection" /> }
            // 입양 디테일 글
            // {path:"/post/:id",  element : <Adoption_Post  gridArea="subsection"/>}
          ]

        },
        //커뮤니티
        {
          path: "community",
          element: <Community gridArea="section" />,
          // 커뮤니티 > 공지사항, 아이를 찾습니다, 입양 후기, 사고팝니다, 신고합니다
          children: [
            // 공지사항
            { path: "", element: <Announcement gridArea="subsection" /> },
            // 사고팝니다
            { path: "resell", element: <Resell gridArea="subsection" /> },
            // 신고합니다
            { path: "report", element: <Report gridArea="section" /> },
            // 입양 후기
            { path: "adoption-review", element: <Review gridArea="section" /> },
            // 아이를 찾습니다
            { path: "find-child", element: <Missing gridArea="section" /> },
          ],
        },
        // 커뮤니티 > 아이를 찾습니다 (게시글 디테일 / 글쓰기화면)
        {
          path: "commu-find_child",
          element: <Missing_community gridArea="section" />,
          children: [
            // 아이를 찾습니다 게시글
            //  { path: "", element: <CommunityWt_report gridArea="subsection"/>},
            // 아이를 찾습니다 글쓰기
            {
              path: "communitywt",
              element: (
                <Missing_CommunityWt text="신고합니다" gridArea="subsection" />
              ),
            },
          ],
        },
        // 커뮤니티 > 입양 후기
        {
          path: "commu-adopt_review",
          element: <Adopt_review_Community gridArea="section" />,
          children: [
            // 입양 후기 게시글
            //  { path: "", element: <CommunityWt_report gridArea="subsection"/>},
            // 입양 후기 글쓰기
            {
              path: "communitywt",
              element: (
                <Adopt_review_CommunityWt
                  text="신고합니다"
                  gridArea="subsection"
                />
              ),
            },
          ],
        },
        // 커뮤니티 > 사고팝니다
        {
          path: "commu-resell",
          element: <Resell_Community gridArea="section" />,
          children: [
            // 사고팝니다 게시글
            //  { path: "", element: <CommunityWt_report gridArea="subsection"/>},
            // 사고팝니다 글쓰기
            {
              path: "communitywt",
              element: (
                <Resell_CommunityWt text="신고합니다" gridArea="subsection" />
              ),
            },
          ],
        },
        // 커뮤니티 > 신고합니다
        {
          path: "commu-report",
          element: <Report_Community gridArea="section" />,
          children: [
            // 신고합니다 게시글
            //  { path: "", element: < gridArea="subsection"/>},
            // 신고합니다 글쓰기
            {
              path: "communitywt",
              element: (
                <Report_CommunityWt text="신고합니다" gridArea="subsection" />
              ),
            },
          ],
        },
        // 고객센터
        {
          path: "customerservice",
          element: <Customer_service gridArea="section" />,
          // 고객센터 > FAQ , Q&A, 방문상담신청
          children: [
            // FAQ
            { path: "", element: <FAQ gridArea="subsection" /> },
          ],
        },
        // 고객센터 > QNA
        {
          path: "customer_qna",
          element: <Qna gridArea="section" />,
          children: [
            // QNA 게시글 리스트
            { path: "", element: <QnaListPage /> },
            // QNA 게시글
            {
              path: "result/:id",
              element: <QnaResultPage gridArea="subsection" />,
            },
            // QNA 글쓰기
            {
              path: "communtywt",
              element: <QnaWritePage text="신고합니다" gridArea="subsection" />,
            },
          ],
        },
        // 고객센터 > 방문상담신청
        {
          path: "customer_apply_consult",
          element: <Apply_consult gridArea="section" />,
          children: [
            // 방문상담신청 게시글
            //  { path: "", element: < gridArea="subsection"/>},
            // 방문상담신청 글쓰기
            {
              path: "",
              element: (
                // <Report_CommunityWt text="신고합니다" gridArea="subsection" />
                <ConcertationPage />
              ),
            },
          ],
        },
        // 센터 소개
        { path: "/CenterIntro", element: <CenterIntro gridArea="section" /> },
        // 마이페이지
        {
          path: "/mypage/user",
          element: <MyPage gridArea="section" userType={userType} />,
          children:
            // 유저용 마이페이지 자식 라우트
            [
              { path: "", element: <Scrappage gridArea="subsection" /> },
              { path: "my-posts", element: <Mypost gridArea="subsection" /> },
              { path: "my-comments", element: <MyComments gridArea="subsection" /> },
              { path: "edit-profile1", element: <EditMyPage1 gridArea="subsection" /> },
              { path: "edit-profile2", element: <EditMyPage2 gridArea="subsection" /> },
              { path: "cs-detail", element: <Csdetail gridArea="subsection" /> },
              { path: "change-profile", element: <ChangeProfile gridArea="subsection" /> },
            ]
        },
        {
          path: "/mypage/admin",
          element: <MyPage gridArea="section" userType={userType} />,
          children:
            // 어드민용 마이페이지 자식 라우트
            [
              { path: "", element: <AdoptionPostPage gridArea="subsection" /> },
              { path: "edit-profile1", element: <EditMyPage1 gridArea="subsection" /> },
              { path: "edit-profile2", element: <EditMyPage2 gridArea="subsection" /> },
              { path: "user-management", element: <UserMgmt gridArea="subsection" /> },
              { path: "post-management", element: <PostsMgmt gridArea="subsection" /> },
              { path: "reservarionlist", element: <UserReservation gridArea="subsection" /> },
              { path: "blacklist", element: <BlackList gridArea="subsection" /> },
            ]
        },

        // 어드민용 마이페이지 자식 라우트
        //  [
        //   { path: "/mypage", element: <AdoptionPostPage gridArea="subsection" /> },
        //   // 추가적인 어드민 라우트 예시
        //   // { path: "manage-users", element: <div>유저 관리</div> },
        //   // { path: "settings", element: <div>어드민 설정</div> },
        // ],
        // ].filter(Boolean), // userType에 맞는 라우트만 표시
      ]
    }
  ])






  return (
    <div>
      <RouterProvider router={router} />
      {/* <AdoptionPostPage></AdoptionPostPage> */}
      {/* <Section3333></Section3333> */}
      {/* <Adoption_NewPost></Adoption_NewPost> */}

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
