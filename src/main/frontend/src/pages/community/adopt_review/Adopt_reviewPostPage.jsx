import { useState } from "react";
import img1 from '../../../assets/img2/1.jpg';
import img2 from '../../../assets/img2/2.jpg';
import img3 from '../../../assets/img2/3.jpg';
import img4 from '../../../assets/img2/4.jpg';
import img5 from '../../../assets/img2/5.jpg';
import img6 from '../../../assets/img2/6.jpg';
import img7 from '../../../assets/img2/7.jpg';
import img8 from '../../../assets/img2/8.jpg';
import img9 from '../../../assets/img2/9.jpg';
import img10 from '../../../assets/img2/10.jpg';
import img11 from '../../../assets/img2/11.jpg';
import img12 from '../../../assets/img2/12.jpg';
import img13 from '../../../assets/img2/13.jpg';
import img14 from '../../../assets/img2/14.jpg';
import img15 from '../../../assets/img2/15.jpg';
import img16 from '../../../assets/img2/16.jpg';
import img17 from '../../../assets/img2/17.jpg';
import img18 from '../../../assets/img2/18.jpg';
import img19 from '../../../assets/img2/19.jpg';
import img20 from '../../../assets/img2/20.jpg';
import img21 from '../../../assets/img2/21.jpg';
import img22 from '../../../assets/img2/22.jpg';
import img23 from '../../../assets/img2/23.jpg';
import img24 from '../../../assets/img2/24.jpg';
import img25 from '../../../assets/img2/25.jpg';
import img26 from '../../../assets/img2/26.jpg';
import img27 from '../../../assets/img2/27.jpg';
import img28 from '../../../assets/img2/28.jpg';
import img29 from '../../../assets/img2/29.jpg';
import img30 from '../../../assets/img2/30.jpg';
import wtstyles from "../CommunityWt.module.css";
import Adopt_reviewPost from "./Adopt_reviewPost";
import { useParams } from "react-router-dom";

