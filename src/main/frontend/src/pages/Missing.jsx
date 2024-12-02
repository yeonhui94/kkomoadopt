import Divider from "../components/Divider";
import Dropdown from "../components/DropDown";
import SearchBar from "../components/SearchBar";
import styles from "./Review.module.css";
import img1 from "../assets/CardImage/1.jpg"
import img2 from "../assets/CardImage/2.jpg"
import img3 from "../assets/CardImage/3.jpg"
import img4 from "../assets/CardImage/4.jpg"
import img5 from "../assets/CardImage/5.jpg"
import img6 from "../assets/CardImage/6.jpg"
import img7 from "../assets/CardImage/7.jpg"
import img8 from "../assets/CardImage/8.jpg"
import img9 from "../assets/CardImage/9.jpg"
import img10 from "../assets/CardImage/10.jpg"
import img11 from "../assets/CardImage/11.jpg"
import img12 from "../assets/CardImage/12.jpg"
import Card2 from "../components/Card2/Card2";
import Footer from "../container/Footer";
import Button from "../components/Button/Button";
import Pagenumber from "../components/pagenumber/Pagenumber";
import { useState } from "react";


const Missing =({gridArea})=>{


    const options = ["전체보기","최신 순", "오래된 순", "조회 수 높은 순","조회 수 낮은 순"];


    const cardData = [
        { imageFile: img1, text1: "충남 예산시", text2: "산책 중에 목줄이 끊겨버렸습니다 도와주세요 ", date: new Date(2024,12,1), viewcount: 150 },
        { imageFile: img2, text1: "경기도 화성시", text2: "경기도 화성시 중앙공원에서 아이가 사라졌어요", date: new Date(2024,12,2), viewcount: 151 },
        { imageFile: img3, text1: "서울 광진구", text2: "광진구 광진초등학교 근처에서 슈퍼에 들리다가", date: new Date(2024,12,3), viewcount: 151 },
        { imageFile: img4, text1: "경기도 파주시", text2: "파주에 사람이 없다보니 목줄 풀고 애가 뛰어놀게 했는데", date: new Date(2024,12,4), viewcount: 153 },
        { imageFile: img5, text1: "서울 동작구", text2: "갑자기 목줄 풀자마자 도망가더니 사라졌어요", date: new Date(2024,12,5), viewcount: 10 },
        { imageFile: img6, text1: "서울 코스모구", text2: "주변에 신호등도 많고 사람도 많아서 걱정이 됩니다", date: new Date(2024,12,6), viewcount: 154 },
        { imageFile: img7, text1: "경기도 부천시", text2: "겁이 너무 많아서 사람이 다가가면 도망갈수도 있어요", date: new Date(2024,12,7), viewcount: 155 },
        { imageFile: img8, text1: "전북 군산시", text2: "이름은 행운이고 많이 사나운데 지금 혼자 있어서 떨고있을거같아요 ", date: new Date(2024,12,8), viewcount: 156 },
        { imageFile: img9, text1: "경남 진주시", text2: "혹시라도 발견하시면 사례금 드리겠습니다 제발 연락주세요..", date: new Date(2024,12,9), viewcount: 157 },
        { imageFile: img10, text1: "경남 사천시", text2: "내장칩이 없어서 너무 걱정이에요 제발 도와주세요", date: new Date(2024,12,10), viewcount: 158 },
        { imageFile: img11, text1: "경기도 안양", text2: "사례금 100만원 드립니다", date: new Date(2024,12,11), viewcount: 159 },
        { imageFile: img12, text1: "충남 서산", text2: "노견이라 슬개골이 많이 안좋아요 멀리 못갔을텐데 보이지가 않습니다", date: new Date(2024,12,12), viewcount: 15 }
      ];




    const [currentPage, setCurrentPage] = useState(1);
    const postsPerPage = 12; // 한 페이지에 표시할 카드 수

    // 전체 페이지 수 계산
    const totalPages = Math.ceil(cardData.length / postsPerPage);

    // 현재 페이지에 맞는 카드 데이터 계산
    const currentPosts = cardData.slice(
        (currentPage - 1) * postsPerPage,
        currentPage * postsPerPage
    );

    // 페이지 클릭 처리 함수
    const handlePageClick = (pageNumber) => {
        setCurrentPage(pageNumber);
    };

    return(
        <div style={{gridArea : gridArea}}>
            <div className={styles.rwWrapper}>
                <div className={styles.rwsubcontainer}>
                    <div className={styles.rwsubcontainer2}>
                        <Dropdown options={options} />
                        <SearchBar placeholder={"글 내용 & 글 제목"} width="300px"></SearchBar>
                    </div>
                </div>
                    <div>

                        <div className={styles.rwmaincontainer}>
                            <div className={styles.rwdivider} >
                                <Divider width={"100%"} backgroundColor={"var(--line-color)"} />
                            </div>
                            {cardData.map((card, index) => (
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
export default Missing;