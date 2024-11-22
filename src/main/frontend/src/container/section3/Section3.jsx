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

const Section3 = () => {
  const createImageArray = (mainImage, additionalImages) => {
    return [
      { image: mainImage, width: '260px', height: '427px' },
      ...additionalImages.map(img => ({ image: img, width: '72px', height: '72px' }))
    ];
  };

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

  const [visibleCards, setVisibleCards] = useState([false, false, false, false]); // 각 카드의 보임 상태를 관리

  useEffect(() => {
    // 각 카드가 3초 간격으로 보이도록 설정
    const timeouts = [];
    for (let i = 0; i < 4; i++) {
      const timeout = setTimeout(() => {
        setVisibleCards(prevState => {
          const newState = [...prevState];
          newState[i] = true; // 해당 카드만 보이도록 설정
          return newState;
        });
      }, i * 3000); // 3초 간격으로 카드가 나타나게 함
      timeouts.push(timeout);
    }

    // 클린업: 컴포넌트가 언마운트될 때 타이머를 정리
    return () => {
      timeouts.forEach(timeout => clearTimeout(timeout));
    };
  }, []);

  return (
    <SliderWrapper>
      <SlideContainer>
        {visibleCards[0] && (
          <CardWrapper>
            <Card1 images={image1} texts={texts[0]} additionalTexts={additionalTexts[0]} />
          </CardWrapper>
        )}
        {visibleCards[1] && (
          <CardWrapper>
            <Card1 images={image2} texts={texts[1]} additionalTexts={additionalTexts[1]} />
          </CardWrapper>
        )}
        {visibleCards[2] && (
          <CardWrapper>
            <Card1 images={image3} texts={texts[2]} additionalTexts={additionalTexts[2]} />
          </CardWrapper>
        )}
        {visibleCards[3] && (
          <CardWrapper>
            <Card1 images={image4} texts={texts[3]} additionalTexts={additionalTexts[3]} />
          </CardWrapper>
        )}
      </SlideContainer>
    </SliderWrapper>
  );
};

export default Section3;

const SliderWrapper = styled.div`
  width: 100%;
  overflow: hidden;
  position: relative;
`;

const SlideContainer = styled.div`
  display: flex;
  transition: transform 1.5s ease-in-out;
  width: 400%;
`;

const CardWrapper = styled.div`
  width: 100%; /* 한 번에 하나의 카드만 보이도록 설정 */
  height: 100%;
`;
