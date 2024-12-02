import Divider from "../components/Divider";
import Dropdown from "../components/DropDown";
import SearchBar from "../components/SearchBar";
import styles from "./Review.module.css";
import img1 from "../assets/Resell/1.jpg"
import img2 from "../assets/Resell/2.jpg"
import img3 from "../assets/Resell/3.jpg"
import img4 from "../assets/Resell/4.jpg"
import img5 from "../assets/Resell/5.jpg"
import img6 from "../assets/Resell/6.jpg"
import img7 from "../assets/Resell/7.jpg"
import img8 from "../assets/Resell/8.jpg"
import img9 from "../assets/Resell/9.jpg"
import img10 from "../assets/Resell/10.jpg"
import img11 from "../assets/Resell/11.jpg"
import img12 from "../assets/Resell/12.jpg"
import Card2 from "../components/Card2/Card2";
// import Footer from "../container/Footer";
import Button from "../components/Button/Button";
import Pagenumber from "../components/pagenumber/Pagenumber";
import { useState } from "react";


const Resell = ({ gridArea }) => {

    const options = ["전체보기", "최신 순", "오래된 순", "조회 수 높은 순", "조회 수 낮은 순"];


    const cardData = [
        { imageFile: img1, text1: "땡처리 합니다", text2: "개별 판매 안하고 한번에 다 팔려고 합니다", date: new Date(2024, 12, 1), viewcount: 130  },
        { imageFile: img2, text1: "강아지 기저귀", text2: "소형견 기저귀에요 5천원에 드릴게요", date: new Date(2024, 12, 12), viewcount: 1512  },
        { imageFile: img3, text1: "대형견 신발", text2: "직거래만 합니당 연락주세요", date: new Date(2024, 12, 11), viewcount: 13  },
        { imageFile: img4, text1: "발톱깎기,배변봉투", text2: "장난감 묶음으로 판매해요 한개씩도 파니까 연락주세요", date: new Date(2024, 12, 1), viewcount: 22  },
        { imageFile: img5, text1: "이동가방", text2: "배변패드입니다 연락주세요", date: new Date(2024, 12, 21), viewcount: 1120  },
        { imageFile: img6, text1: "소형견 기저귀", text2: "강아지가 더이상 장난감을 안쓰네요", date: new Date(2024, 12, 13), viewcount: 123  },
        { imageFile: img7, text1: "장난감 기타등등 팝니다", text2: "개당 천원씩 드릴게요 연락주세요", date: new Date(2024, 12, 14), viewcount: 3240  },
        { imageFile: img8, text1: "배변패드", text2: "무료나눔 합니다 연락주세요", date: new Date(2024, 12, 15), viewcount: 213 },
        { imageFile: img9, text1: "장난감 팔아요", text2: "직거래 합니다 연락주세요", date: new Date(2024, 12, 16), viewcount: 235 },
        { imageFile: img10, text1: "소형견 옷 땡처리", text2: "옷 개당 2천원에 드릴게요 연락주세요 소형견입니다", date: new Date(2024, 12, 17), viewcount: 54  },
        { imageFile: img11, text1: "방석 팔아요", text2: "방석 많이 안사용했어요 연락주세요", date: new Date(2024, 12, 18), viewcount: 55  },
        { imageFile: img12, text1: "이동가방 팔아요", text2: "이동가방 판매합니다 연락주세요", date: new Date(2024, 12, 19), viewcount: 7  }
    ];

    const [currentPage, setCurrentPage] = useState(1);
    const [sortedData, setSortedData] = useState(cardData);
    const postsPerPage = 12; // 한 페이지에 표시할 카드 수

    // 전체 페이지 수 계산
    const totalPages = Math.ceil(cardData.length / postsPerPage);

    // 현재 페이지에 맞는 카드 데이터 계산
    const currentPosts = sortedData.slice(
        (currentPage - 1) * postsPerPage,
        currentPage * postsPerPage
    );

    // 페이지 클릭 처리 함수
    const handlePageClick = (pageNumber) => {
        setCurrentPage(pageNumber);
    };

    // 드롭다운에서 선택된 옵션에 맞게 데이터를 처리하는 함수
const handleSortChange = (option) => {
    let sortedCards = [...cardData];
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
            sortedCards = cardData;
            break;
    }
    setSortedData(sortedCards);
    setCurrentPage(1); // 페이지를 첫 번째로 초기화
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
                        <SearchBar placeholder={"글 내용 & 글 제목"} width="300px"></SearchBar>
                    </div>
                </div>
                <div>

                    <div className={styles.rwmaincontainer}>
                        <div className={styles.rwdivider} >
                            <Divider width={"100%"} backgroundColor={"var(--line-color)"} />
                        </div>
                        {currentPosts.map((card, index) => (
                            <Card2
                                key={index}  // key prop을 고유하게 설정
                                imageFile={card.imageFile}
                                text1={card.text1}
                                text2={card.text2}
                            />
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
                    <div className={styles.buttonContainer}>
                        <Button text={"글쓰기"} />
                    </div>
                </div>

            </div>
        </div>
    )
}
export default Resell;