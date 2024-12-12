import { useState } from "react";
import img1 from '../../../assets/Resell/1.jpg';
import img2 from '../../../assets/Resell/2.jpg';
import img3 from '../../../assets/Resell/3.jpg';
import img4 from '../../../assets/Resell/4.jpg';
import img5 from '../../../assets/Resell/5.jpg';
import img6 from '../../../assets/Resell/6.jpg';
import img7 from '../../../assets/Resell/7.jpg';
import img8 from '../../../assets/Resell/8.jpg';
import img9 from '../../../assets/Resell/9.jpg';
import img10 from '../../../assets/Resell/10.jpg';
import wtstyles from "../CommunityWt.module.css";
import { useParams } from "react-router-dom";
import Resell_Post from "./Resell_Post";

function Resell_PostPage({ text = "사고팝니다", gridArea }) {

    const [allPosts, setAllposts] = useState([
        {
            id: 1,
            title: "목줄 판매합니다",
            img: [img1, img2, img3, img4],
            userid: "체리콕",
            date: new Date("2024-11-25"),
            productname: "목줄 3개",
            availablearea: "안산시 육교",
            phonenum: "010-1234-5678",
            salesamount: "3000원",
            purchaseamount: "",  // 판매
            content: "한번도 안써서 판매합니다.",
            views: 15,
        },
        {
            id: 2,
            title: "중고 자전거 삽니다",
            img: [img5, img6, img7, img8],
            userid: "바나나킥",
            date: new Date("2024-11-22"),
            productname: "MTB 자전거",
            availablearea: "서울시 강남구",
            phonenum: "010-2345-6789",
            salesamount: "",
            purchaseamount: "80,000원",  // 삽니다
            content: "상태 좋은 자전거를 찾습니다.",
            views: 23,
        },
        {
            id: 3,
            title: "운동화 세트 판매",
            img: [img2, img4, img5, img6],
            userid: "마운틴라이트",
            date: new Date("2024-11-20"),
            productname: "운동화 2개 세트",
            availablearea: "서울시 송파구",
            phonenum: "010-3456-7890",
            salesamount: "25,000원",
            purchaseamount: "",  // 판매
            content: "한 번도 착용 안 했습니다.",
            views: 18,
        },
        {
            id: 4,
            title: "전자레인지 삽니다",
            img: [img7, img8, img9, img10],
            userid: "후니쓰",
            date: new Date("2024-11-18"),
            productname: "전자레인지",
            availablearea: "경기도 수원시",
            phonenum: "010-4567-8901",
            salesamount: "",
            purchaseamount: "45,000원",  // 삽니다
            content: "상태 좋은 전자레인지 찾습니다.",
            views: 30,
        },
        {
            id: 5,
            title: "게이밍 키보드 판매",
            img: [img3, img5, img6, img9],
            userid: "테크맨",
            date: new Date("2024-11-15"),
            productname: "기계식 키보드",
            availablearea: "서울시 마포구",
            phonenum: "010-5678-9012",
            salesamount: "40,000원",
            purchaseamount: "",  // 판매
            content: "키캡 교체 가능, 상태 양호.",
            views: 22,
        },
        {
            id: 6,
            title: "컴퓨터 모니터 삽니다",
            img: [img1, img3, img8, img10],
            userid: "빅컴",
            date: new Date("2024-11-12"),
            productname: "27인치 모니터",
            availablearea: "서울시 강북구",
            phonenum: "010-6789-0123",
            salesamount: "",
            purchaseamount: "100,000원",  // 삽니다
            content: "모니터 상태 좋고 가격 합리적인 제품 찾습니다.",
            views: 25,
        },
        {
            id: 7,
            title: "디지털 카메라 판매",
            img: [img2, img4, img7, img9],
            userid: "픽셀리스트",
            date: new Date("2024-11-10"),
            productname: "디지털 카메라",
            availablearea: "서울시 용산구",
            phonenum: "010-7890-1234",
            salesamount: "200,000원",
            purchaseamount: "",  // 판매
            content: "화질 좋은 카메라 판매합니다.",
            views: 17,
        },
        {
            id: 8,
            title: "스마트폰 삽니다",
            img: [img5, img6, img7, img8],
            userid: "폰스페이스",
            date: new Date("2024-11-08"),
            productname: "갤럭시 S22",
            availablearea: "서울시 서초구",
            phonenum: "010-8901-2345",
            salesamount: "",
            purchaseamount: "350,000원",  // 삽니다
            content: "갤럭시 S22 중고폰을 찾습니다.",
            views: 35,
        },
        {
            id: 9,
            title: "책상과 의자 세트 판매",
            img: [img3, img5, img6, img10],
            userid: "오피스존",
            date: new Date("2024-11-06"),
            productname: "책상, 의자 세트",
            availablearea: "서울시 동작구",
            phonenum: "010-9012-3456",
            salesamount: "70,000원",
            purchaseamount: "",  // 판매
            content: "사무용으로 적합한 세트입니다.",
            views: 40,
        },
        {
            id: 10,
            title: "전동 킥보드 삽니다",
            img: [img4, img5, img7, img8],
            userid: "롤러보이",
            date: new Date("2024-11-03"),
            productname: "전동 킥보드",
            availablearea: "서울시 노원구",
            phonenum: "010-0123-4567",
            salesamount: "",
            purchaseamount: "120,000원",  // 삽니다
            content: "상태 좋은 전동 킥보드 구매 원합니다.",
            views: 28,
        },
        {
            id: 11,
            title: "가방 판매",
            img: [img1, img6, img9, img10],
            userid: "아이템샵",
            date: new Date("2024-11-01"),
            productname: "여성용 가방",
            availablearea: "서울시 강서구",
            phonenum: "010-1234-5678",
            salesamount: "40,000원",
            purchaseamount: "",  // 판매
            content: "사용감 적고 상태 좋아요.",
            views: 10,
        },
        {
            id: 12,
            title: "디지털 오디오 삽니다",
            img: [img2, img3, img8, img10],
            userid: "사운드맨",
            date: new Date("2024-10-30"),
            productname: "디지털 오디오 시스템",
            availablearea: "경기도 성남시",
            phonenum: "010-2345-6789",
            salesamount: "",
            purchaseamount: "500,000원",  // 삽니다
            content: "오디오 시스템, 상태 매우 좋음.",
            views: 42,
        },
    ]);
    // // 파라미터로 받은 id로 게시글 찾기
    const { id } = useParams();
    // console.log(typeof alqlPosts);

    console.log(typeof parseInt(id));
    // allPosts가 존재하는지 확인
    if (!allPosts || !Array.isArray(allPosts)) {
        return <p>게시글 데이터가 없습니다.</p>;
    }
    // id가 숫자가 아닌 경우에 대한 처리
    const idNumber = parseInt(id, 10);

    const post = allPosts.find((item) => item.id === idNumber);
    console.log(allPosts.map(item => typeof item.id));

    if (!post) {
        return <p>해당 게시글을 찾을 수 없습니다.</p>;

    }


    return (
        <div className="commwrapper"
            style={{ gridArea: gridArea }}>
            <div className={wtstyles.mainContainer}>
                <h1 style={{ textAlign: "center" }}>{text}</h1>
                <Resell_Post post={post} />
            </div>
        </div>
    );
};


export default Resell_PostPage;