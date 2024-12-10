import { useState, useEffect } from "react";
import styles from "../../Review.module.css";
import SearchBar from "../../../components/SearchBar";
import Divider from "../../../components/Divider";
import Dropdown from "../../../components/DropDown";
import comstyle from '../CommunityWt.module.css';
import Button from "../../../components/Button/Button";
import Pagenumber from "../../../components/pagenumber/Pagenumber";
import { Link } from "react-router-dom";

const Report = ({ gridArea }) => {

  const [sortOption, setSortOption] = useState("전체보기");
  const [currentPage, setCurrentPage] = useState(1);
  const [searchQuery, setSearchQuery] = useState(""); // 검색어 상태 추가

  const postsPerPage = 10;

  const [allPosts, setAllposts] = useState([ 
    { id: 1, title: "새 게시물 제목", admin: "짱구는", date: new Date("2024-11-25"), views: 5, files: 2, target: "sangil0528", reportpostnum: 334, content: "악플이 달렸어요 ㅠㅠ" },
    { id: 2, title: "새 게시물 제목 2", admin: "집갈래", date: new Date("2024-10-25"), views: 4, files: 2, target: "100wincattle", reportpostnum: 335, content: "누가 이런 글을 썼나요?" },
    { id: 3, title: "새 게시물 제목 3", admin: "고소연하게", date: new Date("2024-09-25"), views: 10, files: 2, target: "sangil0528", reportpostnum: 336, content: "이 글이 너무 마음에 안 들어요." },
    { id: 4, title: "새 게시물 제목 4@", admin: "규카츠온", date: new Date("2024-08-25"), views: 50, files: 2, target: "100wincattle", reportpostnum: 337, content: "댓글이 너무 비판적이에요!" },
    { id: 5, title: "새 게시물 제목 5", admin: "레일라온", date: new Date("2024-07-25"), views: 0, files: 2, target: "sangil0528", reportpostnum: 338, content: "이거 정말 문제 있는 글 같아요." },
    { id: 6, title: "새 게시물 제목 6", admin: "닝ㄴ잉", date: new Date("2024-06-25"), views: 7, files: 2, target: "100wincattle", reportpostnum: 339, content: "이건 너무한 댓글이에요!" },
    { id: 7, title: "새 게시물 제목 7", admin: "문상만원", date: new Date("2024-05-25"), views: 23, files: 2, target: "sangil0528", reportpostnum: 340, content: "악플이 달렸어요 ㅠㅠ" },
    { id: 8, title: "새 게시물 제목 8", admin: "재헌*5", date: new Date("2024-04-25"), views: 15, files: 2, target: "100wincattle", reportpostnum: 341, content: "누가 이런 글을 썼나요?" },
    { id: 9, title: "새 게시물 제목 9@", admin: "작은지", date: new Date("2024-03-25"), views: 4, files: 2, target: "sangil0528", reportpostnum: 342, content: "이 글이 너무 마음에 안 들어요." },
    { id: 10, title: "새 게시물 제목 10@", admin: "큰은지", date: new Date("2024-02-25"), views: 1, files: 2, target: "100wincattle", reportpostnum: 343, content: "댓글이 너무 비판적이에요!" },
    { id: 11, title: "새 게시물 제목 11", admin: "연금술사", date: new Date("2024-01-15"), views: 14, files: 2, target: "sangil0528", reportpostnum: 344, content: "이거 정말 문제 있는 글 같아요." },
    { id: 12, title: "새 게시물 제목 12", admin: "무지개추격자", date: new Date("2023-12-10"), views: 30, files: 2, target: "100wincattle", reportpostnum: 345, content: "이건 너무한 댓글이에요!" },
    { id: 13, title: "새 게시물 제목 13", admin: "시간루팡", date: new Date("2023-11-05"), views: 5, files: 2, target: "sangil0528", reportpostnum: 346, content: "악플이 달렸어요 ㅠㅠ" },
    { id: 14, title: "새 게시물 제목 14", admin: "포슬핑", date: new Date("2023-10-10"), views: 25, files: 2, target: "100wincattle", reportpostnum: 347, content: "누가 이런 글을 썼나요?" },
    { id: 15, title: "새 게시물 제목 15", admin: "졸령", date: new Date("2023-09-20"), views: 12, files: 2, target: "sangil0528", reportpostnum: 348, content: "이 글이 너무 마음에 안 들어요." },
    { id: 16, title: "새 게시물 제목 16", admin: "피고냉", date: new Date("2023-08-18"), views: 9, files: 2, target: "100wincattle", reportpostnum: 349, content: "댓글이 너무 비판적이에요!" },
    { id: 17, title: "새 게시물 제목 17", admin: "도토리행성주민", date: new Date("2023-07-11"), views: 3, files: 2, target: "sangil0528", reportpostnum: 350, content: "이거 정말 문제 있는 글 같아요." },
    { id: 18, title: "새 게시물 제목 18", admin: "혜린온귀여웡", date: new Date("2023-06-22"), views: 18, files: 2, target: "100wincattle", reportpostnum: 351, content: "이건 너무한 댓글이에요!" },
    { id: 19, title: "새 게시물 제목 19", admin: "호유동", date: new Date("2023-05-15"), views: 20, files: 2, target: "sangil0528", reportpostnum: 352, content: "악플이 달렸어요 ㅠㅠ" },
    { id: 20, title: "새 게시물 제목 20@", admin: "햄스퉈", date: new Date("2023-04-05"), views: 13, files: 2, target: "100wincattle", reportpostnum: 353, content: "누가 이런 글을 썼나요?" },
    { id: 21, title: "새 게시물 제목 21", admin: "수혀나뮤직큐", date: new Date("2023-03-02"), views: 30, files: 2, target: "sangil0528", reportpostnum: 354, content: "이 글이 너무 마음에 안 들어요." },
    { id: 22, title: "새 게시물 제목 22", admin: "집에가고시퍼", date: new Date("2023-02-18"), views: 8, files: 2, target: "100wincattle", reportpostnum: 355, content: "댓글이 너무 비판적이에요!" },
    { id: 23, title: "새 게시물 제목 23", admin: "소고기", date: new Date("2023-01-12"), views: 6, files: 2, target: "sangil0528", reportpostnum: 356, content: "이거 정말 문제 있는 글 같아요." },
    { id: 24, title: "새 게시물 제목 24", admin: "gpt바보", date: new Date("2022-12-05"), views: 17, files: 2, target: "100wincattle", reportpostnum: 357, content: "이건 너무한 댓글이에요!" },
    { id: 25, title: "새 게시물 제목 25", admin: "안드로이드몽상가", date: new Date("2022-11-21"), views: 27, files: 2, target: "sangil0528", reportpostnum: 358, content: "악플이 달렸어요 ㅠㅠ" },
    { id: 26, title: "새 게시물 제목 26", admin: "개굴", date: new Date("2022-10-15"), views: 19, files: 2, target: "100wincattle", reportpostnum: 359, content: "누가 이런 글을 썼나요?" },
    { id: 27, title: "새 게시물 제목 27", admin: "캬핳", date: new Date("2022-09-10"), views: 2, files: 2, target: "sangil0528", reportpostnum: 360, content: "이 글이 너무 마음에 안 들어요." }
]); 


  const options = ["전체보기", "최신 순", "오래된 순", "조회 수 높은 순", "조회 수 낮은 순"];

  // 게시물 추가
  const addPost = (newPost) => {
    setAllposts([newPost, ...allPosts]); // 새로운 게시물을 맨 앞에 추가
  };
  
  // 전체 페이지 수 계산
  const totalPages = Math.ceil(allPosts.length / postsPerPage);

  // 게시물 필터링 (검색어에 맞는 게시물만 필터링)
  const filteredPosts = allPosts.filter(post => 
    post.title.toLowerCase().includes(searchQuery.toLowerCase()) || 
    post.admin.toLowerCase().includes(searchQuery.toLowerCase())
  );

  // 현재 페이지에 해당하는 게시물 계산
  const startIndex = (currentPage - 1) * postsPerPage; // 시작 인덱스
  const endIndex = startIndex + postsPerPage; // 끝 인덱스
  const currentPosts = filteredPosts.slice(startIndex, endIndex) || []; // 현재 페이지 게시물

  // 페이지 이동 함수
  const handlePageClick = (page) => {
    setCurrentPage(page); // 클릭한 페이지로 이동
  };

  // 검색어 변경 시 호출되는 함수
  const handleSearch = (query) => {
    setSearchQuery(query); // 검색어 상태 업데이트
  };

  const handleSort = (option) => {
    setSortOption(option);
  
    const sortedPosts = [...allPosts];
    if (option === "최신 순") {
      sortedPosts.sort((a, b) => b.date - a.date);
    } else if (option === "오래된 순") {
      sortedPosts.sort((a, b) => a.date - b.date);
    } else if (option === "조회 수 높은 순") {
      sortedPosts.sort((a, b) => b.views - a.views);
    } else if (option === "조회 수 낮은 순") {
      sortedPosts.sort((a, b) => a.views - b.views);
    }
    setAllposts(sortedPosts); // setPosts 대신 사용
  };

  return (
    <div style={{ gridArea }} className={comstyle.posts_container}>
    <div className={`${styles.rwsubcontainer2} ${comstyle.inputdrop}`}>
      <Dropdown options={options} onChange={handleSort} />
      <SearchBar placeholder={"글 내용 & 글 제목"} width="300px" onSearch={handleSearch} />
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
      <ul className={`${comstyle.postsbox}`}>
        {currentPosts.map((post) => (
          <Link to={`/report/post/${post.id}`} key={post.id}>
          <li key={post.id} className={comstyle.post}>
            <p className={comstyle.postnumli}>{post.id}</p>
            <p className={comstyle.titleli}>{post.title}</p>
            <p className={comstyle.adminli}>{post.admin}</p>
            <p className={comstyle.dateli}>{post.date.toLocaleDateString("ko-KR")}</p>
            <p className={comstyle.viewsli}>{post.views}</p>
            {/* {post.files && <p>첨부파일: {post.files}개</p>} */}
  
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
         totalPages={totalPages} 
         currentPage={currentPage} 
         handlePageClick={handlePageClick} 
        />
      </div>
      <Link to="/commu_report_wt" className={comstyle.report_btn}>
        <Button text={"글쓰기"} width={"100px"} />
      </Link>
    </div>
  </div>
 
  );
};

export default Report;
