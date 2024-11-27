import React from 'react';
import SubMenuBar from '../../components/submenubar/SubMenuBar';
import { Route, Routes } from 'react-router-dom';

function Community() {
  const menuItems = [
    { name: '공지사항', path: '/notice' },
    { name: '아이를 찾습니다', path: '/find-child' },
    { name: '입양 후기', path: '/adoption-review' },
    { name: '사고팝니다', path: '/trade' },
    { name: '신고합니다', path: '/report' },
  ];

  return (
    <div>
        
      <SubMenuBar menuItems={menuItems} />
      <Routes>
        <Route path="/notice" element={<p>공지사항</p>} />
        <Route path="/find-child" element={<p>아이를 찾습니다.</p>} />
        <Route path="/adoption-review" element={<p>입양후기</p>} />
        <Route path="/trade" element={<p>사고팝니다.</p>} />
        <Route path="/report" element={<p>신고합니다.</p>} />
        
      </Routes>


    </div>
  );
};

export default Community;

// app.jsx에서 선언할때
// import는 이렇게 app.jsx에서 하고 
// import React from 'react';
// import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
// import Community from './pages/community/Community';

// function App() {
//   return (
// 라우터는 이렇게 선언하면 구현이됨
//     <Router>
//       <Routes>
//         <Route path="/" element={<Community />} />
//         {/* 다른 페이지도 필요에 따라 추가 */}
//       </Routes>
//     </Router>
//   );
// }

// export default App;
