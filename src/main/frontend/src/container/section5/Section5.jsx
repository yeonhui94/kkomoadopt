import React from "react";
import styled from "styled-components";

import Img5_1 from "../../assets/CardImage/1.jpg";
import Img5_2 from "../../assets/CardImage/2.jpg";
import Img5_3 from "../../assets/CardImage/3.jpg";
import Img5_4 from "../../assets/CardImage/4.jpg";
import Img5_5 from "../../assets/CardImage/5.jpg";
import Img5_6 from "../../assets/CardImage/6.jpg";
import Img5_7 from "../../assets/CardImage/7.jpg";
import Img5_8 from "../../assets/CardImage/8.jpg";
import Img5_9 from "../../assets/CardImage/9.jpg";
import Img5_10 from "../../assets/CardImage/10.jpg";

import St5Card2 from "../../components/Card2/St5Card2";

const H1tag = styled.h1`
  position: relative;
  bottom: 80px;
  text-align: center;
  overflow-y: hidden;
  @media  (max-width:768px){
    bottom:150px
  }
`;

const Scroller = styled.div`
  max-width: 95%;
  margin: 0 auto;
  overflow: hidden;
  position: relative;
`;

const AnimationContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  animation: scroll 10s linear infinite alternate;
  transform-origin: center center;

  &:hover {
    animation-play-state: paused;
  }

  @keyframes scroll {
    from {
      transform: translateX(0%);
    }
    to {
      transform: translateX(-100%);
    }
  }

  @media (max-width: 768px) {
    width: 100%;
    justify-content: space-around;
  }
`;

const CardWrapper = styled.div`
  padding: 0 50px;

  & > div img {
    transition: transform 0.3s ease-in-out;
  }

  & > div:hover img {
    transform: scale(1.1);
  }
  @media (max-width: 1024px) {
    & > div  {
      margin-bottom: 10px;
    }
  }
  @media (max-width: 768px) {
    & > div  {
      width: 100%; /* 카드 크기 비율로 설정 */
      height: 80%; /* 카드 높이를 자동으로 조정 */
    }
  }
`;

const cardData = [
  { imageFile: Img5_1 },
  { imageFile: Img5_2 },
  { imageFile: Img5_3 },
  { imageFile: Img5_4 },
  { imageFile: Img5_5 },
  { imageFile: Img5_6 },
  { imageFile: Img5_7 },
  { imageFile: Img5_8 },
  { imageFile: Img5_9 },
  { imageFile: Img5_10 },
];

const SectionScroller = () => {
  return (
    <div>
      <H1tag>실종된 아이를 찾습니다.</H1tag>
      <Scroller>
        <AnimationContainer>
          {cardData.map((data, index) => (
            <CardWrapper key={index}>
              <St5Card2 imageFile={data.imageFile}/>
            </CardWrapper>
          ))}
        </AnimationContainer>
      </Scroller>
    </div>
  );
};

export default SectionScroller;
