import { useState } from "react";
import styles from "../mypage/MyPage.module.css";
import SearchBar from "../../components/SearchBar";
import Pagenumber from "../../components/pagenumber/Pagenumber";
import CheckBox from "../../components/CheckBox";  // CheckBox 임포트
import SubNaviBar from "../../components/MyPage/SubNavi/SubNaviBar";
import Button from "../../components/Button/Button";

function PostsMgmt({ gridArea }) {
  const [currentPage, setCurrentPage] = useState(1); // 현재 페이지 상태
  const [selectedCategory, setSelectedCategory] = useState("글");  // 초기값을 "전체"로 설정
  const [searchQuery, setSearchQuery] = useState('');
  const [checkedItems, setCheckedItems] = useState({});  // 체크박스 상태를 관리
  const [selectAll, setSelectAll] = useState(false);

  const allPosts = [
    
      { id: 1, category1: "아이를 찾습니다", title: "광진구에서 실종", date: "2024-11-28", viewCount: 150, nickname: "user1", email: "user1@example.com", reason: "욕설", category: "삭제된 글" },
      { id: 2, category1: "입양후기", title: "인삼이 너무 기여워요", date: "2024-11-27", viewCount: 230, nickname: "user2", email: "user2@example.com", reason: "음담패설", category: "삭제된 댓글" },
      { id: 3, category1: "사고팝니다", title: "목줄 판매합니다", date: "2024-11-26", viewCount: 45, nickname: "user3", email: "user3@example.com", reason: "", category: "글" },
      { id: 4, category1: "신고합니다", title: "체리콕", date: "2024-11-25", viewCount: 78, nickname: "user4", email: "user4@example.com", reason: "광고", category: "삭제된 글" },
      { id: 5, category1: "아이를 찾습니다", title: "서울에서 실종", date: "2024-11-24", viewCount: 100, nickname: "user5", email: "user5@example.com", reason: "", category: "글" },
      { id: 6, category1: "입양후기", title: "애플이가 너무 귀엽다", date: "2024-11-23", viewCount: 210, nickname: "user6", email: "user6@example.com", reason: "관련없는내용", category: "삭제된 댓글" },
      { id: 7, category1: "사고팝니다", title: "배변패드 무료 나눔", date: "2024-11-22", viewCount: 50, nickname: "user7", email: "user7@example.com", reason: "기타", category: "삭제된 글" },
      { id: 8, category1: "신고합니다", title: "스팸 메시지", date: "2024-11-21", viewCount: 90, nickname: "user8", email: "user8@example.com", reason: "", category: "댓글" },
      { id: 9, category1: "아이를 찾습니다", title: "경기에서 실종", date: "2024-11-20", viewCount: 150, nickname: "user9", email: "user9@example.com", reason: "", category: "글" },
      { id: 10, category1: "공지사항", title: "사이트 점검 안내", date: "2024-11-19", viewCount: 320, nickname: "admin", email: "admin@example.com", reason: "", category: "글" },
      { id: 11, category1: "FAQ", title: "회원가입 방법", content: "회원가입 방법에 대한 자주 묻는 질문", date: "2024-11-18", viewCount: 500, nickname: "admin", email: "admin@example.com", reason: "", category: "글" },
      { id: 12, category1: "QnA", title: "아이를 찾습니다", content: "아이 찾기 관련 질문", date: "2024-11-17", viewCount: 220, nickname: "user10", email: "user10@example.com", reason: "", category: "글" }
    
    
  ];
  const filteredData = allPosts.filter(post =>
    // selectedCategory가 "글"일 때는 "글" 카테고리만 보여주고, 그렇지 않으면 해당 카테고리만 필터링
    (selectedCategory === "글" ? post.category === "글" : post.category === selectedCategory) &&
    // 검색어 필터링
    (post.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
     post.content?.toLowerCase().includes(searchQuery.toLowerCase()))
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

  // 검색어 변경 처리 함수
  const handleSearch = (query) => {
    setSearchQuery(query);  // 검색어를 상태에 저장
    setCurrentPage(1); // 검색 시 첫 페이지로 돌아가게 설정
  };

  // 서브 네비게이션 탭 (카테고리 선택)
  const tabs = [
    { label: "글", category: "글" },
    { label: "댓글", category: "댓글" },
    { label: "삭제된 글", category: "삭제된 글" },
    { label: "삭제된 댓글", category: "삭제된 댓글" },
  ];


  const handleTabClick = (category1) => {
    console.log('Selected Category:', category1);
    setSelectedCategory(category1);  // 클릭한 카테고리로 상태 업데이트
    setCurrentPage(1);  // 카테고리 변경 시 페이지 1로 리셋
  };


  // 페이지네이션 처리
  const handlePageClick = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  // 전체 선택/해제 처리 함수
  const handleSelectAll = () => {
    setSelectAll(!selectAll);  // 전체 선택 상태 반전
    if (!selectAll) {
      // 전체 선택 상태일 때, 모든 항목을 체크
      const newCheckedItems = {};
      currentPosts.forEach(post => {
        newCheckedItems[post.id] = true;
      });
      setCheckedItems(newCheckedItems);
    } else {
      // 전체 해제 상태일 때, 모든 항목을 해제
      setCheckedItems({});
    }
  };

  // 체크박스 상태 변경 처리
  const handleCheckBoxChange = (id) => {
    setCheckedItems((prevState) => ({
      ...prevState,
      [id]: !prevState[id]
    }));
  };


  
  return (
    <div style={{ gridArea: gridArea }}>
      <div className={styles.mpcontainer}>
        <div className={styles.SearchBar}>
          <SearchBar
            placeholder={"닉네임 & 이메일"}
            width="300px"
            onSearch={handleSearch}
          />
        </div>

        <div className={styles.SubNaviBar}>
          <SubNaviBar tabs={tabs} onTabClick={handleTabClick} />  {/* 서브 네비게이션 */}
        </div>

        <div className={styles.content2}>
          <table className={styles.table}>
            <thead>
              <tr>
                <th><CheckBox
                  checked={selectAll} 
                  onChange={handleSelectAll} 
                /></th>
                <th><select name="category" id="category" 
                            style={{border : "none", fontSize : "15px", fontWeight: "bold"}}
                            onChange={(e) => handleTabClick(e.target.value)}>
                    <option value="카테고리">카테고리</option>
                    <option value="아이를 찾습니다">아이를 찾습니다</option>
                    <option value="신고합니다">신고합니다</option>
                    <option value="입양후기">입양후기</option>
                    <option value="공지사항">공지사항</option>
                    <option value="FAQ">FAQ</option>
                    <option value="QnA">QnA</option>
                  </select></th>
                <th>글번호</th>
                <th>제목</th>
                <th>작성자</th>
                <th>작성일</th>
                <th>글삭제 사유</th>
              </tr>
            </thead>
            <tbody>
              {currentPosts.length > 0 ? (
                currentPosts.map(post => (
                  <tr key={post.id}>
                    <td>
                      <CheckBox
                        checked={!!checkedItems[post.id]}
                        onChange={() => handleCheckBoxChange(post.id)}
                      />
                    </td>
                    <td>{post.category1}</td>
                    <td>{post.id}</td>
                    <td>{post.title}</td>
                    <td>{post.nickname}</td>
                    <td>{post.date}</td>
                    <td>{post.reason}</td>
                  </tr>
                ))
              ) : (
                <tr>
                  <td colSpan="7">검색된 데이터가 없습니다.</td>
                </tr>
              )}
            </tbody>
          </table>
        </div>

        <div className={styles.pgnum}>
          <Pagenumber
            totalPages={totalPages}
            currentPage={currentPage}
            handlePageClick={handlePageClick}
          />
        </div>

        <div className={styles.adminbtn}>
          <Button text={"삭제"} />
        </div>

      </div>
    </div>
  );
}

export default PostsMgmt;
