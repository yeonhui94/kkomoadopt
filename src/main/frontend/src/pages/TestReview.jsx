import React from "react";
import Card1 from "../components/Card1/Card1"; // Card1 컴포넌트 임포트
import img1 from "../assets/img2-1/1.svg";
import img2 from "../assets/img2-1/2.svg";
import img3 from "../assets/img2-1/3.svg";
import img4 from "../assets/img2-1/4.svg";
import img5 from "../assets/img2-1/5.svg";
import img6 from "../assets/img2-1/6.svg";
import img7 from "../assets/img2-1/7.svg";
import img8 from "../assets/img2-1/8.svg";
import img9 from "../assets/img2-1/9.svg";
import img10 from "../assets/img2-1/10.svg";
import img11 from "../assets/img2-1/11.svg";
import img12 from "../assets/img2-1/12.svg";
import img13 from "../assets/img2-1/13.svg";
import img14 from "../assets/img2-1/14.svg";
import img15 from "../assets/img2-1/15.svg";
import img16 from "../assets/img2-1/16.svg";
import img17 from "../assets/img2-1/17.svg";
import img18 from "../assets/img2-1/18.svg";
import img19 from "../assets/img2-1/19.svg";
import img20 from "../assets/img2-1/20.svg";
import img21 from "../assets/img2-1/21.svg";
import img22 from "../assets/img2-1/22.svg";
import img23 from "../assets/img2-1/23.svg";
import img24 from "../assets/img2-1/24.svg";
import img25 from "../assets/img2-1/25.svg";
import img26 from "../assets/img2-1/26.svg";
import img27 from "../assets/img2-1/27.svg";
import img28 from "../assets/img2-1/28.svg";
import img29 from "../assets/img2-1/29.svg";
import img30 from "../assets/img2-1/30.svg";
import styles from "./Review.module.css";
import Header from "../container/header/Header";
import Footer from "../container/Footer";
import Divider from "../components/Divider";
import AdoptionDropdown from "../components/DropDown";
import SearchBar from "../components/SearchBar";
import Dropdown from "../components/DropDown";
import Button from "../components/Button/Button";
import ParentComponent from "./ParentComponent";


// 이미지 데이터를 미리 정의합니다.
const data = [
      {main: img1, others: [{ image: img2 },{ image: img3 },{ image: img4 },],texts: ["메인 카드 설명"],additionalTexts: ["추가 설명"]},
      {main: img5, others: [{ image: img6 },{ image: img7 },{ image: img8 },],texts: ["인쟘이가 세상에서 제일 기여워요"],additionalTexts: ["어릴적부터 입양에 관심이 많았습니다"]},
      {main: img9, others: [{ image: img10 },{ image: img11 },{ image: img12 },],texts: ["우리집 막내가 된 인삼"],additionalTexts: ["매일 장난꾸러기처럼 장난도 치고"]},
      {main: img15, others: [{ image: img14 },{ image: img15 },{ image: img16 },],texts: ["입양해서 마음이 너무 좋아요"],additionalTexts: ["집에오면 반겨주는 인삼이가 있어서"]},
      {main: img20, others: [{ image: img18 },{ image: img19 },{ image: img20 },],texts: ["내이름은 조랭"],additionalTexts: ["너무 행복하고 매일이 즐거워요"]},
      {main: img21, others: [{ image: img22 },{ image: img23 },{ image: img24 },],texts: ["조인쟘은 바보"],additionalTexts: ["파보로 처음엔 힘들었지만"]},
      {main: img25, others: [{ image: img26 },{ image: img27 },{ image: img23 },],texts: ["조랭 뽕꾸뽕꾸"],additionalTexts: ["무럭무럭 자라는 인삼이가 "]},
      {main: img28, others: [{ image: img29 },{ image: img30 },{ image: img28 },],texts: ["행운이 보고싶다"],additionalTexts: ["마냥 귀엽고 사랑스러운 동생입니다"]},
      {main: img23, others: [{ image: img10 },{ image: img15 },{ image: img20 },],texts: ["기여운 우리 동생"],additionalTexts: ["처음 입양하던 마음 그대로 "]},
      {main: img10, others: [{ image: img14 },{ image: img19 },{ image: img16 },],texts: ["인삼이 덕분에"],additionalTexts: ["평생을 행복하게 키워줄 자신 있어요"]},
      {main: img8, others: [{ image: img18 },{ image: img17 },{ image: img23 },],texts: ["사지말고 입양하세요"],additionalTexts: ["인삼이가 세상을 구한다"]},
      {main: img7, others: [{ image: img25 },{ image: img27 },{ image: img14 },],texts: ["간식비 벌자!"],additionalTexts: ["조랭삼 만만세 으쌰으쌰"]},
    //  첫 이미지 제외 제목, 글 입력해놓기

];

const TestReview = () => {

  const options = ["최신 순", "오래된 순", "조회 수 높은 순","조회 수 낮은 순"];


  return (
    <>
    <Header></Header>
    <div className={styles.rwWrapper}>
    <ParentComponent></ParentComponent>
      <div className={styles.rwsubcontainer}>
          <div className={styles.rwsubcontainer2}>
            <Dropdown options={options} />
            <SearchBar placeholder={"글 내용 & 글 제목"} width="300px"></SearchBar>
          </div>
      </div>
      <div className={styles.rwmaincontainer}>
        <div  className={styles.rwdivider} >
        <Divider width={"100%"} backgroundColor={"var(--line-color)"} />
        </div>
        {data.map((slideData, index) => (
        <Card1 key={index} images={slideData} />
        ))}
      </div>
      <div className={styles.buttonContainer}>
          <Button text={"글쓰기"} />
      </div>
      </div>
    <Footer></Footer>
    </>
  );
};

export default TestReview;
