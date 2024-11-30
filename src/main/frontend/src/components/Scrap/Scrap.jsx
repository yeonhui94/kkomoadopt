import React from 'react';
import './Scrap.css';
import ScrapBefore from '../../assets/ScrapImg/ScrapBefore.png';
import ScrapAfter from '../../assets/ScrapImg/ScrapAfter.png';

function Scrap({ isScraped, onToggle }) {
  return (
    <button className="scrap-button" onClick={onToggle}>
      <img
        src={isScraped ? ScrapAfter : ScrapBefore}
        alt="Scrap Icon"
        className="scrap-icon"
      />
    </button>
  );
}

export default Scrap;
