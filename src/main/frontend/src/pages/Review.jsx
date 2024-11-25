import React from "react";
import Card1 from "../components/Card1/Card1"; // Card1 컴포넌트 임포트
import img1 from "../assets/img2/1.jpg";
import img2 from "../assets/img2/2.jpg";
import img3 from "../assets/img2/3.jpg";
import img4 from "../assets/img2/4.jpg";
import img5 from "../assets/img2/5.jpg";
import img6 from "../assets/img2/6.jpg";
import img7 from "../assets/img2/7.jpg";
import img8 from "../assets/img2/8.jpg";
import img9 from "../assets/img2/9.jpg";
import img10 from "../assets/img2/10.jpg";
import img11 from "../assets/img2/11.jpg";
import img12 from "../assets/img2/12.jpg";
import img13 from "../assets/img2/13.jpg";
import img14 from "../assets/img2/14.jpg";
import img15 from "../assets/img2/15.jpg";
import img16 from "../assets/img2/16.jpg";
import img17 from "../assets/img2/17.jpg";
import img18 from "../assets/img2/18.jpg";
import img19 from "../assets/img2/19.jpg";
import img20 from "../assets/img2/20.jpg";
import img21 from "../assets/img2/21.jpg";
import img22 from "../assets/img2/22.jpg";
import img23 from "../assets/img2/23.jpg";
import img24 from "../assets/img2/24.jpg";
import img25 from "../assets/img2/25.jpg";
import img26 from "../assets/img2/26.jpg";
import img27 from "../assets/img2/27.jpg";
import img28 from "../assets/img2/28.jpg";
import img29 from "../assets/img2/29.jpg";
import img30 from "../assets/img2/30.jpg";
import styles from "./Review.module.css";
import Header from "../container/header/Header";
import Footer from "../container/Footer";


// 이미지 데이터를 미리 정의합니다.
const data = [
      {main: img1, others: [{ image: img2 },{ image: img3 },{ image: img4 },],texts: ["메인 카드 설명"],additionalTexts: ["추가 설명"]},
      {main: img5, others: [{ image: img6 },{ image: img7 },{ image: img8 },],texts: ["메인 카드 설명"],additionalTexts: ["추가 설명"]},
      {main: img9, others: [{ image: img10 },{ image: img11 },{ image: img12 },],texts: ["메인 카드 설명"],additionalTexts: ["추가 설명"]},
      {main: img13, others: [{ image: img14 },{ image: img15 },{ image: img16 },],texts: ["메인 카드 설명"],additionalTexts: ["추가 설명"]},
      {main: img17, others: [{ image: img18 },{ image: img19 },{ image: img20 },],texts: ["메인 카드 설명"],additionalTexts: ["추가 설명"]},
      {main: img21, others: [{ image: img22 },{ image: img23 },{ image: img24 },],texts: ["메인 카드 설명"],additionalTexts: ["추가 설명"]},
      {main: img25, others: [{ image: img26 },{ image: img27 },{ image: img23 },],texts: ["메인 카드 설명"],additionalTexts: ["추가 설명"]},
      {main: img28, others: [{ image: img29 },{ image: img30 },{ image: img28 },],texts: ["메인 카드 설명"],additionalTexts: ["추가 설명"]},
      {main: img6, others: [{ image: img10 },{ image: img15 },{ image: img20 },],texts: ["메인 카드 설명"],additionalTexts: ["추가 설명"]},
      {main: img10, others: [{ image: img14 },{ image: img19 },{ image: img16 },],texts: ["메인 카드 설명"],additionalTexts: ["추가 설명"]},
      {main: img8, others: [{ image: img18 },{ image: img17 },{ image: img23 },],texts: ["메인 카드 설명"],additionalTexts: ["추가 설명"]},
      {main: img7, others: [{ image: img25 },{ image: img27 },{ image: img14 },],texts: ["메인 카드 설명"],additionalTexts: ["추가 설명"]},
];

const Review = () => {
  return (
    <>
    <Header></Header>
    <div className={styles.rwmaincontainer}>
      {data.map((slideData, index) => (
        <Card1 key={index} images={slideData} />
      ))};
    </div>
    <Footer></Footer>
    </>
  );
};

export default Review;
