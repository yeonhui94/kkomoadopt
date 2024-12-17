import { useState, useEffect } from "react";
import styles from "../../Review.module.css";
import SearchBar from "../../../components/SearchBar";
import Divider from "../../../components/Divider";
import Dropdown from "../../../components/DropDown";
import comstyle from '../CommunityWt.module.css';
import Button from "../../../components/Button/Button";
import Pagenumber from "../../../components/pagenumber/Pagenumber";
import { Link, useLocation } from "react-router-dom";
import img3 from "../../../assets/CardImage/3.jpg";
import img9 from "../../../assets/CardImage/9.jpg";
import img11 from "../../../assets/CardImage/11.jpg";
import imgc2 from "../../../assets/CardImage/c2.jpg";
// import { useStore as CommunityStore } from "../../../stores/CommentStore2/useStore";
// import { readCommunityPosts } from "../../../stores/CommunityPostStore2/action";
import { useStore } from "../../../stores/CommunityPostStore2/useStore";
import { readCommunityPostsByCategory } from "../../../stores/CommunityPostStore2/action";



const Announcement = ({ gridArea }) => {
  const { state: communityState, actions: communityActions } = useStore();

  useEffect(() => {
    console.log("커뮤니티 포스트 상태 변화:", communityState.communityPosts);
  
    if (communityState.communityPosts.length > 0) {
      communityState.communityPosts.forEach(post => {
        console.log("post 객체 확인:", post);
      });
    }
  }, []);

  // const [allPosts, setAllPosts] = useState([]);  // State to hold all posts


  
  useEffect(() => {
    const fetchPosts = async () => {
      try {
        console.log("데이터 요청 시작");
        const response = await communityActions.readCommunityPostsByCategory("announcement");
        console.log("API Response:", response);
      } catch (error) {
        console.error("데이터 불러오기 실패:", error);
      }
    };
    fetchPosts();
  }, []);

  const location = useLocation(); // 현재 경로를 가져옴
  const isAdminPage = location.pathname.includes('admin'); // 경로가 admin으로 포함되어 있는지 확인

  const [sortOption, setSortOption] = useState("전체보기");
  const [currentPage, setCurrentPage] = useState(1);
  const [searchQuery, setSearchQuery] = useState(""); // 검색어 상태 추가
  const postsPerPage = 10;
  // const [filteredPosts, setFilteredPosts] = useState([]); // 상태로 관리


  // 게시물 추가
  // const addPost = (newPost) => {
  //   setAllPosts([newPost, ...allPosts]); // 새로운 게시물을 맨 앞에 추가
  // };

  const options = ["전체보기", "최신 순", "오래된 순", "조회 수 높은 순", "조회 수 낮은 순"];



  // 전체 페이지 수 계산
  // const totalPages = Math.ceil(allPosts.length / postsPerPage);

  // 게시물 필터링 (검색어에 맞는 게시물만 필터링)
  const filteredPosts = (communityState.communityPosts || []).filter(post => {
    console.log("post 객체 확인22:", post); // 각 post 객체 확인
    const postTitle = post.postTitle ? post.postTitle.toLowerCase() : ''; // 안전하게 비교
    const postContent = post.postContent ? post.postContent.toLowerCase() : ''; // 안전하게 비교
    
    const query = searchQuery.toLowerCase().trim(); // 검색어 소문자 및 공백 제거
  
    return postTitle.includes(query) || postContent.includes(query); // 필터링 조건
  });

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

    setAllPosts(sortedPosts); // setPosts 대신 사용
  };




  return (
    <div style={{ gridArea }} className={comstyle.posts_container}>

      <div className={`${styles.rwsubcontainer2} ${comstyle.inputdrop}`}>
        <Dropdown options={options} onChange={handleSort} />
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

      {filteredPosts.length > 0 ? (
          <ul className={`${comstyle.postsbox}`}>
            {filteredPosts.map((post, index) => (

              <Link to={`/announce/post/${post.postUid}`} key={post.id}>
                <li key={post.post_uid} className={comstyle.post}>
                  <p className={comstyle.postnumli}>{index + 1}</p>
                  {/* index+1 나중에 postId 로 변경 */}
                  <p className={comstyle.titleli}>{post.postTitle}</p>
                  <p className={comstyle.adminli}>{post.postAuthor}</p>
            <p className={comstyle.dateli}>{post.postCreatedAt}</p>
            <p className={comstyle.viewsli}>{post.postViewCount}</p>
                </li>
              </Link>
            ))}
          </ul>
        ) : (
          <p className={comstyle.postsbox}> <br /><br /> 등록된 게시물이 없습니다.</p>
        )
      }
      < div className={comstyle.buttondiv} >
        <div className={comstyle.pagenum}>
          <Pagenumber
            // totalPages={totalPages}
            // currentPage={currentPage}
            // handlePageClick={handlePageClick}
          />
        </div>
        {isAdminPage && (
          <Link to="/commu_announce_wt" className={comstyle.report_btn}>
            <Button text={"글쓰기"} width={"100px"} />
          </Link>
        )}
      </div>
    </div >
  );
};

export default Announcement;