import Divider from "../components/Divider";
import Dropdown from "../components/DropDown";
import SearchBar from "../components/SearchBar";
import styles from "./Review.module.css";
import img1 from "../assets/CardImage/1.jpg";
import img2 from "../assets/CardImage/2.jpg";
import img3 from "../assets/CardImage/3.jpg";
import img4 from "../assets/CardImage/4.jpg";
import img5 from "../assets/CardImage/5.jpg";
import img6 from "../assets/CardImage/6.jpg";
import img7 from "../assets/CardImage/7.jpg";
import img8 from "../assets/CardImage/8.jpg";
import img9 from "../assets/CardImage/9.jpg";
import img10 from "../assets/CardImage/10.jpg";
import img11 from "../assets/CardImage/11.jpg";
import img12 from "../assets/CardImage/12.jpg";
import Card2 from "../components/Card2/Card2";
import Button from "../components/Button/Button";
import Pagenumber from "../components/pagenumber/Pagenumber";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

const Missing = ({ gridArea }) => {
    const options = ["전체보기", "최신 순", "오래된 순", "조회 수 높은 순", "조회 수 낮은 순"];

    const cardData = [
        { id:1, imageFile: img1, text1: "충남 예산시", text2: "산책 중에 목줄이 끊겨버렸습니다 도와주세요 ", date: new Date(2024, 12, 1), viewcount: 150 },
        { id:2,imageFile: img2, text1: "경기도 화성시", text2: "경기도 화성시 중앙공원에서 아이가 사라졌어요", date: new Date(2024, 12, 2), viewcount: 151 },
        { id:3,imageFile: img3, text1: "서울 광진구", text2: "광진구 광진초등학교 근처에서 슈퍼에 들리다가", date: new Date(2024, 12, 3), viewcount: 151 },
        { id:4,imageFile: img4, text1: "경기도 파주시", text2: "파주에 사람이 없다보니 목줄 풀고 애가 뛰어놀게 했는데", date: new Date(2024, 12, 4), viewcount: 153 },
        { id:5,imageFile: img5, text1: "서울 동작구", text2: "갑자기 목줄 풀자마자 도망가더니 사라졌어요", date: new Date(2024, 12, 5), viewcount: 10 },
        { id:6,imageFile: img6, text1: "서울 코스모구", text2: "주변에 신호등도 많고 사람도 많아서 걱정이 됩니다", date: new Date(2024, 12, 6), viewcount: 154 },
        { id:7,imageFile: img7, text1: "경기도 부천시", text2: "겁이 너무 많아서 사람이 다가가면 도망갈수도 있어요", date: new Date(2024, 12, 7), viewcount: 155 },
        { id:8,imageFile: img8, text1: "전북 군산시", text2: "이름은 행운이고 많이 사나운데 지금 혼자 있어서 떨고있을거같아요 ", date: new Date(2024, 12, 8), viewcount: 156 },
        { id:9,imageFile: img9, text1: "경남 진주시", text2: "혹시라도 발견하시면 사례금 드리겠습니다 제발 연락주세요..", date: new Date(2024, 12, 9), viewcount: 157 },
        { id:10,imageFile: img10, text1: "경남 사천시", text2: "내장칩이 없어서 너무 걱정이에요 제발 도와주세요", date: new Date(2024, 12, 10), viewcount: 158 },
        { id:11,imageFile: img11, text1: "경기도 안양", text2: "사례금 100만원 드립니다", date: new Date(2024, 12, 11), viewcount: 159 },
        { id:12,imageFile: img12, text1: "충남 서산", text2: "노견이라 슬개골이 많이 안좋아요 멀리 못갔을텐데 보이지가 않습니다", date: new Date(2024, 12, 12), viewcount: 15 },
        { id:13,imageFile: img12, text1: "충남 서산", text2: "노견이라 슬개골이 많이 안좋아요 멀리 못갔을텐데 보이지가 않습니다", date: new Date(2024, 12, 12), viewcount: 15 },
        { id:14,imageFile: img12, text1: "충남 서산", text2: "노견이라 슬개골이 많이 안좋아요 멀리 못갔을텐데 보이지가 않습니다", date: new Date(2024, 12, 12), viewcount: 15 },
        { id:15,imageFile: img12, text1: "충남 서산", text2: "노견이라 슬개골이 많이 안좋아요 멀리 못갔을텐데 보이지가 않습니다", date: new Date(2024, 12, 12), viewcount: 15 },
        { id:16,imageFile: img12, text1: "충남 서산", text2: "노견이라 슬개골이 많이 안좋아요 멀리 못갔을텐데 보이지가 않습니다", date: new Date(2024, 12, 12), viewcount: 15 },
        { id:17,imageFile: img12, text1: "충남 서산", text2: "노견이라 슬개골이 많이 안좋아요 멀리 못갔을텐데 보이지가 않습니다", date: new Date(2024, 12, 12), viewcount: 15 },
        { id:18,imageFile: img12, text1: "충남 서산", text2: "노견이라 슬개골이 많이 안좋아요 멀리 못갔을텐데 보이지가 않습니다", date: new Date(2024, 12, 12), viewcount: 15 },
        { id:19,imageFile: img12, text1: "충남 서산", text2: "노견이라 슬개골이 많이 안좋아요 멀리 못갔을텐데 보이지가 않습니다", date: new Date(2024, 12, 12), viewcount: 15 }
    ];

    const [currentPage, setCurrentPage] = useState(1);
    const [sortedData, setSortedData] = useState(cardData);
    const [searchQuery, setSearchQuery] = useState('');  // 검색어 상태 추가

    const postsPerPage = 12; // 한 페이지에 표시할 카드 수

    // 검색 필터링된 데이터
    const filteredData = sortedData.filter(card =>
        card.text1.toLowerCase().includes(searchQuery.toLowerCase()) ||
        card.text2.toLowerCase().includes(searchQuery.toLowerCase())
    );

    // 페이지 계산을 filteredData로 처리
    const totalPages = Math.ceil(filteredData.length / postsPerPage);

    // 현재 페이지에 맞는 카드 데이터 계산 (filteredData 사용)
    const currentPosts = filteredData.slice(
        (currentPage - 1) * postsPerPage,
        currentPage * postsPerPage
    );

    // 페이지 클릭 처리 함수
    const handlePageClick = (pageNumber) => {
        setCurrentPage(pageNumber);
    };

    // 드롭다운에서 선택된 옵션에 맞게 데이터를 처리하는 함수
    const handleSortChange = (option) => {
        let sortedCards = [...filteredData];
        switch (option) {
            case "최신 순":
                sortedCards.sort((a, b) => b.date - a.date);
                break;
            case "오래된 순":
                sortedCards.sort((a, b) => a.date - b.date);
                break;
            case "조회 수 높은 순":
                sortedCards.sort((a, b) => b.viewcount - a.viewcount);
                break;
            case "조회 수 낮은 순":
                sortedCards.sort((a, b) => a.viewcount - b.viewcount);
                break;
            default:
                sortedCards = filteredData;
                break;
        }
        setSortedData(sortedCards);
        setCurrentPage(1); // 페이지를 첫 번째로 초기화
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
                            onChange={handleSortChange}
                        />
                        <SearchBar 
                            placeholder={"글 내용 & 글 제목"} 
                            width="300px"               
                            onSearch={handleSearch} />
                    </div>
                </div>
                <div>
                    <div className={styles.rwmaincontainer}>
                        <div className={styles.rwdivider}>
                            <Divider width={"100%"} backgroundColor={"var(--line-color)"} />
                        </div>
                        {currentPosts.map((card, index) => (
                            <Link to={`/find-child/post/${card.id}`} key={card.id}>
                            <Card2
                                key={index}
                                imageFile={card.imageFile}
                                text1={card.text1}
                                text2={card.text2}
                            />
                            </Link>
                        ))}
                    </div>
                </div>
                <div className={styles.btnContainer}>
                    <div className={styles.pgncontainer}>
                        <Pagenumber
                            totalPages={totalPages}
                            currentPage={currentPage}
                            handlePageClick={handlePageClick}
                        />
                    </div>
                    <a className={styles.buttonContainer} href="http://localhost:5173/commu-find_child/communitywt">
                        <Button text={"글쓰기"} />
                    </a>
                </div>
            </div>
        </div>
    );
};

export default Missing;
