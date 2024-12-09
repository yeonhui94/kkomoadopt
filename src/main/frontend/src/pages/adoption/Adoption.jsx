import { Link } from "react-router-dom";  // Link 임포트 추가
import { useState, useEffect } from "react";
import SearchBar from "../../components/SearchBar";
import SubMenuBar from "../../components/submenubar/SubMenuBar";
import Card2 from "../../components/Card2/Card2";
import Pagenumber from "../../components/pagenumber/Pagenumber";
import styles from "../Review.module.css";
import Dropdown from "../../components/DropDown";
import Divider from "../../components/Divider";
import { useStore as AdoptionNoticeStore2 } from "../../stores/AdoptionNoticeStore2/useStore";

const Adoption = ({ gridArea }) => {
  const [selectedCategory, setSelectedCategory] = useState("ALL");
  const [currentPage, setCurrentPage] = useState(1);
  const [sortOption, setSortOption] = useState("전체보기");
  const [searchQuery, setSearchQuery] = useState('');
  const { state, actions } = AdoptionNoticeStore2();

  const options = ["전체보기", "최신 순", "오래된 순", "조회 수 높은 순", "조회 수 낮은 순"];

  // 페이지가 변경될 때마다 데이터 요청
  useEffect(() => {
    actions.getAdoptionPostsAction(currentPage);  // 페이지 번호가 변경되면 API 호출
  }, [currentPage]);  // currentPage가 변경될 때마다 실행

  // 카테고리 필터링
  const filteredNotices = state.notices.filter(item => {
    if (selectedCategory === "ALL") {
      return true;
    }
    return item.category === selectedCategory;
  });

  // 총 페이지 수 계산
  const totalPages = Math.ceil(state.totalCnt / 12);

  // 메뉴 항목 설정
  const menuItems = [
    { name: "전체", category: "ALL" },
    { name: "강아지", category: "DOG" },
    { name: "고양이", category: "CAT" },
    { name: "기타동물", category: "OTHERS" }
  ];

  // 카테고리 클릭 처리
  const handleTabClick = (category) => {
    setSelectedCategory(category);
    setCurrentPage(1);  // 카테고리 변경 시 페이지를 1로 리셋
  };

  // 페이지 클릭 처리
  const handlePageClick = (pageNumber) => {
    if (pageNumber < 1 || pageNumber > totalPages) return;  // 유효한 페이지 번호만 처리
    setCurrentPage(pageNumber);  // 페이지 번호 업데이트
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
                text2={`입양종료 날짜:${item.euthanasiaDate}`}
                isScraped={item.isScraped}
                onScrapToggle={(event) => toggleScrap(item.announcementNum, event)}
              />
            </Link>
          ))}
        </div>
        <div className={styles.endcontainer}>
        <Pagenumber
              totalPages={totalPages}  // 총 페이지 수
              currentPage={currentPage}  // 현재 페이지 번호
              onPageChange={handlePageClick}  // 페이지 변경 시 처리
            />
        </div>
      </div>
    </div>
  );
};

export default Adoption;
