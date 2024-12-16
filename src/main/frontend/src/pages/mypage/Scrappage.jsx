import React, { useState, useEffect } from "react";
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
import { Link } from "react-router-dom";
import { getMypageAdoptList } from "../../service/apiService";

const Scrappage = ({ gridArea }) => {
  const [selectedCategory, setSelectedCategory] = useState("전체");
  const [currentPage, setCurrentPage] = useState(1); // 현재 페이지 상태
  const [scrapedItems, setScrapedItems] = useState([]); // 스크랩된 아이템들
  const [searchQuery, setSearchQuery] = useState('');

// useEffect(() => {
//   const getMypageAdoptListAction = () => async() => {
//     try {
//     const response = await getMypageAdoptList();
//       console.log('Notices Data:', response);  // 데이터 콘솔에 출력
//     } 
//   catch (error) {
//       console.error("입양 게시물을 불러올 수 없습니다.", error);
//     }
//   }
//   getMypageAdoptListAction();
// },[]);


  // 각 카테고리 아이템
  const allPosts = [
    { id: 1, img: img1, title: "3세 / 포메라니안 / 성격나쁨", category: "강아지", isScraped: true, breed : "포메라니안", date: new Date(2024,12,10), viewcount: 150},
    { id: 2, img: imgc1, title: "3개월 추정/ 포메라니안", category: "고양이", isScraped: true, breed : "먼치킨", date: new Date(2024,10,11), viewcount: 50 },
    { id: 3, img: imgm1, title: "미어캣 / 사나움", category: "기타동물", isScraped: true, breed : "미어캣", date: new Date(2024,5,1), viewcount: 10 },
    { id: 4, img: img4, title: "3개월 추정 / 진돗개 / 온순함", category: "강아지", isScraped: true, breed : "진돗개", date: new Date(2024,10,30), viewcount: 0 },
    { id: 5, img: img3, title: "3개월 추정 / 온순함", category: "강아지", isScraped: true, breed : "포메라니안", date: new Date(2024,11,11), viewcount: 15 },
    { id: 6, img: img2, title: "3세 / 믹스견 / 성격나쁨", category: "강아지", isScraped: true, breed : "믹스견", date: new Date(2024,9,10), viewcount: 12 },
    { id: 7, img: imgm2, title: "2세 / 야생소 / 사나움", category: "기타동물", isScraped: true, breed : "포메라니안", date: new Date(2024,9,29), viewcount: 26 },
    { id: 8, img: imgc2, title: "3개월 추정", category: "고양이", isScraped: true, breed : "페르시안", date: new Date(2024,2,2), viewcount: 2 },
    // 추가 아이템들...
  ];

  const filteredItems = allPosts.filter(item => 
    (selectedCategory === "전체" || item.category === selectedCategory) &&
    (item.title.toLowerCase().includes(searchQuery.toLowerCase()) || 
     item.breed.toLowerCase().includes(searchQuery.toLowerCase()))  // description도 필터링
  );

  // 페이지당 아이템 수 (4개로 제한)
  const itemsPerPage = 4;

  // 현재 페이지에 해당하는 아이템만 추출
  const currentPosts = filteredItems.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage
  );

  // 총 페이지 수 계산
  const totalPages = Math.ceil(filteredItems.length / itemsPerPage);

  // 스크랩 토글 함수
  const toggleScrap = (id, event) => {
    event.preventDefault();
    setScrapedItems(prevScrapedItems => {
      if (prevScrapedItems.includes(id)) {
        return prevScrapedItems.filter(itemId => itemId !== id);
      } else {
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
    setSelectedCategory(category);
    setCurrentPage(1);  // 카테고리 변경 시 페이지 1로 리셋
  };

  const handlePageClick = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  const handleSearch = (query) => {
    setSearchQuery(query);
  };

  return (
    <div style={{ gridArea: gridArea }}>
      <div className={styles.mpcontainer}>
        <div className={styles.SearchBar}>
          <SearchBar 
            placeholder={"품종 검색"} 
            onSearch={handleSearch} 
            width="300px" 
          />
        </div>

        <div className={styles.SubNaviBar}>
          <SubNaviBar tabs={tabs} onTabClick={handleTabClick} />
        </div>

        <div className={styles.content}>
          {currentPosts.map((item) => (
            <Link to={`/adoption/post/${item.id}`} key={item.id}>
            <Card2 
              key={item.id} 
              imageFile={item.img} 
              text1={item.title} 
              description={item.description} 
              isScraped={scrapedItems.includes(item.id)}
              onScrapToggle={(event) => toggleScrap(item.id, event)} 
            >
            </Card2>
            </Link>
          ))}
        </div>

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
