import { useState, useEffect } from "react";
import styles from "../../Review.module.css";
import SearchBar from "../../../components/SearchBar";
import Divider from "../../../components/Divider";
import Dropdown2 from "../../../components/DropDown2";
import comstyle from '../CommunityWt.module.css';
import Button from "../../../components/Button/Button";
import Pagenumber from "../../../components/pagenumber/Pagenumber";
import { Link, useLocation } from "react-router-dom";
import { useStore } from "../../../stores/CommunityPostStore2/useStore";
import { readCommunityPostsByCategory } from "../../../stores/CommunityPostStore2/action";
import { formatDate } from "../../../utils/formattedDate";

const Announcement = ({ gridArea }) => {
  const { state: communityState, actions: communityActions } = useStore();
  const [sortOption, setSortOption] = useState("전체보기");
  const [currentPage, setCurrentPage] = useState(1);
  const [searchQuery, setSearchQuery] = useState(""); // 검색어 상태 추가
  const postsPerPage = 10;
   const user = JSON.parse(localStorage.getItem('user')); // 로컬스토리지에서 user 정보 가져오기
  const options = ["전체보기", "최신 순", "오래된 순", "조회 수 높은 순", "조회 수 낮은 순"];
  const location = useLocation(); // 현재 경로를 가져옴
  const isAdminPage = location.pathname.includes('admin'); // 경로가 admin으로 포함되어 있는지 확인

  // 페이지 이동 함수
  const handlePageClick = (page) => {
    setCurrentPage(page); // 클릭한 페이지로 이동
  };

  // 검색어 변경 시 호출되는 함수
  const handleSearch = (query) => {
    setSearchQuery(query); // 검색어 상태 업데이트
  };

  // 정렬 처리 함수
  const handleSort = (option) => {
    setSortOption(option); // 정렬 옵션 업데이트
  };

  // 전체 게시물 필터링
  const filteredPosts = (communityState.communityPosts || []).filter(post => {
    const postTitle = post.postTitle ? post.postTitle.toLowerCase() : ''; // 안전하게 비교
    const postContent = post.postContent ? post.postContent.toLowerCase() : ''; // 안전하게 비교
    const query = searchQuery.toLowerCase().trim(); // 검색어 소문자 및 공백 제거
    return postTitle.includes(query) || postContent.includes(query); // 필터링 조건
  });

  // 정렬된 게시물 계산
  const sortedPosts = () => {
    let sortedPosts = [...filteredPosts];

    if (sortOption === "최신 순") {
      sortedPosts.sort((a, b) => new Date(b.postCreatedAt) - new Date(a.postCreatedAt)); // 최신순
    } else if (sortOption === "오래된 순") {
      sortedPosts.sort((a, b) => new Date(a.postCreatedAt) - new Date(b.postCreatedAt)); // 오래된 순
    } else if (sortOption === "조회 수 높은 순") {
      sortedPosts.sort((a, b) => b.postViewCount - a.postViewCount); // 조회 수 높은 순
    } else if (sortOption === "조회 수 낮은 순") {
      sortedPosts.sort((a, b) => a.postViewCount - b.postViewCount); // 조회 수 낮은 순
    }

    return sortedPosts;
  };

  // 현재 페이지에 해당하는 게시물 계산
  const startIndex = (currentPage - 1) * postsPerPage; // 시작 인덱스
  const endIndex = startIndex + postsPerPage; // 끝 인덱스
  const currentPosts = sortedPosts().slice(startIndex, endIndex); // 현재 페이지 게시물

  // 커뮤니티 게시물 로딩
  useEffect(() => {
    // communityState.communityPosts가 비어있을 때만 데이터를 불러오도록
    if (communityState.communityPosts.length === 0) {
      const fetchPosts = async () => {
        try {
          console.log("데이터 요청 시작");
          await communityActions.readCommunityPostsByCategory("announcement");
        } catch (error) {
          console.error("데이터 불러오기 실패:", error);
        }
      };
      fetchPosts();
    }
  }, [communityActions, communityState.communityPosts.length]); // communityState.communityPosts.length가 변할 때만 실행되도록

  return (
    <div style={{ gridArea }} className={comstyle.posts_container}>
      <div className={`${styles.rwsubcontainer2} ${comstyle.inputdrop}`}>
        <Dropdown2 options={options} onChange={handleSort} />
        <SearchBar placeholder={"글 내용 & 글 제목"} width="300px" onSearch={(value) => handleSearch(value)} />
      </div>
      <div className={comstyle.lin}>
        <Divider height={"2px"} width={"100%"} backgroundColor={"var(--line-color)"} />
      </div>
      <div className={comstyle.subbar_post}>
        <p className={comstyle.postnum}>번호</p>
        <p className={comstyle.title}>제목</p>
        <p className={comstyle.admin}>작성자</p>
        <p className={comstyle.date}>작성일</p>
        <p className={comstyle.views}>조회수</p>
      </div>
      <div className={comstyle.lin2}>
        <Divider height={"2px"} width={"100%"} backgroundColor={"#E5E5E5"} />
      </div>

      {currentPosts.length > 0 ? (
        <ul className={comstyle.postsbox}>
          {currentPosts.map((post, index) => (
            <Link to={`/announce/post/${post.postUid}`} key={post.id}>
              <li key={post.postUid} className={comstyle.post}>
                <p className={comstyle.postnumli}>{post.postId}</p>
                <p className={comstyle.titleli}>{post.postTitle}</p>
                <p className={comstyle.adminli}>{post.postAuthor}</p>
                <p className={comstyle.dateli}>{formatDate(post.postCreatedAt)}</p>
                <p className={comstyle.viewsli}>{post.postViewCount}</p>
              </li>
            </Link>
          ))}
        </ul>
      ) : (
        <p className={comstyle.postsbox}> <br /><br /> 등록된 게시물이 없습니다.</p>
      )}

      <div className={comstyle.buttondiv}>
        <div className={comstyle.pagenum}>
          <Pagenumber
            totalPages={Math.ceil(filteredPosts.length / postsPerPage)}
            currentPage={currentPage}
            handlePageClick={handlePageClick}
          />
        </div>
        {/* ADMIN 권한일 때만 글쓰기 버튼 표시 */}
                {user?.authority === "ADMIN" && (
                  <Link to="/commu_announce_wt" className={comstyle.report_btn}>
                    <Button text={"글쓰기"} width={"100px"} />
                  </Link>
        )}
      </div>
    </div>
  );
};

export default Announcement;