function Adopt_reviewPostPage({ text = "입양 후기", gridArea }) {

    const [allPosts, setAllposts] = useState([
        {
            id: 1,
            title: "인삼이 입양한게 세상에서 제일 잘 한 일이에요",
            img: [img1, img2, img3, img4],
            userid: "조랭삼",
            date: new Date("2024-11-25"),
            content: "3개월로 추정되던 인삼이는 인삼밭에 유기되었던 유기견입니다. 형제자매들이 있었지만 파보병을 이기지 못하고 다 무지개다리를 건넜어요. 그 중 유일하게 살아남은 인삼이는 저희집 막내가 되었답니다. 힘들게 살아난 만큼 인삼이가 너무 소중해요. 꼬모센터 덕분에 인삼이와 인연을 맺어서 감사합니다!",
            views: 15,
        },
        {
            id: 2,
            title: "우리의 작은 영웅, 빙수",
            img: [img1, img5, img6, img7],
            userid: "빙수사랑",
            date: new Date("2024-11-23"),
            content: "빙수는 집 앞에서 발견된 강아지였어요. 매우 약해 보였지만, 지금은 활발하게 뛰어다니며 즐겁게 살아가고 있어요. 정말 행복하게 지내고 있는 빙수의 모습이 너무 자랑스럽습니다.",
            views: 20,
        },
        {
            id: 3,
            title: "고양이 구출 이야기",
            img: [img2, img8, img9, img10],
            userid: "냥이러브",
            date: new Date("2024-11-21"),
            content: "어느 날, 길에서 다친 고양이를 발견했습니다. 차에 치인 듯한 상처로 고통스러워 보였지만, 지금은 많이 회복하고 예쁜 고양이로 성장했답니다. 진짜 너무 귀엽고, 사랑스러워요.",
            views: 25,
        },
        {
            id: 4,
            title: "치즈, 내 삶의 전환점",
            img: [img3, img11, img12, img13],
            userid: "치즈러버",
            date: new Date("2024-11-20"),
            content: "치즈는 유기견으로 저희 집에 온 후부터 제 삶이 완전히 달라졌어요. 치즈와 함께라면 어떤 어려움도 다 극복할 수 있을 것 같습니다. 치즈에게 감사하는 마음을 담아서 글을 써봅니다.",
            views: 30,
        },
        {
            id: 5,
            title: "아이들의 미소, 우리의 행복",
            img: [img4, img14, img15, img16],
            userid: "행복한가정",
            date: new Date("2024-11-18"),
            content: "우리 가족에게 새로 온 아이는 유기견으로 보호소에서 입양된 꼬마 강아지예요. 처음엔 너무 많이 낯설어했지만, 이제는 가족처럼 함께 지내고 있습니다. 아이들의 행복이 제일 중요하죠.",
            views: 35,
        },
        {
            id: 6,
            title: "애기 고양이의 성장 일기",
            img: [img5, img17, img18, img19],
            userid: "고양이맘",
            date: new Date("2024-11-16"),
            content: "이 고양이는 엄마 고양이와 함께 살던 중, 엄마가 떠난 뒤 혼자 남았어요. 처음엔 너무 힘들어했지만, 지금은 무럭무럭 자라서 행복한 삶을 살아가고 있어요.",
            views: 18,
        },
        {
            id: 7,
            title: "봉봉이와 함께한 소중한 시간",
            img: [img6, img20, img21, img22],
            userid: "봉봉이네",
            date: new Date("2024-11-15"),
            content: "봉봉이는 유기동물 보호소에서 온 강아지로, 우리에게 큰 기쁨을 주고 있어요. 하루하루 봉봉이와 함께하는 시간이 너무 소중하고 행복합니다.",
            views: 40,
        },
        {
            id: 8,
            title: "소중한 인연, 희망이",
            img: [img7, img23, img24, img25],
            userid: "희망이의집",
            date: new Date("2024-11-12"),
            content: "희망이는 길거리에서 발견된 작은 고양이였어요. 처음엔 너무 약하고 겁먹었지만, 지금은 제일 활발하고 사랑스러운 친구가 되었답니다.",
            views: 50,
        },
        {
            id: 9,
            title: "우리의 첫 번째 입양, 또치",
            img: [img8, img26, img27, img28],
            userid: "또치랑",
            date: new Date("2024-11-10"),
            content: "또치는 처음엔 많이 두려워했지만, 이제는 집에서 제일 활발하게 뛰어다니고 있어요. 우리의 첫 입양이어서 의미가 더 큰 것 같아요.",
            views: 60,
        },
        {
            id: 10,
            title: "겨울이 온다, 우리 곁의 친구들",
            img: [img9, img29, img30],
            userid: "겨울이와친구들",
            date: new Date("2024-11-08"),
            content: "겨울이와 친구들은 저희 집에서 가장 사랑받는 가족이에요. 겨울이 덕분에 집 안에 따뜻한 에너지가 넘쳐 흐릅니다.",
            views: 22,
        },
        {
            id: 11,
            title: "토리와 하루, 두 친구의 이야기",
            img: [img10, img1, img2],
            userid: "토리하루",
            date: new Date("2024-11-05"),
            content: "토리와 하루는 고양이와 강아지라는 점에서 서로 다르지만, 서로를 매우 아끼고 지내고 있어요. 두 친구의 우정은 정말 아름답습니다.",
            views: 38,
        },
        {
            id: 12,
            title: "우리는 함께 자라요, 루나와 리키",
            img: [img11, img3, img4],
            userid: "루리네",
            date: new Date("2024-11-02"),
            content: "루나와 리키는 둘 다 입양된 강아지예요. 이제는 둘이 함께 자라며 아주 친한 친구가 되었어요. 정말 보기만 해도 웃음이 나옵니다.",
            views: 45,
        },
        {
            id: 13,
            title: "사랑스러운 포토, 내 친구",
            img: [img12, img5, img6],
            userid: "포토사랑",
            date: new Date("2024-10-30"),
            content: "포토는 제가 처음 입양한 고양이입니다. 언제나 저를 쳐다보는 그 눈빛이 너무 귀엽고, 제 마음을 따뜻하게 해줘요.",
            views: 28,
        },
        {
            id: 14,
            title: "희망을 주는 무비",
            img: [img13, img7, img8],
            userid: "무비사랑",
            date: new Date("2024-10-28"),
            content: "무비는 원래 겁이 많았던 강아지였지만, 저와 함께 지내며 많이 변했어요. 지금은 더이상 두려워하지 않아요. 무비에게 배운 것이 많아요.",
            views: 33,
        },
        {
            id: 15,
            title: "우리 가족의 일원, 뽀송이",
            img: [img14, img9, img10],
            userid: "뽀송이네",
            date: new Date("2024-10-25"),
            content: "뽀송이는 집에서 키우고 있는 고양이에요. 매우 온순하고 애교가 많아서 모두가 뽀송이를 좋아합니다. 뽀송이 덕분에 행복한 나날을 보내고 있어요.",
            views: 21,
        },
        {
            id: 16,
            title: "사랑스러운 새 가족, 찰리",
            img: [img15, img11, img12],
            userid: "찰리네",
            date: new Date("2024-10-23"),
            content: "찰리는 유기견 보호소에서 입양된 강아지입니다. 입양 첫날부터 많이 친해졌고, 지금은 정말 즐겁고 행복하게 살아가고 있습니다.",
            views: 12,
        },
        {
            id: 17,
            title: "믿을 수 없는 변화, 하이디",
            img: [img16, img17, img18],
            userid: "하이디사랑",
            date: new Date("2024-10-20"),
            content: "하이디는 처음엔 사람을 무서워했지만, 지금은 저를 아주 잘 따르며 사랑을 표현하는 고양이가 되었어요. 하이디가 있어 너무 행복합니다.",
            views: 27,
        },
        {
            id: 18,
            title: "새로운 삶을 시작한 하늘이",
            img: [img17, img19, img20],
            userid: "하늘이네",
            date: new Date("2024-10-18"),
            content: "하늘이는 길에서 발견된 후 저희 집에 오게 되었습니다. 처음엔 많이 걱정했지만, 지금은 정말 사랑스러운 친구가 되었습니다.",
            views: 55,
        },
        {
            id: 19,
            title: "진지한 대화의 시간, 요요와 함께",
            img: [img18, img21, img22],
            userid: "요요네",
            date: new Date("2024-10-15"),
            content: "요요는 길에서 구출된 고양이로, 지금은 매우 신뢰가 깊은 친구가 되었습니다. 요요와 함께하는 시간이 너무 소중합니다.",
            views: 23,
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
                <Adopt_reviewPost post={post} />
            </div>
        </div>
    );
};


export default Adopt_reviewPostPage;