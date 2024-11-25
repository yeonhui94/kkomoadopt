import React, { useState } from "react";
import SectionBox from "./SectionBox";
import img1 from "../../assets/img2/1.jpg";
import img2 from "../../assets/img2/2.jpg";
import img3 from "../../assets/img2/3.jpg";
import img4 from "../../assets/img2/4.jpg";
import img5 from "../../assets/img2/5.jpg";
import img6 from "../../assets/img2/6.jpg";
import img7 from "../../assets/img2/7.jpg";
import img8 from "../../assets/img2/8.jpg";
import styles from "./Section3333.module.css";
import Logo from "../../components/logo/Logo";
import Button from "../../components/Button/Button";
import Section3 from './Section3';

const Section3333 = () => {
  // 12개의 이미지를 3개의 박스에 분할
  const images1 = [img1, img2, img3, img4];
  const images2 = [img2, img3, img4, img5];
  const images3 = [img4, img5, img6, img7];
  const images4 = [img5, img6, img7, img8];

  // 박스 크기 설정
  const box1Width = "300px";
  const box1Height = "300px";
  const box2Width = "150px";
  const box2Height = "400px";

  // 각 슬라이드의 인덱스를 관리하는 상태
  const [currentSlide1, setCurrentSlide1] = useState(0);
  const [currentSlide2, setCurrentSlide2] = useState(0);
  const [currentSlide3, setCurrentSlide3] = useState(0);
  const [currentSlide4, setCurrentSlide4] = useState(0);

  // 모든 박스를 동시에 이동시키는 함수
  const goToNextSlide = () => {
    setCurrentSlide1((prev) => (prev + 1) % images1.length);
    setCurrentSlide2((prev) => (prev + 1) % images2.length);
    setCurrentSlide3((prev) => (prev + 1) % images3.length);
    setCurrentSlide4((prev) => (prev + 1) % images4.length);
  };

  const goToPreviousSlide = () => {
    setCurrentSlide1((prev) => (prev - 1 + images1.length) % images1.length);
    setCurrentSlide2((prev) => (prev - 1 + images2.length) % images2.length);
    setCurrentSlide3((prev) => (prev - 1 + images3.length) % images3.length);
    setCurrentSlide4((prev) => (prev - 1 + images4.length) % images4.length);
  };

  return (
    <div className={styles.Wrapper}>
      <SectionBox
        images={images1}
        boxWidth={box2Width}
        boxHeight={box2Height}
        currentSlide={currentSlide1}
        setCurrentSlide={setCurrentSlide1}
      />
      <div>
        <SectionBox
          images={images2}
          boxWidth={box1Width}
          boxHeight={box1Width}
          currentSlide={currentSlide2}
          setCurrentSlide={setCurrentSlide2}
        />
        <div className={styles.smallWrapper}>
          <Logo width="200px" />
          <Button text={"입양목록 바로가기"} bg1color={"white"} bgcolor={"var(--main-color)"} hovercolor={"var(--main-color)"} />
          <Button text={"KKOMO센터 더보기"} />
        </div>
      </div>
      <Section3 />
      <div className={styles.smallWrapper2}>
        <SectionBox
          images={images3}
          boxWidth={box1Width}
          boxHeight={box1Height}
          currentSlide={currentSlide3}
          setCurrentSlide={setCurrentSlide3}
        />
        <div className={styles.controls}>
        <Button onClick={goToPreviousSlide} className={styles.ControlButton} text={"◀"}>◀</Button>
        <Button onClick={goToNextSlide} className={styles.ControlButton} text={"▶"}>▶</Button>
      </div>
      </div>
      <SectionBox
        images={images4}
        boxWidth={box2Width}
        boxHeight={box2Height}
        currentSlide={currentSlide4}
        setCurrentSlide={setCurrentSlide4}
      />
    </div>
  );
};

export default Section3333;
