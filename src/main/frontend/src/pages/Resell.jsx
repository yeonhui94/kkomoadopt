import { useState, useEffect } from "react";
import styles from "./Review.module.css";
import SearchBar from "../components/SearchBar";
import Divider from "../components/Divider";
import Dropdown from "../components/DropDown";
import Card2 from "../components/Card2/Card2";
import Button from "../components/Button/Button";
import Pagenumber from "../components/pagenumber/Pagenumber";
import { Link } from "react-router-dom";
import { useStore } from "../stores/CommunityPostStore2/useStore";

const Resell = ({ gridArea }) => {
    const { state: communityState, actions: communityActions } = useStore();
    const [sortOption, setSortOption] = useState("전체보기");
    const [searchQuery, setSearchQuery] = useState(""); // 검색어 상태
    const [currentPage, setCurrentPage] = useState(1); // 페이지 상태
    const postsPerPage = 12; // 한 페이지에 표시할 게시물 수
    const options = ["전체보기", "최신 순", "오래된 순", "조회 수 높은 순", "조회 수 낮은 순"]; // 정렬 옵션

    // 게시물 데이터 로딩 (최초 한 번만 실행)
    useEffect(() => {
        const fetchPosts = async () => {
            await communityActions.readCommunityPostsByCategory("BUYANDSELL");
        };
        fetchPosts();
    }, []); // 의존성 배열이 빈 배열이므로 한 번만 실행됨

    // 검색어 변경 처리 함수
    const handleSearch = (query) => {
        setSearchQuery(query);  // 검색어를 상태에 저장
    };

    // 게시물 필터링 (검색)
    const filteredPosts = (communityState.communityPosts || []).filter(post => {
        const postTitle = post.postTitle ? post.postTitle.toLowerCase() : '';
        const postContent = post.postContent ? post.postContent.toLowerCase() : '';
        const query = searchQuery.toLowerCase().trim();
        return postTitle.includes(query) || postContent.includes(query); // 검색어로 필터링
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

    // 현재 페이지에 해당하는 게시물
    const startIndex = (currentPage - 1) * postsPerPage;
    const endIndex = startIndex + postsPerPage;
    const currentPosts = sortedPosts().slice(startIndex, endIndex);

    // 페이지 클릭 시 처리 함수
    const handlePageClick = (page) => {
        setCurrentPage(page);
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
                            onSearch={handleSearch} 
                        />
                    </div>
                </div>

                <div className={styles.rwmaincontainer}>
                    <div className={styles.rwdivider}>
                        <Divider width={"100%"} backgroundColor={"var(--line-color)"} />
                    </div>

                    {currentPosts.length > 0 ? (
                        currentPosts.map((card) => (
                            <Link to={`/resell/post/${card.postUid}`} key={card.postUid}>
                                <Card2
                                    imageFile={card.postImgUrl}
                                    text1={card.postTitle}
                                    text2={card.postContent}
                                />
                            </Link>
                        ))
                    ) : (
                        <p className={styles.noPosts}>등록된 게시물이 없습니다.</p>
                    )}
                </div>

                <div className={styles.btnContainer}>
                    <div className={styles.pgncontainer}>
                        <Pagenumber
                            totalPages={Math.ceil(filteredPosts.length / postsPerPage)}
                            currentPage={currentPage}
                            handlePageClick={handlePageClick}
                        />
                    </div>
                    <Link to="/commu_resell_wt">
                        <div className={styles.buttonContainer}>
                            <Button text={"글쓰기"} />
                        </div>
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default Resell;
