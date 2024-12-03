import QnaResult from "./components/QnaResponse";
import styles from "./QnaPage.module.css";

const mockData = {
  response: {
    nickname: "홍길동",
    contact: "010-1234-5678",
    title: "문의합니다.",
    content: "문의 내용입니다.",
    response: "답변 내용입니다.",
  },
};

const QnaResultPage = () => {
  return (
    <div className={styles.qnaPageContainer}>
      <div className={styles.qnaPage}>
        <QnaResult data={mockData.response} />
      </div>
    </div>
  );
};

export default QnaResultPage;
