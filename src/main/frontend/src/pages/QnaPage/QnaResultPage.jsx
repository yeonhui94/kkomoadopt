import { useParams } from "react-router-dom";
import QnaResult from "./components/QnaResponse";
import styles from "./QnaPage.module.css";
import { useState, useEffect } from "react";

const mockData = {
  response: [
    {
      id: 1,
      nickname: "제벌3세",
      contact: "010-1234-5678",
      title: "입양관련해서 문의드립니다.",
      content: "공고번호 1번 입양신청 가능한가요?",
      response: "가능합니다. 방문상담 신청 부탁드립니다.",
    },
    {
      id: 3,
      nickname: "조랭삼",
      contact: "010-1234-5678",
      title: "입양문의",
      content: "문의 내용입니다.",
      response: "", // 답변이 비어있음
    },
    {
      id: 4,
      nickname: "텐사이재헌상",
      contact: "010-8765-4321",
      title: "품종예약 되나요?",
      content: "품종예약 되나요?",
      response: "", // 답변이 비어있음
    },
    {
      id: 5,
      nickname: "파란만잔",
      contact: "010-8765-4321",
      title: "실종아이 본 경우 어떻게 하나요?",
      content: "실종아이 본 경우 어떻게 하나요?",
      response: "", // 답변이 비어있음
    },
    {
      id: 6,
      nickname: "주근익불주먹",
      contact: "010-8765-4321",
      title: "봉사 관련해서 문의 드립니다.",
      content: "사료 들고가고싶은데 어떤걸 들고가야할까요?",
      response: "제한은 없습니다. 감사합니다.",
    },
  ],
};

const QnaResultPage = () => {
  const { id } = useParams();
  const [item, setItem] = useState(null); // Initially set item to null

  const handleAnswerSubmit = (id, response) => {
    // post 요청 보내기
    console.log(`Answer submitted for item ${id}:`, response);
  };

  useEffect(() => {
    // Find the item with the corresponding ID
    const foundItem = mockData.response.find(item => item.id == id);
    setItem(foundItem);
  }, [id]);

  if (item === null) {
    // If the item is not found yet (or data is being fetched), show loading state or error
    return <div>Loading...</div>;
  }

  if (!item) {
    // If no item found for the given ID, show a "Not Found" message
    return <div>Not Found</div>;
  }

  return (
    <div className={styles.qnaPageContainer}>
      <div className={styles.qnaPage}>
        {/* Render the QnaResult component if item is found */}
        <QnaResult key={item.id} data={item} onAnswerSubmit={handleAnswerSubmit}/>
      </div>
    </div>
  );
};

export default QnaResultPage;