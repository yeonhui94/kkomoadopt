import { useState, useEffect } from "react";
import styles from "../../Review.module.css";
import SearchBar from "../../../components/SearchBar";
import Divider from "../../../components/Divider";
import Dropdown from "../../../components/DropDown";
import comstyle from '../CommunityWt.module.css';
import Button from "../../../components/Button/Button";
import Pagenumber from "../../../components/pagenumber/Pagenumber";

const Announcement = ({ gridArea }) => {

  const [sortOption, setSortOption] = useState("전체보기");
  const [currentPage, setCurrentPage] = useState(1);
  const postsPerPage = 10;

  const posts = [
    { title: "새 게시물 제목", admin: "관리자", date: new Date("2024-11-25"), views: 5, files: 2 },
    { title: "새 게시물 제목 2", admin: "관리자", date: new Date("2024-10-25"), views: 4, files: 2 },
    { title: "새 게시물 제목 3", admin: "관리자", date: new Date("2024-09-25"), views: 10, files: 2 },
    { title: "새 게시물 제목 4", admin: "관리자", date: new Date("2024-08-25"), views: 50, files: 2 },
    { title: "새 게시물 제목 5", admin: "관리자", date: new Date("2024-07-25"), views: 0, files: 2 },
    { title: "새 게시물 제목 6", admin: "관리자", date: new Date("2024-06-25"), views: 7, files: 2 },
    { title: "새 게시물 제목 7", admin: "관리자", date: new Date("2024-05-25"), views: 23, files: 2 },
    { title: "새 게시물 제목 8", admin: "관리자", date: new Date("2024-04-25"), views: 15, files: 2 },
    { title: "새 게시물 제목 9", admin: "관리자", date: new Date("2024-03-25"), views: 4, files: 2 },
    { title: "새 게시물 제목 10", admin: "관리자", date: new Date("2024-02-25"), views: 1, files: 2 },
    { title: "새 게시물 제목 11", admin: "관리자", date: new Date("2024-01-15"), views: 14, files: 2 },
    { title: "새 게시물 제목 12", admin: "관리자", date: new Date("2023-12-10"), views: 30, files: 2 },
    { title: "새 게시물 제목 13", admin: "관리자", date: new Date("2023-11-05"), views: 5, files: 2 },
    { title: "새 게시물 제목 14", admin: "관리자", date: new Date("2023-10-10"), views: 25, files: 2 },
    { title: "새 게시물 제목 15", admin: "관리자", date: new Date("2023-09-20"), views: 12, files: 2 },
    { title: "새 게시물 제목 16", admin: "관리자", date: new Date("2023-08-18"), views: 9, files: 2 },
    { title: "새 게시물 제목 17", admin: "관리자", date: new Date("2023-07-11"), views: 3, files: 2 },
    { title: "새 게시물 제목 18", admin: "관리자", date: new Date("2023-06-22"), views: 18, files: 2 },
    { title: "새 게시물 제목 19", admin: "관리자", date: new Date("2023-05-15"), views: 20, files: 2 },
    { title: "새 게시물 제목 20", admin: "관리자", date: new Date("2023-04-05"), views: 13, files: 2 },
    { title: "새 게시물 제목 21", admin: "관리자", date: new Date("2023-03-02"), views: 30, files: 2 },
    { title: "새 게시물 제목 22", admin: "관리자", date: new Date("2023-02-18"), views: 8, files: 2 },
    { title: "새 게시물 제목 23", admin: "관리자", date: new Date("2023-01-12"), views: 6, files: 2 },
    { title: "새 게시물 제목 24", admin: "관리자", date: new Date("2022-12-05"), views: 17, files: 2 },
    { title: "새 게시물 제목 25", admin: "관리자", date: new Date("2022-11-21"), views: 27, files: 2 },
    { title: "새 게시물 제목 26", admin: "관리자", date: new Date("2022-10-15"), views: 19, files: 2 },
    { title: "새 게시물 제목 27", admin: "관리자", date: new Date("2022-09-10"), views: 2, files: 2 },
    { title: "새 게시물 제목 28", admin: "관리자", date: new Date("2022-08-01"), views: 22, files: 2 },
    { title: "새 게시물 제목 29", admin: "관리자", date: new Date("2022-07-30"), views: 14, files: 2 },
    { title: "새 게시물 제목 30", admin: "관리자", date: new Date("2022-06-25"), views: 11, files: 2 },
    { title: "새 게시물 제목 31", admin: "관리자", date: new Date("2022-05-18"), views: 18, files: 2 },
    { title: "새 게시물 제목 32", admin: "관리자", date: new Date("2022-04-10"), views: 20, files: 2 },
    { title: "새 게시물 제목 33", admin: "관리자", date: new Date("2022-03-03"), views: 28, files: 2 },
    { title: "새 게시물 제목 34", admin: "관리자", date: new Date("2022-02-22"), views: 16, files: 2 },
    { title: "새 게시물 제목 35", admin: "관리자", date: new Date("2022-01-14"), views: 9, files: 2 },
    { title: "새 게시물 제목 36", admin: "관리자", date: new Date("2021-12-01"), views: 5, files: 2 },
    { title: "새 게시물 제목 37", admin: "관리자", date: new Date("2021-11-25"), views: 8, files: 2 },
    { title: "새 게시물 제목 38", admin: "관리자", date: new Date("2021-10-19"), views: 10, files: 2 },
    { title: "새 게시물 제목 39", admin: "관리자", date: new Date("2021-09-15"), views: 22, files: 2 },
    { title: "새 게시물 제목 40", admin: "관리자", date: new Date("2021-08-08"), views: 13, files: 2 },
    { title: "새 게시물 제목 41", admin: "관리자", date: new Date("2021-07-03"), views: 21, files: 2 },
    { title: "새 게시물 제목 42", admin: "관리자", date: new Date("2021-06-26"), views: 4, files: 2 },
    { title: "새 게시물 제목 43", admin: "관리자", date: new Date("2021-05-22"), views: 6, files: 2 },
    { title: "새 게시물 제목 44", admin: "관리자", date: new Date("2021-04-17"), views: 12, files: 2 },
    { title: "새 게시물 제목 45", admin: "관리자", date: new Date("2021-03-11"), views: 9, files: 2 },
    { title: "새 게시물 제목 46", admin: "관리자", date: new Date("2021-02-08"), views: 14, files: 2 },
    { title: "새 게시물 제목 47", admin: "관리자", date: new Date("2021-01-05"), views: 19, files: 2 },
    { title: "새 게시물 제목 48", admin: "관리자", date: new Date("2020-12-31"), views: 10, files: 2 },
    { title: "새 게시물 제목 49", admin: "관리자", date: new Date("2020-11-25"), views: 18, files: 2 },
    { title: "새 게시물 제목 50", admin: "관리자", date: new Date("2019-09-17"), views :12, files : 2},

  ]

  const options = ["전체보기", "최신 순", "오래된 순", "조회 수 높은 순", "조회 수 낮은 순"];

  // 게시물 추가
  const addPost = (newPost) => {
    setPosts([newPost, ...posts]); // 새로운 게시물을 맨 앞에 추가
  };
  
  // 전체 페이지 수 계산
  const totalPages = Math.ceil(posts.length / postsPerPage);

  // 현재 페이지에 해당하는 게시물 계산
  const startIndex = (currentPage - 1) * postsPerPage; // 시작 인덱스
  const endIndex = startIndex + postsPerPage; // 끝 인덱스
  const currentPosts = posts.slice(startIndex, endIndex); // 현재 페이지 게시물

  // 페이지 이동 함수
  const handlePageClick = (page) => {
    setCurrentPage(page); // 클릭한 페이지로 이동
  };



  const handleSort = (option) => {
    setSortOption(option);

    const sortedPosts = [...posts];
    if (option === "최신 순") {
      sortedPosts.sort((a, b) => b.date - a.date);
    } else if (option === "오래된 순") {
      sortedPosts.sort((a, b) => a.date - b.date);
    } else if (option === "조회 수 높은 순") {
      sortedPosts.sort((a, b) => b.views - a.views);
    } else if (option === "조회 수 낮은 순") {
      sortedPosts.sort((a, b) => a.views - b.views);
    }
    setPosts(sortedPosts);
  };


  return (
    <div style={{ gridArea }} className={comstyle.posts_container}>
      <div className={`${styles.rwsubcontainer2} ${comstyle.inputdrop}`}>
        <Dropdown options={options} onChange={handleSort} />
        <SearchBar placeholder={"글 내용 & 글 제목"} width="300px" />
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

      {posts.length > 0 ? (
        <ul className={`${comstyle.postsbox}`}>
          {currentPosts.map((post, index) => (
            <li key={index} className={comstyle.post}>
              <p className={comstyle.postnumli}>{index + 1}</p>
              <h3 className={comstyle.titleli}>{post.title}</h3>
              <p className={comstyle.adminli}>{post.admin}</p>
              <p className={comstyle.dateli}>{post.date.toISOString().split("T")[0]}</p>
              <p className={comstyle.viewsli}>{post.views}</p>
              {post.files && post.files.length > 0 && (
                <p>첨부파일: {post.files.map(file => file.name).join(", ")}</p>
              )}
            </li>
          ))}
        </ul>
      ) : (
        <p>등록된 게시물이 없습니다.</p>
      )}
      <div className={comstyle.buttondiv}>
        <div className={comstyle.pagenum}>
          <Pagenumber
           totalPages={totalPages} 
           currentPage={currentPage} 
           handlePageClick={handlePageClick} 
          />
        </div>
        <a className={comstyle.report_btn} href="http://localhost:5173/commu-report/communitywt">
        <Button text={"글쓰기"} width={"100px"}/>
        </a>
      </div>
    </div>
  );
};

export default Announcement;
