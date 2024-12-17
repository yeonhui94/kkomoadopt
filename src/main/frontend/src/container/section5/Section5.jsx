import React from "react";
import styled from "styled-components";

import Img5_1 from "./섹션5슬라이드이미지/1.jpg";
import Img5_2 from "./섹션5슬라이드이미지/2.jpg";
import Img5_3 from "./섹션5슬라이드이미지/3.jpg";
import Img5_4 from "./섹션5슬라이드이미지/4.jpg";
import Img5_5 from "./섹션5슬라이드이미지/5.jpg";
import Img5_6 from "./섹션5슬라이드이미지/6.jpg";
import Img5_7 from "./섹션5슬라이드이미지/7.jpg";
import Img5_8 from "./섹션5슬라이드이미지/8.jpg";
import Img5_9 from "./섹션5슬라이드이미지/9.jpg";
import Img5_10 from "./섹션5슬라이드이미지/10.jpg";
import { formatDate } from "../../utils/formattedDate";

import St5Card2 from "../../components/Card2/St5Card2";
import { Link } from "react-router-dom";

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
//섹션4->5로 이동할 떄 버벅거림 최소화
.AnimationContainer {
  will-change: transform;
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
  { imageFile5: Img5_1,
    text1 : '대전에서 실종된 고양이 찾습니다',
    text2 : '2024-12-03T20:00:00',
    link : '/find-child/post/0936f880-ef1f-4966-9468-87174b5ecb40'
  },
  { imageFile5: Img5_2,
    text1 : '대전에서 실종된 고양이 찾습니다',
    text2 : '2024-12-04T01:00:00',
    link : '/find-child/post/196f2fce-4daa-4973-8005-8772ff4bf854' 
   },
   { imageFile5: Img5_3,
    text1 : '부산에서 실종된 고양이 찾습니다',
    text2 : '2024-12-03 17:00:00.000000',
    link : '/find-child/post/1b7f8310-1f2d-443c-991f-06401c3cf975'
   },
   { imageFile5: Img5_4,
    text1 : '서울에서 실종된 고양이 찾습니다',
    text2 : '2024-12-03T18:20:00',
    link : '/find-child/post/1d1a76bb-8da1-45b3-8d87-23650e21f4c3'
   },
  { imageFile5: Img5_5,
    text1 : '고양시에서 실종된 강아지 찾습니다',
    text2 : '2024-12-03T12:15:00',
    link : '/find-child/post/0936f880-ef1f-4966-9468-87174b5ecb40'
   },
  { imageFile5: Img5_6,
    text1 : '대구에서 실종된 고양이 찾습니다',
    text2 : '2024-12-03T15:30:00',
    link : '/find-child/post/2847db03-d380-4f73-a876-97561bc77312'
   },
  { imageFile5: Img5_7,
    text1 : '강남구에서 실종된 고양이 찾습니다!',
    text2 : '2024-11-25T14:32:00'
    ,link : '/find-child/post/289ef17d-9619-417e-ae86-0fbd06ed0d18'
   },
  { imageFile5: Img5_8,
    text1 : '실종된 고양이 "미미"를 찾습니다',
    text2 : '2024-12-03 17:00:00.000000',
    link : '/find-child/post/4e134e49-2ac2-4067-8249-30bbe3187845'
   },
  { imageFile5: Img5_9,
    text1 : '부산에서 실종된 강아지 찾습니다',
    text2 : '2024-12-04T10:30:00',
    link : '/find-child/post/5d1d30a7-5406-4b89-bad2-4f39de705524'
   },
  { imageFile5: Img5_10,
    text1 : '  실종된 고양이 "토토"를 찾습니다',
    text2 : '2024-12-04T11:00:00',
    link : '/find-child/post/a5a826d1-a91e-41aa-b719-a1e67893e393'
   },
];

const SectionScroller = () => {
  return (
    <div style={{ paddingBottom: '20px' }}>
      <H1tag>실종된 아이를 찾습니다.</H1tag>
      <Scroller>
        <AnimationContainer>
          {cardData.map((data, index) => (
            <CardWrapper key={index}>
              <Link to={data.link}>
                <St5Card2 
                  imageFile={data.imageFile5}
                  text1={data.text1}
                  text2={formatDate(data.text2)}
                />
              </Link>
            </CardWrapper>
          ))}
        </AnimationContainer>
      </Scroller>
    </div>
  );
};

export default SectionScroller;
