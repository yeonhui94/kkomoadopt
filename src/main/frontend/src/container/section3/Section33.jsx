import React, { useState, useEffect } from "react";
import styled from "styled-components";
import Card1 from "../../components/Card1/Card1";
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

const Section33 = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isHovered, setIsHovered] = useState(false);

  // 이미지를 배열로 만들어주는 함수
  const createImageArray = (mainImage, additionalImages) => {
    return [
      { image: mainImage, width: '260px', height: '427px' },
      ...additionalImages.map(img => ({ image: img, width: '72px', height: '72px' }))
    ];
  };

  // 각 슬라이드에 사용할 이미지들
  const image1 = createImageArray(img1, [img2, img3, img4]);
  const image2 = createImageArray(img5, [img6, img7, img8]);
  const image3 = createImageArray(img9, [img10, img11, img12]);
  const image4 = createImageArray(img13, [img14, img15, img16]);

  const texts = [
    ["인삼이"],
    ["인삼이 바보"],
    ["조랭삼"],
    ["조랭이"]
  ];

  const additionalTexts = [
    ["조인삼 바보 기여운 똥강아지에요"],
    ["기여운 인삼이"],
    ["조인삼 바보 기여운 똥강아지에요"],
    ["조인삼 바보 기여운 똥강아지에요"]
  ];

  useEffect(() => {
    if (isHovered) return; // 호버 중에는 자동 슬라이드 하지 않음

    const timer = setInterval(() => {
      setCurrentSlide(prev => (prev + 1) % 4); // 4개의 슬라이드를 순차적으로 전환
    }, 3000);

    return () => clearInterval(timer); // 컴포넌트가 언마운트되거나, 호버 시 타이머 클리어
  }, [isHovered]);

  return (
    <SectionWrapper
    onMouseEnter={() => setIsHovered(true)} // 마우스가 올라갈 때 호버 상태 변경
    onMouseLeave={() => setIsHovered(false)}
    >
      <div className="slider">
        <div className="slides" style={{ transform: `translateX(-${currentSlide * 100}%)` }}
        >
          <div className="slide" >
            <Card1 images={image1} texts={texts[0]} additionalTexts={additionalTexts[0]}
             />
          </div>
          <div className="slide">
            <Card1 images={image2} texts={texts[1]} additionalTexts={additionalTexts[1]} />
          </div>
          <div className="slide">
            <Card1 images={image3} texts={texts[2]} additionalTexts={additionalTexts[2]} />
          </div>
          <div className="slide">
            <Card1 images={image4} texts={texts[3]} additionalTexts={additionalTexts[3]} />
          </div>
        </div>

        
      </div>
    </SectionWrapper>
  );
};

export default Section33;

const SectionWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  .slider {
    position: relative;
    width: 100%; /* 전체 화면 너비로 설정 */
    height: 80%; /* 화면의 80%만큼 높이 설정 */
    overflow: hidden; /* 화면 밖으로 나가는 슬라이드는 숨김 */
  }

  .slides {
    display: flex;
    // transition: transform 1s ease-in-out; /* 슬라이드 전환 애니메이션 */
  }

  .slide {
    width: 100%; /* 각 슬라이드는 화면 크기 100%로 설정 */
    flex-shrink: 0; /* 슬라이드가 축소되지 않도록 설정 */
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 10px;
  }
`;
