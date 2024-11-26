import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import CenterIntro from './pages/CenterIntro'; // 올바른 파일 경로로 수정
import ParentComponent from './pages/ParentComponent';
import Review from './pages/Review';

const App = () => {
  return (
    <>

    <Router>
      <Routes>
        {/* ParentComponent를 기본 경로로 렌더링 */}
        <Route path="/" element={<ParentComponent />} />
        <Route path="/Announcement" element={<h1>공지사항</h1>} />
        <Route path="/find-child" element={<h1>아이를 찾습니다</h1>} />
        <Route path="/adopt-review" element={<Review></Review>} />
        <Route path="/buy-sell" element={<h1>사고팝니다</h1>} />
        <Route path="/report" element={<h1>신고합니다</h1>} />
      </Routes>
    </Router>
    </>
  );
};

export default App;
