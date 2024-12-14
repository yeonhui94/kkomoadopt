import styled from "styled-components";
import Divider from "../../components/Divider";
import styles from "../community/CommunityWt.module.css";
import { Outlet } from "react-router-dom";
import { useEffect, useState } from "react";
import img1 from "../../assets/CardImage/1.jpg";
import img2 from "../../assets/CardImage/2.jpg";
import img3 from "../../assets/CardImage/3.jpg";
import img4 from "../../assets/CardImage/4.jpg";
import img5 from "../../assets/CardImage/5.jpg";
import img6 from "../../assets/CardImage/6.jpg";
import img7 from "../../assets/CardImage/7.jpg";
import img8 from "../../assets/CardImage/8.jpg";
import img9 from "../../assets/CardImage/9.jpg";
import img10 from "../../assets/CardImage/10.jpg";
import img11 from "../../assets/CardImage/11.jpg";
import img12 from "../../assets/CardImage/12.jpg";
import imgc1 from "../../assets/CardImage/c1.png";
import imgc2 from "../../assets/CardImage/c2.jpg";
import imgm1 from "../../assets/CardImage/m1.jpg";
import imgm2 from "../../assets/CardImage/m2.jpg";
import Adoption_Post from "./Adoption_Post";
import { formatDate } from "../../utils/formattedDate";
import { useParams } from "react-router-dom";
import { useStore as AdoptionNoticeStore2 } from "../../stores/AdoptionNoticeStore2/useStore";
import axios from "axios";

