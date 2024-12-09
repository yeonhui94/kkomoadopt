// import Footer from "../../container/Footer";
import Divider from "../../../components/Divider";
import wtstyles from "../CommunityWt.module.css";
import { Outlet, useParams } from "react-router-dom";
import Report_Post from "./Report_Post";
import { useState } from "react";
import img3 from "../../../assets/CardImage/3.jpg";
import img9 from "../../../assets/CardImage/9.jpg";
import img11 from "../../../assets/CardImage/11.jpg";
import imgc2 from "../../../assets/CardImage/c2.jpg";



const Report_postpage = ({ text = "신고합니다"  , gridArea}) => {
  // 신고대상, 신고게시물번호, 신고내용

  const [allPosts, setAllposts] = useState([ 
    { id: 1, title: "새 게시물 제목", img: "" ,admin: "짱구는", date: new Date("2024-11-25"), views: 5, files: 2, target: "sangil0528", reportpostnum: 334, content: "악플이 달렸어요 ㅠㅠ" },
    { id: 2, title: "새 게시물 제목 2", img: "" ,admin: "집갈래", date: new Date("2024-10-25"), views: 4, files: 2, target: "100wincattle", reportpostnum: 335, content: "누가 이런 글을 썼나요?" },
    { id: 3, title: "새 게시물 제목 3", img: "", admin: "고소연하게", date: new Date("2024-09-25"), views: 10, files: 2, target: "sangil0528", reportpostnum: 336, content: "이 글이 너무 마음에 안 들어요." },
    { id: 4, title: "새 게시물 제목 4@", img: [img11,imgc2, img3, img9] , admin: "규카츠온", date: new Date("2024-08-25"), views: 50, files: 2, target: "100wincattle", reportpostnum: 337, content: "댓글이 너무 비판적이에요!" },
    { id: 5, title: "새 게시물 제목 5", img: "", admin: "레일라온", date: new Date("2024-07-25"), views: 0, files: 2, target: "sangil0528", reportpostnum: 338, content: "이거 정말 문제 있는 글 같아요." },
    { id: 6, title: "새 게시물 제목 6", img: "", admin: "닝ㄴ잉", date: new Date("2024-06-25"), views: 7, files: 2, target: "100wincattle", reportpostnum: 339, content: "이건 너무한 댓글이에요!" },
    { id: 7, title: "새 게시물 제목 7", img: "", admin: "문상만원", date: new Date("2024-05-25"), views: 23, files: 2, target: "sangil0528", reportpostnum: 340, content: "악플이 달렸어요 ㅠㅠ" },
    { id: 8, title: "새 게시물 제목 8", img: "", admin: "재헌*5", date: new Date("2024-04-25"), views: 15, files: 2, target: "100wincattle", reportpostnum: 341, content: "누가 이런 글을 썼나요?" },
    { id: 9, title: "새 게시물 제목 9@", img: [img11,imgc2, img3, img9] , admin: "작은지", date: new Date("2024-03-25"), views: 4, files: 2, target: "sangil0528", reportpostnum: 342, content: "이 글이 너무 마음에 안 들어요." },
    { id: 10, title: "새 게시물 제목 10@", img: [img11,imgc2, img3, img9] , admin: "큰은지", date: new Date("2024-02-25"), views: 1, files: 2, target: "100wincattle", reportpostnum: 343, content: "댓글이 너무 비판적이에요!" },
    { id: 11, title: "새 게시물 제목 11", img: "", admin: "연금술사", date: new Date("2024-01-15"), views: 14, files: 2, target: "sangil0528", reportpostnum: 344, content: "이거 정말 문제 있는 글 같아요." },
    { id: 12, title: "새 게시물 제목 12", img: "", admin: "무지개추격자", date: new Date("2023-12-10"), views: 30, files: 2, target: "100wincattle", reportpostnum: 345, content: "이건 너무한 댓글이에요!" },
    { id: 13, title: "새 게시물 제목 13", img: "", admin: "시간루팡", date: new Date("2023-11-05"), views: 5, files: 2, target: "sangil0528", reportpostnum: 346, content: "악플이 달렸어요 ㅠㅠ" },
    { id: 14, title: "새 게시물 제목 14", img: "", admin: "포슬핑", date: new Date("2023-10-10"), views: 25, files: 2, target: "100wincattle", reportpostnum: 347, content: "누가 이런 글을 썼나요?" },
    { id: 15, title: "새 게시물 제목 15", img: "", admin: "졸령", date: new Date("2023-09-20"), views: 12, files: 2, target: "sangil0528", reportpostnum: 348, content: "이 글이 너무 마음에 안 들어요." },
    { id: 16, title: "새 게시물 제목 16", img: "", admin: "피고냉", date: new Date("2023-08-18"), views: 9, files: 2, target: "100wincattle", reportpostnum: 349, content: "댓글이 너무 비판적이에요!" },
    { id: 17, title: "새 게시물 제목 17", img: "", admin: "도토리행성주민", date: new Date("2023-07-11"), views: 3, files: 2, target: "sangil0528", reportpostnum: 350, content: "이거 정말 문제 있는 글 같아요." },
    { id: 18, title: "새 게시물 제목 18", img: "", admin: "혜린온귀여웡", date: new Date("2023-06-22"), views: 18, files: 2, target: "100wincattle", reportpostnum: 351, content: "이건 너무한 댓글이에요!" },
    { id: 19, title: "새 게시물 제목 19", img: "", admin: "호유동", date: new Date("2023-05-15"), views: 20, files: 2, target: "sangil0528", reportpostnum: 352, content: "악플이 달렸어요 ㅠㅠ" },
    { id: 20, title: "새 게시물 제목 20@", img: [img11,imgc2, img3, img9] , admin: "햄스퉈", date: new Date("2023-04-05"), views: 13, files: 2, target: "100wincattle", reportpostnum: 353, content: "누가 이런 글을 썼나요?" },
    { id: 21, title: "새 게시물 제목 21", img: "", admin: "수혀나뮤직큐", date: new Date("2023-03-02"), views: 30, files: 2, target: "sangil0528", reportpostnum: 354, content: "이 글이 너무 마음에 안 들어요." },
    { id: 22, title: "새 게시물 제목 22", img: "", admin: "집에가고시퍼", date: new Date("2023-02-18"), views: 8, files: 2, target: "100wincattle", reportpostnum: 355, content: "댓글이 너무 비판적이에요!" },
    { id: 23, title: "새 게시물 제목 23", img: "", admin: "소고기", date: new Date("2023-01-12"), views: 6, files: 2, target: "sangil0528", reportpostnum: 356, content: "이거 정말 문제 있는 글 같아요." },
    { id: 24, title: "새 게시물 제목 24", img: "", admin: "gpt바보", date: new Date("2022-12-05"), views: 17, files: 2, target: "100wincattle", reportpostnum: 357, content: "이건 너무한 댓글이에요!" },
    { id: 25, title: "새 게시물 제목 25", img: "", admin: "안드로이드몽상가", date: new Date("2022-11-21"), views: 27, files: 2, target: "sangil0528", reportpostnum: 358, content: "악플이 달렸어요 ㅠㅠ" },
    { id: 26, title: "새 게시물 제목 26", img: "", admin: "개굴", date: new Date("2022-10-15"), views: 19, files: 2, target: "100wincattle", reportpostnum: 359, content: "누가 이런 글을 썼나요?" },
    { id: 27, title: "새 게시물 제목 27",img: "",  admin: "캬핳", date: new Date("2022-09-10"), views: 2, files: 2, target: "sangil0528", reportpostnum: 360, content: "이 글이 너무 마음에 안 들어요." }
]); 

  // // 파라미터로 받은 id로 게시글 찾기
  const { id } = useParams();
  // console.log(typeof alqlPosts);

  console.log( typeof parseInt(id));
   // allPosts가 존재하는지 확인
  if (!allPosts || !Array.isArray(allPosts)) {
      return <p>게시글 데이터가 없습니다.</p>;
  }
  // id가 숫자가 아닌 경우에 대한 처리
  const idNumber = parseInt(id , 10);

  const post = allPosts.find((item) => item.id === idNumber);
  console.log(allPosts.map(item => typeof item.id));
  
  if (!post) {
      return <p>해당 게시글을 찾을 수 없습니다.</p>;

  }

  
  return (
    <div className="commwrapper"
    style={{gridArea : gridArea }}>
      <div className={wtstyles.mainContainer}>
        <h1 style={{textAlign :"center"}}>{text}</h1>
        <Report_Post post={post}/>
      </div>
    </div>
  );
};
export default Report_postpage ;