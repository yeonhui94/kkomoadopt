import Divider from "../components/Divider";
import Dropdown from "../components/DropDown";
import SearchBar from "../components/SearchBar";
import styles from "./Review.module.css";
import Card2 from "../components/Card2/Card2";
import Button from "../components/Button/Button";
import Pagenumber from "../components/pagenumber/Pagenumber";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { useStore } from "../stores/CommunityPostStore2/useStore";

const Missing = ({ gridArea }) => {
    const { state: communityState, actions: communityActions } = useStore();


    useEffect(() => {
        const fetchPosts = async () => {
          try {
            console.log("데이터 요청 시작");
            const response = await communityActions.readCommunityPostsByCategory("FINDCHILD");
            console.log("API Response:", response);
          } catch (error) {
            console.error("데이터 불러오기 실패:", error);
          }
        };
        fetchPosts();
      }, []);


      



    const options = ["전체보기", "최신 순", "오래된 순", "조회 수 높은 순", "조회 수 낮은 순"];


    const [currentPage, setCurrentPage] = useState(1);
    // const [sortedData, setSortedData] = useState(cardData);
    const [searchQuery, setSearchQuery] = useState('');  // 검색어 상태 추가

    // console.log(communityState.communityPosts)


    const filteredPosts = (communityState.communityPosts || []).filter(post => {
        console.log("post 객체 확인22:", post); // 각 post 객체 확인
        const postTitle = post.postTitle ? post.postTitle.toLowerCase() : ''; // 안전하게 비교
        const postContent = post.postContent ? post.postContent.toLowerCase() : ''; // 안전하게 비교
        
        const query = searchQuery.toLowerCase().trim(); // 검색어 소문자 및 공백 제거
      
        return postTitle.includes(query) || postContent.includes(query); // 필터링 조건
      });

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
                            // onChange={handleSortChange}
                        />
                        <SearchBar
                            placeholder={"글 내용 & 글 제목"}
                            width="300px"
                            onSearch={(value) => handleSearch(value)}
                            />
                    </div>
                </div>
                <div>
                    <div className={styles.rwmaincontainer}>
                        <div className={styles.rwdivider}>
                            <Divider width={"100%"} backgroundColor={"var(--line-color)"} />
                        </div>
                        {/* {posts.length > 0 &&(
                            posts.map((post, index) => (
                                <Link>
                                    <Card2
                                        key={index}
                                        imageFile={post.image}
                                        text1={post.title}
                                        text2={post.content}
                                    />
                                </Link>
                            ))
                        )} */}
                        {console.log("communityPosts before map:", filteredPosts)}
                        {filteredPosts.map((card, index) => (
                            <Link key={card.id}>
                                <Card2
                                    to={`/find-child/post/${card.postUid}`}
                                    key={index}
                                    imageFile={card.postImgUrl}
                                    text1={card.postTitle}
                                    text2={card.postContent}
                                />
                            </Link>
                        ))}
                    </div>
                </div>
                <div className={styles.btnContainer}>
                    <div className={styles.pgncontainer}>
                        {/* <Pagenumber
                            totalPages={totalPages}
                            currentPage={currentPage}
                            handlePageClick={handlePageClick}
                        /> */}
                    </div>
                    <Link to={"/commu_find-child_wt"} className={styles.buttonContainer}>
                        <Button text={"글쓰기"} />
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default Missing;
