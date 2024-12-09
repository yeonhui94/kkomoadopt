import React, { useState } from "react";
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
import Footer from "../container/footer/Footer";
import Divider from "../components/Divider";
import SearchBar from "../components/SearchBar";
import Dropdown from "../components/DropDown";
import Button from "../components/Button/Button";
import Pagenumber from "../components/pagenumber/Pagenumber";
// import ParentComponent from "./ParentComponent";



const Review = ({ gridArea }) => {
  const options = ["전체보기", "최신 순", "오래된 순", "조회 수 높은 순", "조회 수 낮은 순"];

  // 이미지 데이터를 미리 정의합니다.
  const cardData = [
    { main: img1, others: [{ image: img2 }, { image: img3 }, { image: img4 }], texts: ["메인 카드 설명"], additionalTexts: ["추가 설명"], date: new Date(2024, 12, 1), viewcount: 150 },
    { main: img5, others: [{ image: img6 }, { image: img7 }, { image: img8 }], texts: ["인쟘이가 세상에서 제일 기여워요"], additionalTexts: ["어릴적부터 입양에 관심이 많았습니다"], date: new Date(2024, 12, 2), viewcount: 13 },
    { main: img9, others: [{ image: img10 }, { image: img11 }, { image: img12 }], texts: ["우리집 막내가 된 인삼"], additionalTexts: ["매일 장난꾸러기처럼 장난도 치고"], date: new Date(2024, 12, 23), viewcount: 153 },
    { main: img15, others: [{ image: img14 }, { image: img15 }, { image: img16 }], texts: ["입양해서 마음이 너무 좋아요"], additionalTexts: ["집에오면 반겨주는 인삼이가 있어서"], date: new Date(2024, 12, 3), viewcount: 15 },
    { main: img20, others: [{ image: img18 }, { image: img19 }, { image: img20 }], texts: ["내이름은 조랭"], additionalTexts: ["너무 행복하고 매일이 즐거워요"], date: new Date(2024, 12, 4), viewcount: 16 },
    { main: img21, others: [{ image: img22 }, { image: img23 }, { image: img24 }], texts: ["조인쟘은 바보"], additionalTexts: ["파보로 처음엔 힘들었지만"], date: new Date(2024, 12, 5), viewcount: 19 },
    { main: img25, others: [{ image: img26 }, { image: img27 }, { image: img23 }], texts: ["조랭 뽕꾸뽕꾸"], additionalTexts: ["무럭무럭 자라는 인삼이가"], date: new Date(2024, 12, 6), viewcount: 20 },
    { main: img28, others: [{ image: img29 }, { image: img30 }, { image: img28 }], texts: ["행운이 보고싶다"], additionalTexts: ["마냥 귀엽고 사랑스러운 동생입니다"], date: new Date(2024, 12, 7), viewcount: 24 },
    { main: img23, others: [{ image: img10 }, { image: img15 }, { image: img20 }], texts: ["기여운 우리 동생"], additionalTexts: ["처음 입양하던 마음 그대로 "], date: new Date(2024, 12, 8), viewcount: 4634 },
    { main: img10, others: [{ image: img14 }, { image: img19 }, { image: img16 }], texts: ["인삼이 덕분에"], additionalTexts: ["평생을 행복하게 키워줄 자신 있어요"], date: new Date(2024, 12, 9), viewcount: 234 },
    { main: img8, others: [{ image: img18 }, { image: img17 }, { image: img23 }], texts: ["사지말고 입양하세요"], additionalTexts: ["인삼이가 세상을 구한다"], date: new Date(2024, 12, 10), viewcount: 646 },
    { main: img7, others: [{ image: img25 }, { image: img27 }, { image: img14 }], texts: ["간식비 벌자!"], additionalTexts: ["조랭삼 만만세 으쌰으쌰"], date: new Date(2024, 12, 18), viewcount: 230 },
  ];

  const [currentPage, setCurrentPage] = useState(1);
  const [sortedData, setSortedData] = useState(cardData);
  const [searchQuery, setSearchQuery] = useState('');
  const postsPerPage = 12; // 한 페이지에 표시할 카드 수

  // 검색 필터링된 데이터
  const filteredData = sortedData.filter(card =>
    card.texts.join(' ').toLowerCase().includes(searchQuery.toLowerCase()) ||
    card.additionalTexts.join(' ').toLowerCase().includes(searchQuery.toLowerCase())
  );

  // 전체 페이지 수 계산
  const totalPages = Math.ceil(filteredData.length / postsPerPage);

  // 현재 페이지에 맞는 카드 데이터 계산
  const currentPosts = filteredData.slice(
    (currentPage - 1) * postsPerPage,
    currentPage * postsPerPage
  );

  // 페이지 클릭 처리 함수
  const handlePageClick = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  // 드롭다운에서 선택된 옵션에 맞게 데이터를 처리하는 함수
  const handleSortChange = (option) => {
    let sortedCards = [...filteredData];
    switch (option) {
      case "최신 순":
        sortedCards.sort((a, b) => b.date - a.date);
        break;
      case "오래된 순":
        sortedCards.sort((a, b) => a.date - b.date);
        break;
      case "조회 수 높은 순":
        sortedCards.sort((a, b) => b.viewcount - a.viewcount);
        break;
      case "조회 수 낮은 순":
        sortedCards.sort((a, b) => a.viewcount - b.viewcount);
        break;
      default:
        sortedCards = filteredData;
        break;
    }
    setSortedData(sortedCards);
    setCurrentPage(1); // 페이지를 첫 번째로 초기화
  };

  return (
    <div style={{ gridArea: gridArea }}>
      <div className={styles.rwWrapper}>
        <div className={styles.rwsubcontainer}>
          <div className={styles.rwsubcontainer2}>
            <Dropdown 
              options={options}
              defaultText="전체보기"
              onChange={handleSortChange}
            />
            <SearchBar 
              placeholder={"글 내용 & 글 제목"} 
              width="300px"               
              onSearch={setSearchQuery} />
          </div>
        </div>
        <div className={styles.rwmaincontainer}>
          <div className={styles.rwdivider}>
            <Divider width={"100%"} backgroundColor={"var(--line-color)"} />
          </div>
          {currentPosts.map((slideData, index) => (
            <Card1 key={index} images={slideData} />
          ))}
        </div>

        <div className={styles.btnContainer}>
          <div className={styles.pgncontainer}>
            <Pagenumber
              totalPages={totalPages}
              currentPage={currentPage}
              handlePageClick={handlePageClick}
            />
          </div>
          <a className={styles.buttonContainer} href="http://localhost:5173/commu-adopt_review/communitywt">
            <Button text={"글쓰기"} />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Review;
