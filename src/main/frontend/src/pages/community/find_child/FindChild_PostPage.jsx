import { useState } from "react";
import img1 from './missingdog.jpg';
import img2 from '../../../assets/CardImage/1.jpg';
import img3 from '../../../assets/CardImage/3.jpg';
import img4 from '../../../assets/CardImage/4.jpg';
import img5 from '../../../assets/CardImage/5.jpg';
import img6 from '../../../assets/CardImage/6.jpg';
import img7 from '../../../assets/CardImage/7.jpg';
import img8 from '../../../assets/CardImage/8.jpg';
import img9 from '../../../assets/CardImage/9.jpg';
import img10 from '../../../assets/CardImage/10.jpg';
import img11 from '../../../assets/CardImage/11.jpg';
import wtstyles from "../CommunityWt.module.css";
import FindChild_Post from "./FindChild_Post";
import { useParams } from "react-router-dom";

function FindChild_PostPage({ text = "아이를 찾습니다", gridArea }) {

    const [allPosts, setAllposts] = useState([
        {
            id: 1,
            title: "우리 복덩이를 찾습니다",
            img: [img1, img2, img3, img4],
            userid: "코딩귀신",
            date: new Date("2024-11-25"),
            content: "초록색 목줄, 한쪽귀 쳐짐, 겁 많음 중앙공원에서 산책 중에 목줄을 놓쳤습니다. 3세 진도 믹스입니다.",
            animalkind: "진도믹스",
            missingdate: "잃어버린 날짜 : 2024-11-15",
            missingloca: "부천 중앙공원",
            phonenum: "010-1234-5678",
            animalname: "몽실이",
            views: 15,
        },
        {
            id: 2,
            title: "하늘이 찾습니다",
            img: [img5, img6, img7, img8],
            userid: "잃어버린하늘",
            date: new Date("2024-11-20"),
            content: "흰색 털, 작은 크기, 짧은 다리 강남역 근처에서 실종되었어요. 혹시 봤다면 연락 부탁드립니다.",
            animalkind: "말티즈",
            missingdate: "잃어버린 날짜 : 2024-11-18",
            missingloca: "서울 강남역",
            phonenum: "010-9876-5432",
            animalname: "하늘이",
            views: 10,
        },
        {
            id: 3,
            title: "우리 강아지를 찾습니다!",
            img: [img9, img10, img11, img1],
            userid: "희망찾기",
            date: new Date("2024-11-18"),
            content: "갈색 털, 크고, 사람을 좋아함 올림픽공원에서 실종되었어요. 대박이를 찾아주세요!",
            animalkind: "골든 리트리버",
            missingdate: "잃어버린 날짜 : 2024-11-10",
            missingloca: "송파구 올림픽공원",
            phonenum: "010-1111-2222",
            animalname: "대박이",
            views: 25,
        },
        {
            id: 4,
            title: "우리 고양이 찾습니다",
            img: [img2, img3, img4, img5],
            userid: "고양이집사",
            date: new Date("2024-11-16"),
            content: "푸른 회색 털, 눈이 큰 편, 사람을 잘 따름 마포구 근처에서 사라졌어요. 루비를 찾고 있어요.",
            animalkind: "러시안블루",
            missingdate: "잃어버린 날짜 : 2024-11-14",
            missingloca: "서울 마포구",
            phonenum: "010-2222-3333",
            animalname: "루비",
            views: 18,
        },
        {
            id: 5,
            title: "미소를 찾아주세요",
            img: [img6, img7, img8, img9],
            userid: "미소찾기",
            date: new Date("2024-11-15"),
            content: "노란색 목줄, 짧은 코, 귀여운 표정 대전 한남대 앞에서 사라졌어요. 미소를 찾고 있습니다.",
            animalkind: "시츄",
            missingdate: "잃어버린 날짜 : 2024-11-12",
            missingloca: "대전 한남대 앞",
            phonenum: "010-3333-4444",
            animalname: "미소",
            views: 12,
        },
        {
            id: 6,
            title: "무지개 찾아요",
            img: [img10, img11, img1, img2],
            userid: "무지개애완동물",
            date: new Date("2024-11-12"),
            content: "흰색 털, 작고 통통함 해운대 근처에서 실종되었습니다. 무지개를 찾고 있습니다.",
            animalkind: "비숑 프리제",
            missingdate: "잃어버린 날짜 : 2024-11-10",
            missingloca: "부산 해운대",
            phonenum: "010-4444-5555",
            animalname: "무지개",
            views: 9,
        },
        {
            id: 7,
            title: "봉봉이 찾습니다",
            img: [img1, img1, img1, img1],
            userid: "봉봉이엄마",
            date: new Date("2024-11-10"),
            content: "갈색 털, 꼬리가 곧고 귀여움 송도에서 봉봉이를 찾고 있습니다.",
            animalkind: "푸들",
            missingdate: "잃어버린 날짜 : 2024-11-8",
            missingloca: "인천 송도",
            phonenum: "010-5555-6666",
            animalname: "봉봉이",
            views: 5,
        },
        {
            id: 8,
            title: "복순이 찾습니다",
            img: [img1, img1, img1, img1],
            userid: "복순이사랑",
            date: new Date("2024-11-9"),
            content: "파란 눈, 흰색 털, 차가운 날씨에서 잘 지냄 수원에서 복순이를 찾고 있습니다.",
            animalkind: "시베리안 허스키",
            missingdate: "잃어버린 날짜 : 2024-11-7",
            missingloca: "경기도 수원",
            phonenum: "010-6666-7777",
            animalname: "복순이",
            views: 22,
        },
        {
            id: 9,
            title: "초코 찾고 있어요",
            img: [img1, img1, img1, img1],
            userid: "초코팬",
            date: new Date("2024-11-5"),
            content: "짙은 갈색, 다리가 길고 귀가 처짐 종로에서 초코를 찾고 있어요.",
            animalkind: "래브라도 리트리버",
            missingdate: "잃어버린 날짜 : 2024-11-3",
            missingloca: "서울 종로구",
            phonenum: "010-7777-8888",
            animalname: "초코",
            views: 19,
        },
        {
            id: 10,
            title: "호두가 사라졌어요",
            img: [img1, img1, img1, img1],
            userid: "호두마마",
            date: new Date("2024-11-3"),
            content: "작은 크기, 갈색 털, 사람이 가까이 다가가면 겁을 먹음 강서구에서 호두를 찾고 있습니다.",
            animalkind: "토이푸들",
            missingdate: "잃어버린 날짜 : 2024-10-30",
            missingloca: "서울 강서구",
            phonenum: "010-8888-9999",
            animalname: "호두",
            views: 16,
        },
        {
            id: 11,
            title: "레오 찾습니다",
            img: [img1, img1, img1, img1],
            userid: "레오맘",
            date: new Date("2024-10-30"),
            content: "밝은 황금색 털, 큰 덩치, 매우 친근함 용인에서 레오를 찾고 있어요.",
            animalkind: "골든 리트리버",
            missingdate: "잃어버린 날짜 : 2024-10-25",
            missingloca: "경기 용인",
            phonenum: "010-1234-4321",
            animalname: "레오",
            views: 27,
        },
        {
            id: 12,
            title: "하리 찾고 있어요",
            img: [img1, img1, img1, img1],
            userid: "하리랑",
            date: new Date("2024-10-28"),
            content: "오렌지색 털, 작은 크기, 사람을 좋아함 용산구에서 하리를 찾고 있습니다.",
            animalkind: "포메라니안",
            missingdate: "잃어버린 날짜 : 2024-10-22",
            missingloca: "서울 용산구",
            phonenum: "010-1234-5678",
            animalname: "하리",
            views: 13,
        },
        {
            id: 13,
            title: "백구를 찾아주세요",
            img: [img1, img1, img1, img1],
            userid: "백구사랑",
            date: new Date("2024-10-25"),
            content: "흰색 털, 커다란 몸집, 충성심 강함 전주에서 백구를 찾고 있어요.",
            animalkind: "진돗개",
            missingdate: "잃어버린 날짜 : 2024-10-20",
            missingloca: "전북 전주",
            phonenum: "010-2222-3333",
            animalname: "백구",
            views: 20,
        },
        {
            id: 14,
            title: "꼬마 고양이 찾고 있어요",
            img: [img1, img1, img1, img1],
            userid: "고양이사랑",
            date: new Date("2024-10-20"),
            content: "귀가 접혀있음, 노란색 눈, 작은 크기 동래구에서 꼬마를 찾고 있습니다.",
            animalkind: "스코티시폴드",
            missingdate: "잃어버린 날짜 : 2024-10-18",
            missingloca: "부산 동래구",
            phonenum: "010-4444-5555",
            animalname: "꼬마",
            views: 17,
        },
        {
            id: 15,
            title: "양말이 찾고 있어요",
            img: [img1, img1, img1, img1],
            userid: "양말팬",
            date: new Date("2024-10-15"),
            content: "갈색 털, 작은 몸집, 활발함 부평구에서 양말이를 찾고 있어요.",
            animalkind: "장모 치와와",
            missingdate: "잃어버린 날짜 : 2024-10-10",
            missingloca: "인천 부평구",
            phonenum: "010-5555-6666",
            animalname: "양말이",
            views: 23,
        },
        {
            id: 16,
            title: "미미 찾고 있습니다",
            img: [img1, img1, img1, img1],
            userid: "미미맘",
            date: new Date("2024-10-10"),
            content: "검은색 눈, 짧은 털, 인내심 많음 관악구에서 미미를 찾고 있어요.",
            animalkind: "뷰티풀 필드",
            missingdate: "잃어버린 날짜 : 2024-10-5",
            missingloca: "서울 관악구",
            phonenum: "010-7777-1234",
            animalname: "미미",
            views: 14,
        },
        {
            id: 17,
            title: "영희 찾고 있어요",
            img: [img1, img1, img1, img1],
            userid: "영희이모",
            date: new Date("2024-10-1"),
            content: "하얀 털, 작고 귀여운 크기 동대문구에서 영희를 찾고 있습니다.",
            animalkind: "토끼",
            missingdate: "잃어버린 날짜 : 2024-9-28",
            missingloca: "서울 동대문구",
            phonenum: "010-1111-2222",
            animalname: "영희",
            views: 30,
        },
        {
            id: 18,
            title: "다람이 찾고 있습니다",
            img: [img2, img1, img3, img4],
            userid: "다람이사랑",
            date: new Date("2024-9-28"),
            content: "작은 크기, 빠름, 갈색과 검은색 털 대구 달성군에서 다람이를 찾고 있습니다.",
            animalkind: "다람쥐",
            missingdate: "잃어버린 날짜 : 2024-9-25",
            missingloca: "대구 달성군",
            phonenum: "010-1234-4321",
            animalname: "다람이",
            views: 28,
        },
        {
            id: 19,
            title: "반짝이를 찾고 있습니다",
            img: [img1, img1, img1, img1],
            userid: "반짝이애호가",
            date: new Date("2024-9-22"),
            content: "회색 털, 귀가 뾰족하고 짧음 울산 남구에서 반짝이를 찾고 있습니다.",
            animalkind: "미니어처 슈나우저",
            missingdate: "잃어버린 날짜 : 2024-9-20",
            missingloca: "울산 남구",
            phonenum: "010-3333-4444",
            animalname: "반짝이",
            views: 26,
        }
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
                <FindChild_Post post={post} />
            </div>
        </div>
    );
};


export default FindChild_PostPage;