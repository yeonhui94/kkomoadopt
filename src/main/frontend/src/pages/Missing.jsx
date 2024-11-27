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


const Missing =()=>{

    const options = ["전체보기","최신 순", "오래된 순", "조회 수 높은 순","조회 수 낮은 순"];


    const cardData = [
        { imageFile: img1, text1: "충남 예산시", text2: "산책 중에 목줄이 끊겨버렸습니다 도와주세요 " },
        { imageFile: img2, text1: "경기도 화성시", text2: "경기도 화성시 중앙공원에서 아이가 사라졌어요" },
        { imageFile: img3, text1: "서울 광진구", text2: "광진구 광진초등학교 근처에서 슈퍼에 들리다가" },
        { imageFile: img4, text1: "경기도 파주시", text2: "파주에 사람이 없다보니 목줄 풀고 애가 뛰어놀게 했는데" },
        { imageFile: img5, text1: "서울 동작구", text2: "갑자기 목줄 풀자마자 도망가더니 사라졌어요" },
        { imageFile: img6, text1: "서울 코스모구", text2: "주변에 신호등도 많고 사람도 많아서 걱정이 됩니다" },
        { imageFile: img7, text1: "경기도 부천시", text2: "겁이 너무 많아서 사람이 다가가면 도망갈수도 있어요" },
        { imageFile: img8, text1: "전북 군산시", text2: "이름은 행운이고 많이 사나운데 지금 혼자 있어서 떨고있을거같아요 " },
        { imageFile: img9, text1: "경남 진주시", text2: "혹시라도 발견하시면 사례금 드리겠습니다 제발 연락주세요.." },
        { imageFile: img10, text1: "경남 사천시", text2: "내장칩이 없어서 너무 걱정이에요 제발 도와주세요" },
        { imageFile: img11, text1: "경기도 안양", text2: "사례금 100만원 드립니다" },
        { imageFile: img12, text1: "충남 서산", text2: "노견이라 슬개골이 많이 안좋아요 멀리 못갔을텐데 보이지가 않습니다" }
      ];



    return(
        <>
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

                <div className={styles.buttonContainer}>
                    <Button text={"글쓰기"} />
                </div>

            </div>
            <Footer></Footer>
        </>
    )
}
export default Missing;