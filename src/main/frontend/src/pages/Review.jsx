import React, { useEffect, useState } from "react";
import Card1 from "../components/Card1/Card1";
import styles from "./Review.module.css";
import Footer from "../container/footer/Footer";
import Divider from "../components/Divider";
import SearchBar from "../components/SearchBar";
import Dropdown from "../components/DropDown";
import Button from "../components/Button/Button";
import Pagenumber from "../components/pagenumber/Pagenumber";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { useStore } from "../stores/CommunityPostStore2/useStore";

const Review = ({ gridArea }) => {
  const initialState = {
    communityPosts: [] // 초기 상태는 빈 배열로 설정
  };

  // useStore에서 상태를 관리하는 경우
  const { state: communityState, actions: communityActions } = useStore(initialState);

  const options = ["전체보기", "최신 순", "오래된 순", "조회 수 높은 순", "조회 수 낮은 순"];

  const [currentPage, setCurrentPage] = useState(1);
  const [searchQuery, setSearchQuery] = useState('');
  const [sortOption, setSortOption] = useState("전체보기");
  const postsPerPage = 12; // 한 페이지에 표시할 카드 수

  // 최초 한 번만 데이터를 불러오는 useEffect
  useEffect(() => {
    const fetchPosts = async () => {
      if (!communityActions || !communityActions.readCommunityPostsByCategory) {
        console.error("communityActions 또는 함수가 초기화되지 않았습니다.");
        return;
      }

      try {
        const response = await communityActions.readCommunityPostsByCategory("ADOPTREVIEW");
        console.log("Fetched data:", response); // 반환된 데이터 확인
      } catch (error) {
        console.error("Error fetching posts:", error);
      }
    };

    // 데이터가 없을 때만 fetchPosts 호출
    if (!communityState.communityPosts.length) {
      fetchPosts();
    }
  }, [communityActions, communityState.communityPosts.length]);  // 의존성 배열에 데이터 길이 추가

  // 게시물 필터링 (검색)
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

  // 페이지 변경 처리
  const handlePageClick = (page) => {
    setCurrentPage(page);
  };

  // 검색어 변경 시 호출되는 함수
  const handleSearch = (query) => {
    setSearchQuery(query); // 검색어 상태 업데이트
  };

  return (
    <div style={{ gridArea: gridArea }}>
      <div className={styles.rwWrapper}>
        <div className={styles.rwsubcontainer}>
          <div className={styles.rwsubcontainer2}>
            <Dropdown
              options={options}
              defaultText="전체보기"
              onChange={(option) => setSortOption(option)} // 정렬 옵션 변경
            />
            <SearchBar
              placeholder={"글 내용 & 글 제목"}
              width="300px"
              onSearch={(value) => handleSearch(value)} 
            />
          </div>
        </div>

        <div className={styles.rwmaincontainer}>
          <div className={styles.rwdivider}>
            <Divider width={"100%"} backgroundColor={"var(--line-color)"} />
          </div>

          {console.log("Filtered and Sorted Posts:", sortedPosts())}

          {sortedPosts().length > 0 ? (
            sortedPosts().slice((currentPage - 1) * postsPerPage, currentPage * postsPerPage).map((slideData, index) => (
              <Link key={slideData?.id} to={`/adoption-review/post/${slideData?.postUid}`}>
                <Card1 
                  key={index} 
                  images={slideData?.postImgUrl} 
                  text={slideData?.postTitle}
                  additionaltext={slideData?.postContent}
                />
              </Link>
            ))
          ) : (
            <p>게시물이 없습니다.</p> // 게시물이 없는 경우 처리
          )}
        </div>

        <div className={styles.btnContainer}>
          <div className={styles.pgncontainer}>
            <Pagenumber
              totalPages={Math.ceil(sortedPosts().length / postsPerPage)}
              currentPage={currentPage}
              handlePageClick={handlePageClick}
            />
          </div>
          <Link to="/commu_review_wt" className={styles.buttonContainer}>
            <Button text={"글쓰기"} />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Review;
