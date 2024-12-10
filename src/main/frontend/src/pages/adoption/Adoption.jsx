import { useState, useEffect } from "react";
import SearchBar from "../../components/SearchBar";
import SubMenuBar from "../../components/submenubar/SubMenuBar";
import Card2 from "../../components/Card2/Card2";
import Pagenumber from "../../components/pagenumber/Pagenumber";
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
import styles from "../Review.module.css";
import Dropdown from "../../components/DropDown";
import Divider from "../../components/Divider";
import { Link } from "react-router-dom";

const Adoption = ({ gridArea }) => {
  const [selectedCategory, setSelectedCategory] = useState("전체");
  const [currentPage, setCurrentPage] = useState(1);
  const [sortOption, setSortOption] = useState("전체보기");
  const [searchQuery, setSearchQuery] = useState('');  // 검색어 상태 추가

  const options = ["전체보기","최신 순", "오래된 순", "조회 수 높은 순","조회 수 낮은 순"];

  // 카드 데이터 관리: 각 카드 데이터에 isScraped 포함
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
    { id: 16, img: img12, title: "4세 / 포메라니안 / 느긋함", category: "강아지", isScraped: false, breed : "포메라니안", date: new Date(2024,12,2) },
  ]);

  // 선택된 카테고리에 따라 필터링된 아이템
  const filteredItems = allPosts.filter(item => {
    if (selectedCategory !== "전체") {
      return item.category === selectedCategory &&
        (item.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
         item.breed.toLowerCase().includes(searchQuery.toLowerCase()));
    }
    // "전체"일 경우 모든 항목을 필터링하지 않음
    return item.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
           item.breed.toLowerCase().includes(searchQuery.toLowerCase());
  });

  // 페이지당 아이템 수
  const postsPerPage = 12;

  const sortedPosts = filteredItems.sort((a, b) => {
    switch (sortOption) {
      case "최신 순":
        return b.date - a.date;
      case "오래된 순":
        return a.date - b.date;
      case "조회 수 높은 순":
        return b.viewcount - a.viewcount;
      case "조회 수 낮은 순":
        return a.viewcount - b.viewcount;
      default:
        return 0;
    }
  });

  const currentPosts = sortedPosts.slice(
    (currentPage - 1) * postsPerPage,
    currentPage * postsPerPage
  );
  // 총 페이지 수 계산
  const totalPages = Math.ceil(filteredItems.length / postsPerPage);

  const menuItems = [
      { name: '전체', category: '전체' },
    { name: '강아지', category: '강아지' },
    { name: '고양이', category: '고양이' },
    { name: '기타동물', category: '기타동물' },
  ];

  // SubMenuBar에서 선택된 카테고리 처리
  const handleTabClick = (category) => {
    setSelectedCategory(category);  // 클릭한 카테고리로 상태 업데이트
    setCurrentPage(1);  // 카테고리 변경 시 페이지 1로 리셋
  };

  // 페이지네이션 처리
  const handlePageClick = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  // 스크랩 상태를 토글하는 함수
  const toggleScrap = (id, event) => {
    event.preventDefault(); // Link의 기본 동작을 방지하여 상세 페이지로 넘어가지 않게 함
    setAllPosts(prevPosts => {
      const updatedPosts = prevPosts.map(post =>
        post.id === id ? { ...post, isScraped: !post.isScraped } : post
      );
      
      // 스크랩된 아이템 콘솔에 출력
      const scrapedItems = updatedPosts.filter(post => post.isScraped);
      console.log("스크랩된 아이템:", scrapedItems);
  
      return updatedPosts;
    });
  };

  const handleSearch = (query) => {
    setSearchQuery(query);  // 검색어를 상태에 저장
  };

  const handleSortChange = (option) => {
    setSortOption(option);
    setCurrentPage(1); // 정렬 변경 시 페이지를 첫 번째로 리셋
  };

  // 첫 번째 카테고리가 항상 선택되어 있도록 유지
  useEffect(() => {
    setSelectedCategory("강아지"); // 초기 렌더링 시 '강아지' 카테고리가 활성화되도록 설정
  }, []);

  return (
    <div style={{ gridArea: gridArea }}>
      <SubMenuBar 
        menuItems={menuItems} 
        selectedButton={selectedCategory} 
        onTabClick={handleTabClick} 
      />
      <div className={styles.rwWrapper}>
        <div className={styles.rwsubcontainer}>
          <div className={styles.rwsubcontainer2}>
            <Dropdown 
              options={options} 
              defaultText="전체보기"
              onChange={handleSortChange}
            />
            <SearchBar 
              placeholder={"품종 검색"} 
              onSearch={handleSearch} 
              width="300px" 
            />
          </div>
        </div>
        <div className={styles.rwmaincontainer}>
          <div className={styles.rwdivider}>
            <Divider width={"100%"} backgroundColor={"var(--line-color)"} />
          </div>
          {currentPosts.map((item) => (
            <Link to={`/adoption/post/${item.id}`} key={item.id}>
              <Card2
                key={item.id}
                imageFile={item.img}
                text1={item.title}
                text2={item.description}
                isScraped={item.isScraped}
                onScrapToggle={(event) => toggleScrap(item.id, event)} // 스크랩 클릭 시 상세 페이지로 이동하지 않음
              />
            </Link>
          ))}
        </div>
        <div className={styles.endcontainer}>
          <Pagenumber
            totalPages={totalPages}
            currentPage={currentPage}
            onPageChange={handlePageClick}
          />
        </div>
      </div>
    </div>
  );
};

export default Adoption;
