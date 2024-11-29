import React, { useState } from "react";
import { useParams } from "react-router-dom";
import SubNaviBar from "../../components/MyPage/SubNavi/SubNaviBar";
import Pagenumber from "../../components/pagenumber/Pagenumber";
import SearchBar from "../../components/SearchBar";
import styles from "./MyPage.module.css";

const Mypost = ({ gridArea }) => {
  const [selectedCategory, setSelectedCategory] = useState("전체");
  const [currentPage, setCurrentPage] = useState(1); // 현재 페이지 상태

  const allPosts = [
    { id: 1, category: "아이를 찾습니다", title: "광진구에서 실종", content: "아이에 대한 정보", date: "2024-11-28", viewCount: 150 },
    { id: 2, category: "입양후기", title: "인삼이 너무 기여워요", content: "입양 후기 내용", date: "2024-11-27", viewCount: 230 },
    { id: 3, category: "사고팝니다", title: "목줄 판매합니다", content: "중고 물건 판매", date: "2024-11-26", viewCount: 45 },
    { id: 4, category: "신고합니다", title: "체리콕", content: "불법 활동 신고", date: "2024-11-25", viewCount: 78 },
    { id: 5, category: "아이를 찾습니다", title: "부천에서 실종", content: "아이에 대한 정보", date: "2024-11-24", viewCount: 123 },
    { id: 6, category: "입양후기", title: "조랭이는 귀엽다", content: "입양 후기 내용", date: "2024-11-23", viewCount: 99 },
    { id: 7, category: "사고팝니다", title: "배변패드 판매합니다", content: "중고 물건 판매", date: "2024-11-22", viewCount: 10 },
    { id: 8, category: "신고합니다", title: "체리콕", content: "불법 활동 신고", date: "2024-11-21", viewCount: 55 },
    { id: 9, category: "아이를 찾습니다", title: "파주 실종..", content: "아이에 대한 정보", date: "2024-11-20", viewCount: 200 },
    { id: 10, category: "입양후기", title: "사지말고 입양하세요", content: "입양 후기 내용", date: "2024-11-19", viewCount: 140 },
  ];

  // 선택된 카테고리에 따라 필터링된 아이템
  const filteredItems = selectedCategory === "전체"
    ? allPosts
    : allPosts.filter(item => item.category === selectedCategory);

  // 페이지당 보여지는 글 수
  const postsPerPage = 8;

  // 현재 페이지에 해당하는 게시글만 추출
  const currentPosts = filteredItems.slice(
    (currentPage - 1) * postsPerPage,
    currentPage * postsPerPage
  );

  // 총 페이지 수 계산
  const totalPages = Math.ceil(filteredItems.length / postsPerPage);

  // 서브 네비게이션 탭 (카테고리 선택)
  const tabs = [
    { label: "전체", category: "전체" },
    { label: "아이를 찾습니다", category: "아이를 찾습니다" },
    { label: "입양후기", category: "입양후기" },
    { label: "사고팝니다", category: "사고팝니다" },
    { label: "신고합니다", category: "신고합니다" }, // categoryk 오류 수정
  ];

  const handleTabClick = (category) => {
    setSelectedCategory(category);  // 클릭한 카테고리로 상태 업데이트
    setCurrentPage(1);  // 카테고리 변경 시 페이지 1로 리셋
  };

  // 페이지네이션 처리
  const handlePageClick = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  return (
    <div style={{ gridArea: gridArea }}>
      <div className={styles.mpcontainer}>
        <div className={styles.SearchBar}>
          <SearchBar width="300px" />
        </div>

        <div className={styles.SubNaviBar}>
          <SubNaviBar tabs={tabs} onTabClick={handleTabClick} />  {/* 서브 네비게이션 */}
        </div>

        <div className={styles.content2}>
          <div className={styles.tableHeader}>
            <span className={styles.tableColumn}>글번호</span>
            <span className={styles.tableColumn}>제목</span>
            <span className={styles.tableColumn}>작성일</span>
            <span className={styles.tableColumn}>조회수</span>
          </div>

          {/* 필터링된 게시글을 페이지별로 표시 */}
          {currentPosts.map(post => (
            <div key={post.id} className={styles.postItem}>
              <span className={styles.tableColumn}>{post.id}</span>
              <span className={styles.tableColumn}>{post.title}</span>
              <span className={styles.tableColumn}>{post.date}</span>
              <span className={styles.tableColumn}>{post.viewCount}</span>
            </div>
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

export default Mypost;
