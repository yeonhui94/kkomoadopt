import React, { useState } from 'react';
import './Scrap.css';
import ScrapBefore from '../../assets/ScrapImg/ScrapBefore.png';
import ScrapAfter from '../../assets/ScrapImg/ScrapAfter.png';

function Scrap() {
  const [isScraped, setIsScraped] = useState(false);

  const toggleScrap = () => {
    setIsScraped(prevState => !prevState);
  };

  return (
    <button className="scrap-button" onClick={toggleScrap}>
      <img
        src={isScraped ? ScrapAfter : ScrapBefore}
        alt="Scrap Icon"
        className="scrap-icon"
      />
    </button>
  );
}

export default Scrap;
