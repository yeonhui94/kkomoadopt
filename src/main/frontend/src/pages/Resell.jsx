import Divider from "../components/Divider";
import Dropdown from "../components/DropDown";
import SearchBar from "../components/SearchBar";
import styles from "./Review.module.css";
import Card2 from "../components/Card2/Card2";
// import Footer from "../container/Footer";
import Button from "../components/Button/Button";
import Pagenumber from "../components/pagenumber/Pagenumber";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

import { useStore } from "../stores/CommunityPostStore2/useStore"


const Resell = ({ gridArea }) => {
    const { state: communityState, actions: communityActions } = useStore();

    const options = ["전체보기", "최신 순", "오래된 순", "조회 수 높은 순", "조회 수 낮은 순"];

      useEffect(() => {
        const fetchPosts = async () => {
          const response = await communityActions.readCommunityPostsByCategory("BUYANDSELL");
        };
        fetchPosts();
      }, []);

 
    const [currentPage, setCurrentPage] = useState(1);
    // const [sortedData, setSortedData] = useState(cardData);
    const [searchQuery, setSearchQuery] = useState('');
    const postsPerPage = 12; // 한 페이지에 표시할 카드 수


        // // 검색 필터링된 데이터
        // const filteredData = sortedData.filter(card =>
        //     card.text1.toLowerCase().includes(searchQuery.toLowerCase()) ||
        //     card.text2.toLowerCase().includes(searchQuery.toLowerCase())
        // );

    // 전체 페이지 수 계산
    // const totalPages = Math.ceil(filteredData.length / postsPerPage);

    // 현재 페이지에 맞는 카드 데이터 계산
    // const currentPosts = filteredData.slice(
    //     (currentPage - 1) * postsPerPage,
    //     currentPage * postsPerPage
    // );

    // // 페이지 클릭 처리 함수
    // const handlePageClick = (pageNumber) => {
    //     setCurrentPage(pageNumber);
    // };

    // 드롭다운에서 선택된 옵션에 맞게 데이터를 처리하는 함수
// const handleSortChange = (option) => {
//     let sortedCards = [...filteredData];
//     switch (option) {
//         case "최신 순":
//             sortedCards.sort((a, b) => b.date - a.date);
//             break;
//         case "오래된 순":
//             sortedCards.sort((a, b) => a.date - b.date);
//             break;
//         case "조회 수 높은 순":
//             sortedCards.sort((a, b) => b.viewcount - a.viewcount);
//             break;
//         case "조회 수 낮은 순":
//             sortedCards.sort((a, b) => a.viewcount - b.viewcount);
//             break;
//         default:
//             sortedCards = filteredData;
//             break;
//     }
//     setSortedData(sortedCards);
//     setCurrentPage(1); // 페이지를 첫 번째로 초기화
//   };

      // 검색어 변경 처리 함수
    //   const handleSearch = (query) => {
    //     setSearchQuery(query);  // 검색어를 상태에 저장
    // };

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
                        // onSearch={handleSearch} 
                        />
                    </div>
                </div>
                <div>

                    <div className={styles.rwmaincontainer}>
                        <div className={styles.rwdivider} >
                            <Divider width={"100%"} backgroundColor={"var(--line-color)"} />
                        </div>
                        {communityState.communityPosts.map((card, index) => (
                            <Link key={card.id}>
                            <Card2
                                to={`/resell/post/${card.postUid}`} 
                                key={index}  // key prop을 고유하게 설정
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
                    <Link to="/commu_resell_wt" >
                    <div className={styles.buttonContainer}>
                        <Button text={"글쓰기"} />
                    </div>
                    </Link>
                </div>

            </div>
        </div>
    )
}
export default Resell;