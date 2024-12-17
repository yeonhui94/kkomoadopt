import { useParams } from "react-router-dom";
import QnaResult from "./components/QnaResponse";
import styles from "./QnaPage.module.css";
import { useState, useEffect } from "react";
import { useStore as QNAStore2 } from "../../stores/QNAStore2/useStore";
import { useNavigate } from 'react-router-dom'
// const mockData = {
//   response: [
//     {
//       id: 1,
//       nickname: "제벌3세",
//       contact: "010-1234-5678",
//       title: "입양관련해서 문의드립니다.",
//       content: "공고번호 1번 입양신청 가능한가요?",
//       response: "가능합니다. 방문상담 신청 부탁드립니다.",
//     },
//     {
//       id: 3,
//       nickname: "조랭삼",
//       contact: "010-1234-5678",
//       title: "입양문의",
//       content: "문의 내용입니다.",
//       response: "", // 답변이 비어있
//     },
//     {
//       id: 4,
//       nickname: "텐사이재헌상",
//       contact: "010-8765-4321",
//       title: "품종예약 되나요?",
//       content: "품종예약 되나요?",
//       response: "", // 답변이 비어있음
//     },
//     {
//       id: 5,
//       nickname: "파란만잔",
//       contact: "010-8765-4321",
//       title: "실종아이 본 경우 어떻게 하나요?",
//       content: "실종아이 본 경우 어떻게 하나요?",
//       response: "", // 답변이 비어있음
//     },
//     {
//       id: 6,
//       nickname: "주근익불주먹",
//       contact: "010-8765-4321",
//       title: "봉사 관련해서 문의 드립니다.",
//       content: "사료 들고가고싶은데 어떤걸 들고가야할까요?",
//       response: "제한은 없습니다. 감사합니다.",
//     },
//   ],
// };

const QnaResultPage = () => {
  // const { id } = useParams();
  // const [item, setItem] = useState(null); // Initially set item to null
  const navigate = useNavigate();
  const {state, actions} = QNAStore2();
  const {qnaUid} = useParams();
  const [ error, setError ] = useState(null);
  const [ loading, setLoading ] = useState(true);

  const handleAnswerSubmit = async (id, response) => {
    // post 요청 보내기
    console.log(`Answer submitted for qna ${id}:`, response);
    let result = await actions.deleteQnaPostAction(id)


    navigate('/customer_qna')
    

  };

  // useEffect(() => {
  //   // Find the item with the corresponding ID
  //   const foundItem = mockData.response.find(item => item.id == id);
  //   setItem(foundItem);
  // }, [id]);

  // useEffect(() => {
  //   const fetchData = async () =>{
  //     try{
  //       await qnaaction.readQnaPostDetail(qnaUid);
  //     } catch(error){
  //       console.error("error fetching post detail", error);
  //       setError(error);
  //     }finally{
  //       setLoading(false);
  //     }
  //   };
  //   fetchData();
  // },[qnaUid, qnaaction]);
  useEffect(() => {
    const fetchData = async () =>{
      try{
        await actions.readQnaPostDetail(qnaUid);
      } catch(error){
        console.error("error fetching post detail", error);
        setError(error);
      }finally{
        setLoading(false);
      }
    };
    fetchData();
  },[]);

    // 데이터 로딩 상태 처리
    if (loading) {
      return <div>Loading...</div>;
    }

    if (error) {
      return <div>Error: {error.message}</div>;
    }

    if (!state.qnaPostDetail) {
      // 데이터가 없는 경우
      return <div>Not Found</div>;
    }
  return (
    <div className={styles.qnaPageContainer}>
      <div className={styles.qnaPage}>
        {/* Render the `QnaResult` component if item is found */}
        {/* <QnaResult key={item.id} data={item} onAnswerSubmit={handleAnswerSubmit}/> */}
        {state?.qnaPostDetail ? <QnaResult postDetail={state.qnaPostDetail.data} onAnswerSubmit={(id,type)=>{handleAnswerSubmit(id,type)}}/> : null}
      </div>
    </div>
  );
};

export default QnaResultPage;