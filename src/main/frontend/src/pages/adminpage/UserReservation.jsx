import { useState, useEffect } from "react";
import { Link } from "react-router-dom"; 
import styles from "../mypage/MyPage.module.css";
import Pagenumber from "../../components/pagenumber/Pagenumber";
import SubNaviBar from "../../components/MyPage/SubNavi/SubNaviBar";
import { getMypageQnAList, getMypageVisitRequestList } from "../../service/apiService";
import SearchBar from "../../components/SearchBar";
import { formatDate } from "../../utils/formattedDate";

function UserReservation({ gridArea }) {
  const [qnaList, setQnaList] = useState([]); // 온라인 문의 데이터
  const [visitRequestList, setVisitRequestList] = useState([]); // 방문 상담 데이터
  const [selectedCategory, setSelectedCategory] = useState("온라인 문의");
  const [searchQuery, setSearchQuery] = useState('');
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 8; // 한 페이지에 8개씩 보이도록 설정

  useEffect(() => {
    const getMypageQnaListAction = async () => {
      try {
        const response = await getMypageQnAList();
        console.log('QNA DATA: ', response);
        setQnaList(response.data);
      } catch (error) {
        console.log('qna 불러 올 수 없음', error);
      }
    };
    getMypageQnaListAction();

    const getMypageVisitRequestListAction = async () => {
      try {
        const response = await getMypageVisitRequestList();
        console.log('Visit Request Data: ', response);
        setVisitRequestList(response.data);
      } catch (error) {
        console.log('방문상담신청 못 부름', error);
      }
    };
    getMypageVisitRequestListAction();
  }, []);

  // selectedCategory에 따라 데이터 선택
  const filteredData = selectedCategory === "온라인 문의" ? qnaList : visitRequestList;

  // 검색어를 포함한 데이터 필터링
  const filteredSearchData = filteredData.filter(post =>
    post.qnaTitle?.toLowerCase().includes(searchQuery.toLowerCase()) ||
    post.visitPurpose?.toLowerCase().includes(searchQuery.toLowerCase())
  );

  // 페이지에 해당하는 데이터 계산
  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = filteredSearchData.slice(indexOfFirstItem, indexOfLastItem);

  const totalPages = Math.ceil(filteredSearchData.length / itemsPerPage);

  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  const tabs = [
    { label: "온라인 문의", category: "온라인 문의" },
    { label: "방문상담 신청", category: "방문상담 신청" }
  ];

  const handleTabClick = (category) => {
    setSelectedCategory(category);
    setCurrentPage(1); // 탭 변경 시 첫 페이지로 돌아가도록 설정
  };

  const handleSearch = (query) => {
    setSearchQuery(query);
    setCurrentPage(1); // 검색 시 첫 페이지로 돌아가도록 설정
  };

  return (
    <div style={{ gridArea: gridArea }}>
      <div className={styles.mpcontainer}>
        <div className={styles.SearchBar}>
          <SearchBar 
            placeholder={"글 내용 & 글 제목"} 
            width="300px" 
            onSearch={handleSearch} 
          />
        </div>
        <div className={styles.subNaviBar}>
          <SubNaviBar tabs={tabs} onTabClick={handleTabClick} />
        </div>

        <div className={styles.content2}>
          {/* 데이터가 없을 경우 "문의 없음" 표시 */}
          {currentItems.length === 0 ? (
            <h1>문의 없음</h1>
          ) : (
            <table className={styles.table}>
              <thead>
                <tr>
                  {selectedCategory === "온라인 문의" && (
                    <>
                      <th>글번호</th>
                      <th>제목</th>
                      <th>작성일</th>
                      <th>답변상태</th>
                    </>
                  )}
                  {selectedCategory === "방문상담 신청" && (
                    <>
                      <th>글번호</th>
                      <th>연락처</th>
                      <th>상담 목적</th>
                      <th>예약일</th>
                    </>
                  )}
                </tr>
              </thead>
              <tbody>
                {/* 필터링된 데이터 출력 */}
                {currentItems.map((post, index) => (
                  <tr key={index}>
                    {selectedCategory === "온라인 문의" && (
                      <>
                        <td>{post.qnaId}</td>
                        <td>
                          <Link to={`/customer_qna/result/${post.qnaUid}`} style={{ textDecoration: 'none', color: 'inherit', fontWeight: 'normal' }}>
                            {post.qnaTitle}
                          </Link>
                        </td>
                        <td>{formatDate(post.qnaCreatedAt)}</td>
                        <td>{post.qnaState === "ANSCOMPLETE" ? "답변완료" : "답변대기"}</td>
                      </>
                    )}
                    {selectedCategory === "방문상담 신청" && (
                      <>
                        <td>{post.requestId}</td>
                        <td>{post.phoneNum}</td>
                        <td>{post.visitPurpose}</td>
                        <td>{post.visitDate}</td>
                      </>
                    )}
                  </tr>
                ))}
              </tbody>
            </table>
          )}
          
          {/* 페이징 처리 */}
          <div className={styles.pagination}>
            {Array.from({ length: totalPages }, (_, index) => (
              <button
                key={index}
                className={styles.pageButton}
                onClick={() => handlePageChange(index + 1)}
                style={{
                  color: currentPage === index + 1 ? "var(--main-color)" : "black"
                }}
              >
                {index + 1}
              </button>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default UserReservation;
