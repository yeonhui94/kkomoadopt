import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
// import Community from './pages/community/Community';
import Adoption from './pages/Adoption';

function App() {
  return (
    <Router>
      <Routes>
        {/* <Route path="/" element={<Community />} /> */}
        <Route path="/" element={<Adoption />} />

        {/* 다른 페이지도 필요에 따라 추가 */}
      </Routes>
    </Router>
  );
}

export default App;
