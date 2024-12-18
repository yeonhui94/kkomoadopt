// import QnaList from "./components/QnaList";
// import Pagenumber from "../../components/pagenumber/Pagenumber";

// import {
//   qnaPageContainer,
//   filterSelect,
//   sectionContainer,
//   bottomContainer,
//   hidden,
// } from "./QnaListPage.module.css";
// import Button from "../../components/Button/Button";
// import { Link, useNavigate, useSearchParams } from "react-router-dom";
// import Dropdown from "../../components/DropDown";
// import { useStore } from "../../stores/QNAStore2/useStore";
// import { useEffect } from "react";
// import Pagenumber2 from "./Pagenumber2";


// const mockOptions = ["최신순", "오래된순", "조회수 높은순", "조회수 낮은순"];

// const QnaListPage = () => {

//   const {state : qndState , actions : qnaActions } = useStore();
  

  // useEffect(()=>{
  //   const fetchPosts = async()=>{
  //     const response = await qnaActions.readQnaPosts();
  //   };
  //   fetchPosts();
  // },[])


//   return (
//     <div className={qnaPageContainer}>
//       <div className={sectionContainer}>
//         <div className={filterSelect}>
//           <Dropdown options={mockOptions} />
//         </div>
//         <QnaList qnaList={qndState.qnaPosts}/>
//         <div className={bottomContainer}>
//           <div className={hidden}>
//             <Button />
//           </div>
//           <Pagenumber2

//           />
//           <Link to="communtywt">
//             <Button text="글쓰기" />
//           </Link>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default QnaListPage;


import QnaList from "./components/QnaList";
import Pagenumber2 from "./Pagenumber2";

import {
  qnaPageContainer,
  filterSelect,
  sectionContainer,
  bottomContainer,
  hidden,
} from "./QnaListPage.module.css";
import Button from "../../components/Button/Button";
import { Link } from "react-router-dom";
import Dropdown from "../../components/DropDown";
import { useStore } from "../../stores/QNAStore2/useStore";
import { useEffect, useState } from "react";

const mockOptions = [{text: '최신순', value:"qnaCreatedAt", order:"desc"}
  , {text: '과거순', value:"qnaCreatedAt", order:"asc"}, {text: '조회수 높은순 ', value:"qnaViewCount", order:"desc"},{text: '조회수 낮은순순 ', value:"qnaViewCount", order:"asc"}];

const QnaListPage = () => {
  
  
  // 상태 정의
  const [currentPage, setCurrentPage] = useState(1); // 현재 페이지
  const [postsPerPage] = useState(10); // 한 페이지에 표시할 게시물 수
  const [orderInfo,setOrderInfo] = useState({orderBy : 'qnaCreatedAt' , sortOrder: 'desc'})
  const { state, actions } = useStore();
  
  // useEffect(()=>{
  //   const fetchPosts = async()=>{
  //     const response = await qnaActions.readQnaPosts();
  //   };
  //   fetchPosts();
  // },[])
  //무한렌더링
  useEffect(  () => {
    actions.readQnaPosts(
      currentPage,
     10,
     orderInfo.orderBy,
     orderInfo.sortOrder
   );
    
   console.log(state)
  }, [currentPage,orderInfo]); 



  // 페이지네이션: 현재 페이지에 해당하는 게시물들만 가져오기
  const indexOfLastPost = currentPage * postsPerPage; // 마지막 게시물 인덱스
  const indexOfFirstPost = indexOfLastPost - postsPerPage; // 첫 번째 게시물 인덱스

  const callbackDrop = (item,order) => {
    setOrderInfo({
      orderBy : item,
      sortOrder : order
    })
  }

  // 페이지 변경 시 실행될 함수
  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  return (
    <div className={qnaPageContainer}>
      <div className={sectionContainer}>
        <div className={filterSelect}>
          <Dropdown options={mockOptions}  onChange={callbackDrop}/>
        </div>
        {state?.qnaPosts?.content?.length? <QnaList qnaList={state.qnaPosts.content} />: null}
        <div className={bottomContainer}>
          <div className={hidden}>
            <Button />
          </div>
          <Pagenumber2
            totalPosts={state?.qnaPosts?.totalElements} // 총 게시물 수
            postsPerPage={10} // 한 페이지에 표시할 게시물 수
            paginate={paginate} // 페이지 변경 함수
          />
          <Link to="communtywt">
            <Button text="글쓰기" />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default QnaListPage;