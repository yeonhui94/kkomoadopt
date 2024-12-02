import { useState } from "react";
import SubNaviBar from "../../components/MyPage/SubNavi/SubNaviBar";
import styles from "./MyPage.module.css";
import SearchBar from "../../components/SearchBar";
import Pagenumber from "../../components/pagenumber/Pagenumber";

const Csdetail = ({ gridArea }) => {
    const [selectedCategory, setSelectedCategory] = useState("온라인 문의");
    const [currentPage, setCurrentPage] = useState(1); // 현재 페이지 상태
    const [searchQuery, setSearchQuery] = useState('');

    const allPosts = [
        { id: 1, category: "온라인 문의", title: "공고번호 561548 입양되었나요?", date: "2024-11-28", answer: null },
        { id: 2, category: "방문상담 신청", pnum: "010-1234-5678", purpose: "입양", date: "2024-11-27", visitdate: "2024-12-18" },
        { id: 3, category: "온라인 문의", title: "입양신청 시 책임비용 있나요?", date: "2024-11-26", answer: "답변이 작성된 게시글" },
        { id: 4, category: "온라인 문의", title: "품종 예약 되나요?", date: "2024-11-25", answer: null }
    ];

    // 카테고리에 따라 데이터 필터링
    const filteredData = allPosts.filter(post => 
        (post.category === selectedCategory) &&
        (post.title?.toLowerCase().includes(searchQuery.toLowerCase()) || 
         post.purpose?.toLowerCase().includes(searchQuery.toLowerCase()))
    );

    // 페이지당 보여지는 글 수
    const postsPerPage = 8;

    // 현재 페이지에 맞는 카드 데이터 계산
    const currentPosts = filteredData.slice(
        (currentPage - 1) * postsPerPage,
        currentPage * postsPerPage
    );

    // 전체 페이지 수 계산
    const totalPages = Math.ceil(filteredData.length / postsPerPage);

    const tabs = [
        { label: "온라인 문의", category: "온라인 문의" },
        { label: "방문상담 신청", category: "방문상담 신청" }
    ];

    const handleTabClick = (category) => {
        setSelectedCategory(category); // 클릭한 카테고리로 상태 업데이트
        setCurrentPage(1); // 카테고리 변경 시 페이지 1로 리셋
    };

    // 페이지네이션 처리
    const handlePageClick = (pageNumber) => {
        setCurrentPage(pageNumber);
    };

    // 검색어 변경 처리 함수
    const handleSearch = (query) => {
        setSearchQuery(query); // 검색어를 상태에 저장
    };

    return (
        <div style={{ gridArea: gridArea }}>
            <div className={styles.mpcontainer}>
                <div className={styles.SearchBar}>
                    <SearchBar 
                        placeholder={"글 내용 & 글 제목"} 
                        width="300px"               
                        onSearch={handleSearch} 
                    />
                </div>
                <div className={styles.subNaviBar}>
                    <SubNaviBar tabs={tabs} onTabClick={handleTabClick}></SubNaviBar>
                </div>

                <div className={styles.content2}>
                    {/* 헤더 */}
                    {selectedCategory === "온라인 문의" && (
                        <div className={styles.tableHeader}>
                            <span className={styles.tableColumn}>글번호</span>
                            <span className={styles.tableColumn}>제목</span>
                            <span className={styles.tableColumn}>작성일</span>
                            <span className={styles.tableColumn}>답변상태</span>
                        </div>
                    )}
                    {selectedCategory === "방문상담 신청" && (
                        <div className={styles.tableHeader}>
                            <span className={styles.tableColumn}>글번호</span>
                            <span className={styles.tableColumn}>연락처</span>
                            <span className={styles.tableColumn}>상담 목적</span>
                            <span className={styles.tableColumn}>예약일</span>
                        </div>
                    )}

                    {/* 데이터 */}
                    {currentPosts.map(post => (
                        <div key={post.id} className={styles.postItem}>
                            {selectedCategory === "온라인 문의" && (
                                <>
                                    <span className={styles.tableColumn}>{post.id}</span>
                                    <span className={styles.tableColumn}>{post.title}</span>
                                    <span className={styles.tableColumn}>{post.date}</span>
                                    <span className={styles.tableColumn}>{post.answer ? "답변완료" : "답변대기"}</span>
                                </>
                            )}
                            {selectedCategory === "방문상담 신청" && (
                                <>
                                    <span className={styles.tableColumn}>{post.id}</span>
                                    <span className={styles.tableColumn}>{post.pnum}</span>
                                    <span className={styles.tableColumn}>{post.purpose}</span>
                                    <span className={styles.tableColumn}>{post.visitdate}</span>
                                </>
                            )}
                        </div>
                    ))}
                </div>

                {/* 페이지네이션 컴포넌트 */}
                <Pagenumber
                    totalPages={totalPages}
                    currentPage={currentPage}
                    handlePageClick={handlePageClick}
                />
            </div>
        </div>
    );
};

export default Csdetail;
