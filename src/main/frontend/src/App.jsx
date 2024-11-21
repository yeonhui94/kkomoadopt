import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import SubMenu from './container/SubMenu';
import Announcement  from './components/SubMenuPages/Announcement '
import BuySell from './components/SubMenuPages/BuySell';
import FindChild from './components/SubMenuPages/FindChild';
import AdoptReview from './components/SubMenuPages/AdoptReview';
import Report from './components/SubMenuPages/Report';

const App = () => {
  return (
    <Router>
      <div className="app">
        <SubMenu />
        <Routes>
          <Route path="/Announcement" element={<Announcement />} />
          <Route path="/find-child" element={<FindChild />} />
          <Route path="/adopt-review" element={<AdoptReview />} />
          <Route path="/buy-sell" element={<BuySell />} />
          <Route path="/report" element={<Report />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
