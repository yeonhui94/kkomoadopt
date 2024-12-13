import React, { useEffect, useState } from "react";
import Card1 from "../components/Card1/Card1"; // Card1 컴포넌트 임포트
import styles from "./Review.module.css";
import Footer from "../container/footer/Footer";
import Divider from "../components/Divider";
import SearchBar from "../components/SearchBar";
import Dropdown from "../components/DropDown";
import Button from "../components/Button/Button";
import Pagenumber from "../components/pagenumber/Pagenumber";
import { Link } from "react-router-dom";
// import ParentComponent from "./ParentComponent";
import styled from "styled-components";
import { useStore } from "../stores/CommunityPostStore2/useStore";


const Review = ({ gridArea }) => {
  const initialState = {
    communityPosts: [] // 초기 상태는 빈 배열로 설정
  };

  // useStore에서 상태를 관리하는 경우
  const { state: communityState, actions: communityActions } = useStore(initialState);

  console.log("Available actions:", communityActions);

  const options = ["전체보기", "최신 순", "오래된 순", "조회 수 높은 순", "조회 수 낮은 순"];


  useEffect(() => {
    const fetchPosts = async () => {
      if (!communityActions || !communityActions.readCommunityPostsByCategory) {
        console.error("communityActions 또는 함수가 초기화되지 않았습니다.");
        return;
      }
  
      try {
        const response = await communityActions.readCommunityPostsByCategory("ADOPTREVIEW");
        console.log("Fetched data:", response); // 반환된 데이터 확인
        console.log("Updated state after fetching posts:", communityState.communityPosts); // 업데이트된 상태 확인
      } catch (error) {
        console.error("Error fetching posts:", error);
      }
    };
    fetchPosts();
  },[]);


  // // communityState가 변경된 후 데이터를 확인
  // useEffect(() => {
  //   console.log("Updated communityState.communityPosts:", communityState.communityPosts);
  //   communityState.communityPosts.forEach((post, index) => {
  //     console.log(`Post ${index}:`, post);
  //   });
  // }, [communityState]);



  const [currentPage, setCurrentPage] = useState(1);
  // const [sortedData, setSortedData] = useState(cardData);
  const [searchQuery, setSearchQuery] = useState('');
  const postsPerPage = 12; // 한 페이지에 표시할 카드 수

  console.log(communityState.communityPosts)

  return (
    <div style={{ gridArea: gridArea }}>
      <div className={styles.rwWrapper}>
        <div className={styles.rwsubcontainer}>
          <div className={styles.rwsubcontainer2}>
            <Dropdown
              options={options}
              defaultText="전체보기"
            // onChange={handleSortChange}
            />
            <SearchBar
              placeholder={"글 내용 & 글 제목"}
              width="300px"
            // onSearch={setSearchQuery} 
            />
          </div>
        </div>
        <div className={styles.rwmaincontainer}>
          <div className={styles.rwdivider}>
            <Divider width={"100%"} backgroundColor={"var(--line-color)"} />
          </div >
          {console.log("communityPosts before map:", communityState.communityPosts)}
          {communityState.communityPosts.length > 0 ? (
            communityState.communityPosts.map((slideData, index) => (
              <Link to={`/adoption-review/post/${slideData.postUid}`} key={slideData.id}>
                <Card1 
                  key={index} 
                  images={slideData.postImgUrl} 
                  text={slideData.postTitle}
                  additionaltext={slideData.postContent}
                  />
              </Link>
            ))
          ) : (
            <p>게시물이 없습니다.</p> // 게시물이 없는 경우 처리
          )}
        </div>

        <div className={styles.btnContainer}>
          <div className={styles.pgncontainer}>
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
