import React, { useState } from "react";
import Card2 from "../../components/Card2/Card2";  // Card2 컴포넌트 임포트
import img1 from "../../assets/CardImage/1.jpg";   // 이미지 임포트
import img3 from "../../assets/CardImage/3.jpg";
import img4 from "../../assets/CardImage/4.jpg";
import img2 from "../../assets/CardImage/2.jpg";
import imgc1 from "../../assets/CardImage/c1.png";
import imgc2 from "../../assets/CardImage/c2.jpg";
import imgm1 from "../../assets/CardImage/m1.jpg";
import imgm2 from "../../assets/CardImage/m2.jpg";
import SubNaviBar from "../../components/MyPage/SubNavi/SubNaviBar";  // SubNaviBar 임포트
import styles from "./MyPage.module.css";  // 스타일시트 임포트
import SearchBar from "../../components/SearchBar";
import Pagenumber from "../../components/pagenumber/Pagenumber";  // Pagenumber 컴포넌트 임포트

const Scrappage = ({ gridArea }) => {
  const [selectedCategory, setSelectedCategory] = useState("전체");
  const [currentPage, setCurrentPage] = useState(1);

  // 카드 데이터 관리: 각 카드 데이터에 isScraped 포함
  const [allItems, setAllItems] = useState([
    { id: 1, img: img1, title: "3세 / 믹스견 / 성격나쁨", description: "강아지", isScraped: false },
    { id: 2, img: imgc1, title: "3개월 추정", description: "고양이", isScraped: false },
    { id: 3, img: imgm1, title: "미어캣 / 사나움", description: "기타동물", isScraped: false },
    { id: 4, img: img4, title: "3개월 추정 / 온순함", description: "강아지", isScraped: false },
    { id: 5, img: img3, title: "3개월 추정 / 온순함", description: "강아지", isScraped: false },
    { id: 6, img: img2, title: "3세 / 믹스견 / 성격나쁨", description: "강아지", isScraped: false },
    { id: 7, img: imgm2, title: "2세 / 야생소 / 사나움", description: "기타동물", isScraped: false },
    { id: 8, img: imgc2, title: "3개월 추정", description: "고양이", isScraped: false },
  ]);

  // 선택된 카테고리에 따라 필터링
  const filteredItems = selectedCategory === "전체"
    ? allItems
    : allItems.filter(item => item.description === selectedCategory);

  // 페이지당 아이템 수
  const itemsPerPage = 4;

  // 현재 페이지 아이템
  const currentItems = filteredItems.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage
  );

  // 총 페이지 수
  const totalPages = Math.ceil(filteredItems.length / itemsPerPage);

  // 특정 카드의 스크랩 상태 토글
  const toggleScrap = (id) => {
    setAllItems(prevItems =>
      prevItems.map(item =>
        item.id === id ? { ...item, isScraped: !item.isScraped } : item
      )
    );
  };

  // 탭 변경
  const handleTabClick = (category) => {
    setSelectedCategory(category);
    setCurrentPage(1); // 탭 변경 시 페이지 초기화
  };

  return (
    <div style={{ gridArea: gridArea }}>
      <div className={styles.mpcontainer}>
        {/* 검색바 */}
        <div className={styles.SearchBar}>
          <SearchBar width="300px" />
        </div>

        {/* 서브 네비게이션 바 */}
        <div className={styles.SubNaviBar}>
          <SubNaviBar
            tabs={[
              { label: "전체", category: "전체" },
              { label: "강아지", category: "강아지" },
              { label: "고양이", category: "고양이" },
              { label: "기타동물", category: "기타동물" },
            ]}
            onTabClick={handleTabClick}
          />
        </div>

        {/* 카드 렌더링 */}
        <div className={styles.content}>
          {currentItems.map((item) => (
            <Card2
              key={item.id}
              imageFile={item.img}
              text1={item.title}
              text2={item.description}
              isScraped={item.isScraped}
              onScrapToggle={() => toggleScrap(item.id)} // ID를 기준으로 스크랩 상태 업데이트
            />
          ))}
        </div>

        {/* 페이지네이션 */}
        <Pagenumber
          totalPages={totalPages}
          currentPage={currentPage}
          handlePageClick={setCurrentPage}
        />
      </div>
    </div>
  );
};

export default Scrappage;
