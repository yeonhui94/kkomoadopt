import { useState, useEffect } from "react";
import SearchBar from "../../components/SearchBar";
import SubMenuBar from "../../components/submenubar/SubMenuBar";
import Card2 from "../../components/Card2/Card2";
import Pagenumber from "../../components/pagenumber/Pagenumber";
import styles from "../Review.module.css";
import Dropdown from "../../components/DropDown";
import Divider from "../../components/Divider";
import { Link } from "react-router-dom";
import { useStore as AdoptionNoticeStore2 } from "../../stores/AdoptionNoticeStore2/useStore";

const Adoption = ({ gridArea }) => {
  const [selectedCategory, setSelectedCategory] = useState("ALL");
  const [currentPage, setCurrentPage] = useState(1);
  const [sortOption, setSortOption] = useState("전체보기");
  const [searchQuery, setSearchQuery] = useState('');
  const { state, actions } = AdoptionNoticeStore2();

  const options = ["전체보기", "최신 순", "오래된 순", "조회 수 높은 순", "조회 수 낮은 순"];

  useEffect(() => {
    actions.getAdoptionPostsAction(state.pageNum);
  }, [state.pageNum]);

  // useEffect(() => {
  //   actions. getAdoptioncategoryPostsAPI(state.pageNum, state.noticeCategory);
  // }, [state.pageNum,state.noticeCategory]);

  // 전체 동물 목록을 필터링하는 로직
  const filteredNotices = state.notices.filter(item => {
    if (selectedCategory === "ALL") {
      return true; // "ALL"일 경우 모든 동물 반환
    }
    return item.category === selectedCategory;  // 선택된 카테고리만 반환
  });

  // 총 페이지 수 계산
  const totalPages = Math.ceil(state.totalCnt / 12);

  const menuItems = [
    { name: "전체", category: "ALL" },
    { name: "강아지", category: "DOG" },
    { name: "고양이", category: "CAT" },
    { name: "기타동물", category: "OTHERS" }
  ];

  // 카테고리 클릭 처리
  const handleTabClick = (category) => {
    setSelectedCategory(category);  // 선택된 카테고리로 상태 업데이트
    setCurrentPage(1);  // 카테고리 변경 시 페이지 1로 리셋
  };

  // 페이지네이션 처리
  const handlePageClick = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  // 정렬 옵션 변경 처리
  const handleSortChange = (option) => {
    setSortOption(option);
  };

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
              onSearch={(query) => setSearchQuery(query)} 
              width="300px" 
            />
          </div>
        </div>
        <div className={styles.rwmaincontainer}>
          <div className={styles.rwdivider}>
            <Divider width={"100%"} backgroundColor={"var(--line-color)"} />
          </div>
          {filteredNotices.map((item, index) => (
            <Link to={`/adoption/post/${item.announcementNum}`} key={index}>
              <Card2
                imageFile={item.noticeImgUrl}
                text1={item.noticeTitle}
                text2={item.euthanasiaDate}
                isScraped={item.isScraped}
                onScrapToggle={(event) => toggleScrap(item.announcementNum, event)} 
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