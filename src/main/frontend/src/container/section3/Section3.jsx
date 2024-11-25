import React from "react";
import styled from "styled-components";
import Card1 from "../../components/Card1/Card1"; // Card1 컴포넌트를 import합니다.

const Section3 = ({ currentSlide, allImages }) => {
  const boxWidth = 260; // 슬라이드 하나의 가로 너비

  const imageData = [
    { 
      main: allImages[2], 
      others: [
        { image: allImages[1] },
        { image: allImages[4] },
        { image: allImages[3] },
      ],
      texts: ["인삼이"], 
      additionalTexts: ["조인삼 바보 기여운 똥강아지에요"] 
    },
    { 
      main: allImages[3], 
      others: [
        { image: allImages[6] },
        { image: allImages[7] },
        { image: allImages[8] },
      ],
      texts: ["인삼이 바보"], 
      additionalTexts: ["기여운 인삼이"] 
    },
    { 
      main: allImages[4], 
      others: [
        { image: allImages[9] },
        { image: allImages[10] },
        { image: allImages[11] },
      ],
      texts: ["조랭삼"], 
      additionalTexts: ["조인삼 바보 기여운 똥강아지에요"] 
    },
    { 
      main: allImages[5], 
      others: [
        { image: allImages[4] },
        { image: allImages[10] },
        { image: allImages[6] },
      ],
      texts: ["조랭이"], 
      additionalTexts: ["꼬순내 한가득 나는 조인삼 때문에 요즘 제 삶이 "] 
    },
    { 
      main: allImages[6], 
      others: [
        { image: allImages[8] },
        { image: allImages[1] },
        { image: allImages[2] },
      ],
      texts: ["인쟈미"], 
      additionalTexts: ["기여운 인쟈미 완젼 사랑스러워 죽겠어요"] 
    },
    { 
      main: allImages[7], 
      others: [
        { image: allImages[9] },
        { image: allImages[5] },
        { image: allImages[3] },
      ],
      texts: ["우리집 막내는 .."], 
      additionalTexts: ["인쟈미 완젼 사랑스러워 죽겠어요. 막내"] 
    }
  ];

  return (
    <SliderWrapper style={{boxShadow : "0 4px 8px rgba(0, 0, 0, 0.9)", borderRadius: "10px"}}>
      <SliderContainer currentSlide={currentSlide} boxWidth={boxWidth}>
        {imageData.map((slideData, index) => (
          <Slide key={index} boxWidth={boxWidth}>
            <Card1 images={slideData} />
          </Slide>
        ))}
      </SliderContainer>
    </SliderWrapper>
  );
};

const SliderWrapper = styled.div`
  width: 260px;
  overflow: hidden;
`;

const SliderContainer = styled.div`
  display: flex;
  transition: transform 0.5s ease-in-out;
  transform: ${({ currentSlide, boxWidth }) => `translateX(-${currentSlide * boxWidth}px)`};
`;

const Slide = styled.div`
  width: ${({ boxWidth }) => boxWidth}px;
  flex-shrink: 0;
`;

export default Section3;
