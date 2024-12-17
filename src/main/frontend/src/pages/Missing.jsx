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
    const options = ["전체보기", "최신 순", "오래된 순", "조회 수 높은 순", "조회 수 낮은 순"];
    const [currentPage, setCurrentPage] = useState(1);
    const [searchQuery, setSearchQuery] = useState(''); // 검색어 상태
    const [sortOption, setSortOption] = useState("전체보기"); // 정렬 옵션 상태 추가

    // 데이터 요청 (컴포넌트가 처음 마운트될 때만 호출)
    useEffect(() => {
        const fetchPosts = async () => {
            try {
                console.log("데이터 요청 시작");
                await communityActions.readCommunityPostsByCategory("FINDCHILD");
            } catch (error) {
                console.error("데이터 불러오기 실패:", error);
            }
        };

        if (communityState.communityPosts.length === 0) {  // 데이터가 비어있는 경우에만 호출
            fetchPosts();
        }
    }, [communityActions, communityState.communityPosts.length]);  // communityPosts가 빈 배열일 때만 실행

    // 검색어 필터링
    const filteredPosts = (communityState.communityPosts || []).filter(post => {
        const postTitle = post.postTitle ? post.postTitle.toLowerCase() : '';
        const postContent = post.postContent ? post.postContent.toLowerCase() : '';
        const query = searchQuery.toLowerCase().trim();
        return postTitle.includes(query) || postContent.includes(query); // 검색어로 필터링
    });

    // 정렬 로직
    const sortedPosts = () => {
        let sorted = [...filteredPosts];

        if (sortOption === "최신 순") {
            sorted.sort((a, b) => new Date(b.postCreatedAt) - new Date(a.postCreatedAt)); // 최신순
        } else if (sortOption === "오래된 순") {
            sorted.sort((a, b) => new Date(a.postCreatedAt) - new Date(b.postCreatedAt)); // 오래된 순
        } else if (sortOption === "조회 수 높은 순") {
            sorted.sort((a, b) => b.postViewCount - a.postViewCount); // 조회 수 높은 순
        } else if (sortOption === "조회 수 낮은 순") {
            sorted.sort((a, b) => a.postViewCount - b.postViewCount); // 조회 수 낮은 순
        }

        return sorted;
    };

    // 페이지 처리
    const postsPerPage = 12; // 한 페이지에 표시할 게시물 수
    const startIndex = (currentPage - 1) * postsPerPage;
    const endIndex = startIndex + postsPerPage;
    const currentPosts = sortedPosts().slice(startIndex, endIndex);

    const handlePageClick = (page) => {
        setCurrentPage(page);
    };

    // 검색어 변경 처리 함수
    const handleSearch = (query) => {
        setSearchQuery(query);  // 검색어를 상태에 저장
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
                            onSearch={(value) => handleSearch(value)} // 검색어 입력 시 처리
                        />
                    </div>
                </div>
                <div>
                    <div className={styles.rwmaincontainer}>
                        <div className={styles.rwdivider}>
                            <Divider width={"100%"} backgroundColor={"var(--line-color)"} />
                        </div>

                        {currentPosts.length > 0 ? (
                            currentPosts.map((card) => (
                                <Link to={`/find-child/post/${card.postUid}`} key={card.postUid}>
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
                </div>
                <div className={styles.btnContainer}>
                    <div className={styles.pgncontainer}>
                        <Pagenumber
                            totalPages={Math.ceil(filteredPosts.length / postsPerPage)}
                            currentPage={currentPage}
                            handlePageClick={handlePageClick}
                        />
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
