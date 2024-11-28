import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import DogPage from "./DogPage"; // 강아지 페이지
import ScrapAll from "./ScrapAll";
// import CatPage from "./pages/CatPage"; // 고양이 페이지
// import EtcPage from "./pages/EtcPage"; // 기타동물 페이지

const Scrappg = () => {
  return (
    <Router>
      <Routes>
        <Route path="/mypage/scrap" element={<ScrapAll />} />
        <Route path="/mypage/scrap-dog" element={<DogPage />} />
        {/* <Route path="/mypage/scrap-cat" element={<CatPage />} />
        <Route path="/mypage/scrap-etc" element={<EtcPage />} /> */}
      </Routes>
    </Router>
  );
};

export default Scrappg;
