import React, { useEffect, useRef, useState } from "react";
import styled from "styled-components";
import Card2 from "../../components/Card2/Card2";

import Img1 from "../../assets/CardImage/1.jpg";
import Img2 from "../../assets/CardImage/2.jpg";
import Img3 from "../../assets/CardImage/3.jpg";
import Img4 from "../../assets/CardImage/4.jpg";
import Img5 from "../../assets/CardImage/5.jpg";
import Img6 from "../../assets/CardImage/6.jpg";
import Img7 from "../../assets/CardImage/7.jpg";
import Img8 from "../../assets/CardImage/8.jpg";
import Img9 from "../../assets/CardImage/9.jpg";
import Img10 from "../../assets/CardImage/10.jpg";

// 카드 컨테이너 스타일
const CardContainer = styled.div`
  display: flex;
  gap: 66px;
  padding: 20px;
  overflow-x: auto;
  scroll-behavior: smooth;

  &::-webkit-scrollbar {
    display: none;  // 스크롤바 숨김
  }
  scrollbar-width: none;  // Firefox에서 스크롤바 숨김
`;

// 카드 스타일
const CardWrapper = styled.div`
  width: 260px;
  height: 427px;
  flex-shrink: 0;
`;

const cardData = [
  { imageFile: Img1 },
  { imageFile: Img2 },
  { imageFile: Img3 },
  { imageFile: Img4 },
  { imageFile: Img5 },
  { imageFile: Img6 },
  { imageFile: Img7 },
  { imageFile: Img8 },
  { imageFile: Img9 },
  { imageFile: Img10 },
];

const Section5 = () => {
  const cardContainerRef = useRef(null); // CardContainer 참조
  const [scrollDirection, setScrollDirection] = useState("forward");
  const [isHovered, setIsHovered] = useState(false); // 마우스 호버 상태 추적

  useEffect(() => {
    const scrollAmount = 322;
    const interval = setInterval(() => {
      if (!isHovered) { // 마우스가 호버되지 않은 경우에만 스크롤
        const container = cardContainerRef.current;
        const maxScrollLeft = container.scrollWidth - container.clientWidth;
        const currentScrollLeft = container.scrollLeft;

        if (scrollDirection === "forward") {
          container.scrollLeft += scrollAmount;
          if (currentScrollLeft + scrollAmount >= maxScrollLeft) {
            setScrollDirection("backward");
          }
        } else {
          container.scrollLeft -= scrollAmount;
          if (currentScrollLeft - scrollAmount <= 0) {
            setScrollDirection("forward");
          }
        }
      }
    }, 2000);

    return () => clearInterval(interval);
  }, [scrollDirection, isHovered]); // isHovered 상태에 따라 재실행

  return (
    <CardContainer
      ref={cardContainerRef}
      onMouseEnter={() => setIsHovered(true)} // 마우스 호버 시작
      onMouseLeave={() => setIsHovered(false)} // 마우스 호버 종료
    >
      {cardData.map((data, index) => (
        <CardWrapper key={index}>
          <Card2 imageFile={data.imageFile} />
        </CardWrapper>
      ))}
    </CardContainer>
  );
};

export default Section5;
