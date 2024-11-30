import { useState } from "react";
import SearchBar from "../../components/SearchBar";
import SubNaviBar from "../../components/MyPage/SubNavi/SubNaviBar";
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
import Button from "../../components/Button/Button";

const Adoption = ({ gridArea }) => {
  const [selectedCategory, setSelectedCategory] = useState("전체");
  const [currentPage, setCurrentPage] = useState(1);

  // 카드 데이터 관리: 각 카드 데이터에 isScraped 포함
  const [allItems, setAllItems] = useState([
    { id: 1, img: img1, title: "3세 / 포메라니안 / 성격나쁨", description: "강아지", isScraped: false },
    { id: 2, img: imgc1, title: "3개월 추정/ 포메라니안", description: "고양이", isScraped: false },
    { id: 3, img: imgm1, title: "미어캣 / 사나움", description: "기타동물", isScraped: false },
    { id: 4, img: img4, title: "3개월 추정 / 진돗개 / 온순함", description: "강아지", isScraped: false },
    { id: 5, img: img3, title: "3개월 추정 / 온순함", description: "강아지", isScraped: false },
    { id: 6, img: img2, title: "3세 / 믹스견 / 성격나쁨", description: "강아지", isScraped: false },
    { id: 7, img: imgm2, title: "2세 / 야생소 / 사나움", description: "기타동물", isScraped: false },
    { id: 8, img: imgc2, title: "3개월 추정", description: "고양이", isScraped: false },
    { id: 9, img: img5, title: "32세 / 푸들 / 온순함", description: "강아지", isScraped: false },
    { id: 10, img: img6, title: "4세 / 말티즈 / 외향적", description: "강아지", isScraped: false },
    { id: 11, img: img7, title: "3세 / 진돗개 / 호기심많음", description: "강아지", isScraped: false },
    { id: 12, img: img8, title: "3개월 추정 / 말티즈 / 온순함", description: "강아지", isScraped: false },
    { id: 13, img: img9, title: "2세 / 믹스견 / 온순함", description: "강아지", isScraped: false },
    { id: 14, img: img10, title: "1세 / 슈나우져 / 온순함", description: "강아지", isScraped: false },
    { id: 15, img: img11, title: "1세 / 비숑 /  온순함", description: "강아지", isScraped: false },
    { id: 16, img: img12, title: "4세 / 포메라니안 / 느긋함", description: "강아지", isScraped: false },
  ]);

  // 선택된 카테고리에 따라 필터링
  const filteredItems = selectedCategory === "전체"
    ? allItems
    : allItems.filter(item => item.description === selectedCategory);

  // 페이지당 아이템 수
  const itemsPerPage = 12;

  // 현재 페이지 아이템
  const currentItems = filteredItems.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage
  );

  // 총 페이지 수
  const totalPages = Math.ceil(filteredItems.length / itemsPerPage);


  const toggleScrap = (id) => {
    setAllItems((prevItems) => {
      const updatedItems = prevItems.map(item =>
        item.id === id ? { ...item, isScraped: !item.isScraped } : item
      );

      // 스크랩된 아이템 목록을 출력
      const scrapedItems = updatedItems.filter(item => item.isScraped);
      console.log("스크랩된 아이템들: ", scrapedItems); // 콘솔에 출력

      return updatedItems;
    });
  };

  const handleTabClick = (category) => {
    setSelectedCategory(category);
    setCurrentPage(1); // 탭 변경 시 페이지 초기화
  };

  return (
    <div className={styles.rwWrapper}>
      <div className={styles.rwsubcontainer}>
        <div className={styles.rwsubcontainer2}>
          <Dropdown options={["전체보기", "최신 순", "오래된 순", "조회 수 높은 순", "조회 수 낮은 순"]} />
          <SearchBar placeholder={"품종 검색"} width="300px" />
        </div>
      </div>
      <div className={styles.rwmaincontainer}>
        <div className={styles.rwdivider}>
          <Divider width={"100%"} backgroundColor={"var(--line-color)"} />
        </div>
        {currentItems.map((item) => (
          <Card2
            key={item.id}
            imageFile={item.img}
            text1={item.title}
            text2={item.description}
            isScraped={item.isScraped}
            onScrapToggle={() => toggleScrap(item.id)} // 스크랩 상태 토글
          />
        ))}
      </div>
      <div className={styles.endcontainer}>
        <Pagenumber
          totalPages={totalPages}
          currentPage={currentPage}
          handlePageClick={setCurrentPage}
        />
      </div>
    </div>
  );
};

export default Adoption;
