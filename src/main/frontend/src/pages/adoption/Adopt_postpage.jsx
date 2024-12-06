import styled from "styled-components";
import Divider from "../../components/Divider";
import styles from "../community/CommunityWt.module.css";
import { Outlet } from "react-router-dom";
import { useState } from "react";
import img1 from "../../assets/CardImage/1.jpg";
import img2 from "../../assets/CardImage/2.jpg";
import img3 from "../../assets/CardImage/3.jpg";
import img4 from "../../assets/CardImage/4.jpg";
import img5 from "../../assets/CardImage/5.jpg";
import img6 from "../../assets/CardImage/6.jpg";
import img7 from "../../assets/CardImage/7.jpg";
import img8 from "../../assets/CardImage/8.jpg";
import img9 from "../../assets/CardImage/9.jpg";
import img10 from "../../assets/CardImage/10.jpg";
import img11 from "../../assets/CardImage/11.jpg";
import img12 from "../../assets/CardImage/12.jpg";
import imgc1 from "../../assets/CardImage/c1.png";
import imgc2 from "../../assets/CardImage/c2.jpg";
import imgm1 from "../../assets/CardImage/m1.jpg";
import imgm2 from "../../assets/CardImage/m2.jpg";
import Adoption_Post from "./Adoption_Post";

const Adopt_postpage = ({ text = "입양" , gridArea}) => {
  
  const [allPosts, setAllPosts] = useState([
    { id: 1, img: img1, title: "3세 / 포메라니안 / 성격나쁨", category: "강아지", isScraped: false, breed : "포메라니안", date: new Date(2024,12,10), viewcount: 150},
    { id: 2, img: imgc1, title: "3개월 추정/ 포메라니안", category: "고양이", isScraped: false, breed : "먼치킨", date: new Date(2024,10,11), viewcount: 50 },
    { id: 3, img: imgm1, title: "미어캣 / 사나움", category: "기타동물", isScraped: false, breed : "미어캣", date: new Date(2024,5,1), viewcount: 10 },
    { id: 4, img: img4, title: "3개월 추정 / 진돗개 / 온순함", category: "강아지", isScraped: false, breed : "진돗개", date: new Date(2024,10,30), viewcount: 0 },
    { id: 5, img: img3, title: "3개월 추정 / 온순함", category: "강아지", isScraped: false, breed : "포메라니안", date: new Date(2024,11,11), viewcount: 15 },
    { id: 6, img: img2, title: "3세 / 믹스견 / 성격나쁨", category: "강아지", isScraped: false, breed : "믹스견", date: new Date(2024,9,10), viewcount: 12 },
    { id: 7, img: imgm2, title: "2세 / 야생소 / 사나움", category: "기타동물", isScraped: false, breed : "포메라니안", date: new Date(2024,9,29), viewcount: 26 },
    { id: 8, img: imgc2, title: "3개월 추정", category: "고양이", isScraped: false, breed : "페르시안", date: new Date(2024,2,2), viewcount: 2 },
    { id: 9, img: img5, title: "3세 / 푸들 / 온순함", category: "강아지", isScraped: false, breed : "푸들", date: new Date(2024,12,12), viewcount: 202 },
    { id: 10, img: img6, title: "4세 / 말티즈 / 외향적", category: "강아지", isScraped: false, breed : "말티즈", date: new Date(2024,8,10), viewcount: 456 },
    { id: 11, img: img7, title: "3세 / 진돗개 / 호기심많음", category: "강아지", isScraped: false, breed : "진돗개", date: new Date(2024,10,10), viewcount: 123 },
    { id: 12, img: img8, title: "3개월 추정 / 말티즈 / 온순함", category: "강아지", isScraped: false, breed : "포메라니안", date: new Date(2024,12,1), viewcount: 165 },
    { id: 13, img: img9, title: "2세 / 믹스견 / 온순함", category: "강아지", isScraped: false, breed : "믹스견", date: new Date(2024,11,18), viewcount: 155 },
    { id: 14, img: img10, title: "1세 / 슈나우져 / 온순함", category: "강아지", isScraped: false, breed : "슈나우져", date: new Date(2024,10,18), viewcount: 125 },
    { id: 15, img: img11, title: "1세 / 비숑 / 온순함", category: "강아지", isScraped: false, breed : "비숑", date: new Date(2024,11,10), viewcount: 86 },
    { id: 16, img: img12, title: "4세 / 포메라니안 / 느긋함", category: "강아지", isScraped: false, breed : "포메라니안", date: new Date(2024,12,2),viewcount: 0  },
  ]);
  
  return (
    
    <div className="commwrapper"
    style={{gridArea : gridArea}}>
      <div className={styles.mainContainer}>
        <h1 style={{textAlign : "center"}}>{text}</h1>
        <Divider />
        <Adoption_Post allPosts={allPosts}/>
      </div>
    </div>
  );
};
export default Adopt_postpage;