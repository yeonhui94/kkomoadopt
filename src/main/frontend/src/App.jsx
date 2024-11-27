import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HeaderMain from './container/HeaderMain/HeaderMain';
import CenterIntro from './pages/CenterIntro'; // 올바른 파일 경로로 수정

const App = () => {
  return (
    <>
    <Router>
      {/* HeaderMain은 라우터 외부에 위치 */}
      <HeaderMain />
      {/* Route 설정 */}
      <Routes>
        <Route path="/center-intro" element={<CenterIntro />} />
        
      </Routes>
    </Router>
    </>
  );
};

export default App;