const Adopt_postpage = ({ text = "입양", gridArea }) => {
  const { state, actions } = AdoptionNoticeStore2();
  const { adoptNum, id } = useParams();
  console.log('adoptNum',adoptNum);
  const [postsDetail, setPostDetail] = useState("");
  console.log(state);

  // 페이지가 변경될 때마다 데이터 요청
  useEffect(() => {
    // const loadData = async () => {
    //   try {
    //     console.log('await',await actions.getAdoptionPostDetailAction(adoptNum))

    //     setPostDetail(detail);
    //   } catch (error) {
    //     console.error("게시물 로딩 실패:", error);
    //   }
    // };
    // loadData();\
    console.log("adoptNum",adoptNum)
    actions.getAdoptionPostDetailAction(adoptNum)
  }, [adoptNum]); // adoptNum이 변경될 때만 실행되도록 설정


  // const [allPosts, setAllPosts] = useState([
  //     { id: 1, img: [img1, imgc1, imgm1], title: "3세 / 포메라니안 / 성격나쁨", category: "강아지", isScraped: false, breed: "포메라니안", date: new Date(2024, 12, 10), viewcount: 150 },
  //     { id: 2, img: [img1, imgc1, imgm1], title: "3개월 추정/ 포메라니안", category: "고양이", isScraped: false, breed: "먼치킨", date: new Date(2024, 10, 11), viewcount: 50 },
  //     { id: 3, img: [img1, imgc1, imgm1], title: "미어캣 / 사나움", category: "기타동물", isScraped: false, breed: "미어캣", date: new Date(2024, 5, 1), viewcount: 10 },
  //     { id: 4, img: [img4,img3,img2], title: "3개월 추정 / 진돗개 / 온순함", category: "강아지", isScraped: false, breed: "진돗개", date: new Date(2024, 10, 30), viewcount: 0 },
  //     { id: 5, img: [img4,img3,img2], title: "3개월 추정 / 온순함", category: "강아지", isScraped: false, breed: "포메라니안", date: new Date(2024, 11, 11), viewcount: 15 },
  //     { id: 6, img: [img4,img3,img2], title: "3세 / 믹스견 / 성격나쁨", category: "강아지", isScraped: false, breed: "믹스견", date: new Date(2024, 9, 10), viewcount: 12 },
  //     { id: 7, img: [img4,img3,img2], title: "2세 / 야생소 / 사나움", category: "기타동물", isScraped: false, breed: "포메라니안", date: new Date(2024, 9, 29), viewcount: 26 },
  //     { id: 8, img: [img4,img3,img2], title: "3개월 추정", category: "고양이", isScraped: false, breed: "페르시안", date: new Date(2024, 2, 2), viewcount: 2 },
  //     { id: 9, img: [img4,img3,img2], title: "3세 / 푸들 / 온순함", category: "강아지", isScraped: false, breed: "푸들", date: new Date(2024, 12, 12), viewcount: 202 },
  //     { id: 10, img: [img4,img3,img2], title: "4세 / 말티즈 / 외향적", category: "강아지", isScraped: false, breed: "말티즈", date: new Date(2024, 8, 10), viewcount: 456 },
  //     { id: 11, img: [img4,img3,img2], title: "3세 / 진돗개 / 호기심많음", category: "강아지", isScraped: false, breed: "진돗개", date: new Date(2024, 10, 10), viewcount: 123 },
  //     { id: 12, img: [img4,img3,img2], title: "3개월 추정 / 말티즈 / 온순함", category: "강아지", isScraped: false, breed: "포메라니안", date: new Date(2024, 12, 1), viewcount: 165 },
  //     { id: 13, img: [img4,img3,img2], title: "2세 / 믹스견 / 온순함", category: "강아지", isScraped: false, breed: "믹스견", date: new Date(2024, 11, 18), viewcount: 155 },
  //     { id: 14, img: [img4,img3,img2], title: "1세 / 슈나우져 / 온순함", category: "강아지", isScraped: false, breed: "슈나우져", date: new Date(2024, 10, 18), viewcount: 125 },
  //     { id: 15, img: [img4,img3,img2], title: "1세 / 비숑 / 온순함", category: "강아지", isScraped: false, breed: "비숑", date: new Date(2024, 11, 10), viewcount: 86 },
  //     { id: 16, img: [img4,img3,img2], title: "4세 / 포메라니안 / 느긋함", category: "강아지", isScraped: false, breed: "포메라니안", date: new Date(2024, 12, 2), viewcount: 0 },
  //   ]);


  //    // allPosts가 존재하는지 확인
  //    if (!allPosts || !Array.isArray(allPosts)) {
  //     return <p>게시글 데이터가 없습니다.</p>;
  // }
  // // id가 숫자가 아닌 경우에 대한 처리
  // const idNumber = parseInt(id , 10);

  // const post = allPosts.find((item) => item.id === idNumber);
  // // console.log(allPosts.map(item => typeof item.id));

  // if (!post) {
  //     return <p>해당 게시글을 찾을 수 없습니다.</p>;

  // }






  // // #2 백이랑 연동 후 사용할 것

  // // 게시물 디테일 데이터 상테
  // const [noticedetail, setNoticedetail, ] = useState(null);

  // // url에서 noticeUid 가져오기
  // const {id} = useParams();
  // const idNumber = parseInt(id , 10); 
  // const post = post.find((item) => item.id === idNumber);

  // useEffect(() => {
  //     const loadNoticedetailData = async () => {
  //       try {
  //         const detail = await fetchNoticeByUid(id); // API에서 게시물 데이터를 불러옵니다.
  //         console.log(detail);
  //         setNoticedetail(detail); // 데이터를 noticeDatas 상태에 저장

  //       } catch (error) {
  //         console.error("게시물 로딩 실패:", error);
  //       }
  //     };

  //     loadNoticedetailData(); // 게시물 데이터를 불러오는 함수 호출
  // }, [id]);

  //   noticedetail이 아직 로드되지 않았을 때를 대비한 조건부 렌더링
  //   if (!post) {
  //     return <div>Loading...</div>; // 데이터를 로딩 중일 때
  //   }



  return (

    <div className="commwrapper"
      style={{ gridArea: gridArea }}>
      <div className={styles.mainContainer}>
        <h1 style={{ textAlign: "center" }}>{text}</h1>
        <Divider />
         <Adoption_Post post={state} />
      </div>
    </div>
  );
};
export default Adopt_postpage;