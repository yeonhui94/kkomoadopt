import React, { useState, useEffect } from "react";
import styled from "styled-components";
import Card1 from "../../components/Card1/Card1";  // Card1 컴포넌트를 import합니다.
import img1 from '../../assets/img2/1.jpg';
import img2 from '../../assets/img2/2.jpg';
import img3 from '../../assets/img2/3.jpg';
import img4 from '../../assets/img2/4.jpg';
import img5 from '../../assets/img2/5.jpg';
import img6 from '../../assets/img2/6.jpg';
import img7 from '../../assets/img2/7.jpg';
import img8 from '../../assets/img2/8.jpg';
import img9 from '../../assets/img2/9.jpg';
import img10 from '../../assets/img2/10.jpg';
import img11 from '../../assets/img2/11.jpg';
import img12 from '../../assets/img2/12.jpg';
import img13 from '../../assets/img2/13.jpg';
import img14 from '../../assets/img2/14.jpg';
import img15 from '../../assets/img2/15.jpg';
import img16 from '../../assets/img2/16.jpg';

const Section3 = ({ currentSlide, setCurrentSlide }) => {
  const boxWidth = 260;  // Assuming boxWidth is fixed as 260px

  const imageData = [
    { 
      main: img3, 
      others: [
        { image: img2 },
        { image: img3 },
        { image: img4 },
      ],
      texts: ["인삼이"], 
      additionalTexts: ["조인삼 바보 기여운 똥강아지에요"] 
    },
    { 
      main: img4, 
      others: [
        { image: img7 },
        { image: img8 },
        { image: img9 },
      ],
      texts: ["인삼이 바보"], 
      additionalTexts: ["기여운 인삼이"] 
    },
    { 
      main: img5, 
      others: [
        { image: img10 },
        { image: img11 },
        { image: img12 },
      ],
      texts: ["조랭삼"], 
      additionalTexts: ["조인삼 바보 기여운 똥강아지에요"] 
    },
    { 
      main: img6, 
      others: [
        { image: img13 },
        { image: img14 },
        { image: img15 },
      ],
      texts: ["조랭이"], 
      additionalTexts: ["조인삼 바보 기여운 똥강아지에요"] 
    }
  ];

  return (
    <div>
      <Card1
        images={imageData[currentSlide]}
        currentSlide={currentSlide}
        boxWidth={boxWidth}
      />
    </div>
  );
};

export default Section3;
