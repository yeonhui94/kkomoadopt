import React, { useEffect, useState } from "react";
import SectionBox from "./SectionBox";
import Section3 from './Section3'; 
import img1 from "../../assets/img2/1.jpg";
import img2 from "../../assets/img2/2.jpg";
import img3 from "../../assets/img2/3.jpg";
import img4 from "../../assets/img2/4.jpg";
import img5 from "../../assets/img2/5.jpg";
import img6 from "../../assets/img2/6.jpg";
import img7 from "../../assets/img2/7.jpg";
import img8 from "../../assets/img2/8.jpg";
import img9 from "../../assets/img2/9.jpg";
import img10 from "../../assets/img2/10.jpg";
import img11 from "../../assets/img2/11.jpg";
import img12 from "../../assets/img2/12.jpg";
import styles from "./Section3333.module.css";
import Logo from "../../components/logo/Logo";
import Button from "../../components/Button/Button";

const Section3333 = () => {
  // 모든 이미지를 한 번에 불러옴
  const allImages = [img1, img2, img3, img4, img5, img6, img7, img8, img9, img10, img11, img12];

  // 각 박스에 필요한 이미지 배열 분리
  const images1 = allImages.slice(0, 6);
  const images2 = allImages.slice(1, 7);
  const images3 = allImages.slice(3, 9);
  const images4 = allImages.slice(4, 10);

  // 박스 크기
  const box1Width = "300px";
  const box1Height = "300px";
  const box2Width = "150px";
  const box2Height = "400px";

  // 각 슬라이드 상태 관리
  const [currentSlide1, setCurrentSlide1] = useState(0);
  const [currentSlide2, setCurrentSlide2] = useState(0);
  const [currentSlide3, setCurrentSlide3] = useState(0);
  const [currentSlide4, setCurrentSlide4] = useState(0);

  // 슬라이드 이동 함수
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

  // 슬라이드 자동 진행을 위한 상태 관리
  const [isPlaying, setIsPlaying] = useState(true); // 재생/일시정지 상태

  // let interval로 interval 변수 선언
  let interval;

  // 3초마다 자동으로 슬라이드 이동
  const startSlideShow = () => {
    interval = setInterval(() => {
      goToNextSlide(); // 자동으로 슬라이드 이동
    }, 3000);
  };

  const stopSlideShow = () => {
    clearInterval(interval); // 슬라이드 멈추기
  };

  // 슬라이드 재생/일시정지 토글 함수
  const togglePlayPause = () => {
    setIsPlaying((prev) => {
      const newIsPlaying = !prev;
      if (newIsPlaying) {
        startSlideShow(); // 재생
      } else {
        stopSlideShow(); // 일시정지
      }
      return newIsPlaying;
    });
  };

  // 마우스 호버 상태 관리
  const [isHovered, setIsHovered] = useState(false);

  useEffect(() => {
    if (isPlaying && !isHovered) {
      startSlideShow(); // 슬라이드가 재생 중이고 마우스가 떠나면 슬라이드 쇼 시작
    } else {
      stopSlideShow(); // 슬라이드가 일시정지 상태일 때
    }

    return () => clearInterval(interval); // 컴포넌트 언마운트 시 interval 정리
  }, [isHovered, isPlaying]);

  // 슬라이드에 따른 진행 바 업데이트
  const getProgress = (currentSlide, totalSlides) => {
    return ((currentSlide + 1) / totalSlides) * 100; // 진행률 계산
  };

  return (
    <div className={styles.Wrapper}>
      {/* 첫 번째 SectionBox */}
      <SectionBox
        images={images1}
        boxWidth={box2Width}
        boxHeight={box2Height}
        currentSlide={currentSlide1}
      />
      <div>
        {/* 두 번째 SectionBox */}
        <SectionBox
          images={images2}
          boxWidth={box1Width}
          boxHeight={box1Width}
          currentSlide={currentSlide2}
        />
        <div className={styles.smallWrapper}>
          <Logo width="200px" />
          <Button text={"입양목록 바로가기"} bg1color={"white"} hovercolor={"var(--main-color)"} />
          <Button text={"KKOMO센터 더보기"} />
        </div>
      </div>

      {/* Section3, currentSlide와 setCurrentSlide를 전달 */}
      <div
        onMouseEnter={() => setIsHovered(true)} // 마우스 올라가면 슬라이드 멈춤
        onMouseLeave={() => setIsHovered(false)} // 마우스 벗어나면 슬라이드 시작
      >
        <Section3 currentSlide={currentSlide3} allImages={allImages} />
      </div>

      <div className={styles.smallWrapper2}>
        {/* 세 번째 SectionBox */}
        <SectionBox
          images={images3}
          boxWidth={box1Width}
          boxHeight={box1Height}
          currentSlide={currentSlide3}
        />
        <div className={styles.controls}>
          <Button onClick={goToPreviousSlide} className={styles.ControlButton} text={"◀"} />
          <Button onClick={goToNextSlide} className={styles.ControlButton} text={"▶"} />
        </div>
        {/* 진행 바 */}
      <div className={styles.smallWrapper3}>
        <div className={styles.progressBar}>
          <div
            className={styles.progressBarFill}
            style={{ width: `${getProgress(currentSlide1, images1.length)}%` }}
          >
          </div>
        </div>
        {/* 재생/일시정지 버튼 */}
        <button onClick={togglePlayPause} className={styles.playPauseButton}>
          {isPlaying ? "∥" : "▶"}
        </button>
      </div>
      </div>

      {/* 네 번째 SectionBox */}
      <SectionBox
        images={images4}
        boxWidth={box2Width}
        boxHeight={box2Height}
        currentSlide={currentSlide4}
      />
    </div>
  );
};

export default Section3333;