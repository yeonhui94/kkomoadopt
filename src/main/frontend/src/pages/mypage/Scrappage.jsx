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
  const [currentPage, setCurrentPage] = useState(1); // 현재 페이지 상태
  const [scrapedItems, setScrapedItems] = useState([]); // 스크랩된 아이템들

  // 각 카테고리 아이템
  const allItems = [
    { id: 1, img: img1, title: "3세 / 믹스견 / 성격나쁨", description: "강아지" },
    { id: 2, img: imgc1, title: "3개월 추정", description: "고양이" },
    { id: 3, img: imgm1, title: "미어캣 / 사나움", description: "기타동물" },
    { id: 4, img: img4, title: "3개월 추정 / 온순함", description: "강아지" },
    { id: 5, img: img3, title: "3개월 추정 / 온순함", description: "강아지" },
    { id: 6, img: img2, title: "3세 / 믹스견 / 성격나쁨", description: "강아지" },
    { id: 7, img: imgm2, title: "2세 /야생소 / 사나움", description: "기타동물" },
    { id: 8, img: imgc2, title: "3개월 추정", description: "고양이" },
    // 추가 아이템들...
  ];

  // 선택된 카테고리에 따라 필터링된 아이템
  const filteredItems = selectedCategory === "전체"
    ? allItems
    : allItems.filter(item => item.description === selectedCategory);

  // 페이지당 아이템 수 (4개로 제한)
  const itemsPerPage = 4;

  // 현재 페이지에 해당하는 아이템만 추출
  const currentItems = filteredItems.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage
  );

  // 총 페이지 수 계산
  const totalPages = Math.ceil(filteredItems.length / itemsPerPage);

  // 스크랩 토글 함수
  const toggleScrap = (id) => {
    setScrapedItems(prevScrapedItems => {
      if (prevScrapedItems.includes(id)) {
        // 이미 스크랩된 아이템이라면 제거
        return prevScrapedItems.filter(itemId => itemId !== id);
      } else {
        // 스크랩되지 않은 아이템이라면 추가
        return [...prevScrapedItems, id];
      }
    });
  };

  // 탭을 클릭할 때마다 선택된 카테고리 상태 업데이트
  const tabs = [
    { label: "전체", category: "전체" },
    { label: "강아지", category: "강아지" },
    { label: "고양이", category: "고양이" },
    { label: "기타동물", category: "기타동물" }
  ];

  const handleTabClick = (category) => {
    setSelectedCategory(category);  // 클릭한 카테고리로 상태 업데이트
    setCurrentPage(1);  // 카테고리 변경 시 페이지 1로 리셋
  };

  const handlePageClick = (pageNumber) => {
    setCurrentPage(pageNumber);  // 페이지 번호 클릭 시 해당 페이지로 변경
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
          <SubNaviBar tabs={tabs} onTabClick={handleTabClick} />
        </div>

        {/* 필터링된 아이템들만 렌더링 */}
        <div className={styles.content}>
          {currentItems.map((item) => (
            <Card2 
              key={item.id} 
              imageFile={item.img} 
              text1={item.title} 
              description={item.description} 
              isScraped={scrapedItems.includes(item.id)} // 스크랩 여부
              onScrapToggle={() => toggleScrap(item.id)} // 스크랩 토글
            />
          ))}
        </div>

        {/* 페이지네이션 컴포넌트 */}
        <Pagenumber 
          totalPages={totalPages} 
          currentPage={currentPage} 
          handlePageClick={handlePageClick} 
        />
      </div>
    </div>
  );
};

export default Scrappage;
