import QnaForm from "./components/QnaForm";
import styles from "./QnaPage.module.css";

const mockData = {
  form: {
    nickname: "홍길동",
    contact: "010-1234-5678",
    title: "",
    content: "",
    password: "",
  },
};

const QnaWritePage = () => {
  return (
    <div className={styles.qnaPageContainer}>
      <div className={styles.qnaPage}>
        <QnaForm initialValue={mockData.form} />
      </div>
    </div>
  );
};

export default QnaWritePage;
