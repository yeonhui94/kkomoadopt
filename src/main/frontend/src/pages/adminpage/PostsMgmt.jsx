import { useState } from "react";
import styles from "../mypage/MyPage.module.css";
import SearchBar from "../../components/SearchBar";
import Pagenumber from "../../components/pagenumber/Pagenumber";
import CheckBox from "../../components/CheckBox";  // CheckBox 임포트
import SubNaviBar from "../../components/MyPage/SubNavi/SubNaviBar";
import Button from "../../components/Button/Button";
import { useEffect } from "react";
import Modal from "../../components/Modal/Modal";
import { Link } from "react-router-dom";
import {useStore as CommunityPostStore2} from "../../stores/CommunityPostStore2/useStore"

function PostsMgmt({ gridArea }) {
  const [currentPage, setCurrentPage] = useState(1); // 현재 페이지 상태
  const [selectedCategory, setSelectedCategory] = useState("글");  // 초기값을 "전체"로 설정
  const [searchQuery, setSearchQuery] = useState('');
  const [checkedItems, setCheckedItems] = useState({});  // 체크박스 상태를 관리
  const [selectAll, setSelectAll] = useState(false);
  const [selectedSubCategory, setSelectedSubCategory] = useState("");
  const [filteredData, setFilteredData] = useState([]);
  const [isInfoModalOpen, setIsInfoModalOpen] = useState(false);
  const openInfoModal = () => setIsInfoModalOpen(true);
  const closeInfoModal = () => setIsInfoModalOpen(false);
  const [selectedReason, setSelectedReason] = useState("욕설");
  // const [allPosts, setAllPosts] = useState([ // 모든 게시물 상태로 관리

    
  //   { id: 1, category1: "아이를 찾습니다",adress:"community/find-child", title: "광진구에서 실종", date: "2024-11-28", nickname: "user1", reason: "욕설", category: "삭제된 글" },
  //   { id: 2, category1: "입양후기",adress:"community/adoption-review", title: "인삼이 너무 기여워요", date: "2024-11-27", nickname: "user2", reason: "음담패설", category: "삭제된 댓글" },
  //   { id: 3, category1: "사고팝니다",adress:"community/resell", title: "목줄 판매합니다", date: "2024-11-26", nickname: "user3", reason: "", category: "댓글" },
  //   { id: 4, category1: "신고합니다",adress:"community/report", title: "체리콕", date: "2024-11-25", nickname: "user4",reason: "광고", category: "삭제된 글" },
  //   { id: 5, category1: "아이를 찾습니다",adress:"community/find-child",title: "서울에서 실종", date: "2024-11-24", nickname: "user5", reason: "", category: "글" },
  //   { id: 6, category1: "입양후기",adress:"community/adoption-review", title: "애플이가 너무 귀엽다", date: "2024-11-23", nickname: "user6", reason: "관련없는내용", category: "삭제된 댓글" },
  //   { id: 7, category1: "사고팝니다",adress:"community/resell", title: "배변패드 무료 나눔", date: "2024-11-22", nickname: "user7", reason: "기타", category: "삭제된 글" },
  //   { id: 8, category1: "신고합니다",adress:"community/report", title: "스팸 메시지", date: "2024-11-21", nickname: "user8",reason: "", category: "댓글" },
  //   { id: 9, category1: "아이를 찾습니다",adress:"community/find-child", title: "경기에서 실종", date: "2024-11-20",nickname: "user9",  reason: "", category: "댓글" },
  //   { id: 10, category1: "공지사항",adress:"community/", title: "사이트 점검 안내", date: "2024-11-19", nickname: "admin", reason: "", category: "글" },
  //   { id: 11, category1: "입양후기",adress:"community/adoption-review", title: "회원가입 방법", date: "2024-11-18",  nickname: "admin", reason: "", category: "글" },
  //   { id: 12, category1: "아이를 찾습니다",adress:"community/find-child", title: "아이를 찾습니다", date: "2024-11-17",  nickname: "user10",reason: "", category: "글" }
  // ]);
  const [allPosts, setAllPosts] = useState([
    { id: 1, category1: "아이를 찾습니다", adress: "community/find-child", title: "부산에서 실종", date: "2024-11-30", nickname: "john23", reason: "욕설", category: "삭제된 글" },
    { id: 2, category1: "입양후기", adress: "community/adoption-review", title: "감동적인 입양 후기", date: "2024-11-29", nickname: "emma45", reason: "음란성 발언", category: "삭제된 댓글" },
    { id: 3, category1: "사고팝니다", adress: "community/resell", title: "애견 용품 판매", date: "2024-11-28", nickname: "liam78", reason: "", category: "댓글" },
    { id: 4, category1: "신고합니다", adress: "community/report", title: "광고 신고합니다", date: "2024-11-27", nickname: "olivia56", reason: "스팸", category: "삭제된 글" },
    { id: 5, category1: "아이를 찾습니다", adress: "find-child/post/289ef17d-9619-417e-ae86-0fbd06ed0d18", title: "서울 강남구에서 실종된 고양이 찾습니다!", date: "2024. 11. 25.", nickname: "jackson123", reason: "", category: "글" },
    { id: 6, category1: "입양후기", adress: "adoption-review/post/b4189de4-8e1b-483a-97f1-4d0cdbe7b934", title: "입양한 강아지가 가족이 되기까지", date: "2024. 12. 3.", nickname: "lucas789", reason: "", category: "글" },
    { id: 7, category1: "사고팝니다", adress: "community/resell", title: "중고 강아지 집 나눔", date: "2024-11-24", nickname: "james88", reason: "기타", category: "삭제된 글" },
    { id: 9, category1: "신고합니다", adress: "community/report", title: "부적절한 글 신고", date: "2024-11-23", nickname: "isabella34", reason: "", category: "댓글" },
    { id: 8, category1: "신고합니다", adress: "report/post/95007f19-3e4b-4bf1-9dfa-12151aff3311", title: "길고양이 집단 학대 정황 신고합니다", date: "2024. 12. 2.", nickname: " lily789", reason: "", category: "글" },
    { id: 11, category1: "입양후기", adress: "community/adoption-review", title: "입양 후 행복한 삶", date: "2024-11-21", nickname: "ava67", reason: "", category: "글" },
    { id: 10, category1: "사고팝니다", adress: "resell/post/725718b1-d7e6-4f49-9402-4aff71d13584", title: "고양이 자동 급식기 판매합니다", date: "2024. 12. 3.", nickname: "james1123", reason: "", category: "글" },
    { id: 12, category1: "신고합니다", adress: "community/report", title: "욕설 댓글 신고", date: "2024-11-19", nickname: "emma45", reason: "욕설", category: "삭제된 댓글" },
    { id: 13, category1: "아이를 찾습니다", adress: "community/find-child", title: "고양이 실종", date: "2024-11-18", nickname: "liam78", reason: "", category: "글" },
    { id: 14, category1: "입양후기", adress: "community/adoption-review", title: "새로운 가족을 맞이했어요", date: "2024-11-17", nickname: "olivia56", reason: "", category: "댓글" },
    { id: 15, category1: "사고팝니다", adress: "community/resell", title: "중고 펫 용품 팝니다", date: "2024-11-16", nickname: "noah91", reason: "광고", category: "삭제된 글" },
    { id: 16, category1: "신고합니다", adress: "community/report", title: "게시물 허위 신고", date: "2024-11-15", nickname: "sophia12", reason: "", category: "댓글" },
    { id: 18, category1: "입양후기", adress: "community/adoption-review", title: "이렇게 귀여울 수가!", date: "2024-11-13", nickname: "james88", reason: "관련 없는 내용", category: "삭제된 댓글" },
    { id: 19, category1: "사고팝니다", adress: "community/resell", title: "강아지 사료 판매", date: "2024-11-12", nickname: "isabella34", reason: "", category: "댓글" },
    { id: 20, category1: "아이를 찾습니다", adress: "community/find-child", title: "마포구에서 실종", date: "2024-11-11", nickname: "mason56", reason: "", category: "글" },
    { id: 21, category1: "입양후기", adress: "community/adoption-review", title: "입양 후 첫 소감", date: "2024-11-10", nickname: "ava67", reason: "불필요한 논란", category: "삭제된 댓글" },
  { id: 22, category1: "사고팝니다", adress: "community/resell", title: "애견 침대 팝니다", date: "2024-11-09", nickname: "john23", reason: "부적절한 사진", category: "삭제된 글" },
  { id: 23, category1: "신고합니다", adress: "community/report", title: "스팸 댓글 신고", date: "2024-11-08", nickname: "emma45", reason: "", category: "댓글" },
  { id: 24, category1: "아이를 찾습니다", adress: "community/find-child", title: "강북구에서 실종", date: "2024-11-07", nickname: "liam78", reason: "", category: "댓글" },
  { id: 25, category1: "입양후기", adress: "community/adoption-review", title: "행복한 입양 이야기", date: "2024-11-06", nickname: "olivia56", reason: "과도한 광고성 내용", category: "삭제된 댓글" },
  { id: 26, category1: "사고팝니다", adress: "community/resell", title: "애완견 용품 중고 나눔", date: "2024-11-05", nickname: "noah91", reason: "", category: "글" },
  { id: 27, category1: "신고합니다", adress: "community/report", title: "허위 정보 신고", date: "2024-11-04", nickname: "sophia12", reason: "허위 정보", category: "삭제된 글" },
  { id: 28, category1: "아이를 찾습니다", adress: "community/find-child", title: "대전에서 실종", date: "2024-11-03", nickname: "james88", reason: "", category: "글" },
  { id: 29, category1: "입양후기", adress: "community/adoption-review", title: "우리 집 강아지가 최고!", date: "2024-11-02", nickname: "isabella34", reason: "기타", category: "삭제된 댓글" },
  { id: 30, category1: "사고팝니다", adress: "community/resell", title: "고급 애견 미용도구 팝니다", date: "2024-11-01", nickname: "mason56", reason: "", category: "댓글" },
  { id: 31, category1: "신고합니다", adress: "community/report", title: "비방 글 신고", date: "2024-11-01", nickname: "emma45", reason: "", category: "댓글" },
  { id: 32, category1: "아이를 찾습니다", adress: "community/find-child", title: "청주에서 실종", date: "2024-11-01", nickname: "liam78", reason: "", category: "댓글" },
  { id: 33, category1: "입양후기", adress: "community/adoption-review", title: "입양 후 달라진 생활", date: "2024-11-01", nickname: "ava67", reason: "", category: "글" },
  { id: 34, category1: "사고팝니다", adress: "community/resell", title: "배변패드 나눔", date: "2024-11-01", nickname: "john23", reason: "", category: "글" },
  { id: 35, category1: "신고합니다", adress: "community/report", title: "욕설 댓글 신고", date: "2024-11-01", nickname: "olivia56", reason: "비방성 내용", category: "삭제된 댓글" },
  { id: 36, category1: "아이를 찾습니다", adress: "community/find-child", title: "대구에서 실종", date: "2024-11-01", nickname: "noah91", reason: "", category: "글" },
  { id: 37, category1: "입양후기", adress: "community/adoption-review", title: "입양 후 가족과의 시간", date: "2024-11-01", nickname: "sophia12", reason: "부적절한 내용", category: "삭제된 글" },
  { id: 38, category1: "사고팝니다", adress: "community/resell", title: "중고 강아지 목줄", date: "2024-11-01", nickname: "james88", reason: "", category: "댓글" },
  { id: 39, category1: "신고합니다", adress: "community/report", title: "허위 정보 신고", date: "2024-11-01", nickname: "isabella34", reason: "부적절한 내용", category: "삭제된 글" },
  { id: 40, category1: "아이를 찾습니다", adress: "community/find-child", title: "용산구에서 실종", date: "2024-11-01", nickname: "mason56", reason: "", category: "글" }
  ])

  useEffect(() => {
    const updatedFilteredData = allPosts.filter(post =>
      // Category 필터링
      (selectedCategory === "글" ? post.category === "글" : post.category === selectedCategory) &&
      // SubCategory가 "카테고리"일 경우 모든 데이터를 보여줌
      (selectedSubCategory === "카테고리" || !selectedSubCategory || post.category1 === selectedSubCategory) &&
      // 검색어 필터링
      (post.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        post.id?.toString().includes(searchQuery.toLowerCase()))
    );
  
    setFilteredData(updatedFilteredData); // 필터링된 데이터를 상태로 저장
  }, [selectedCategory, selectedSubCategory, searchQuery]);

  const handleSubCategory = (e) => {
    const subCategory = e.target.value; // 선택된 서브 카테고리 값
    setSelectedSubCategory(subCategory); // 선택된 카테고리를 상태로 업데이트
    // 선택된 카테고리에 맞는 데이터 필터링
    const filteredDatas = currentPosts.filter(post => post.category1 === subCategory);
    setCurrentPage(1); // 페이지 번호를 초기화
  };

  // 백엔드에서 연동해서 처리해야한다. 생각을 해보라 하시는데..
  // 페이지당 보여지는 글 수
  const postsPerPage = 8;
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
    console.log('Updated Checked Items:', { ...checkedItems, [id]: !checkedItems[id] });
    setCheckedItems((prevState) => ({
      ...prevState,
      [id]: !prevState[id],
    }));
  };

  const handleDelete = () => {
    const selectedIds = Object.keys(checkedItems).filter(id => checkedItems[id]);
  
    // allPosts에서 삭제할 항목 제외
    const updatedPosts = allPosts.map(post => {
      if (selectedIds.includes(post.id.toString())) {
        if (post.category === "글" || post.category === "댓글") {
          // selectedReason이 정상적으로 업데이트되었는지 확인
          console.log('Deleting Post:', post.id, 'Reason:', selectedReason);
          return { ...post, reason: selectedReason, category: post.category === "글" ? "삭제된 글" : "삭제된 댓글" };
        }
      }
      closeInfoModal();
      return post;
    });
  
    // allPosts 상태를 업데이트하여 삭제된 항목을 반영
    setAllPosts(updatedPosts);  
  
    // 필터링된 데이터를 다시 계산하여 업데이트
    const updatedFilteredData = updatedPosts.filter(post =>
      (selectedCategory === "글" ? post.category === "글" : post.category === selectedCategory) &&
      (selectedSubCategory === "카테고리" || !selectedSubCategory || post.category1 === selectedSubCategory) &&
      (post.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        post.id?.toString().includes(searchQuery.toLowerCase()))
    );
    setFilteredData(updatedFilteredData); // 필터링된 데이터 상태 업데이트
    // 체크박스 초기화
    setCheckedItems({});  
    setSelectAll(false);  
    setCurrentPage(1);  // 페이지 번호 초기화
  };

  const handleBtn1 = (e) => {
    e.preventDefault();
    openInfoModal();
};

  return (
    <div style={{ gridArea: gridArea }}>
      <div className={styles.mpcontainer}>
        <div className={styles.SearchBar}>
          <SearchBar
            placeholder={"글번호 & 제목"}
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
                <th><select name="category1" id="category1"
                  style={{ border: "none", fontSize: "15px", fontWeight: "bold" }}
                  onChange={handleSubCategory}>
                  <option value="카테고리">카테고리</option>
                  <option value="아이를 찾습니다">아이를 찾습니다</option>
                  <option value="입양후기">입양후기</option>
                  <option value="사고팝니다">사고팝니다</option>
                  <option value="신고합니다">신고합니다</option>
                  <option value="공지사항">공지사항</option>
                </select></th>
                <th>글번호</th>
                <th>제목</th>
                <th>작성자</th>
                <th>작성일</th>
                {}
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
                    <td><Link to={`/${post.adress}`} style={{ textDecoration: 'none', color: 'inherit' , fontWeight:'normal' }}>
                        {post.title}
                      </Link></td>
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

        {/* <div className={styles.pgnum}>
          <Pagenumber
            totalPages={totalPages}
            currentPage={currentPage}
            handlePageClick={setCurrentPage}
          />
        </div> */}
        <div className={styles.pagination}>
  {/* 이전 페이지 버튼 */}
          {/* 숫자 버튼 */}
          {Array.from({ length: totalPages }, (_, index) => {
            const pageNumber = index + 1; // 페이지 번호
            return (
              <button
                key={pageNumber}
                onClick={() => handlePageClick(pageNumber)}
                style={{
                  color: currentPage === pageNumber ? "var(--main-color)" : "inherit",
                  fontWeight: currentPage === pageNumber ? "bold" : "normal",
                  border: "none",
                  background: "transparent",
                  cursor: "pointer",
                  margin: "0 5px",
                }}
              >
                {pageNumber}
              </button>
            );
          })}

          {/* 다음 페이지 버튼 */}

        </div>

        <div className={styles.adminbtn}>
            <Button text={"삭제"} onClick={handleBtn1} />
      </div>

      <Modal
                isOpen={isInfoModalOpen}
                closeModal={closeInfoModal}
                modalText={"수정 하시겠습니까?"}
                inPut={
                    <><div>
                            <label> 사유를 선택하세요 ▼</label><br />
                            <select onChange={(e) => setSelectedReason(e.target.value)}
                              value={selectedReason}>
                                <option value="욕설">욕설</option>
                                <option value="음담패설">음담패설</option>
                                <option value="광고">광고</option>
                                <option value="관련없는 내용">관련없는 내용</option>
                                <option value="기타">기타</option>
                            </select>
                        </div>
                    </>}
                confirmText={"확인"}
                cancelText={"취소"}
                onConfirm={handleDelete}
            />

      </div>
    </div>
  );
}

export default PostsMgmt;
