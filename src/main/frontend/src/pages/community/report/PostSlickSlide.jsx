import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import React, { useState } from "react";
import Slider from "react-slick";
import img1 from "../../../assets/img2/1.jpg";
import img2 from "../../../assets/img2/2.jpg";
import img3 from "../../../assets/img2/3.jpg";
import img4 from "../../../assets/img2/4.jpg";
import styled from "styled-components";

// styled-components로 스타일 정의
const SliderContainer = styled.div`
  width: 100%;
  height: 100%; /* 부모 div 높이 설정 */
  display: flex;
  justify-content: center;
  align-items: center;
  overflow: hidden;
`;

const StyledSlider = styled(Slider)`
  width: 100%; /* 슬라이드의 너비 설정 (화면의 80%) */
  height: 100%; /* 부모 div와 동일한 높이 */
`;

const SlideWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%; /* 슬라이드 높이를 부모와 동일하게 설정 */]
`;

const SlideImage = styled.img`
  width: 100%;
  height: 500px;
  object-fit: contain;
  position: relative;

`;

// 화살표 버튼 스타일
const ArrowButton = styled.button`
  width: 100px;
  height: 100px;
  color: white;
  opacity : 60%;
  border-radius: 50%;
  z-index: 100;
  &:focus {
    outline: none;
  }
  &:hover {
    background-color: transparent;
    opacity : 100%;
  }
`;

function PostSlickSlide({img}) {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: true, // 버튼을 보이게 설정
    customPaging: function(i) {
      return <button>{i + 1}</button>;
    },
    prevArrow: <ArrowButton>←</ArrowButton>,
    nextArrow: <ArrowButton>→</ArrowButton>,
  };

  return (
    <SliderContainer>
      <StyledSlider {...settings}>
        {img.map((image, index) => (
          <SlideWrapper key={index}>
            <SlideImage src={image} alt={`Slide ${index + 1}`} />
          </SlideWrapper>
        ))}
      </StyledSlider>
    </SliderContainer>
  );
}

export default PostSlickSlide;
