import { useState, useEffect } from "react";
import { Link } from "react-router-dom"; // Link 컴포넌트 추가
import styles from "../mypage/MyPage.module.css";
import Pagenumber from "../../components/pagenumber/Pagenumber";
import SubNaviBar from "../../components/MyPage/SubNavi/SubNaviBar";

function UserReservation({ gridArea }) {
  const [currentPage, setCurrentPage] = useState(1); // 현재 페이지 상태
  const [selectedCategory, setSelectedCategory] = useState("온라인문의"); // 초기값을 "온라인문의"로 설정
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedSubCategory, setSelectedSubCategory] = useState("");
  const [filteredData, setFilteredData] = useState([]);

  const [allPosts, setAllPosts] = useState([ // 모든 게시물 상태로 관리
    { id: 1, category: "온라인문의", nickname: "재벌3세", title: "입양 관련해서 문의 드립니다.", date: "2024-11-28", number: "010-1234-1234", status: "답변 대기" },
    { id: 3, category: "온라인문의", nickname: "조랭삼", title: "입양 관련해서 문의 드립니다.", date: "2024-11-27", number: "010-1234-1234", status: "답변 대기" },
    { id: 2, category: "방문상담 신청", nickname: "덴버", number: "010-1234-1234", purpose: "입양", requestDate: "2024-11-25" },
    { id: 4, category: "온라인문의", nickname: "텐사이재헌상", title: "품종 예약 되나요?", date: "2024-11-25", number: "010-1234-1234", status: "답변 대기" },
    { id: 5, category: "온라인문의", nickname: "파란만잔", title: "실종아이 본 경우 어떻게 하나요?", date: "2024-11-24", number: "010-1234-1234", status: "답변 대기" },
    { id: 6, category: "온라인문의", nickname: "주근익불주먹", title: "봉사 관련해서 문의 드립니다.", date: "2024-11-23", number: "010-1234-1234", status: "답변 대기" },
  ]);

  useEffect(() => {
    const updatedFilteredData = allPosts.filter(post =>
      // Category 필터링: 선택된 카테고리에 맞는 게시물만 표시
      post.category === selectedCategory &&
      // 서브 카테고리 필터링 (온라인문의일 때만 적용)
      (selectedSubCategory === "" || post.status === selectedSubCategory) &&
      // 검색어 필터링: 온라인문의는 제목과 내용을 필터링, 방문상담 신청은 purpose로 필터링
      (selectedCategory === "온라인문의" ? (
        post.title?.toLowerCase().includes(searchQuery.toLowerCase()) || 
        post.content?.toLowerCase().includes(searchQuery.toLowerCase())
      ) : (
        post.purpose?.toLowerCase().includes(searchQuery.toLowerCase()) ||
        post.nickname?.toLowerCase().includes(searchQuery.toLowerCase())
      ))
    );
    
    setFilteredData(updatedFilteredData); // 필터링된 데이터 상태에 저장
  }, [selectedCategory, selectedSubCategory, searchQuery]);

  // 페이지당 보여지는 글 수
  const postsPerPage = 8;
  const currentPosts = filteredData.slice(
    (currentPage - 1) * postsPerPage,
    currentPage * postsPerPage
  );

  // 전체 페이지 수 계산
  const totalPages = Math.ceil(filteredData.length / postsPerPage);

  // 서브 네비게이션 탭 (카테고리 선택)
  const tabs = [
    { label: "온라인문의", category: "온라인문의" },
    { label: "방문상담 신청", category: "방문상담 신청" },
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
        <div className={styles.SubNaviBar}>
          <SubNaviBar tabs={tabs} onTabClick={handleTabClick} />  {/* 서브 네비게이션 */}
        </div>

        <div className={styles.content2}>
          <table className={styles.table}>
            <thead>
              <tr>
                <th>글번호</th>
                {selectedCategory === "온라인문의" && <th>제목</th>}
                <th>닉네임</th>
                <th>연락처</th>
                {selectedCategory === "온라인문의" && <th>작성 날짜</th>}
                {/* 방문상담 신청일 때만 표시되는 컬럼 */}
                {selectedCategory === "방문상담 신청" && <th>방문 목적</th>}
                {selectedCategory === "방문상담 신청" && <th>신청 날짜</th>}
                {selectedCategory === "온라인문의" && 
                <th>
                  <select
                    name="category"
                    id="category"
                    style={{ border: "none", fontSize: "15px", fontWeight: "bold" }}
                    onChange={(e) => setSelectedSubCategory(e.target.value)}
                  >
                    <option value="">답변 상태</option>
                    <option value="답변 대기">답변 대기</option>
                    <option value="답변 완료">답변 완료</option>
                  </select>
                </th>}
              </tr>
            </thead>
            <tbody>
              {currentPosts.length > 0 ? (
                currentPosts.map(post => (
                  <tr key={post.id}>
                    <td>{post.id}</td>
                    {selectedCategory === "온라인문의" && <td>
                      <Link to={`/customer_qna/result/${post.id}`} style={{ textDecoration: 'none', color: 'inherit' , fontWeight:'normal' }}>
                        {post.title}
                      </Link>
                    </td>}
                    <td>{post.nickname}</td>
                    <td>{post.number}</td>
                    {selectedCategory === "온라인문의" && <td>{post.date}</td>}
                    {/* 방문상담 신청일 때만 추가되는 내용 */}
                    {selectedCategory === "방문상담 신청" && <td>{post.purpose}</td>}
                    {selectedCategory === "방문상담 신청" && <td>{post.requestDate}</td>}
                    {selectedCategory === "온라인문의" && <td>{post.status}</td>}
                  </tr>
                ))
              ) : (
                <tr>
                  <td colSpan="6">검색된 데이터가 없습니다.</td>
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
      </div>
    </div>
  );
}

export default UserReservation;
