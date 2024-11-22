import React from "react";
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
  const images1 = [img1, img2, img3, img4]; // 첫 번째 박스
  const images2 = [img2, img3, img4, img5]; // 두 번째 박스
  const images3 = [img4, img5, img6, img7]; // 세 번째 박스
  const images4 = [img5, img6, img7, img8]; // 네 번째 박스

  // 박스 크기 설정
  const box1Width = "300px";
  const box1Height = "300px";
  const box2Width = "150px";
  const box2Height = "400px";

  return (
    <div className={styles.Wrapper}>
      <SectionBox images={images1} boxWidth={box2Width} boxHeight={box2Height}/>
      <div>
      <SectionBox images={images2} boxWidth={box1Width} boxHeight={box1Width}/>
      <div className={styles.smallWrapper}>
      <Logo width="200px"></Logo>
      <Button text={"입양목록 바로가기"} bg1color={"white"} hover={"var(--main-color)"}></Button>
      <Button text={"KKOMO센터 더보기"}></Button>
      </div>
      </div>
      <Section3></Section3>
      <SectionBox images={images3} boxWidth={box1Width} boxHeight={box1Height}/>
      <SectionBox images={images4} boxWidth={box2Width} boxHeight={box2Height} />
    </div>
  );
};

export default Section3333;
