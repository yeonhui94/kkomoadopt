import { useState } from "react";
import SubNaviBar from "../../components/MyPage/SubNavi/SubNaviBar";
import styles from "./MyPage.module.css";
import SearchBar from "../../components/SearchBar";
import Pagenumber from "../../components/pagenumber/Pagenumber";

const MyComments =({ gridArea })=>{

    const [selectedCategory, setSelectedCategory] = useState("전체");
    const [currentPage, setCurrentPage] = useState(1); // 현재 페이지 상태
    const [searchQuery, setSearchQuery] = useState('');

    const allPosts = [
        { id: 1, category: "아이를 찾습니다", title: "광진구에서 실종", content: "아이에 대한 정보", date: "2024-11-28"},
        { id: 2, category: "입양후기", title: "인삼이 너무 기여워요", content: "입양 후기 내용", date: "2024-11-27"},
        { id: 3, category: "사고팝니다", title: "목줄 판매합니다", content: "중고 물건 판매", date: "2024-11-26"},
        { id: 5, category: "아이를 찾습니다", title: "부천에서 실종", content: "아이에 대한 정보", date: "2024-11-24"},
        { id: 6, category: "입양후기", title: "조랭이는 귀엽다", content: "입양 후기 내용", date: "2024-11-23"},
        { id: 7, category: "사고팝니다", title: "배변패드 판매합니다", content: "중고 물건 판매", date: "2024-11-22"},
        { id: 9, category: "아이를 찾습니다", title: "파주 실종..", content: "아이에 대한 정보", date: "2024-11-20"},
        { id: 10, category: "입양후기", title: "사지말고 입양하세요", content: "입양 후기 내용", date: "2024-11-19"},
        { id: 11, category: "공지사항", title: "중고거래 시 주의사항", content: "중고거래 시 주의사항", date: "2024-11-19"},
        { id: 12, category: "공지사항", title: "12월 입양 캠페인 안내", content: "12월 입양 캠페인 안내", date: "2024-11-19"},
        { id: 13, category: "공지사항", title: "입양 시 주의사항", content: "입양 시 주의사항", date: "2024-11-19"},
        { id: 14, category: "공지사항", title: "아이를 찾습니다 글쓰기 안내", content: "아이를 찾습니다 글쓰기 안내", date: "2024-11-19"},
        { id: 15, category: "공지사항", title: "입양 후기 작성 시 안내사항", content: "입양 후기 작성 시 안내사항", date: "2024-11-19"},
        { id: 16, category: "입양후기", title: "방문 시 주의사항 안내", content: "방문 시 주의사항 안내", date: "2024-11-19"},
      ];

      
      // 검색 필터링된 데이터
      const filteredData = allPosts.filter(post => 
        (selectedCategory === "전체" || post.category === selectedCategory) && 
        (post.title.toLowerCase().includes(searchQuery.toLowerCase()) || 
          post.content.toLowerCase().includes(searchQuery.toLowerCase()))
      );

  // 페이지당 보여지는 글 수
  const postsPerPage = 8;

    // 현재 페이지에 맞는 카드 데이터 계산
    const currentPosts = filteredData.slice(
      (currentPage - 1) * postsPerPage,
      currentPage * postsPerPage
  );
   
    // 전체 페이지 수 계산
    const totalPages = Math.ceil(filteredData.length / postsPerPage);


    const tabs = [
        { label: "전체", category: "전체" },
        { label: "공지사항", category: '공지사항' }, 
        { label: "아이를 찾습니다", category: "아이를 찾습니다" },
        { label: "입양후기", category: "입양후기" },
        { label: "사고팝니다", category: "사고팝니다" },
    ];

    const handleTabClick = (category) => {
        setSelectedCategory(category);  // 클릭한 카테고리로 상태 업데이트
        setCurrentPage(1);  // 카테고리 변경 시 페이지 1로 리셋
      };
    
      // 페이지네이션 처리
      const handlePageClick = (pageNumber) => {
        setCurrentPage(pageNumber);
      };

      // 검색어 변경 처리 함수
        const handleSearch = (query) => {
          setSearchQuery(query);  // 검색어를 상태에 저장
      };

  return (
    <div style={{ gridArea: gridArea }}>
      <div className={styles.mpcontainer}>
        <div className={styles.SearchBar}>
        <SearchBar 
            placeholder={"글 내용 & 글 제목"} 
            width="300px"               
            onSearch={handleSearch} />
        </div>

        <div className={styles.SubNaviBar}>
          <SubNaviBar tabs={tabs} onTabClick={handleTabClick} />  {/* 서브 네비게이션 */}
        </div>

        <div className={styles.content2}>
          <div className={styles.tableHeader}>
            <span className={styles.tableColumn}>글번호</span>
            <span className={styles.tableColumn}>제목</span>
            <span className={styles.tableColumn}>작성일</span>
          </div>

          {/* 필터링된 게시글을 페이지별로 표시 */}
          {currentPosts.map(post => (
            <div key={post.id} className={styles.postItem}>
              <span className={styles.tableColumn}>{post.id}</span>
              <span className={styles.tableColumn}>{post.title}</span>
              <span className={styles.tableColumn}>{post.date}</span>
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
export default MyComments;